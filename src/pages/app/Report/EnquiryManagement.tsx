// import React, { useState, useEffect, useCallback } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   CircularProgress,
//   Alert,
//   Paper,
//   Divider,
//   Container,
// } from "@mui/material";
// import { TrendingUp, Users, Target, Layers, Activity } from "lucide-react";

// // --- Types ---
// interface LeadData {
//   quality?: string;
//   source?: string;
//   type?: string;
//   service?: string;
//   period?: string;
//   count: number;
// }

// const EnquiryReports: React.FC = () => {
//   // --- State ---
//   const [leadVolume, setLeadVolume] = useState<LeadData[]>([]);
//   const [leadsBySource, setLeadsBySource] = useState<LeadData[]>([]);
//   const [leadsByType, setLeadsByType] = useState<LeadData[]>([]);
//   const [leadsByQuality, setLeadsByQuality] = useState<LeadData[]>([]);
//   const [leadsByService, setLeadsByService] = useState<LeadData[]>([]);

//   const [initialLoading, setInitialLoading] = useState(true);
//   const [timeSeriesLoading, setTimeSeriesLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [timeUnit, setTimeUnit] = useState("month");

//   // --- Mock/API Fetch Logic (Keep your existing structure) ---
//   useEffect(() => {
//     const fetchStaticReports = async () => {
//       setInitialLoading(true);
//       setError(null);
//       try {
//         // Mocking your service response for now
//         // Replace these with your actual: enquiryAnalyticsService.getLeadsBySource(), etc.
//         setLeadsBySource([
//           { source: "Google", count: 45 },
//           { source: "Facebook", count: 30 },
//         ]);
//         setLeadsByType([
//           { type: "General", count: 20 },
//           { type: "Support", count: 10 },
//         ]);
//         setLeadsByQuality([
//           { quality: "Hot", count: 12 },
//           { quality: "Warm", count: 25 },
//           { quality: "Cold", count: 40 },
//         ]);
//         setLeadsByService([
//           { service: "SEO", count: 15 },
//           { service: "Design", count: 22 },
//         ]);
//       } catch (err: any) {
//         setError(err.message || "Failed to fetch reports.");
//       } finally {
//         setInitialLoading(false);
//       }
//     };
//     fetchStaticReports();
//   }, []);

//   const fetchLeadVolume = useCallback(async () => {
//     setTimeSeriesLoading(true);
//     try {
//       // API Call simulation
//       setLeadVolume([
//         { period: "Jan", count: 10 },
//         { period: "Feb", count: 15 },
//         { period: "Mar", count: 25 },
//       ]);
//     } catch (err) {
//       setLeadVolume([]);
//     } finally {
//       setTimeSeriesLoading(false);
//     }
//   }, [timeUnit]);

//   useEffect(() => {
//     fetchLeadVolume();
//   }, [fetchLeadVolume]);

//   // --- Loading State ---
//   if (initialLoading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="80vh"
//       >
//         <CircularProgress />
//         <Typography variant="h6" ml={2} color="textSecondary">
//           Loading Reports...
//         </Typography>
//       </Box>
//     );
//   }

//   // --- Error State ---
//   if (error) {
//     return (
//       <Container sx={{ mt: 4 }}>
//         <Alert severity="error">{error}</Alert>
//       </Container>
//     );
//   }

//   return (
//     <Box p={4} bgcolor="#f8fafc" minHeight="100vh">
//       <Typography
//         variant="h4"
//         fontWeight="800"
//         gutterBottom
//         color="textPrimary"
//       >
//         Enquiry & Lead Reports
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={4}>
//         Track your performance and lead distribution across all channels.
//       </Typography>

