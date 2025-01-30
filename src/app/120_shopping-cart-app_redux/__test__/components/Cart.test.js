import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cart from '../../components/Cart';
import { removeFromCart } from '../../features/cart/cartSlice';

const mockStore = configureStore([]);

describe('カートコンポーネントの表示と動作', () => {
  it('カートが空のとき「カートは空です」と表示される', () => {
    const store = mockStore({ cart: { items: [] } });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText('カートは空です')).toBeInTheDocument();
  });

  it('カートに商品がある場合、商品名と価格が表示される', () => {
    const store = mockStore({
      cart: { items: [{ id: 1, name: '商品A', price: 1000 }] },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText('商品A - ¥1000')).toBeInTheDocument();
  });

  it('削除ボタンを押すと、カートから商品が削除される', () => {
    const store = mockStore({
      cart: { items: [{ id: 1, name: '商品A', price: 1000 }] },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    fireEvent.click(screen.getByText('削除'));

    expect(store.dispatch).toHaveBeenCalledWith(removeFromCart(1));
  });
});
