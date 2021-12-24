import './styles.css';
import { useContext } from 'react';

export const allposts = (props) => {
    
    const {user, text, image, profileIcon} = props;

    //const globalState = useContext(PetsOrderContext);

    return(
        <div className="post">
            <p className="post-user"> @{user.substring(0, user.indexOf("@"))}</p>
            
            <p className="post-text"> {text} </p>
            
            {image == ''? null: <img className="post-image" src={ image } alt={ user + "post" + "image" } />}
        </div>
    )
}