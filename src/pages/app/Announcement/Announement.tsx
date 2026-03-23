// import React, { useState } from "react";

// interface Announcement {
//   id: number;
//   title: string;
//   date: string;
//   content: string;
// }

// const initialAnnouncements: Announcement[] = [
//   {
//     id: 1,
//     title: "Scheduled Maintenance",
//     date: "2025-10-05",
//     content:
//       "We will have scheduled maintenance on October 5th, 2025 from 2:00 AM to 4:00 AM UTC. Services may be unavailable during this time.",
//   },
//   {
//     id: 2,
//     title: "New Feature Release",
//     date: "2025-09-15",
//     content:
//       "We are excited to announce a new feature that improves your workflow efficiency. Check out the documentation for details!",
//   },
// ];

// const Announcements: React.FC = () => {
//   const [announcements] = useState<Announcement[]>(initialAnnouncements);

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-gray-900">Announcements</h1>

//       {announcements.length === 0 ? (
//         <p className="text-gray-600">
//           No announcements available at the moment.
//         </p>
//       ) : (
//         <div className="space-y-6">
//           {announcements.map(({ id, title, date, content }) => (
//             <div
//               key={id}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
//                 <span className="text-sm text-gray-500">
//                   {new Date(date).toLocaleDateString()}
//                 </span>
//               </div>
//               <p className="text-gray-700 whitespace-pre-line">{content}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Announcements;

import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  Paper,
  IconButton,
  TextField,
  Select as MuiSelect,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
  ButtonGroup,
} from "@mui/material";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineWarning,
  AiOutlineInfoCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";

import Select from "react-select";
import type { MultiValue } from "react-select";

// --- Types & Interfaces ---
type AnnouncementType = "INFO" | "WARNING" | "ERROR" | "SUCCESS";

interface Recipient {
  _id: string;
  fullName: string;
}

interface Announcement {
  _id: string;
  title: string;
  message: string;
  type: AnnouncementType;
  createdAt: string;
  consultantId?: {
    _id: string;
    fullName: string;
  };
  recipient?: Recipient[];
  isDeletedBy?: string[];
}

interface Option {
  value: string;
  label: string;
}

