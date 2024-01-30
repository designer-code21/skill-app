import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'


const CustomModal =(props)=>{
    const[show,setShow] = useState(false);
    const closeHandler=(e)=>{
        setShow(false);
        props.onClose(false);
    }
    useEffect(()=>{
        setShow(props.show);
    }, [props.show]);
    return(
        <div className="modal modal-outer fixed bg-zinc-900/80 inset-0 z-20 flex items-center justify-center" style={{visibility:show? "visible": "hidden", opacity:show?"1":"0", transition:"all ease-out 0.3s"}}>
            <div className="modal-style bg-white w-1/2 p-6 rounded-lg m-auto">
                <h2 className=''>{props.title}</h2>
                <span className='close cursor-pointer' onClick={closeHandler}>
                    &times;
                </span>
                <div className="content">{props.children}</div>
            </div>
        </div>
    )
};

CustomModal.propTypes={
    title: PropTypes.string.isRequired,
    onClose:PropTypes.func.isRequired,
    show:PropTypes.bool.isRequired
}

export default CustomModal;
