import  { useState } from "react";

const ItemCount =({cant}) => {
    const [count, setCount] = useState(0);
    const qty = cant;

    const add = () => {
        console.log(qty+"  "+count)
        if (count < qty) {
          setCount(count + 1);
        }
      };

      const sub = () => {
        if (count === 0) {
             return;
        }
        setCount(count - 1);
      };  

    return (
                    <div className="BotCont">
                        <button onClick={() => add()}>+</button> 
                        <span>{count}</span>   
                        <button  onClick={() => sub()}>-</button>    
                    </div>
    )
}

export default ItemCount  ;