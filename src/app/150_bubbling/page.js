"use client";

import React from 'react';

const ExampleComponent = () => {
  const handleParentClick = () => {
    console.log("親要素がクリックされました");
  };

  const handleChildClick = () => {
    console.log("子要素がクリックされました");
  };

  const handleGrandchildClick = (e) => {
    console.log("孫要素がクリックされました");
    e.stopPropagation(); // バブリングを防ぐ
  };

  return (
    <div
      onClick={handleParentClick}
      style={{
        padding: '50px',
        backgroundColor: '#f0f0f0',
        cursor: 'pointer',
        border: '2px solid #000',
        margin: '20px',
      }}
    >
      <h2>親要素</h2>
      <div
        style={{
          padding: '30px',
          backgroundColor: '#b0e0e6',
          border: '2px solid #007acc',
          margin: '10px',
        }}
        onClick={handleChildClick}
      >
        <h3>子要素</h3>
        <button
          onClick={handleGrandchildClick}
          style={{
            padding: '10px',
            backgroundColor: '#ffcc00',
            border: '2px solid #cc9900',
            cursor: 'pointer',
          }}
        >
          孫要素（ボタン）
        </button>
      </div>
    </div>
  );
};

export default ExampleComponent;
