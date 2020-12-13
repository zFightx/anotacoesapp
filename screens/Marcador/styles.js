import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ECEDF1;
`;

export const Scroller = styled.ScrollView`
    
`;

export const FormBox = styled.View`
    flex: 1;    
    align-items: center;

    /* margin-top:20px; */
`;
export const TitleBox = styled.View`
    width: 293px;
    height: 40px;
    background-color: #D3D3D3;

    border-radius: 15px;
`;
export const TitleInput = styled.TextInput`
    flex: 1;

    padding-left: 20px;
    padding-right: 20px;
`;
export const TextoBox = styled.View`
    flex: 1;
`;
export const TextoArea = styled.TextInput`
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    flex-wrap: wrap;
    color: #777;
`;
export const BottomBox = styled.View`
    align-items: center;
    flex-direction: column-reverse;

    position: absolute;
    right: 5%;
    bottom: 5%;
`;
export const BottomCancel = styled.TouchableOpacity`
    width: 250px;
    height: 44px;
    border-radius: 10px;
    background-color: #D3D3D3;

    align-items: center;
    justify-content:center;

    margin-bottom: 10px;
`;
export const BottomCancelText = styled.Text`
    font-size: 20px;
    color: #848484;
    font-weight: bold;
`;


export const BottomDelete = styled.TouchableOpacity`
    border-radius: 10px;
    align-items: center;
    justify-content:center;
    margin-bottom: 20px;
`;
export const BottomDeleteText = styled.Text`
    font-size: 20px;
    color: #FF0000;
    font-weight: bold;
`;


export const BottomFinalizar = styled.TouchableOpacity`
    border-radius: 10px;
    align-items: center;
    justify-content:center;

    margin-bottom: 20px;    
`;
export const BottomFinalizarText = styled.Text`
    font-size: 20px;
    color: white;
    font-weight: bold;
`;

export const ConteudoBox = styled.View`
    flex: 2;

    width: 90%;
    align-self: center;

    margin-top: -50px;

    background-color: #F7F7F7;
    elevation: 10;

    border-radius: 10px;
`;