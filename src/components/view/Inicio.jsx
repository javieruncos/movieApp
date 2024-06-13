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
                </div>

                <div className='slider'>
                    <h3>Recomendados</h3>
                    <SliderMovie></SliderMovie>
                </div>
            </div>
        </>
    );
};

export default Inicio;  