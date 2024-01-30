import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { XIcon } from '@heroicons/react/outline'

function CustomModal(props) {
    // const [show, setShow] = useState(false);
    // const closeHandler=(e)=>{
    //     setShow(false);
    //     props.onClose(false);
    // }

    // useEffect(() => {
    //     setShow(props.show);
    // }, [props.show])

    const { title, onClose, show, content } = props;

    return (
        <div className="modal-outer flex fixed z-20 inset-0 bg-slate-500/50 items-center justify-center" 
        style={{visibility: show?"visible":"hidden", opacity: show?"1":"0", transition: "all ease-out 0.3s" }}
        >
            <div className="modal-inner w-1/2"
             style={{transform: show ? "scale(1)":"scale(0.95)", transition: "all ease-out 0.3s"}}
             >
                <div className="w-full mx-auto p-6 pt-8 rounded-lg relative bg-white">
                    <div className="title-box pb-4 border-b-2 mb-6">
                        <h1 className='text-3xl font-bold'>{title}</h1>
                    </div>
                    <div className="close-btn absolute right-2 top-2">
                        <span className="cursor-pointer" onClick={onClose}>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="modal-content">
                        <p className='text-md font-medium'>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

CustomModal.propTypes ={
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    // show: PropTypes.bool.isRequired
}

export default CustomModal;