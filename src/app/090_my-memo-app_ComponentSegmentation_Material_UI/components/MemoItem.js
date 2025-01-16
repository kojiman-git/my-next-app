"use client"
import { useState } from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

export default function MemoItem({ memo, editMemo, deleteMemo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(memo.text);

  const handleEdit = () => {
    editMemo(memo.id, editedText);
    setIsEditing(false);
  };

  return (
    <ListItem>
      {isEditing ? (
        <>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ flexGrow: 1, mr: 1 }}
          />
          <IconButton onClick={handleEdit} color="primary">
            <SaveIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ListItemText primary={memo.text} />
          <ListItemSecondaryAction>
            <IconButton onClick={() => setIsEditing(true)} color="default">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteMemo(memo.id)} color="secondary">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
