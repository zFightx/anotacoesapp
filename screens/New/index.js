import React, {useState} from 'react';
import {StatusBar, AsyncStorage} from 'react-native';
import { 
    Container,
    Scroller,
    FormBox,
    TitleBox,
    TitleInput,
    TextoBox,
    TextoArea,

    BottomBox,
    BottomFinalizar,
    BottomTipoBox,
    BottomTipoNumber,
    BottomTipoText
    
} from './styles';

import Header from '../../components/Header';
import API from '../../api';

import IconConfirm from '../../assets/check.svg';
import IconNumber from '../../assets/seven.svg';
import IconText from '../../assets/text.svg';

export default ({navigation}) => {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [tipo, setTipo] = useState(0);
    const [focused, setFocus] = useState(false);

    criarNovoMarcador = async () =>{
        // await API.post("marcador", {
        //     title: titulo,
        //     texto: texto,
        //     favorito: 0,
        //     tipo: tipo
        // })

        try {
            const jsonValue = await AsyncStorage.getItem('@anotacoes');
            const anotacoes = jsonValue != null ? JSON.parse(jsonValue) : [];
            const id = anotacoes.length > 0 ? ""+(anotacoes[anotacoes.length-1].id+1) : '1';
            anotacoes.push({id: id,title: titulo, texto: texto, tipo: tipo, favorito: 0});
            
            try {
                const jsonValue = JSON.stringify(anotacoes);
                await AsyncStorage.setItem('@anotacoes', jsonValue);
            } catch (error2) {
                alert("Erro na Gravação Async2 " + error2);
            }
        } catch (error) {
            alert("Erro na Gravação Async " + error);
        }
        
        // navigation.navigate('Home');
        navigation.reset({routes: [{name:'Home'}]})
    }
    return(
        <Container>
            <Scroller
                contentContainerStyle={{flexGrow:1}}
            >
                <StatusBar />
                <Header title="Nova Anotação"/>

                <FormBox>
                    <TitleBox>
                        <TitleInput 
                        placeholder="Título da Anotação" 
                        value={titulo}
                        onChangeText={(t)=>{setTitulo(t)}}
                        />
                    </TitleBox>

                    <TextoBox>
                        <TextoArea 
                        placeholder="Digite um texto que descreve essa anotação"
                        value={texto}
                        onChangeText={(t)=>{setTexto(t)}}
                        multiline={true}
                        textBreakStrategy={"highQuality"}
                        
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        />
                    </TextoBox>
                </FormBox>

                
            </Scroller>
            <BottomBox>

                <BottomFinalizar
                    onPress={criarNovoMarcador}
                >
                    <IconConfirm width="44px" height="44px" />
                </BottomFinalizar>
                
                { !focused &&
                <BottomTipoBox>
                    <BottomTipoText onPress={() => setTipo(0)} tipo={tipo}>
                        <IconText width="20" height="20" fill="#FFF" />
                    </BottomTipoText>

                    <BottomTipoNumber onPress={() => setTipo(1)} tipo={tipo}>
                        <IconNumber width="20" height="20" fill="#FFF" />
                    </BottomTipoNumber>
                </BottomTipoBox>
                }

            </BottomBox>
        </Container>
    )
}
