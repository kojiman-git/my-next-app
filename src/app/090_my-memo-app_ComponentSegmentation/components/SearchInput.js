export default function SearchInput({ setSearchQuery }) {
  return (
    <input
      type="text"
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="メモを検索"
    />
  );
}
