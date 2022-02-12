import './SliderImage.css'
import previousIcon from '../assets/images/icon-previous.svg'
import nextIcon from '../assets/images/icon-next.svg'
import { useState, useEffect } from 'react'


function SliderImage(props) {
    const [leftValue, setLeftValue] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0)
    const { children } = props
    useEffect(() => {
        const handleSliderWidth = () =>{
            const width = document.getElementById('sliderWrapper').offsetWidth
            setSliderWidth(width)
        }
        window.addEventListener('resize', handleSliderWidth)
        handleSliderWidth()
    })

    const handleNext = () => {
        if (leftValue === -sliderWidth * (children.length - 1)) {
            setLeftValue(0)
        }
        else {
            setLeftValue(leftValue - sliderWidth)
        }
    }

    const handlePrevious = () => {
        if (leftValue === 0) {
            setLeftValue(-sliderWidth * (children.length - 1))
        }
        else {
            setLeftValue(leftValue + sliderWidth)
        }
    }

    return (
        <div className="slider-image">
            <div id="sliderWrapper" className="slider-image_wrapper" style={{ left: leftValue }}>
                {children}
            </div>
            <div className="slider-image_actions">
                <button onClick={handlePrevious} className="slider-image_button-prev">
                    <img src={previousIcon} alt="previous" />
                </button>
                <button onClick={handleNext} className="slider-image_button-next">
                    <img src={nextIcon} alt="next" />
                </button>
            </div>
        </div>
    )
}

export default SliderImage