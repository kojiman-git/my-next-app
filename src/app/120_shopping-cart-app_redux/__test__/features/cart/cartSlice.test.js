import cartReducer, { addToCart, removeFromCart } from '../../../features/cart/cartSlice';

describe('カートの状態管理', () => {
  it('初期状態ではカートに商品が入っていない', () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual({ items: [] });
  });

  it('商品をカートに追加できる', () => {
    const previousState = { items: [] };
    const newItem = { id: 1, name: '商品A', price: 1000 };
    expect(cartReducer(previousState, addToCart(newItem))).toEqual({ items: [newItem] });
  });

  it('カートから商品を削除できる', () => {
    const previousState = { items: [{ id: 1, name: '商品A', price: 1000 }] };
    expect(cartReducer(previousState, removeFromCart(1))).toEqual({ items: [] });
  });
});