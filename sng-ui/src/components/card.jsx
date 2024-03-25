import React, { Fragment } from 'react'
const Card = ({ serviceTitle, serviceImg }) => {
    return (
        <Fragment>
            <div className="custom-card" >
                <div className="custom-card-body">
                    <span className="service-title">{serviceTitle}</span>
                    <div className="service-img">
                        <img src={serviceImg} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;
