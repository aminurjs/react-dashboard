import React, { useState } from "react";
import {
  Popover,
  Box,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";

const Profile = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "profile-popover" : undefined;

  return (
    <>
      <IconButton aria-label="profile" onClick={handleClick}>
        {children}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          sx={{ p: 2, width: 250, mt: 0 }}
          backgroundColor={colors.primary[400]}
        >
          <Box display="flex" alignItems="center">
            <Avatar sx={{ mr: 2 }}>AR</Avatar>
            <Box>
              <Typography variant="h6">Aminur Rahman</Typography>
              <Typography variant="body2" color="textSecondary">
                dev.aminur@gmail.com
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 2 }} />
          <List>
            <ListItem button>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="My account" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Popover>
    </>
  );
};

export default Profile;
