import React from 'react'

export const GridGifItem = ({id,title,url}) => {
    console.log(url);
    return (
        <div className="card animate__slideInLeft  animate__delay-20s ">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
