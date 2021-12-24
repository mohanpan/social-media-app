import "./styles.css";
import { useEffect, useState, useContext } from "react";
import { allposts } from "../../allposts";

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

export const Homepage = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading ] = useState(true);
  //const [searchString, setSearchString] = useState('');


  const history = useHistory();

  //check if a current user is logged into the firebase
  useEffect(
    () => {
      getPosts();
      const auth = getAuth();
      //console.log(auth.currentUser);
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          history.push('/login');
        }
      })
    }, []
  );


  const getPosts = async() => {
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/itec-final-project/databases/(default)/documents/social%20media%20posts/');
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map( (item) => {
        return item.fields
      });

      console.log(formattedData);
      setPosts(formattedData);
      setLoading(false);

    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }


  return (
    <div className="home-page">
      <h1 className="page-title"> Posts </h1>
      <div className="posts-container">
        {
          posts.map( (post) => (
            <allposts user={post.user.stringValue} image={post.image.stringValue} text={post.text.stringValue}></allposts>
          )) 
        }

        {
          !loading && <p>Loading data..</p>
        }

        {
          loading && <p>Loading data..</p>
        }
      </div>
    </div>
  );
};
