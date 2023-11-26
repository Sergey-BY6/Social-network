import React from 'react';
import preloader from '../../../assets/images/Preloader1.svg';
import s from "./Preloader.module.css"


type PreloaderPropType = {
    isFetching: boolean
    size?: string
}

const Preloader: React.FC<PreloaderPropType> = (props) => {


    return (
        <>
            {
                props.size ?
                    <div className={s.preloader}>
                        {props.isFetching ?
                            <img src={preloader} alt={"image"}
                                 style={{width: "50px", height: "50px", marginLeft: "750px"}}/>
                            : null}
                    </div>
                    :  <div className={s.preloader}>
                        {props.isFetching ?
                            <img src={preloader} alt={"image"} style={{width: "120px", height: "120px"}}/>
                            : null}
                    </div>
            }
        </>
    );
};

export default Preloader;