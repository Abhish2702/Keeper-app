import React from "react";

function CreateArea(props) {
  function handleChange(event){
    const {name,value}=event.target;
    props.onFilled(name,value);
  }
  function handleClick(event){
    props.onCheck();
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={props.val.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={props.val.content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
