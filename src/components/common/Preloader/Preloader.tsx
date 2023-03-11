import React from 'react';
import preloader from '../../../assets/images/Preloader.svg';


type PreloaderPropType = {
    isFetching: boolean
}

const Preloader: React.FC<PreloaderPropType> = (props) => {
    return (
        <div>
            {props.isFetching ?
                <img src={preloader} alt={"image"} style={{width: "120px", height: "120px"}}/>
                : null}
        </div>
    );
};

export default Preloader;