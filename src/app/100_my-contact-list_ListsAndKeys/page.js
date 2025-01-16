"use client";
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addContact = () => {
    if (name && phone) {
      setContacts([...contacts, { id: nextId, name, phone }]);
      setNextId(nextId + 1);
      setName('');
      setPhone('');
    }
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div>
      <h1>連絡先リスト</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前を入力"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="電話番号を入力"
      />
      <button onClick={addContact}>追加</button>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => deleteContact(contact.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
