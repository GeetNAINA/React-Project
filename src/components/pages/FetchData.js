import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://bat-recup-staging-backend.cleverapps.io/api/current-annoucement' // create an .env file to store the api url
      )
      .then((res) => {
        console.log(res.data.results);
        setPosts(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li>
            <div>
              <h1>
                {post.id} {post.title}{' '}
              </h1>
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

            <div>
              <p>{post.logo.id}</p>
              <img src={post.logo.url} alt="logo"></img>
            </div>

            {post.photos.map((photo, index) => {
              return (
                <div key={index}>
                  <p>{photo.id}</p>
                  <img src={photo.url} alt="photo" width={500}></img>{' '}
                  {/*Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop*/}
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
