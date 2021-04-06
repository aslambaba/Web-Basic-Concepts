import React from 'react';

import {useSelector,useDispatch} from 'react-redux';

export default function Cart(){

    const cartCounter = useSelector((state) => state.cartCounter);
    const dispatch = useDispatch();
    
    return(
        <>
            <h2>{cartCounter}</h2>
            <button
                onClick={()=>
                    dispatch({
                        type: "Increament"
                    })
                }
            >
                ADD
            </button>
            <button
                onClick={()=>
                    dispatch({
                        type: "IncreamentWith5",
                        payloads: 5
                    })
                }
            >
                ADD 5
            </button>
        </>
    )
}