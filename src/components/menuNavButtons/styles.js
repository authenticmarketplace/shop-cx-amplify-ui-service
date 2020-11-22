import styled from 'styled-components';

export const Wrapper = styled.div`
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
            outline: none;
            :hover {
                background-color: grey;
            }
        }
        > :first-child {
            margin-right: 10px;
        }
    }
`;