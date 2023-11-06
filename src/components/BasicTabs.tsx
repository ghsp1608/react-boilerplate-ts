import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreditReport from "./Reports/CreditReport";
import ProspectReport from "./Reports/ProspectReport";
import GroupReport from "./Reports/GroupReport";
import { Link, Outlet, useNavigate } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState<number>(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Credit Report" component={Link} to="credit-report" />
          <Tab label="Prospect Report" component={Link} to="prospect-report" />
          <Tab label="Group Report" component={Link} to="group-report" />
        </Tabs>
      </Box>
      {/* <Outlet /> */}
      {/* <CustomTabPanel value={value} index={0}>
        <CreditReport />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ProspectReport />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <GroupReport />
      </CustomTabPanel> */}
    </Box>
  );
}
