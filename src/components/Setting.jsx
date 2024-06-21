import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  ListSubheader,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";

const settings = [
  {
    section: "User Settings",
    items: ["Profile", "Account", "Privacy"],
  },
  {
    section: "Application Settings",
    items: ["Notifications", "Language", "Theme"],
  },
  {
    section: "Advanced Settings",
    items: ["Security", "Developer Options"],
  },
];

const SettingsDrawer = ({ open, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 300,
          backgroundColor: colors.primary[400],
          minHeight: "100vh",
        }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        {settings.map((section, index) => (
          <List
            key={index}
            subheader={
              <ListSubheader
                component="div"
                id={`nested-list-subheader-${index}`}
              >
                {section.section}
              </ListSubheader>
            }
          >
            {section.items.map((text, idx) => (
              <React.Fragment key={idx}>
                <ListItem button>
                  <ListItemText primary={text} />
                </ListItem>
                {idx < section.items.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        ))}
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
