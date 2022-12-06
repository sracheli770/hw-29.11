import React from 'react'

type SponserProps = {
    src: string;
    title: string;
    link: string;
    id: string;
    description: string;
}

const Sponser = ({ title, link, src, description, id }: SponserProps) => {
    return (
        <div className="card col m-3" style={{ width: "18rem" }}>
            <img src={src} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <a href={link}
                className="myBTN btn btn-secondary shadow-none w-50 mb-3 d-flex justify-content-center align-items-center m-auto"
                target="_">Read More</a>
        </div>
    )
}

export default Sponser