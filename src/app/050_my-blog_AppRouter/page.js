import Link from 'next/link';

const posts = [
  { id: 1, title: 'First Post' },
  { id: 2, title: 'Second Post' },
];

export default function Home() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/050_my-blog_AppRouter/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/050_my-blog_AppRouter/create">Create New Post</Link>
    </div>
  );
}
