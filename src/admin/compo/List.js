import React from "react";
import {FaEdit,FaTrash} from "react-icons/fa"

const List = ({items,removeItem,editItem}) =>{
    return(
        <div className="container">
           {items.map((item)=>{
            const {id,title,title2,title3}=item;
            return (
                
                <ul className="list-group list-group-flush" key={id}>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div class="container">
                    <div className="row">
                        <div class="col">
                            Category:<br></br>{title}
                        </div>
                    <div class="col">
                    Product:<br></br>{title2}
                        </div>
                    <div class="col">
                    Price:<br></br>Rs.{title3}
                        </div>
                    
                        <div class="col">
                        <button type="button" className="edit-btn" onClick={()=>editItem(id)}>
                                <FaEdit/>
                            </button>
                        </div>
                        <div class="col">
                        <button type="button" className="delete-btn" onClick={()=>removeItem(id)}>
                                <FaTrash/>
                            </button>
                        </div>
                    </div>
                    </div>
                        
                    </li>
                </ul>
            )
           })}
        </div>
    )
}

export default List;