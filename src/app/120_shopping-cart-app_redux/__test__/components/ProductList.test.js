import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductList from '../../components/ProductList';
import { addToCart } from '../../features/cart/cartSlice';

const mockStore = configureStore([]);

describe('商品一覧コンポーネントの表示と動作', () => {
  it('商品一覧が正しく表示される', () => {
    const store = mockStore({ cart: { items: [] } });

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(screen.getByText('商品A - ¥1000')).toBeInTheDocument();
    expect(screen.getByText('商品B - ¥1500')).toBeInTheDocument();
    expect(screen.getByText('商品C - ¥2000')).toBeInTheDocument();
  });

  it('「カートに追加」ボタンを押すと、商品がカートに追加される', () => {
    const store = mockStore({ cart: { items: [] } });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    fireEvent.click(screen.getAllByText('カートに追加')[0]);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'cart/addToCart',
      payload: { id: 1, name: '商品A', price: 1000 },
    });
  });
});
