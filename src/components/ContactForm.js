// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React, { useState } from "react";
import { Button, TextField, Stack, Card } from "@mui/material";

const ContactForm = ({ fnAddContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [inputData, setInputData] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fnAddContact(inputData);
    setInputData({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });
  };

  return (
    <>
      <Card sx={{ padding: 4, backgroundColor: "#F7EDC8" }}>
        <form onSubmit={submitHandler}>
          <TextField
            style={{ width: "100%", margin: "5px" }}
            type="text"
            name="name"
            label="Name"
            variant="filled"
            value={inputData.name}
            onChange={inputHandler}
            required
            fullWidth
          />
          <TextField
            style={{ width: "100%", margin: "5px" }}
            type="text"
            name="phone"
            label="Phone"
            variant="filled"
            value={inputData.phone}
            onChange={inputHandler}
            required
            fullWidth
          />
          <TextField
            style={{ width: "100%", margin: "5px" }}
            type="text"
            name="email"
            label="Email"
            variant="filled"
            value={inputData.email}
            onChange={inputHandler}
            required
            fullWidth
          />
          <TextField
            style={{ width: "100%", margin: "5px" }}
            type="text"
            name="photo"
            label="Photo URL"
            variant="filled"
            value={inputData.photo}
            onChange={inputHandler}
            required
            fullWidth
          />
          <Button color="success" type="submit">
            ADD NEW
          </Button>
        </form>
      </Card>
    </>
  );
};

export default ContactForm;
