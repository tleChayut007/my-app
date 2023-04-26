import {useState} from 'react';
function Item({name,isPacked}){
    return (<li>{name} {isPacked && '✔'}</li>);
}
export default function PackingList(){
    const [search,setSearch]=useState("");
    const items=[
        {id:1,
            name:"Mavbook Pro",
            price:30000},
            {id:2,
                name:"Asus Tuf ",
                price:35000},
                {id:3,
                    name:"Acer Nitro5",
                    price:23000},
                    {id:4,
                        name:"Lenovo Legion",
                        price:38000},
                        {id:5,
                            name:"msi gameming",
                            price:25000},
    ];
    const filterList= items.filter(item=> item.name.includes(search));
    const itemList=items.map(item=>
                        <li key={item.id}>
                            id:{item.id+" "}
                            name:{item.name+" "}
                            price:{item.price}
                        </li>);
    const filterList2=filterList.map(item=>
                        <li key={item.id}>
                            id:{item.id+" "}
                            name:{item.name+" "}
                            price:{item.price}
                        </li>);
    const onTextChange=(event)=>{
        setSearch(event.target.value);
    }
    return (<>
        Search:
        <input
            type="text"
            onChange={event=>onTextChange(event)}
        />
        <h1>My Shop</h1>
        <ul>
          {itemList}
        </ul>
        <h1>Search Result:</h1>
        <ul>
          {filterList2}
        </ul>
    </>);
}