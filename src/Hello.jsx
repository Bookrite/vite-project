

function Additem() {
    const itemName = document.getElementById('itemName').value
    const itemPrice = document.getElementById('itemPrice').value
    const itemCategory = document.getElementById('itemCategory').value
    let newItem = {
        name: itemName,
        price: itemPrice,
        category: itemCategory
    }

   
    
 return newItem
}


function AddItemDiv(props) {

    return (
        <>
            <div >
                <input type="text" id="itemName" placeholder="Item Name" />
                <input type="number" id="itemPrice" placeholder="Price" />
                <select id="itemCategory">
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Dairy">Dairy</option>
                </select>
                <button onClick={props.onAdd}>Add Item</button>
            </div>
        </>
    )
}

function OnClickB(props) {
    return (
        <button onClick={() => {
            props.setFilter(props.category);
        }}>{props.text}</button>
    )
}


function UlEl(props) {
    return (
        <ul>
            {props.Li}
        </ul>
    )
}





function ItemListEl(props) {
    return (
        <li>{`${props.itemName} $${props.itemPrice}    ${props.itemCategory}`}</li>
    )
}



export {  AddItemDiv, Additem, ItemListEl, UlEl, OnClickB }