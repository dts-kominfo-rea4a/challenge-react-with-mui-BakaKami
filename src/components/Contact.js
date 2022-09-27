// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React, { useState } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            sx={{ width: 60, height: 60, marginRight: "1rem" }}
            src={data.photo}
            alt={`img-placeholder`}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component={"p"} sx={{ fontWeight: 500 }}>
              {data.name}
            </Typography>
          }
          secondary={
            <>
              <Typography component={"p"}>{data.phone}</Typography>
              <Typography component={"p"}>{data.email}</Typography>
            </>
          }
        ></ListItemText>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default Contact;
