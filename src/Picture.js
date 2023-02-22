import photo from "./Assets/Photo1.png";
import "./CSS/Photo.css"

function Picture(){
    return(
        <div>
            <img className="photo" src={photo} alt="Vignesh Photo" />
        </div>
    )
}

export default Picture;