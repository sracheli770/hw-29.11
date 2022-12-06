import React from 'react'
import Sponser from './Sponser'
import sponsers from '../../services/Sponsers'

const SponserList = () => {
    return (
        <div className="myCards my-5">
            <div className="card-deck row row-cols-1 row-cols-sm-3 row-cols-md-5 d-flex justify-content-center">
                {sponsers.map((s) => (
                    <Sponser
                        title={s.title}
                        link={s.link}
                        src={s.src}
                        description={s.description}
                        id={s.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default SponserList