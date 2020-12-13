import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

import IconHome from '../assets/home.svg';
import IconMore from '../assets/plus.svg';
import IconNumber from '../assets/seven.svg';
import IconText from '../assets/text.svg';
import IconFavorite from '../assets/star.svg';

const TabArea = styled.View`
    height: 50px;
    background-color: #1B2B39;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    /* flex: 1;  */

    width: 54px;
    height: 54px;
    margin-top: -20px;

    justify-content: center;
    align-items: center;

    background-color: #FFF;
    border: 3px solid #1B2B39;
    border-radius: 32px;   

    overflow: hidden;
`;

const Imag = styled.Image`
    width: 26px; 
    height: 26px;
`;

const Scroll = styled.ScrollView`
    
`;

export default ({state, navigation}) => {

    const goTo = (page) => {
        navigation.navigate(page);
    }

    return(
        
        <TabArea
            
        >
            <TabItem onPress={() => goTo('Home')}>
                {/* <Imag source={require('../assets/dices.png')}></Imag> */}
                <IconHome style={{opacity: state.index === 0 ? 1 : 0.7}} width="20" height="20" fill="#FFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Favoritos')}>
                {/* <Imag source={require('../assets/dices.png')}></Imag> */}
                <IconFavorite style={{opacity: state.index === 1 ? 1 : 0.7}} width="20" height="20" fill="#FFF" />
            </TabItem>
            <TabItemCenter onPress={() => goTo('New')}>
                {/* <Imag source={require('../assets/dices.png')}></Imag> */}
                <IconMore width="90%"  fill="#000" />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Textos')}>
                {/* <Imag source={require('../assets/dices.png')}></Imag> */}
                <IconText style={{opacity: state.index === 2 ? 1 : 0.7}} width="20" height="20" fill="#FFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Numericos')}>
                {/* <Imag source={require('../assets/dices.png')}></Imag> */}
                <IconNumber style={{opacity: state.index === 3 ? 1 : 0.7}} width="20" height="20" fill="#FFF" />
            </TabItem>
        </TabArea>
    )
}