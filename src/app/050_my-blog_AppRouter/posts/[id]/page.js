import { notFound } from 'next/navigation';

const posts = [
  { id: 1, content: 'This is the first post.' },
  { id: 2, content: 'This is the second post.' },
];

export default function Post({ params }) {
  const { id } = params;
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    notFound();
    return null;
  }

  return (
    <div>
      <h1>Post ID: {id}</h1>
      <p>{post.content}</p>
    </div>
  );
}
