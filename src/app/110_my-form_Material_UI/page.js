"use client";
import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Alert
} from '@mui/material';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // デフォルトの動作を防ぐ
    const newErrors = {};

    // バリデーション
    if (!name) newErrors.name = '名前は必須です。';
    if (!email) {
      newErrors.email = 'メールアドレスは必須です。';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = '有効なメールアドレスを入力してください。';
    }
    if (!password) {
      newErrors.password = 'パスワードは必須です。';
    } else if (password.length < 8) {
      newErrors.password = 'パスワードは8文字以上である必要があります。';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log({ name, email, password });
      // フォーム送信後の処理をここに追加
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        ユーザー登録フォーム
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="名前"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="メールアドレス"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="パスワード"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          登録
        </Button>
      </form>
    </Container>
  );
}
