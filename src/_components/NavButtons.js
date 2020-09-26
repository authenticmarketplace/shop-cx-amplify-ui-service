import React  from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: inline-block;
    float: left;
    margin-left: 50px;
    div {
        display: flex;
        button {
            background-color: #1e1e1e;
            color: white;
            border: 0px;
            cursor: pointer;
            transition: .2s;
            padding: 7px 12px;
            border-radius: 18px;
            :hover {
                background-color: grey;
            }
        }
        > :first-child {
            margin-right: 10px;
        }
    }
`;

const NavButtons = (props) => {
    const { history } = props;
    const backArrow = <FontAwesomeIcon icon={faAngleLeft} size="lg" />
    const forwardArrow = <FontAwesomeIcon icon={faAngleRight} size="lg" />

    return (
        <React.Fragment>
            <Wrapper>
                <div>
                    <button onClick={() => history.goBack()}>{backArrow}</button>
                    <button onClick={() => history.goForward()}>{forwardArrow}</button>
                </div>
            </Wrapper>
        </React.Fragment>
    )
}
export default NavButtons;