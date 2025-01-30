"use client";
import React, { useRef } from 'react';
import { Box, Button, Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ClickPositionApp = () => {
  const markerRef = useRef(null); // マーカーの参照
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [clickPosition, setClickPosition] = React.useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // マーカーの位置を更新
    if (markerRef.current) {
      markerRef.current.style.display = 'block'; // マーカーを表示
      markerRef.current.style.left = `${x}px`;
      markerRef.current.style.top = `${y}px`;
    }

    setClickPosition({ x, y });
    setSnackbarOpen(true); // スナックバーを表示
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        border: '1px solid #ccc',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={handleClick} // クリックイベントを設定
    >
      <Typography variant="h4">クリック位置表示アプリ</Typography>
      <Typography variant="body1">ここをクリックしてください。</Typography>
      <div
        ref={markerRef} // マーカーの参照を設定
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          backgroundColor: 'red',
          borderRadius: '50%',
          display: 'none', // 初期状態で非表示
        }}
      />
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info">
          クリック位置: X: {clickPosition.x}, Y: {clickPosition.y}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default function Page() {
  return (
    <main>
      <ClickPositionApp />
    </main>
  );
}
