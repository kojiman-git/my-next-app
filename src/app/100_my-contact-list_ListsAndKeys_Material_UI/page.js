"use client";
import { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addContact = () => {
    if (name && phone) {
      setContacts([...contacts, { id: nextId, name, phone }]);
      setNextId(nextId + 1);
      setName('');
      setPhone('');
    }
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        連絡先リスト
      </Typography>
      <TextField
        label="名前"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="電話番号"
        variant="outlined"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={addContact} fullWidth>
        追加
      </Button>
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <ListItemText primary={contact.name} secondary={contact.phone} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteContact(contact.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
