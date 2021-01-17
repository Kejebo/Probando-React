import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GridGifItem } from './GridGifItem';
//import {getGif} from '../helper/getGif';
export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGif(category);
  

    return (
    <>
    <h1 className="animate__animated animate__bounce animate__animate__fadeIn">{category}</h1>
        {loading && <p className="animate__animated animate__bounce animate__animate__flash">loading</p>}
    <div className="card-grid">
        {
        images.map( img => (
            <GridGifItem 
            
            key={img.id} 
            
            {...img}
            />
        ))
    }
        </div>
        </>
    )
}
