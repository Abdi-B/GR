import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box mm="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to our dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
