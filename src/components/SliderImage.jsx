import './SliderImage.css'
import previousIcon from '../assets/images/icon-previous.svg'
import nextIcon from '../assets/images/icon-next.svg'
import { useState} from 'react'
import {useBreakpoint} from './media-querys/MeidaQuery'

const SLIDER_STATE = {
    left: 0,
    index: 0
}





function SliderImage({ children, thumbnails = [] }) {
    const [sliderState, setSliderState] = useState(SLIDER_STATE)
    
    const breakpoint = useBreakpoint()

    const handleSlider = (event) => {
        
        const action = event.target.dataset.action;

        const sliderWith = document.getElementById('sliderWrapper').offsetWidth
        let index = sliderState.index;
        
        if(action === 'next') index = index + 1;
        if(action === 'prev') index = index - 1;
        if(action === 'first') index = 0;
        if(action === 'last') index = children.length - 1;
        if(action === 'index') index = event.target.dataset.index;


        if(index < 0) index = children.length - 1
        if(index > children.length - 1) index = 0
        setSliderState({
            left: -index * sliderWith,
            index: index
        })
    }

    const handleThumbClick = (event) => {
        
        const parent = event.target.parentElement
        const index = event.target.dataset.index
        
        const elements = Array.from(parent.children)
        console.log(elements)
        elements.forEach(element => {
            if(element.dataset.index === index){
                element.classList.add('active')
            }
            else {
                element.classList.remove('active')
            }
        })
    }

    return (
        <>
            <div className="slider-image">
                <div id="sliderWrapper" className="slider-image_wrapper" style={{ left: sliderState.left }}>
                    {children}
                </div>
                {breakpoint === 'mobile' ?
                    (
                        <div className="slider-image_actions">
                            <button data-action='prev' onClick={handleSlider} className="slider-image_button-prev">
                                <img src={previousIcon} alt="previous" />
                            </button>
                            <button data-action='next' onClick={handleSlider} className="slider-image_button-next">
                                <img src={nextIcon} alt="next" />
                            </button>
                        </div>
                    ) : ''}
            </div>
            {thumbnails.length > 0 && breakpoint === 'desktop' ?
                (
                    <div className="slider-image_thumbs" onClick={handleThumbClick}>
                        {thumbnails.map((thumbnail, index) => {
                            return (
                                <div key={thumbnail} className={`slider-image_thumb${index === sliderState.index?' active':''}`} data-index={index} onClick={handleSlider} data-action='index'>
                                    <img src={thumbnail} alt={`thumbnail ${index}`} />
                                </div>
                            )
                        })}

                    </div>
                )
                : ''}
        </>
    )
}

export default SliderImage