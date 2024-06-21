import React, { useState } from "react";
import { IconButton } from "@mui/material";
import SettingsDrawer from "../../components/Setting";

function Settings({ children }) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettingsDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSettingsOpen(open);
  };

  return (
    <>
      <IconButton aria-label="settings" onClick={toggleSettingsDrawer(true)}>
        {children}
      </IconButton>
      <SettingsDrawer
        open={settingsOpen}
        onClose={toggleSettingsDrawer(false)}
      />
    </>
  );
}

export default Settings;
