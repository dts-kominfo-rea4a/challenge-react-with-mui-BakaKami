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
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    <Card sx={{ padding: 4, backgroundColor: "#F7EDC8" }}>
      <form onSubmit={submitHandler}>
        <Stack spacing={2}>
          <TextField
            style={{ width: "100%", margin: "5px" }}
            type="text"
            name="name"
            label="Name"
            variant="filled"
            value={inputData.name}
            onChange={inputHandler}
            required
          />
          <TextField
            style={{ width: "100%", margin: "5px" }}
            type="number"
            name="phone"
            label="Phone"
            variant="filled"
            value={inputData.phone}
            onChange={inputHandler}
            required
          />
          <TextField
            style={{ width: "100%", margin: "5px" }}
            type="email"
            name="email"
            label="Email"
            variant="filled"
            value={inputData.email}
            onChange={inputHandler}
            required
          />
          <TextField
            style={{ width: "100%", margin: "5px" }}
            type="url"
            name="photo"
            label="Photo URL"
            variant="filled"
            value={inputData.photo}
            onChange={inputHandler}
            required
          />
          <Button color="success" type="submit">
            ADD NEW
          </Button>
        </Stack>
      </form>
    </Card>
  );
};

export default ContactForm;
