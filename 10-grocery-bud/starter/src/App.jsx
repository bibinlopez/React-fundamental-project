import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';

import { ToastContainer, toast } from 'react-toastify';

const getLocalStorage = () => {
  let list = localStorage.getItem('grocery');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const setFn = (items) => {
    setItems(items);
    localStorage.setItem('grocery', JSON.stringify(items));
  };

  const addItems = (itemName) => {
    // console.log(itemName);

    const item = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const allItems = [...items, item];

    setFn(allItems);
    toast.success('item added to the list');
  };

  const handleRemove = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setFn(newItems);
    toast.success('item removed');
  };

  const handleCompleted = (id, index) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    // items[index].completed = !items[index].completed;
    setFn(newItems);
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
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
