// components/UserInfo.js
import { Card, CardContent, Typography } from '@mui/material';

const UserInfo = ({ name, age, hobby, job }) => {
    return (
        <Card variant="outlined" style={{ margin: '10px' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    名前: {name}
                </Typography>
                <Typography color="text.secondary">
                    年齢: {age}歳
                </Typography>
                <Typography color="text.secondary">
                    趣味: {hobby}
                </Typography>
                <Typography color="text.secondary">
                    職業: {job}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default UserInfo;
