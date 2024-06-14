import React from 'react';
import "../../assets/style/Inicio.css";
import PortadaInicio from '../Uicomponents/PortadaInicio';
import SliderMovie from '../Uicomponents/SliderMovie';
const Inicio = () => {
    return (
        <>
            <div className='main-inicio'>
                <div>
                    <PortadaInicio></PortadaInicio>
                    <div className='slider mt-2'>
                        <span className='fs-5'>Tu proxima historia</span>
                        <SliderMovie categoria='movie'></SliderMovie>
                    </div>
                    <div className='slider'>
                        <span className='fs-5'>series</span>
                        <SliderMovie categoria="series"></SliderMovie>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inicio;  