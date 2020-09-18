import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemDiv = styled.div`
    ${'' /* display: flex;
    flex-direction: column; */}
    display: inline-block;
    margin: 5px 16px; 
    img {
        width: 160px;
        border-radius: 12px;
    }
    p {
        display: inline-block;
    }
`;

const StretchDiv = styled.div`
    overflow-x: scroll;
    width: 500%;
    text-align: initial;
`;

const ItemRow = ({ title, items }) => {
    console.log(items)

    return (
        <React.Fragment>
            <h3 style={{textAlign: 'left', color: 'white', fontFamily: 'Poppins', fontWeight: '600'}}>{title}</h3>
            <StretchDiv styles={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
            {items.map((item, i) => {
                return (
                    <ItemDiv>
                        <img src={item.images[0]} style={{display: 'inline-block'}}/>
                        <div>
                            <p style={{paddingRight: '10px', color: 'white'}}>${item.price}</p>
                            <p style={{color: 'white'}}>{item.brand.displayName}</p>
                        </div>
                    </ItemDiv>
                )
            })}
            </StretchDiv>
         </React.Fragment>
    )
}

export default ItemRow;