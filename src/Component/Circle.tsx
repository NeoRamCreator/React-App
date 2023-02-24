import { useState, useEffect } from "react";
import { IData } from './data';


import React from 'react'

// export function Circle(props) {

interface ChildProps {
    onSelectedItemChange: (item: number) => void;
    data: IData[];
}
export function Circle(props: ChildProps) {

    const [items, setItems] = useState(props.data);
    const [selectedItem, setSelectedItem] = useState(0);

    function handleItemClick(item: number) {
        setSelectedItem(item);
        props.onSelectedItemChange(item);
    }

    useEffect(() => {
        setItems(props.data);
        console.log("circle_selectedItem: ", selectedItem);
        // circle();
    }, [props.data, selectedItem])



    // function circle() {
    //     const radius = 265;
    //     const itemss = document.getElementsByClassName('iteme') as HTMLCollectionOf<HTMLElement>;
    //     const alpha = Math.PI * 2 / itemss.length 
    //     console.log(alpha)
    //     for (let i = 0; i < itemss.length; i++) {

    //         const x = Math.round( 265 - radius * Math.cos(alpha * i) - 28) + 'px'
    //         const y = Math.round(265 - radius * Math.sin(alpha * i) - 28) + 'px'

    //         itemss[i].style.left = `${x}px`
    //         itemss[i].style.top = `${y}px`

    //         console.log(i, x, y)

    //     }
    // }

    return (
        <div className="center-slider"  >
            <div id="roote">
                {items.map(item => (
                    <div
                        key={item.id}
                        className="iteme"
                        onClick={() => { handleItemClick(item.id - 1) }}
                    >
                        <div
                            className='data-n '
                        >
                            {item.id}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )

}