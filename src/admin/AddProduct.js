import React, { useEffect, useState } from 'react';


import Alert from './compo/Alert';
import List from './compo/List';

const getLocalStorage=()=>{
  let list = localStorage.getItem("list");
  if(list){
    return(list=JSON.parse(localStorage.getItem("list")));
  }else{
    return [];
  }
}


const AddProduct=()=> {
  const [name,setName]=useState("");
  const [name2,setName2]=useState("");
  const [name3,setName3]=useState("");
  const [list,setList]=useState(getLocalStorage());
  const [isEditing,setIsEditing]=useState(false);
  const [EditId,setEditId]=useState(null);
  const [alert,setAlert]=useState({show:false, msg:"", type:""});

  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name){
      showAlert(true,"danger","Please Enter Value")
    }else if ((name || name2 || name3) && isEditing){
      setList(
        list.map((item)=>{
          if(item.id === EditId){
            return{...item,title:name, title2:name2,title3:name3}
          }
          return item
        })
      )
      setName("");
      setName2("");
      setName3("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true,"success","value Change")
    }else{
      showAlert(true,"success","Item Added to the List")
      const newItem = {id: new Date().getTime().toString(),title:name,title2:name2,title3:name3}
      setList([...list,newItem])
      setName("")
      setName2("")
      setName3("")
    }
  };

  const showAlert=(show=false,type="",msg="")=>{
    setAlert({show,type,msg});
    
  };

  const removeItem=(id)=>{
    showAlert(true,"danger","item Removed")
    setList(list.filter((item)=>item.id !==id));
  };

  const editItem=(id)=>{
    const editItem = list.find((item)=>item.id===id);
    setIsEditing(true);
    setEditId(id);
    setName(editItem.title)
    setName2(editItem.title2)
    setName3(editItem.title3)
  };

  const clearList=()=>{
    showAlert(true,"danger","Empty List");
    setList([]);
  };

  return (
    <div>
    <section className='section-center'>
      <form onSubmit={handleSubmit}>
        {alert.show &&<Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3 style={{marginBottom:"1.5rem", textAlign:"center"}}>Add Products</h3>
        <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Category of Products</label>
  <select class="form-select" id="inputGroupSelect01" onChange={(e)=>setName(e.target.value)} value={name}>
    <option selected>Choose...</option>
    <option value="Electronic">Electronic</option>
    <option value="Fashion">Fashion</option>
    <option value="Home">Home</option>
    <option value="Kitchen">Kitchen</option>
  </select>
</div>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Product"  onChange={(e)=>setName2(e.target.value)} value={name2}/>
  </div>
  <div class="col">
    <input type="number" class="form-control"  placeholder='Price' onChange={(e)=>setName3(e.target.value)} value={name3}/>
  </div>
</div>
<br></br>
        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>{isEditing ? "Edit":"Submit"}</button>
        </div>
      </form>
    </section>
    <section className='section-center'>
    <h3 style={{marginBottom:"1.5rem", textAlign:"center"}}>Products</h3>
      {list.length>0 &&(
        <div style={{marginTop:"2rem"}}>
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <div className='text-center'>
          <button className='btn btn-warning' onClick={clearList}>Clear Items</button>
          </div>
        </div>
      )}
    </section>
    </div>
  );
}

export default AddProduct;