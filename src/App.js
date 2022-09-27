import "./App.css";
import React, { useState } from "react";
import contacts from "./data/contacts.json";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import { Card, Grid, List } from "@mui/material";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contact, setContact] = useState(contacts);

  const addContact = (newContact) => {
    const newContactObject = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      photo: newContact.photo,
    };

    setContact([...contact, newContactObject]);
  };

  return (
    <div className="App">
      <Header />
      <Grid
        container
        spacing={10}
        sx={{ width: "100%", height: "100%", padding: 3 }}
      >
        <Grid item={true} md={6}>
          <ContactForm fnAddContact={addContact} />
        </Grid>
        <Grid item={true} md={6}>
          <Card>
            <List sx={{ width: "100%", bgcolor: "#D3F7C8" }}>
              {contact.map((contactData, id) => (
                <Contact data={contactData} key={id} />
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
