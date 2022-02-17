import { useState } from 'react'
import previousIcon from '../assets/images/icon-previous.svg'
import nextIcon from '../assets/images/icon-next.svg'
import { CloseIcon } from './icons/CloseIcon'

import './SliderImageModal.css'

const SLIDER_MODAL_STATE = {
    left: 0,
    index: 0,
    showModal: false
}



export const SliderImageModal = ({ children, thumbnails = [], closeCallback }) => {
    const [sliderModalState, setSliderModalState] = useState(SLIDER_MODAL_STATE)

    const handleModalSlider = (event) => {

        const action = event.target.dataset.action;

        const sliderWith = document.getElementById('sliderModalWrapper').offsetWidth
        let index = sliderModalState.index;

        if (action === 'next') index = index + 1;
        if (action === 'prev') index = index - 1;
        if (action === 'first') index = 0;
        if (action === 'last') index = children.length - 1;
        if (action === 'index') index = event.target.dataset.index;


        if (index < 0) index = children.length - 1
        if (index > children.length - 1) index = 0
        setSliderModalState({
            left: -index * sliderWith,
            index: index
        })
    }

    const handleThumbClick = (event) => {
        
        const parent = event.target.parentElement
        const index = event.target.dataset.index

        console.log()
        
        const elements = Array.from(parent.children)
       
        elements.forEach(element => {
            let childIndex = element.dataset.index
            if (childIndex === index) {
                console.log(childIndex)
                element.classList.add('active')
            }
            else {
                element.classList.remove('active')
            }
        })
    }

    return (
        <>
            <span className="slider-image-modal_lightbox"></span>
            <div className="slider-image-modal">
                <button className="slider-image-modal_button-close" onClick={closeCallback}>
                    <CloseIcon></CloseIcon>
                </button>
                <div className="slider-image-modal_container">
                    <div id="sliderModalWrapper" className="slider-image-modal_wrapper" style={{ left: sliderModalState.left }}>
                        {children}
                    </div>
                </div>
                <div className="slider-image-modal_actions">
                    <button data-action='prev' onClick={handleModalSlider} className="slider-image-modal_button-prev">
                        <img src={previousIcon} alt="previous" />
                    </button>
                    <button data-action='next' onClick={handleModalSlider} className="slider-image-modal_button-next">
                        <img src={nextIcon} alt="next" />
                    </button>
                </div>
                <div className="slider-image-modal_thumbs" onClick={handleThumbClick}>
                    {thumbnails.map((thumbnail, index) => {
                        return (
                            <div key={thumbnail} className={`slider-image-modal_thumb${index === sliderModalState.index ? ' active' : ''}`} data-index={index} onClick={handleModalSlider} data-action='index'>
                                <img src={thumbnail} alt={`thumbnail ${index}`} />
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}