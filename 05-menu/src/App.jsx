import { useState } from 'react';
import Title from './Title';
import data from './data';
import Menu from './Menu';
import Categories from './Categories';

const App = () => {
  const [menuItems, setMenuItems] = useState(data);

  const handleFilter = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    const filterCat = data.filter((cat) => cat.category === category);
    setMenuItems(filterCat);
  };

  const categor = data.map((cat) => cat.category);
  const setCat = new Set(categor);
  const allCat = ['all', ...setCat];
  // console.log(allCat);

  const [categories, setCategories] = useState(allCat);

  return (
    <menu>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} handleFilter={handleFilter} />
        <Menu items={menuItems} />
      </section>
    </menu>
  );
};
export default App;
