
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './ProductCount.scss';


const ProductCount = (props) => {

    const [value, setValue] = useState(props.value || 0) 

    const add = (n) => {
        const inc = value + n;
        if (inc < 0) return;

        if(props.onAdd){
            props.onAdd(inc);
        }
     
        setValue(inc)
    }

    return (
        <div className='ProductCount'>
            <div onClick={()=>add(-1)}>-</div>
            <div>{value}</div>
            <div onClick={()=>add(1)}>+</div>
           
        </div>

    )


}


export default ProductCount;