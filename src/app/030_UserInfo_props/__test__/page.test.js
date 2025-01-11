import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page'; 

describe('Homeコンポーネント', () => {
    test('ユーザーリストが正しく表示される', () => {
        render(<Home />);

        // ユーザーリストの見出しが表示されていることを確認
        const heading = screen.getByText('ユーザーリスト');
        expect(heading).toBeInTheDocument();

        // 各ユーザーの情報が表示されていることを確認
        const users = [
            { name: "太郎", age: 25, hobby: "サッカー", job: "エンジニア" },
            { name: "花子", age: 30, hobby: "読書", job: "デザイナー" },
            { name: "次郎", age: 28, hobby: "映画", job: "教師" },
            { name: "健太", age: 35, hobby: "旅行", job: "医者" },
            { name: "美咲", age: 22, hobby: "音楽", job: "学生" }
        ];

        users.forEach(user => {
            expect(screen.getByText(`名前: ${user.name}`)).toBeInTheDocument();
            expect(screen.getByText(`年齢: ${user.age}歳`)).toBeInTheDocument();
            expect(screen.getByText(`趣味: ${user.hobby}`)).toBeInTheDocument();
            expect(screen.getByText(`職業: ${user.job}`)).toBeInTheDocument();
        });
    });
});
