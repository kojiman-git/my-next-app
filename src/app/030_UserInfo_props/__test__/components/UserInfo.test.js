import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from '../../components/UserInfo';

describe('UserInfoコンポーネント', () => {
    test('正しいユーザー情報が表示される', () => {
        const user = {
            name: "太郎",
            age: 25,
            hobby: "サッカー",
            job: "エンジニア"
        };

        render(<UserInfo {...user} />);

        // ユーザーの名前が表示されていることを確認
        expect(screen.getByText(`名前: ${user.name}`)).toBeInTheDocument();
        // 年齢が表示されていることを確認
        expect(screen.getByText(`年齢: ${user.age}歳`)).toBeInTheDocument();
        // 趣味が表示されていることを確認
        expect(screen.getByText(`趣味: ${user.hobby}`)).toBeInTheDocument();
        // 職業が表示されていることを確認
        expect(screen.getByText(`職業: ${user.job}`)).toBeInTheDocument();
    });
});
