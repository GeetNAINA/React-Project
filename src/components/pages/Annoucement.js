import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Annoucement() {
    const params = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get(
                'https://bat-recup-staging-backend.cleverapps.io/api/details-fiche/' + params.id
            )
            .then((res) => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h3 className="main-heading">Title: {posts.title}</h3>
                        <div className="underline mx-auto"></div>
                        <p>{posts.presentation}</p>
                        <p>{posts.status_subscription}</p>
                        <h6>Start Date Subscription: {posts.start_date_subscription} </h6>
                        <h6> End Date Subscription: {posts.end_date_subscription}</h6>
                        <a>Facebook: {posts.social_link_fb}</a>
                        <a>Instagram: {posts.social_link_insta}</a>
                        <a>Website link{posts.web_site_url}</a>

                        <h6>Phone Numbers {posts.phone_number}</h6>


                        <h2>User Details</h2>
                        <p>siret: {posts.user.siret}</p>
                        <a>Email: {posts.user.email}</a>


                        <h3>Logo</h3>
                        <img src={posts.logo.url}></img>

                        <h3>Photos</h3>

                        {posts.photos.map((photo, index) => {
                            return (
                                <div key={index}>
                                    <img src={photo.url} alt="pic" width={500} key={photo.url}></img>
                                </div>
                            );
                        })}

                        <div>
                            <h2>{posts.subscription.subscription_name}</h2>
                        </div>

                        <div>
                            <p>{posts.subscription_limite}</p>
                        </div>

                        <div>
                            {posts.activities.map((activity, index) => {
                                return (
                                    <div key={index}>
                                        <p>{activity.name}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div>
                            <p>{posts.thematique.name}</p>
                        </div>

                        <div>
                            <p>{posts.adress.line1}</p>
                            <p>{posts.adress.line2}</p>
                            <p>{posts.adress.city}</p>

                          
                        </div>









                    </div>

                </div>

            </div>

        </div>
    );
}

export default Annoucement;