import React from 'react'
import css from './Footer.module.scss'
import up from '../../images/up-arrow.png'

const Footer = () => {
    return (

        <div className="container-fluid p-0 pb-0">
            <footer className="text-center color-black text-lg-start rounded bg-success">
                <section className="text-center mb-2">
                    <hr />
                    <a href="https://api.whatsapp.com/send?phone=972556695488" role="button" target="_">
                        <i className="btn btn-outline-dark btn-circle btn-md m-1 bi bi-whatsapp"></i></a>
                    <a href="tel:+972556695488" role="button" target="_">
                        <i className="btn btn-outline-dark btn-circle btn-md m-1 bi bi-telephone"></i></a>
                    <a href="mailto:lracheli789@gmail.com" role="button" target="_">
                        <i className="btn btn-outline-dark btn-circle btn-md m-1 bi bi-envelope"></i></a>
                </section>
                <h5 className="text-center p-0">Developed and Designed By: </h5>
                <h5 className="text-center fw-bold pb-4">©Racheli Sasonkin 2022</h5>
                {/*   כפתור גלילה למעלה  */}
                <div className={`position-fixed ${css.myTop}`}>
                    <a href="#top">
                        <img className="" style={{ width: '10%' }} src={up} alt="Go To Top" />
                    </a>
                </div>
            </footer>


        </div>
    )
}

export default Footer