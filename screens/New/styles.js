import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ECEDF1;
`;

export const Scroller = styled.ScrollView`
    
`;

export const FormBox = styled.View`
    flex: 2;

    width: 90%;
    align-self: center;

    margin-top: -50px;

    background-color: #F7F7F7;
    elevation: 10;

    border-radius: 10px;
`;
export const TitleBox = styled.View`
    
    height: 50px;
    align-items: center;

    border-bottom-color: #444;
    border-style: dotted;
    border-bottom-width: 1px;
    border-bottom-start-radius: 100px;
    border-bottom-end-radius: 100px;
    
`;
export const TitleInput = styled.TextInput`
    flex: 1;

    padding-left: 20px;
    padding-right: 20px;

    font-size: 18px;
`;
export const TextoBox = styled.View`
    flex: 1;

    border-radius: 15px;
    margin-top: 20px;
`;
export const TextoArea = styled.TextInput`
    padding-left: 50px;
    padding-right: 50px;
    flex-wrap: wrap;
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

export const BottomTipoBox = styled.View`
    height: 80px;
    width: 100%;
    background-color: #B1B0B0;
    margin-bottom: 20px;

    border: 1px solid #888;
`;

export const BottomTipoNumber = styled.TouchableOpacity`
    flex: 1;

    justify-content: center;
    align-items: center;

    ${props => props.tipo == 1 && "background-color: #000"};
`;

export const BottomTipoText = styled.TouchableOpacity`
    flex: 1;

    justify-content: center;
    align-items: center;


    ${props => props.tipo == 0 && "background-color: #000"};

    border-bottom-width: 1px;
    border-bottom-color: #888;
    border-style: solid;
`;