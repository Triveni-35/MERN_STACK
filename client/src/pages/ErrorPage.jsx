import React from 'react'
import { NavLink } from 'react-router-dom'
import './error.css';
const ErrorPage = () => {
  return (
    <>
    <section id="error-page">
<div className="error-ontent">

    <h2 className='error-header'>404</h2>
    <h4>Sorry, Page not Found !</h4>
    <p>
        Oops! It seems like the page you are looking for does not exists.
        If you think there is an issue, feel free to report it.
    </p>
    <div className="error-btns">
    <NavLink to = "/">Return to Home </NavLink>
    <NavLink to = "/contact">Report Problem </NavLink>
    </div>
</div>
    </section>
    </>
  )
}

export default ErrorPage
