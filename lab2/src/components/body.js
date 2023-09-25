import React, { useState } from "react";
function Body(prop)
{
  const [checked, setChecked] = useState([]);

  const checkList =prop.tovar;

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length ? checked.reduce((total, item) => {
        return total + ", " + item;
      }) : "";
  
      var isChecked = (item) =>
  checked.includes(item) ? "checked-item" : "not-checked-item";
 
  return( 
  <body className="App-body"> 
 
 {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        {`You checked: ${checkedItems}`}
 
  </body>
  )
}
export default Body