import React from 'react'

import laptop from '../img/laptop.png'

const About = () => {
  return (

    <div id="share-section" className=" container bg-light text-muted py-5">
    <div className="row">
      <div className="col-md-6">
        <img src={laptop} alt="" className="img-fluid mb-3 rounded-circle"/>
      </div>
      <div className="col-md-6">
        <h3 className='text-center mb-4 text-dark'>O Nas</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sapiente quidem doloribus explicabo corrupti eos illo eaque repellat odit earum.</p>
        <div className="d-flex">
          <div className="p-4 align-self-start">
            <i className="fas fa-check fa-2x"></i>
          </div>
          <div className="p-4 align-self-end">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa numquam corrupti esse alias natus pariatur?
          </div>
        </div>
        <div className="d-flex">
          <div className="p-4 align-self-start">
            <i className="fas fa-check fa-2x"></i>
          </div>
          <div className="p-4 align-self-end">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa numquam corrupti esse alias natus pariatur?
          </div>
        </div>
      </div>
    </div>
</div>


    
  )
}

export default About
