// pages/index.js
import UserInfo from './components/UserInfo';
import { Container, Typography } from '@mui/material';

export default function Home() {
    const users = [
        { name: "太郎", age: 25, hobby: "サッカー", job: "エンジニア" },
        { name: "花子", age: 30, hobby: "読書", job: "デザイナー" },
        { name: "次郎", age: 28, hobby: "映画", job: "教師" },
        { name: "健太", age: 35, hobby: "旅行", job: "医者" },
        { name: "美咲", age: 22, hobby: "音楽", job: "学生" }
    ];

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom style={{ marginTop: '20px' }}>
                ユーザーリスト
            </Typography>
            {users.map((user, index) => (
                <UserInfo 
                    key={index} 
                    name={user.name} 
                    age={user.age} 
                    hobby={user.hobby} 
                    job={user.job} 
                />
            ))}
        </Container>
    );
}
