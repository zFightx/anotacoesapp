import React from 'react';
import styled from 'styled-components/native';

const HeaderBox = styled.View`
    height: 124px;
    background-color: #1B2B39;

    /* justify-content: center; */
    align-content: center;
    align-items: center;
`;

const HeaderText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-top: 20px;

`

export default (props) => {
    return(
        <HeaderBox>
            <HeaderText>{props.title}</HeaderText>
        </HeaderBox>
    )
}