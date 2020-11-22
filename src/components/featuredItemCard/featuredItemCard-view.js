import React from 'react';
import { Link } from 'react-router-dom';
import { FeaturedItemWrapper } from './styles';

function FeaturedItemCardView({heading, image, title, linkText, link="#"}) {
    return (
        <FeaturedItemWrapper>
            <h4>{heading}</h4>
            <img src={image} alt={`${heading}`} />
            <div>
                <p>{title}</p>
                <Link to={link}>{linkText}</Link>
            </div>
        </FeaturedItemWrapper>
    )
}

export default FeaturedItemCardView;