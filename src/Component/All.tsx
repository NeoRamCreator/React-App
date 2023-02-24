import { useState, useEffect } from "react";
import React, { } from 'react';
import { News } from './News';
import { SliderData } from './SliderData';
import { Circle } from './Circle';
import { SidebarLeft } from './SidebarLeft';
import { SidebarRight } from './SidebarRight';
import { Interface } from './Interface';
import { IData } from './data';
import date from './data.json'

import './styles.css'
import './style1.css'
import Qwe from "./Qwe";


function All() {

    const [data, setData] = useState<IData[]>([]);
    const [selectedItem, setSelectedItem] = useState(0);

    function handleSelectedItemChange(newSelectedItem: number) {
        setSelectedItem(newSelectedItem);
    }

    useEffect(() => {
        setData(date);
        console.log("selectedItem: ", selectedItem)
        handleSelectedItemChange(selectedItem)
    }, [selectedItem])

    return (
        <div className="decktop">
            <div className="rengtengle">
{/* <Qwe /> */}
                <Interface />
                <SliderData count={data.length} indexItem={selectedItem} onSelectedItemChange={handleSelectedItemChange} />
                {/* <SidebarLeft /> */}
                <News data={data} indexItem={selectedItem} />
                {/* <SidebarRight /> */}

                {/* {data.map((item) => (
                    <p key={item.id}>{item.year_before}</p>
                ))} */}

                <p className="hist-date">{ }Исторические даты</p>
                <p className="yahr">{data[selectedItem]?.year_before} {data[selectedItem]?.year_after}</p>

                <Circle data={data} onSelectedItemChange={handleSelectedItemChange} />

            </div>
        </div>
    )
}

export default All;