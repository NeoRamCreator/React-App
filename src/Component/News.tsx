import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper";
import { IData, } from './data';


import "swiper/css";
import "swiper/css/navigation";
import { useSwiper } from 'swiper/react';


import { FC } from "react";
import { Children } from 'react';
import { channel } from 'diagnostics_channel';

import { SwiperButtonR, SwiperButtonL } from './SwiperButton';

interface ChildProps {
    data: IData[],
    indexItem: number,
}

export const News = (props: ChildProps) => {

    const [selectedItem, setSelectedItem] = useState(0)
    const [dataByIndex, setDataByIndex] = useState<IData>(props.data[0])

    useEffect(() => {
        setSelectedItem(props.indexItem)
        setDataByIndex(props.data[selectedItem]);
        // console.log("!!!!!!!!!!!!!!!!", selectedItem)
    }, [selectedItem, props.data, props.indexItem]);

    if (!dataByIndex) {
        return <div>Loading...</div>;
    }



    return (

        <>
            <Swiper className='mySwiper'

                // navigation={true}
                modules={[Pagination, Navigation]}
                spaceBetween={40}
                slidesPerView={3}
                // spaceBetween={80}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)
                }
            >

                {/* <SlidePrevButton>slide</SlidePrevButton> */}

                {dataByIndex.news.map(item =>
                    <SwiperSlide key={item.id} className='content-slide'>
                        <div className=' content news'>
                            <p className="y">{item.year}</p>
                            <p className="news_text">{item.description}</p>
                        </div>
                    </SwiperSlide>
                )}

                {/* ы */}
                {/* <SlideNextButton>slide</SlideNextButton> */}
                <div style={{
                    position: 'relative',
                    left: 0, right: 0,
                    // backgroundColor: 'chartreuse',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // marginBottom: '-50%', 
                    zIndex: 999,
                    top: -80,
                    paddingLeft: '20px',
                    paddingRight: '40px',


                }}>
                    <SwiperButtonPrev></SwiperButtonPrev>
                    <SwiperButtonNext></SwiperButtonNext>
                </div>
            </Swiper>

            {/* <div className="news n1">
                    <p className="y">2015</p>
                    <p className="news_text">
                        13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
                    </p>
            </div>
            <div className="news n2">
                <p className="y">2016</p>
                <p className="news_text">
                    Телескоп «Хаббл» обнаружил
                    самую удалённую из всех
                    обнаруженных галактик,
                    получившую обозначение
                    GN-z11
                </p>
            </div>
            <div className="news n3">
                <p className="y">2017</p>
                <p className="news_text">
                    Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi
                </p>
            </div> */}
        </>

    )
}


const SwiperButtonPrev = ({ }) => {
    const swiper = useSwiper();
    return (
        <div onClick={() => swiper.slidePrev()} className='nav'>
            <SwiperButtonL />
        </div>
    )
    // return <div 
    // className='nav prev'
    // onClick={() => swiper.slidePrev()}>Prev</div>;
};

const SwiperButtonNext = ({ }) => {
    const swiper = useSwiper();
    return (
        <div onClick={() => swiper.slideNext()} className='nav'>
            <SwiperButtonR />
        </div>
    )
    // return <div
    //     className='nav next'
    //     onClick={() => swiper.slideNext()}>Next</div>;
};