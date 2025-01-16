import { List } from '@mui/material';
import MemoItem from './MemoItem';

export default function MemoList({ memos, editMemo, deleteMemo }) {
  return (
    <List>
      {memos.map(memo => (
        <MemoItem key={memo.id} memo={memo} editMemo={editMemo} deleteMemo={deleteMemo} />
      ))}
    </List>
  );
}
