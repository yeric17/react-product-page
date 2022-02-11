import './SliderImage.css'
import previousIcon from '../assets/images/icon-previous.svg'
import nextIcon from '../assets/images/icon-next.svg'

function SliderImage(props){
    const {children} = props
    return (
        <div className="slider-image">
            <div className="slider-image_wrapper">
                {children}
            </div>
            <div className="slider-image_actions">
                <button className="slider-image_button-prev"><img src={previousIcon} alt="previous" /></button>
                <button className="slider-image_button-next">
                    <img src={nextIcon} alt="next" />
                </button>
            </div>
        </div>
    )
}

export default SliderImage