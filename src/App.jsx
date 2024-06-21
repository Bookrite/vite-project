import {Additem , AddItemDiv, ItemListEl, UlEl, OnClickB } from "./Hello"
import { useState } from "react"


function returnValue(id) {
  return document.getElementById(id).value
}


let itemList = []





function App() {
  let [filter, setFilter] = useState('all')
  let [min, setMin] = useState(-Infinity)
  let [max, setmax] = useState(Infinity)
  const [items, setItems] = useState(itemList);

  let filteredItems = filter === 'all' ? items
    : filter === 'allCategory' ? items.filter(item => item.price >= min && item.price <= max)
      : items.filter(item => item.category === filter & item.price >= min & item.price <= max);


      
      const handleAddItem = () => {
        const newItem = Additem();
        setItems([...items, { ...newItem, id: items.length + 1 }]);
      };



  return (<>
    <AddItemDiv onAdd={handleAddItem} />
    <input type="number" id="Min" placeholder="Min" />
    <input type="number" id="Max" placeholder="max" />
    <button onClick={() => {
      if (!document.getElementById('Min').value == '' & !document.getElementById('Max').value == '') {
        setMin(Number(returnValue('Min')));
        setmax(Number(returnValue('Max')));

      } else {
        alert('To filter by price please fill out min and max.');
      }
    }}>Filter all by price</button>



    <OnClickB setFilter={setFilter} category={'allCategory'} text={"All"} />
    <OnClickB setFilter={setFilter} category={'Dairy'} text={"Dairy"} />
    <OnClickB setFilter={setFilter} category={'Fruits'} text={"Fruits"} />
    <OnClickB setFilter={setFilter} category={'Vegetables'} text={"Vegetables"} />

    <UlEl Li={filteredItems.map((item, index) => { return (<ItemListEl key={index} itemName={item.name} itemPrice={item.price} itemCategory={item.category} />) })} />


  </>
  )
}

export default App
