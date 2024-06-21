import React from 'react';
import { useState } from 'react';

const useModal = () => {
    const [show, setShow] = useState(false);

    const  handleShow = () => {
        setShow(true);
        console.log("show")
    }

    return { show, setShow, handleShow }
};

export default useModal;