import React from "react";
import Fun2 from "./Fun2";
function Fun1(props){
    let name='srinivasulu...';
    return(<div>
        {/* <h1>hei...srinivasulu</h1> */}
          {/* <h1>heiiii:{name}</h1>   */}
        <Fun2 y={name}/>
        </div>)

}
export default Fun1;