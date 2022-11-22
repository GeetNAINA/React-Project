import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Annoucement() {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(
        'https://bat-recup-staging-backend.cleverapps.io/api/details-fiche/' +
          id
      )
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        err.message = 'No data found'
        setError(err.message);
        return;
      });
  }, [id]);
  // https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
  // Understanding React’s useEffect cleanup function

  return (
    <div>
      {error && 
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          {error}
            </div>
            </div>
            </div>
            }

  {posts && <div className='content'>
  <div className="container">
    <div className="row">
      <div className="col-md-3 mt-5">
        
        <div className="card shadow">
          <div className="card-title mt-2">
            <h3 className="main-heading text-center"> Link Details</h3>
            <div className="underline mx-auto"></div>
            <ul className="align-item-center">
              <li>
                <a
                  href={posts?.social_link_fb}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook{' '}
                  {/*Here you can add a question mark as follows In fact if ever the back end dev does not return this field from its JSON the front will interpret it as UNDEFINED, suddenly you will have the white screen. The integration point will avoid this*/}
                </a>
              </li>
              <li>
                <a
                  href={posts.social_link_insta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href={posts.web_site_url} rel="noopener noreferrer">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card shadow mt-2">
          <div className="card-title mt-2">
            <h3 className="main-heading text-center"> User Details</h3>
            <div className="underline mx-auto"></div>
            <div className="text-center">
              <p>Siret: {posts.user?.siret}</p>
              <p className="orange">{posts.user?.email}</p>
            </div>
          </div>
        </div>

        <div className="card shadow mt-2">
          <div className="card-title mt-2">
            <h3 className="main-heading text-center">subscription</h3>
            <div className="underline mx-auto"></div>
            <div className="text-center">
              <p>{posts.subscription?.subscription_name}</p>
              <p>{posts.subscription_limite}</p>
            </div>
          </div>
        </div>

        <div className="card shadow mt-2">
          <div className="card-title mt-2">
            <h3 className="main-heading text-center">Thematique</h3>
            <div className="underline mx-auto"></div>
            <div className="text-center">
              <p>{posts.thematique?.name}</p>
            </div>
          </div>
        </div>

        <div className="card shadow mt-4">
          <div className="card-title mt-3">
            <h3 className="main-heading text-center">Activities</h3>
            <div className="underline mx-auto"></div>
            <div className="text-center">
              {posts.activities?.map((activity, index) => {
                return (
                  <div key={index}>
                    <ul className="error p-2">
                      <li>{activity.name}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 mt-4 ">
        <div className="card text-center shadow m-4">
          <img src={posts.logo?.url} alt="logo"></img>
          <h3 className="main-heading" key={posts.id}>
            Title: {posts.title}
          </h3>
          <div className="underline mx-auto"></div>
          <p>{posts.presentation}</p>
          <p>Status: {posts.status_subscription}</p>
          <div className="d-flex justify-content-around">
            <h6>Start Date: {posts.start_date_subscription} </h6>
            <h6> End Date: {posts.end_date_subscription}</h6>
          </div>

          <h6>Phone Numbers {posts.phone_number}</h6>
        </div>

        <div className="card shadow mt-2">
          <div className="card-title mt-2">
            <h3 className="main-heading text-center">Address</h3>
            <div className="underline mx-auto"></div>
            <div>
              <div className="card-body m-6">
                <h6 className="main-heading">
                  Line 1:
                  <p className="mt-4">{posts.adress?.line1}</p>
                </h6>
                <h6 className="main-heading">
                  Line 2:
                  <p className="mt-4">{posts.adress?.line2}</p>
                </h6>
                <h6 className="main-heading">
                  City:
                  <p className="mt-4">{posts.adress?.city}</p>
                </h6>{' '}
                <h6 className="main-heading">
                  Postal Code:
                  <p className="mt-4">{posts.adress?.postalCode}</p>
                </h6>{' '}
                <h6 className="main-heading">
                  Country:
                  <p className="mt-4">{posts.adress?.country}</p>
                </h6>{' '}
                <h6 className="main-heading">
                  Country Code:
                  <p className="mt-4">{posts.adress?.countryCode}</p>
                </h6>{' '}
                <h6 className="main-heading">
                  Region:
                  <p>{posts.adress?.region}</p>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mt-2">
        <div className="card shadow mt-2">
          <h3 className="main-heading text-center">Photos</h3>
          {posts.photos?.map((photo, index) => {
            return (
              <div className="card shadow" key={index}>
                <img
                  src={photo.url}
                  alt="pic"
                  height={400}
                  key={photo.url}
                ></img>
              </div>
            );
          })}
        </div>
        <div className="card shadow mt-2">
          <h3 className="main-heading text-center">Location</h3>
          <p>Type: {posts.adress?.location?.type}</p>
          <p>Latitude: {posts.adress?.location?.lat}</p>
          <p>Ing: {posts.adress?.location?.lng}</p>
        </div>
      </div>
    </div>
  </div>
</div>} 
</div>
  );
}

export default Annoucement;
