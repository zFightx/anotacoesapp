import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #ECEDF1;
`;

export const MarcadoresBox = styled.View`
    flex: 2;

    justify-content: center;
    align-items: center;

    width: 90%;
    align-self: center;

    margin-top: -50px;

    background-color: #F7F7F7;
    elevation: 10;

    border-radius: 10px;
`;

export const TextNoMarcadores = styled.Text`
    color: #808080;
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
`;

export const BottomBox = styled.View`
    flex: 1;    
    
    align-items: center;
    justify-content: center;
`;

export const Bottom = styled.TouchableOpacity`
    background-color: #505050;
    width: 250px;
    height: 44px;

    align-items: center;
    justify-content: center;

    border-radius: 10px;
`

export const TextBottom = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
`;

export const ListBox = styled.View`
    flex: 2;

    width: 90%;
    align-self: center;

    margin-top: -50px;

    background-color: #F7F7F7;
    elevation: 10;

    border-radius: 10px;
`;

export const ListMarcadores = styled.FlatList`
    flex: 1;
    width: 100%;    
    overflow: hidden;
`;

export const TextListBox = styled.TouchableOpacity`
    width: 85%;
    height: 60px;

    margin-top: 20px;

    align-self: center;
    background-color: #F7F7F7;

    border: 1px solid #CCC;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    padding-right: 20px;
    padding-left: 20px;

    border-radius:10px;
`;

export const TextBox = styled.View`
    flex: 1;

    border-left-width: 1px;
    border-left-color: #AAA;

    margin-left: 10px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const TitleList = styled.Text`
    color: #777;
    font-size: 16px;
    font-weight: bold;
`;

export const TextList = styled.Text`
    color: #AAA;
    font-size: 11px;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;