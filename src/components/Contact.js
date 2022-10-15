import React from 'react'

const Contact = () => {
  return (
    <div className="container bg-light text-muted py-5">
    <h3 className='text-center'>Kontakt</h3>
      <div className="contact">
        <div className="contact-box">
        <div className=" d-flex align-items-center py-3">
            <i className="fas fa-user fa-2x bg-transparent text-warning" ></i>
          
          <div className="p-4 align-self-end">
            
          Manufaktura Stali
          </div>
        </div>
    

          <div className=" d-flex align-items-center py-3">
            <i className="fas fa-map-marker-alt fa-2x bg-transparent text-warning" ></i>
        
            <div className="p-4 align-self-end">
              
            Ulica, nr itd.
            </div>
          </div>
        </div>
      
    

   <div className="contact-box">
        <div className="d-flex align-items-center justify-content-center  py-3">
          <i className=" bg-transparent fas fa-envelope fa-2x text-warning"></i>
        <div className="p-4 align-self-end">
          bleble@gmail.com
        </div>
        </div>

      <div className=" d-flex  align-items-center py-3 ">
        <i className=" bg-transparent fas fa-phone fa-2x text-warning"></i>
        <div className="p-4 ">
        +48 000 000 000
        </div>
      </div>
   </div>
   </div>
  
  </div>
  )
}

export default Contact
