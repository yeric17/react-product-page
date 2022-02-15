import './DisplayImage.css';

export const DisplayImage = ({ image }) => {
    return (
        <div className="display-image">
            <img className='display-image_item' src={image} alt="display-image" />
        </div>
    )
}