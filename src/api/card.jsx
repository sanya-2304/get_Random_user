import React from "react";
export const Card =(props)=>{
    return <div className="card">
       <img src="" alt="" className="img" />
       <h3>{props.data.name.first}</h3>
       <p>{props.data.cell}</p>
       <p>{props.data.location.country}, {props.data.location.city}</p>
    </div>
}