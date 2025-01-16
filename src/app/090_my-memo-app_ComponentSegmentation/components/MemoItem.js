"use client"
import { useState } from 'react';

export default function MemoItem({ memo, editMemo, deleteMemo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(memo.text);

  const handleEdit = () => {
    editMemo(memo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEdit}>保存</button>
        </>
      ) : (
        <>
          <span>{memo.text}</span>
          <button onClick={() => setIsEditing(true)}>編集</button>
          <button onClick={() => deleteMemo(memo.id)}>削除</button>
        </>
      )}
    </li>
  );
}
