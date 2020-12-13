import React, {useState, useEffect} from 'react';
import {StatusBar, Alert, AsyncStorage} from 'react-native';
import { 
    Container,
    Scroller,
    FormBox,

    TextoBox,
    TextoArea,

    BottomBox,
    BottomCancel,
    BottomCancelText,
    BottomDelete,
    BottomDeleteText,
    BottomFinalizar,
    BottomFinalizarText,

    ConteudoBox
    
} from './styles';

import Header from '../../components/Header';
import API from '../../api';

import IconConfirm from '../../assets/check.svg';
import IconDelete from '../../assets/xbutton.svg';
import IconFavorite from '../../assets/star.svg';

export default ({route, navigation}) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        if (route.params?.item) {
            const {item: itemParam} = route.params;

            setItem(itemParam);
        }
    }, [route.params?.item]);

    const atualizarMarcador = async () =>{
        // await API.put("marcador", {
        //     id: item.id,
        //     title: item.title,
        //     texto: item.texto,
        //     favorito: item.favorito
        // })

        try {
            const jsonValue = await AsyncStorage.getItem('@anotacoes');
            const anotacoes = jsonValue != null ? JSON.parse(jsonValue) : [];
            
            const attAnotacoes = anotacoes.map((element) => {
                if(element.id == item.id){
                    return item;
                }else{
                    return element;
                }
            });

            try {
                const jsonValue = JSON.stringify(attAnotacoes);
                await AsyncStorage.setItem('@anotacoes', jsonValue);
            } catch (error2) {
                alert("Erro na Gravação Async2 " + error2);
            }
        } catch (error) {
            alert("Erro na Gravação Async " + error);
        }
        
        // navigation.navigate('Home');
        navigation.reset({routes: [{name:'Home'}]});
    }

    const deletarMarcador = async () => {
        // await API.delete(`marcador/${item.id}`, {
        // });

        try {
            const jsonValue = await AsyncStorage.getItem('@anotacoes');
            const anotacoes = jsonValue != null ? JSON.parse(jsonValue) : [];
            
            const attAnotacoes = anotacoes.filter((element) => element.id != item.id);

            try {
                const jsonValue = JSON.stringify(attAnotacoes);
                await AsyncStorage.setItem('@anotacoes', jsonValue);
            } catch (error2) {
                alert("Erro na Gravação Async2 " + error2);
            }
        } catch (error) {
            alert("Erro na Gravação Async " + error);
        }

        navigation.reset({routes: [{name:'Home'}]})
    }

    const AlertDelete = () =>{
        Alert.alert(
            "Deletar Marcador",
            `Você está prestes a deletar o marcador ${item.title}. Tem certeza disso?`,
            [
                {
                    text: "Cancelar"
                },
                {
                    text: "Deletar",
                    onPress: () => deletarMarcador()
                }
            ]
        )
    }

    return(
        <Container>
            <Scroller
                contentContainerStyle={{flexGrow:1}}
            >
                <StatusBar />
                <Header title={item.title}/>

                <ConteudoBox>
                    <FormBox>

                        <TextoBox>
                            <TextoArea 
                            placeholder="Digite um texto que descreve esse marcador"
                            value={item.texto}
                            onChangeText={(t)=>{setItem({...item, texto: t})}}
                            multiline={true}
                            textBreakStrategy={"highQuality"}
                            textAlignVertical={"top"}
                            
                            />
                        </TextoBox>
                        
                    </FormBox>

                    
                </ConteudoBox>
            </Scroller>
            <BottomBox>
                <BottomDelete
                    onPress={AlertDelete}
                >
                    <IconDelete width="34px" height="34px" />
                    
                </BottomDelete>
                <BottomFinalizar
                    onPress={atualizarMarcador}
                >
                    <IconConfirm width="34px" height="34px" />
                </BottomFinalizar>
                <BottomFinalizar
                    onPress={() => setItem({...item, favorito: item.favorito == 1 ? 0 : 1})}
                >
                    <IconFavorite width="34px" height="34px" fill={item.favorito == 1 ? "#FFCF0F" : "#888"} />
                </BottomFinalizar>
            </BottomBox>
        </Container>
    )
}
