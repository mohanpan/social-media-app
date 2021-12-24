import "./styles.css";

import { NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import{ useEffect, useState } from "react";

export const newPostPage = () => {

    const [user, setUser] = useState(null);

    useEffect(
        () => {
            const auth = getAuth();
            onAuthStateChanged( auth, (user) => {
                if(user){
                    setUser(user);
                }else {
                    setUser(null);
                } 
            })
        }, []
    )


    return(
        user &&  <NavLink exact={true} activeClassName="nav-selected" to="/newPost"> Add A Post </NavLink>
    )
}