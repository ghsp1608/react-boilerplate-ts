import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function BasicTabs() {
  const [value, setValue] = React.useState<number>(0);

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
    </Box>
  );
}
