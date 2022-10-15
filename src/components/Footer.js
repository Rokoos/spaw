import React from 'react'

const Footer = () => {
  
  return (
    <footer  className="container text-center text-warning p-4 ">
      <div className="row">
        <div className="col">
          <p>Copyright &copy; <span>{new Date().getFullYear() }{' '}</span>Manufaktura spawania</p>
        </div>
      </div>
  </footer>
  )
}

export default Footer
