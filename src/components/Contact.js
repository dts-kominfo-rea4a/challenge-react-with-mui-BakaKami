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
const Contact = ({ data, styleName }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <List sx={{ width: "100%", bgcolor: "#B8F4DB" }}>
      {data.map((contact, i) => {
        return (
          <>
            <ListItem key={i} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  sx={{ width: 60, height: 60, marginRight: "1rem" }}
                  src={contact.photo}
                  alt={`pics-${i}`}
                ></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component={"p"} sx={{ fontWeight: 500 }}>
                    {contact.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography component={"p"}>{contact.phone}</Typography>
                    <Typography component={"p"}>{contact.email}</Typography>
                  </>
                }
              ></ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
};

export default Contact;