//       {/* --- KPI Section: Lead Quality --- */}
//       <Card
//         sx={{
//           mb: 4,
//           borderRadius: 3,
//           boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//         }}
//       >
//         <CardContent>
//           <Box display="flex" alignItems="center" mb={3}>
//             <Activity
//               size={20}
//               style={{ marginRight: "8px", color: "#6366f1" }}
//             />
//             <Typography variant="h6" fontWeight="700">
//               Lead Quality Overview
//             </Typography>
//           </Box>
//           <Grid container spacing={3}>
//             {leadsByQuality.map((item) => (
//               <Grid item xs={12} sm={4} key={item.quality}>
//                 <Paper
//                   variant="outlined"
//                   sx={{
//                     p: 3,
//                     textAlign: "center",
//                     borderRadius: 2,
//                     bgcolor:
//                       item.quality === "Hot"
//                         ? "#fff1f2"
//                         : item.quality === "Warm"
//                         ? "#fff7ed"
//                         : "#f0f9ff",
//                     borderColor:
//                       item.quality === "Hot"
//                         ? "#fecdd3"
//                         : item.quality === "Warm"
//                         ? "#ffedd5"
//                         : "#bae6fd",
//                   }}
//                 >
//                   <Typography
//                     variant="subtitle2"
//                     color="textSecondary"
//                     gutterBottom
//                   >
//                     {item.quality} Leads
//                   </Typography>
//                   <Typography variant="h3" fontWeight="800" color="textPrimary">
//                     {item.count}
//                   </Typography>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </CardContent>
//       </Card>

//       {/* --- Main Charts/Lists Section --- */}
//       <Grid container spacing={4}>
//         {/* Lead Volume over Time */}
//         <Grid item xs={12} md={6}>
//           <Card sx={{ borderRadius: 3, height: "100%" }}>
//             <CardContent>
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 mb={3}
//               >
//                 <Box display="flex" alignItems="center">
//                   <TrendingUp
//                     size={20}
//                     style={{ marginRight: "8px", color: "#10b981" }}
//                   />
//                   <Typography variant="h6" fontWeight="700">
//                     Lead Volume
//                   </Typography>
//                 </Box>
//                 <FormControl size="small" sx={{ width: 120 }}>
//                   <InputLabel>Time Unit</InputLabel>
//                   <Select
//                     value={timeUnit}
//                     label="Time Unit"
//                     onChange={(e) => setTimeUnit(e.target.value)}
//                     disabled={timeSeriesLoading}
//                   >
//                     <MenuItem value="day">Daily</MenuItem>
//                     <MenuItem value="month">Monthly</MenuItem>
//                     <MenuItem value="year">Yearly</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Box>

