/* NPM Modules */
import React  from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from './styles';

const MenuNavButtons = () => {
    const backArrow = <FontAwesomeIcon icon={faAngleLeft} size="lg" />
    const forwardArrow = <FontAwesomeIcon icon={faAngleRight} size="lg" />
    const history = useHistory()

    return (
        <>
        <Wrapper>
            <div>
                <button onClick={() => history.goBack()}>{backArrow}</button>
                <button onClick={() => history.goForward()}>{forwardArrow}</button>
            </div>
        </Wrapper>
        </>
    )
}
export default MenuNavButtons;