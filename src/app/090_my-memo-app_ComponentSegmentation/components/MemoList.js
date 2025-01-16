import MemoItem from './MemoItem';

export default function MemoList({ memos, editMemo, deleteMemo }) {
  return (
    <ul>
      {memos.map(memo => (
        <MemoItem key={memo.id} memo={memo} editMemo={editMemo} deleteMemo={deleteMemo} />
      ))}
    </ul>
  );
}
