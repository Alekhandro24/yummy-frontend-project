import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchShoppingList } from 'redux/shoppingList/operations';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList';
import { MainTitle } from 'components/MainTitle/MainTitle';

const ShoppingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  return (
    <>
      <MainTitle title="ShoppingList Page" />
      <IngredientsShoppingList />
    </>
  );
};

export default ShoppingList;
