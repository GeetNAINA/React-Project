import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);
  // useEffect allows to perform effects: this allows our component to perform actions after display, 
  //by choosing when this action should be performed.
  // The useEffect hook is called after each rendering of your component.
  // They allow us to perform an action at a given moment in the life cycle of our components.
  useEffect(() => {
    // So here, as soon as the user arrives on your fetchData page, 
    //you will call the dynamic data from the api and once the api does not return 
    //any errors you update the states to store the JSON return WHICH YOU ARE GOING TO DISPLAY 
    //after calling the api all of this happens before the page is properly rendered
    axios
      .get(
        'https://bat-recup-staging-backend.cleverapps.io/api/current-annoucement' // create an .env file to store the api url
      )
      .then((res) => {
        console.log(res.data.results);
        setPosts(res.data.results); // update array empty
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <div>
                            <h1>{post.id} {post.title} </h1>
                            <p>{post.presentation}</p>
                            <p>{post.status_subscription} </p>

              <p>
                {post.start_date_subscription}{' '}
                <span>{post.end_date_subscription} </span>
              </p>
              <p>{post.social_link_fb}</p>
              <p> {post.social_link_insta} </p>
              <p>{post.web_site_url}</p>
            </div>


  {/*If you know the data type array , here we make a loop */}
            {/*There are several ways to do the loop, that is to say browse the elements of the object array but Javascript there is already a powerful native function that will allow you to do this easily and that is the .MAP*/}
            {/*you can use foreach or use the for classic loop
              ex: for(i=0; i<data.length ; i++) {
            }
           */}

            {/*So thanks to the loop, you will write less code to create tags. You need to add a KEY for each dynamically created tag, this will remove the error you have in your console*/}

                        <div>
                            <p>{post.logo.id}</p>
                            <img src={post.logo.url} alt="logo" key={post.logo.url}></img>
                        </div>

                  {post.photos.map((photo, index) => {
                    return(
                        <div key={index}>
                        <p>{photo.id}</p>
                        <img src={photo.url} alt="pic" width={500} key={photo.url}></img>
                      
                    </div>
                    );
                  })}

                        
                        <div>
                            <p>{post.subscription.id}</p>
                            <h2>{post.subscription.subscription_name}</h2>
                        </div>

            <div>
              <p>{post.subscription_limite}</p>
            </div>

            <div>
              {post.activities.map((activity, index) => {
                return (
                  <div key={index}>
                    <p>{activity.id}</p>
                    <p>{activity.name}</p>
                  </div>
                );
              })}
            </div>

            <div>
              <p>{post.thematique.id}</p>
              <p>{post.thematique.name}</p>
            </div>

            <div>
              <p>{post.adress.id}</p>
              <p>{post.adress.line1}</p>
              <p>{post.adress.line2}</p>
              <p>{post.adress.city}</p>
              <p>{post.adress.postalCode}</p>
              <p>{post.adress.countryCode}</p>
              <p>{post.adress.countryCode}</p>
            </div>

            <div>
              <p>{post.adress.location.id}</p>
              <p>{post.adress.location.type}</p>
              <p>{post.adress.location.lat}</p>
              <p>{post.adress.location.lng}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
