import React, { useState, useMemo } from "react";
import {
  Modal,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { IoClose } from "react-icons/io5"; // If you don't have react-icons, I'll use text

// 1. INITIAL DUMMY DATA
const INITIAL_DATA = [
  {
    id: 1,
    date: "2024-05-10",
    name: "Rahul Sharma",
    company: "Nexus Tech",
    phone: "9876543210",
    subject: "Software Inquiry",
    status: "Inbound",
    notes: "Very interested in the enterprise plan.",
  },
  {
    id: 2,
    date: "2024-05-11",
    name: "Anjali Gupta",
    company: "Global Systems",
    phone: "9123456789",
    subject: "Follow up",
    status: "Outbound",
    notes: "Called to discuss the pending proposal.",
  },
  {
    id: 3,
    date: "2024-05-12",
    name: "Vikram Singh",
    company: "Singh Logistics",
    phone: "8877665544",
    subject: "Pricing",
    status: "Inbound",
    notes: "Asked for a bulk discount.",
  },
];

const CrmPage = () => {
  // States
  const [crmEntries, setCrmEntries] = useState(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  // Modal States
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    subject: "",
    status: "Inbound",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  // Filter Logic
  const filteredData = useMemo(() => {
    return crmEntries.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, crmEntries]);

  // Handlers
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create new entry
    const newEntry = {
      id: crmEntries.length + 1,
      ...formData,
    };
    // Update local state (Simulation)
    setCrmEntries([newEntry, ...crmEntries]);
    setOpenAddModal(false);
    // Reset Form
    setFormData({
      name: "",
      company: "",
      phone: "",
      subject: "",
      status: "Inbound",
      date: new Date().toISOString().split("T")[0],
      notes: "",
    });
  };

  const handleOpenView = (item: any) => {
    setSelectedItem(item);
    setOpenViewModal(true);
  };

  // Styles
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 500 },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    maxHeight: "90vh",
    overflowY: "auto",
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h4" fontWeight="bold" color="#111827">
            CRM Management
          </Typography>
          <Typography variant="body2" color="#6b7280">
            Manage and track your customer interactions
          </Typography>
        </div>
        <Button
          variant="contained"
          size="large"
          onClick={() => setOpenAddModal(true)}
          sx={{
            backgroundColor: "#2563eb",
            "&:hover": { backgroundColor: "#1d4ed8" },
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          + Add New Entry
        </Button>
      </div>

      {/* SEARCH BAR */}
      <Paper
        sx={{
          p: 2,
          mb: 3,
          borderRadius: "12px",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        }}
      >
        <TextField
          placeholder="Search by Name, Company or Subject..."
          variant="outlined"
          fullWidth
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Paper>

      {/* DATA TABLE */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
            <TableRow>
              <TableCell>
                <b>S.No</b>
              </TableCell>
              <TableCell>
                <b>Date</b>
              </TableCell>
              <TableCell>
                <b>Contact Name</b>
              </TableCell>
              <TableCell>
                <b>Company</b>
              </TableCell>
              <TableCell>
                <b>Subject</b>
              </TableCell>
              <TableCell>
                <b>Status</b>
              </TableCell>
              <TableCell align="center">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={row.id} hover>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Typography fontWeight="600">{row.name}</Typography>
                </TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      backgroundColor:
                        row.status === "Inbound" ? "#dcfce7" : "#dbeafe",
                      color: row.status === "Inbound" ? "#166534" : "#1e40af",
                    }}
                  >
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => handleOpenView(row)}
                  >
                    View
                  </Button>
                  <Button size="small" variant="text" color="success">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* MODAL: ADD NEW ENTRY FORM */}
      <Modal open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <Box sx={modalStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Create New CRM Entry
            </Typography>
            <IconButton onClick={() => setOpenAddModal(false)}>
              <IoClose />
            </IconButton>
          </div>

          <form onSubmit={handleAddSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  name="name"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company Name"
                  name="company"
                  fullWidth
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  fullWidth
                  value={formData.phone}
                  onChange={handleInputChange}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date"
                  name="date"
                  type="date"
                  fullWidth
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Call Type</InputLabel>
                  <Select
                    name="status"
                    value={formData.status}
                    label="Call Type"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Inbound">Inbound</MenuItem>
                    <MenuItem value="Outbound">Outbound</MenuItem>
                    <MenuItem value="Follow-up">Follow-up</MenuItem>
                    <MenuItem value="Internal">Internal</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  name="subject"
                  fullWidth
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Notes"
                  name="notes"
                  fullWidth
                  multiline
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  size="small"
                />
              </Grid>
            </Grid>

            <div style={{ marginTop: "30px", display: "flex", gap: "10px" }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => setOpenAddModal(false)}
              >
                Cancel
              </Button>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#2563eb" }}
              >
                Save Entry
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      {/* MODAL: VIEW DETAILS */}
      <Modal open={openViewModal} onClose={() => setOpenViewModal(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            CRM Entry Details
          </Typography>
          <hr style={{ border: "0.5px solid #eee", marginBottom: "20px" }} />
          {selectedItem && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="caption" color="gray">
                  NAME
                </Typography>
                <Typography variant="body1">{selectedItem.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" color="gray">
                  COMPANY
                </Typography>
                <Typography variant="body1">{selectedItem.company}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" color="gray">
                  PHONE
                </Typography>
                <Typography variant="body1">{selectedItem.phone}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" color="gray">
                  STATUS
                </Typography>
                <Typography variant="body1">{selectedItem.status}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" color="gray">
                  SUBJECT
                </Typography>
                <Typography variant="body1">{selectedItem.subject}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ p: 2, bgcolor: "#f9fafb", borderRadius: "8px" }}>
                  <Typography variant="caption" color="gray">
                    NOTES
                  </Typography>
                  <Typography variant="body2">
                    {selectedItem.notes || "No notes provided"}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}
          <Button
            fullWidth
            variant="contained"
            onClick={() => setOpenViewModal(false)}
            sx={{ mt: 4, backgroundColor: "#111827" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CrmPage;
