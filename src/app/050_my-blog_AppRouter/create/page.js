'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここで投稿処理を行う
    console.log('New Post Created:', title);
    router.push('/050_my-blog_AppRouter');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
}
