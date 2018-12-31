import React from 'react'
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    return <div className="image-list">{images}</div>;
};

export default ImageList;

// Destructuring is fun... This is definitely something I should do more.
// const images = props.images.map(({description, id, urls}) => {
//     return <ImageCard key={id} src={urls.regular} alt={description} />
// })