// --- Constants & Styling ---
const announcementType: Record<string, AnnouncementType> = {
  INFO: "INFO",
  WARNING: "WARNING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

const typeStyles: Record<
  AnnouncementType,
  { bgColor: string; iconColor: string; icon: JSX.Element }
> = {
  [announcementType.INFO]: {
    bgColor: "#e3f2fd",
    iconColor: "#2196f3",
    icon: <AiOutlineInfoCircle size={24} />,
  },
  [announcementType.WARNING]: {
    bgColor: "#fffde7",
    iconColor: "#ff9800",
    icon: <AiOutlineWarning size={24} />,
  },
  [announcementType.ERROR]: {
    bgColor: "#fce4ec",
    iconColor: "#f44336",
    icon: <AiOutlineCloseCircle size={24} />,
  },
  [announcementType.SUCCESS]: {
    bgColor: "#e8f5e9",
    iconColor: "#4caf50",
    icon: <AiOutlineCheckCircle size={24} />,
  },
};

const CONSULTANT_VIEW = {
  RECEIVED: "received",
  SENT: "sent",
} as const;

type ConsultantViewType =
  (typeof CONSULTANT_VIEW)[keyof typeof CONSULTANT_VIEW];

// --- Dummy Data ---
const DUMMY_ANNOUNCEMENTS: Announcement[] = [
  {
    _id: "1",
    title: "System Maintenance",
    message: "The portal will be down for 2 hours tonight.",
    type: "WARNING",
    createdAt: new Date().toISOString(),
    consultantId: { _id: "admin1", fullName: "Admin" },
    recipient: [],
  },
  {
    _id: "2",
    title: "New Feature",
    message: "You can now upload folders directly.",
    type: "SUCCESS",
    createdAt: new Date().toISOString(),
    consultantId: { _id: "c1", fullName: "John Doe" },
    recipient: [{ _id: "u1", fullName: "Client A" }],
  },
];

const DUMMY_RECIPIENTS: Recipient[] = [
  { _id: "u1", fullName: "Client Alice" },
  { _id: "u2", fullName: "Client Bob" },
  { _id: "c1", fullName: "Consultant Charlie" },
];

const Announcement: React.FC = () => {
  const params = useLocation();
  const isAccessedByAnnouncementPage = params.pathname === "/announcement";

  // --- Dummy User Context (Mocking Redux state) ---
  const userData = { _id: "user123", role: "1" }; // 0: Admin, 1: Consultant, 2: Customer

  // --- State ---
  const [allAnnouncements, setAllAnnouncements] = useState<Announcement[]>([]);
  const [seenAnnouncements, setSeenAnnouncements] = useState<Announcement[]>(
    []
  );
  const [showSeenView, setShowSeenView] = useState(false);
  const [loadingSeen, setLoadingSeen] = useState(false);

  const [consultantView, setConsultantView] = useState<ConsultantViewType>(
    CONSULTANT_VIEW.RECEIVED
  );
  const [selected, setSelected] = useState<Announcement | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [recipientOptions, setRecipientOptions] = useState<Option[]>([]);

  const [form, setForm] = useState({
    title: "",
    message: "",
    type: announcementType.INFO as AnnouncementType,
    recipients: [] as string[],
  });

  // --- Mock API Logic ---
  const fetchAnnouncements = async () => {
    // API: instance.get('/announcements')
    setAllAnnouncements(DUMMY_ANNOUNCEMENTS);
  };

  const fetchSeenAnnouncements = async () => {
    setLoadingSeen(true);
    // API: instance.get('/announcements/get-seen')
    setTimeout(() => {
      setSeenAnnouncements([]);
      setLoadingSeen(false);
    }, 800);
  };

  const fetchRecipientList = async () => {
    // API: fetch consultants if admin, fetch customers if consultant
    const options = DUMMY_RECIPIENTS.map((r) => ({
      value: r._id,
      label: r.fullName,
    }));
    setRecipientOptions(options);
  };

  useEffect(() => {
    fetchAnnouncements();
    if (userData.role === "0" || userData.role === "1") {
      fetchRecipientList();
    }
  }, [userData.role]);

  // --- Handlers ---
  const handleViewDetails = (announcement: Announcement) => {
    setSelected(announcement);
    setOpenModal(true);
  };

  const handleCreateAnnouncement = async () => {
    // API: instance.post('/announcements', payload)
    console.log("Creating:", form);
    const newAnnouncement: Announcement = {
      _id: Math.random().toString(),
      title: form.title,
      message: form.message,
      type: form.type,
      createdAt: new Date().toISOString(),
      consultantId: { _id: userData._id, fullName: "Current User" },
      recipient: form.recipients.map((id) => ({
        _id: id,
        fullName: "Recipient Name",
      })),
    };
    setAllAnnouncements([newAnnouncement, ...allAnnouncements]);
    handleCloseCreateModal();
  };

  const handleCloseCreateModal = () => {
    setOpenCreate(false);
    setForm({
      title: "",
      message: "",
      type: announcementType.INFO as AnnouncementType,
      recipients: [],
    });
  };

  const handleDeleteAnnouncement = async (id: string) => {
    if (!window.confirm("Are you sure?")) return;
    setDeletingId(id);
    // API: instance.delete or instance.patch
    setTimeout(() => {
      setAllAnnouncements((prev) => prev.filter((a) => a._id !== id));
      setDeletingId(null);
    }, 500);
  };

  const handleToggleSeenNotifications = () => {
    const nextState = !showSeenView;
    setShowSeenView(nextState);
    if (nextState) fetchSeenAnnouncements();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // --- Filtering Logic ---
  const announcementsToDisplay = useMemo(() => {
    if (showSeenView) return seenAnnouncements;

    // Simple filter for the dummy version
    if (userData.role === "1") {
      return consultantView === CONSULTANT_VIEW.SENT
        ? allAnnouncements.filter((a) => a.consultantId?._id === userData._id)
        : allAnnouncements.filter((a) => a.consultantId?._id !== userData._id);
    }
    return allAnnouncements;
  }, [
    allAnnouncements,
    seenAnnouncements,
    showSeenView,
    consultantView,
    userData,
  ]);

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          {showSeenView ? "Notification Archive" : "Notifications"}
        </Typography>

        <Box sx={{ display: "flex", gap: 1.5 }}>
          {(userData.role === "1" || userData.role === "2") &&
            isAccessedByAnnouncementPage && (
              <Button
                variant="outlined"
                onClick={handleToggleSeenNotifications}
              >
                {showSeenView ? "Active Notifications" : "View Seen"}
              </Button>
            )}

          {(userData.role === "0" || userData.role === "1") &&
            !showSeenView && (
              <Button variant="contained" onClick={() => setOpenCreate(true)}>
                Create Announcement
              </Button>
            )}
        </Box>
      </Box>

      {userData.role === "1" && !showSeenView && (
        <Box display="flex" justifyContent="center" mb={2}>
          <ButtonGroup variant="outlined">
            <Button
              variant={
                consultantView === CONSULTANT_VIEW.RECEIVED
                  ? "contained"
                  : "outlined"
              }
              onClick={() => setConsultantView(CONSULTANT_VIEW.RECEIVED)}
            >
              Received
            </Button>
            <Button
              variant={
                consultantView === CONSULTANT_VIEW.SENT
                  ? "contained"
                  : "outlined"
              }
              onClick={() => setConsultantView(CONSULTANT_VIEW.SENT)}
            >
              Sent
            </Button>
          </ButtonGroup>
        </Box>
      )}

      {loadingSeen ? (
        <Box display="flex" justifyContent="center" my={5}>
          <CircularProgress />
        </Box>
      ) : announcementsToDisplay.length === 0 ? (
        <Typography sx={{ textAlign: "center", color: "gray", mt: 4 }}>
          No notifications found.
        </Typography>
      ) : (
        announcementsToDisplay.map((item) => {
          const typeStyle = typeStyles[item.type];
          return (
            <Paper
              key={item._id}
              sx={{
                mb: 2,
                display: "flex",
                alignItems: "stretch",
                cursor: "pointer",
              }}
              onClick={() => handleViewDetails(item)}
            >
              <Box
                sx={{
                  width: 80,
                  bgcolor: typeStyle.bgColor,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                }}
              >
                <Box sx={{ color: typeStyle.iconColor }}>{typeStyle.icon}</Box>
                <Typography
                  variant="caption"
                  sx={{ fontSize: "0.65rem", mt: 0.5 }}
                >
                  {formatDate(item.createdAt)}
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2">
                  <strong>{item.title}:</strong> {item.message}
                </Typography>
              </Box>
              {!showSeenView && (
                <Box sx={{ display: "flex", alignItems: "center", pr: 1 }}>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteAnnouncement(item._id);
                    }}
                    disabled={deletingId === item._id}
                  >
                    {deletingId === item._id ? (
                      <CircularProgress size={20} />
                    ) : (
                      <AiOutlineClose size={20} />
                    )}
                  </IconButton>
                </Box>
              )}
            </Paper>
          );
        })
      )}

      {/* Details Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            width: 400,
          }}
        >
          <Typography variant="h6" mb={2}>
            Notification Details
          </Typography>
          {selected && (
            <>
              <Typography>
                <strong>Title:</strong> {selected.title}
              </Typography>
              <Typography sx={{ my: 1 }}>
                <strong>Message:</strong> {selected.message}
              </Typography>
              <Typography variant="caption" color="gray">
                Date: {formatDate(selected.createdAt)}
              </Typography>
            </>
          )}
          <Box mt={3} textAlign="right">
            <Button onClick={() => setOpenModal(false)}>Close</Button>
          </Box>
        </Box>
      </Modal>

      {/* Create Modal */}
      <Modal open={openCreate} onClose={handleCloseCreateModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            width: 450,
          }}
        >
          <Typography variant="h6" mb={2}>
            New Announcement
          </Typography>
          <TextField
            fullWidth
            label="Title"
            sx={{ mb: 2 }}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Message"
            sx={{ mb: 2 }}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Type</InputLabel>
            <MuiSelect
              label="Type"
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value as AnnouncementType })
              }
            >
              {Object.values(announcementType).map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </MuiSelect>
          </FormControl>
          <Typography variant="body2" mb={1}>
            Select Recipients
          </Typography>
          <Select
            isMulti
            options={recipientOptions}
            onChange={(val: MultiValue<Option>) =>
              setForm({ ...form, recipients: val.map((v) => v.value) })
            }
          />
          <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={handleCloseCreateModal}>Cancel</Button>
            <Button
              variant="contained"
              disabled={!form.title || !form.message}
              onClick={handleCreateAnnouncement}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Announcement;
