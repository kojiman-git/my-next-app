import { TextField } from '@mui/material';

export default function SearchInput({ setSearchQuery }) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="メモを検索"
      sx={{ mb: 2 }}
    />
  );
}