//               {timeSeriesLoading ? (
//                 <Box display="flex" justifyContent="center" py={10}>
//                   <CircularProgress size={30} />
//                 </Box>
//               ) : (
//                 <Box sx={{ maxHeight: 300, overflow: "auto" }}>
//                   {leadVolume.map((item, index) => (
//                     <Box key={index}>
//                       <Box
//                         display="flex"
//                         justifyContent="space-between"
//                         py={1.5}
//                       >
//                         <Typography fontWeight="500">{item.period}</Typography>
//                         <Typography fontWeight="700" color="primary">
//                           {item.count} Leads
//                         </Typography>
//                       </Box>
//                       <Divider />
//                     </Box>
//                   ))}
//                 </Box>
//               )}
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Lead Source Performance */}
//         <Grid item xs={12} md={6}>
//           <Card sx={{ borderRadius: 3, height: "100%" }}>
//             <CardContent>
//               <Box display="flex" alignItems="center" mb={3}>
//                 <Target
//                   size={20}
//                   style={{ marginRight: "8px", color: "#f59e0b" }}
//                 />
//                 <Typography variant="h6" fontWeight="700">
//                   Source Performance
//                 </Typography>
//               </Box>
//               <Box sx={{ maxHeight: 300, overflow: "auto" }}>
//                 {leadsBySource.map((item, index) => (
//                   <Box key={index}>
//                     <Box display="flex" justifyContent="space-between" py={1.5}>
//                       <Typography fontWeight="500">{item.source}</Typography>
//                       <Typography fontWeight="700">
//                         {item.count} Leads
//                       </Typography>
//                     </Box>
//                     <Divider />
//                   </Box>
//                 ))}
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Service Demand */}
//         <Grid item xs={12} md={6}>
//           <Card sx={{ borderRadius: 3, height: "100%" }}>
//             <CardContent>
//               <Box display="flex" alignItems="center" mb={3}>
//                 <Layers
//                   size={20}
//                   style={{ marginRight: "8px", color: "#3b82f6" }}
//                 />
//                 <Typography variant="h6" fontWeight="700">
//                   Service Demand
//                 </Typography>
//               </Box>
//               <Box sx={{ maxHeight: 300, overflow: "auto" }}>
//                 {leadsByService.map((item, index) => (
//                   <Box key={index}>
//                     <Box display="flex" justifyContent="space-between" py={1.5}>
//                       <Typography fontWeight="500">{item.service}</Typography>
//                       <Typography fontWeight="700">
//                         {item.count} Enquiries
//                       </Typography>
//                     </Box>
//                     <Divider />
//                   </Box>
//                 ))}
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Distribution */}
//         <Grid item xs={12} md={6}>
//           <Card sx={{ borderRadius: 3, height: "100%" }}>
//             <CardContent>
//               <Box display="flex" alignItems="center" mb={3}>
//                 <Users
//                   size={20}
//                   style={{ marginRight: "8px", color: "#ec4899" }}
//                 />
//                 <Typography variant="h6" fontWeight="700">
//                   Type Distribution
//                 </Typography>
//               </Box>
//               <Box sx={{ maxHeight: 300, overflow: "auto" }}>
//                 {leadsByType.map((item, index) => (
//                   <Box key={index}>
//                     <Box display="flex" justifyContent="space-between" py={1.5}>
//                       <Typography fontWeight="500">{item.type}</Typography>
//                       <Typography fontWeight="700">
//                         {item.count} Total
//                       </Typography>
//                     </Box>
//                     <Divider />
//                   </Box>
//                 ))}
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default EnquiryReports;

import React from "react";

// Define the shape of our data to prevent "object" errors
interface ReportItem {
  label: string;
  value: number | string;
}

const EnquiryReports: React.FC = () => {
  // Dummy Data - strictly using primitives (strings/numbers)
  const leadsByQuality = [
    { label: "Hot", count: 12, colorClass: "border-red-300 bg-red-50" },
    { label: "Warm", count: 25, colorClass: "border-orange-300 bg-orange-50" },
    { label: "Cold", count: 40, colorClass: "border-blue-300 bg-blue-50" },
  ];

  const leadVolume = [
    { period: "January", total: 45 },
    { period: "February", total: 52 },
    { period: "March", total: 38 },
  ];

  const leadsBySource = [
    { source: "Google Ads", total: 85 },
    { source: "Facebook", total: 62 },
    { source: "Referral", total: 24 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Enquiry & Lead Reports
      </h1>

      {/* KPI Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-medium text-gray-700 mb-4">
          Lead Quality Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadsByQuality.map((item) => (
            <div
              key={item.label}
              className={`flex flex-col items-center p-4 rounded-lg border ${item.colorClass}`}
            >
              <span className="text-gray-600 text-sm">{item.label} Leads</span>
              <span className="text-3xl font-semibold text-gray-800">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lead Volume */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Lead Volume
          </h2>
          <div className="space-y-3">
            {leadVolume.map((item) => (
              <div
                key={item.period}
                className="bg-gray-50 p-3 rounded-md border border-gray-200 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">{item.period}</span>
                <span className="text-sm text-gray-600 font-bold">
                  {item.total}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Source */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Source Performance
          </h2>
          <div className="space-y-3">
            {leadsBySource.map((item) => (
              <div
                key={item.source}
                className="bg-gray-50 p-3 rounded-md border border-gray-200 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">{item.source}</span>
                <span className="text-sm text-gray-600 font-bold">
                  {item.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// IMPORTANT: Ensure this matches the lazy import
export default EnquiryReports;
