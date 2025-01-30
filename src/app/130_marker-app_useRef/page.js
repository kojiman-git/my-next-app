"use client";
import React, { useRef } from 'react';

const ClickPositionApp = () => {
  const markerRef = useRef(null); // マーカーの参照

  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // マーカーの位置を更新
    if (markerRef.current) {
      markerRef.current.style.display = 'block'; // マーカーを表示
      markerRef.current.style.left = `${x}px`;
      markerRef.current.style.top = `${y}px`;
    }

    alert(`クリック位置: X: ${x}, Y: ${y}`); // アラートで表示
  };

  return (
    <div
      style={{ height: '100vh', border: '1px solid black' }}
      onClick={handleClick} // クリックイベントを設定
    >
      <h1>クリック位置表示アプリ</h1>
      <p>ここをクリックしてください。</p>
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
    </div>
  );
};

export default function Page() {
  return (
    <main>
      <ClickPositionApp />
    </main>
  );
}
