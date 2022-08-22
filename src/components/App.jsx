import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item,setItem]=useState({
    title:"",
    content:""
  })
  const [items,setItems]=useState([]);
  function ChangeItem(name,Item){
    setItem(prevValue=>{
      return{
        ...prevValue,
        [name]:Item
      }
    });

  }
  function addItem(){
    setItems(prevValue=>{
      return[
        ...prevValue,
        item
      ]
    })
    
    console.log(items);
    setItem({title:"",content:""});
  }
  function deleteItem(id){
    setItems(prevValue=>{
      return prevValue.filter((Item,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onFilled={ChangeItem} onCheck={addItem} val={item}/>
      {items.map((Item,index)=>{
        return <Note key={index} id={index} title={Item.title} content={Item.content} onChecked={deleteItem} />
      })}
      <Footer />
    </div>
  );
}

export default App;
