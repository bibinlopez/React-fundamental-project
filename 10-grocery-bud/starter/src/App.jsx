import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('grocery'))
  );

  const addItems = (itemName) => {
    // console.log(itemName);
    if (!itemName) return;
    const item = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const allItems = [...items, item];
    setItems(allItems);
    setShowText('');
    localStorage.setItem('grocery', JSON.stringify(allItems));
  };

  const handleRemove = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems([...newItems]);
    localStorage.setItem('grocery', JSON.stringify([...newItems]));
  };

  const handleCompleted = (id, index) => {
    // const updatedItems = items.filter((item) => {
    //   return item.id !== id;
    // });
    // let updatedItem = items.filter((item) => {
    //   return item.id == id;
    // });
    items[index].completed = !items[index].completed;
    setItems([...items]);
    localStorage.setItem('grocery', JSON.stringify([...items]));
  };

  return (
    <section className='section-center'>
      <Form addItems={addItems} />
      <Items
        items={items}
        handleCompleted={handleCompleted}
        handleRemove={handleRemove}
      />
    </section>
  );
};

export default App;
