import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Annoucement from './Annoucement';
import axios from 'axios';

function Dynamic() {
  const params = useParams();
  console.log(params);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://bat-recup-staging-backend.cleverapps.io/api/current-annoucement'
      )
      .then((res) => {
        console.log(res.data.results);
        setPosts(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const arr = posts.map((post, index) => {
    return (
      <div className="col-md-6 text-center">
        <div className="card shadow">
          <img
            src={post.logo.url}
            className="w-100 border-bottom"
            alt="Services"
          />
          <div className="justify-content-center">
            <h6 className="card-title main-heading text-center">
              {post.title}
            </h6>
            <div className="underline mx-auto"></div>
            <div className="card-body">
              <Link
                to={`/annoucement/${post.id}`}
                className="btn btn-warning shadow"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Displaying current annoucement</h3>
              <div className="underline mx-auto"></div>
            </div>
            {arr}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dynamic;
