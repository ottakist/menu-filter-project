import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  let unique = ["all",... new Set(items.map((item)=>item.category))] 
  const [categories,setCategories] = useState(unique)
  const [menu,setMenuItems] = useState(items)

   const filterItems = (category) => {
     if (category === 'all') {
       setMenuItems(items);
       return;
     }
     const newItems = items.filter((item) => item.category === category);
     setMenuItems(newItems);
   };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
