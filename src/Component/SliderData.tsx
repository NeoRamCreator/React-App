

import React, { useEffect, useState } from 'react'


interface ChildProps {
    count: number,
    indexItem: number,
    onSelectedItemChange: (item: number) => void;
}


export const SliderData = (props: ChildProps) => {

    const [selectedItem, setSelectedItem] = useState(0)

    useEffect(() => {
        setSelectedItem(props.indexItem);
        console.log("__: ", selectedItem)
    }, [props.indexItem, selectedItem]);

    function hangleIncrement(item: number) {
        console.log("hangleIncrement: ", item)
        if (item < props.count - 1) {
            props.onSelectedItemChange(item + 1)
            console.log("hangleDecrement: ", item)
        }
    }

    function hangleDecrement(item: number) {
        console.log("hangleDecrement: ", item)
        if (item > 0) {
            props.onSelectedItemChange(item - 1)
            console.log("hangleDecrement: ", item)
        }
    }

    return (
        <>
            <div className="slider-date">
                <p>0{selectedItem + 1}/0{props.count}</p>

                <div
                    className="left"
                    onClick={() => hangleDecrement(selectedItem)}
                >
                    <div className="arrow1 arrow-left" ></div>
                </div>


                <div
                    className="right"
                    onClick={() => hangleIncrement(selectedItem)}
                >
                    <div className="arrow1 arrow-right"></div>
                </div>
            </div>
        </>
    )
}