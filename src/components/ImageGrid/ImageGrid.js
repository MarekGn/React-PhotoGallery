import React from 'react';
import { useDispatch, useSelector} from "react-redux";

import { loadImages } from "../../actions";
import LoadButton from '../LoadButton';
import Stats from "../Stats";
import './styles.css';


export default function ImageGrid() {
    const images = useSelector(state => state.images);
    const isLoading = useSelector(state => state.isLoading);
    const imageStats = useSelector(state => state.imageStats)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch();

     return (
            <div className="content">
                <div><h2>{error && error.toString()}</h2></div>
                <div className="grid">
                    {images.map(image => (
                        <div key={image.id} className={`item ${image.id}`}>
                            <img src={image.urls.small} alt={image.user.username}/>
                            <Stats stats={imageStats[image.id]}/>
                        </div>
                    ))}
                </div>
                <LoadButton
                    onClick={() => !isLoading && dispatch(loadImages())}
                    loading={isLoading}
                >
                    Load More
                </LoadButton>
            </div>
        );
}
