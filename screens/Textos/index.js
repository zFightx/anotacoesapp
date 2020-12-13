import React, { useState, useEffect } from 'react';
import {StatusBar, ActivityIndicator, RefreshControl, AsyncStorage} from 'react-native';
import { 
    Container,
    MarcadoresBox,
    TextNoMarcadores,
    ListBox,
    ListMarcadores,
    TextListBox,
    TextBox,
    TitleList,
    TextList,
    Scroller
} from './styles';

import Header from '../../components/Header';
import API from '../../api';

import IconTexto from '../../assets/text.svg';
import IconNumber from '../../assets/seven.svg';
import IconArrow from '../../assets/arrows.svg';

export default ({ navigation }) => {
    const [marcadores, setMarcadores] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getList();        
        return;
    }, [getList]);

    const onRefresh = () =>{
        getList();        
    }

    const renderList = ({item}) =>{
        return(
            <TextListBox
                onPress={ () => navigation.navigate('Marcador',{item: item}) }
                // navigation.reset({routes: [{name:'Home'}]});
            >
                {   item.tipo == 0 ?
                    <IconTexto width="20px" height="20px" fill="#878787" />
                    :
                    <IconNumber width="20px" height="20px" fill="#878787" />
                }
                <TextBox>
                    <TitleList>{item.title}</TitleList>
                    <TextList numberOfLines={1}>{item.texto}</TextList>
                </TextBox>
                <IconArrow width="12px" height="12px" fill="#AAA" />
            </TextListBox>
        )
    }

    const getList = async () => {
        setLoading(true);
        // try {
        //     const result = await API.get('marcador');
        //     const elements = result.data.filter((item) => item.tipo == 0);

        //     setMarcadores(elements);
            
        //     console.log(elements);
            
        // } catch (error) {
        //     console.log(error);
        // }

        try {
            const jsonValue = await AsyncStorage.getItem('@anotacoes');
            const anotacoes = jsonValue != null ? JSON.parse(jsonValue) : [];
            const elements = anotacoes.filter((item) => item.tipo == 0);

            setMarcadores(elements);
            
        } catch (error) {
            alert("Erro na leitura Async " + error);
        }

        setLoading(false);
    }

    return(
        <Container>
            <StatusBar />
           
            <Header title="Anotações de Textos"/>
            
            { marcadores.length === 0 ?
            <MarcadoresBox>
                {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
                <TextNoMarcadores>Sem Anotações</TextNoMarcadores>
            </MarcadoresBox>
            :
            <ListBox> 
                {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
                <ListMarcadores 
                    data={marcadores}
                    renderItem={renderList}
                    keyExtractor={(item) => item.id}
                />
                
            </ListBox>
            }

        </Container>
    )
}