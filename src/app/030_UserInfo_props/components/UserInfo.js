const UserInfo = ({ name, age, hobby, job }) => {
  return (
      <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
          <h2>名前: {name}</h2>
          <p>年齢: {age}歳</p>
          <p>趣味: {hobby}</p>
          <p>職業: {job}</p>
      </div>
  );
};

export default UserInfo;
