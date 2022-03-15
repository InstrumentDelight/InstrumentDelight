import React from "react";
const hello = n =>{
  return(
      <div>
<h1>Hi {n.name}!!!</h1>
{n.children}</div>
  )
  //  return React.createElement('div',null,React.createElement("h6",{id:'hello',class:"hello"},"hii"))
}
export default hello