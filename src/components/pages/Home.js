import React from 'react';
import Slider from '../block/Slider';
import {Link}  from 'react-router-dom';
import Vmc from './inc/Vmc';
import Service1 from "../images/card-1.png";
import Service3 from "../images/card-3.png";

function Home() {
  return (
<div>
    <Slider/>
    <section className="section">
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="main-heading">Our Company</h3>
                <div className="underline mx-auto"></div>
                <p>
                Lorem ipsum dolor sit amet. In voluptas magnam in repudiandae laboriosam sed incidunt ipsa nam ducimus rerum ut voluptates totam ex repellat accusantium non libero praesentium. Eum rerum facilis et fugit cumque a autem neque a enim eligendi et facilis distinctio cum amet unde cum quod rerum. Et consequuntur magnam est excepturi illum qui dolore obcaecati.
                </p>
                <Link to="/about" className="btn btn-warning shadow">Read More</Link>
            </div>

        </div>
        </div>
    </section>
    {/* Vision, Mission and Values */}
  <Vmc/>

  {/* Our Services */}
  <section className="section border-top">
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="main-heading">Our Services</h3>
            <div className="underline mx-auto"></div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
          <img src={Service3} className="w-100 border-bottom" alt="Services"/>
          <div className="card-body">
          <h6>Service 1</h6>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet. In voluptas magnam in repudiandae laboriosam sed incidunt ipsa nam ducimus rerum ut voluptates totam ex repellat accusantium non libero praesentium. 
          </p>
          <Link to="/services" className="btn btn-link"> Read More</Link>
            </div>
          </div>     
        </div>

        <div className="col-md-4">
          <div className="card shadow">
          <img src={Service1} className="w-100 border-bottom" alt="Services"/>
          <div className="card-body">
          <h6>Service 1</h6>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet. In voluptas magnam in repudiandae laboriosam sed incidunt ipsa nam ducimus rerum ut voluptates totam ex repellat accusantium non libero praesentium. 
          </p>
          <Link to="/services" className="btn btn-link"> Read More</Link>

            </div>
          </div>     
        </div>

        <div className="col-md-4">
          <div className="card shadow">
          <img src={Service3} className="w-100 border-bottom" alt="Services"/>
          <div className="card-body">
          <h6>Service 1</h6>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet. In voluptas magnam in repudiandae laboriosam sed incidunt ipsa nam ducimus rerum ut voluptates totam ex repellat accusantium non libero praesentium. 
          </p>
          <Link to="/services" className="btn btn-link"> Read More</Link>

            </div>
          </div>     
        </div>


    </div>
    </div>
</section>
    </div>
  );
}

export default Home