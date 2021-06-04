import React from "react";
import SideBar from '../components/SideBar/index';
import { Flex, Text, Input, FormControl, FormLabel, FormHelperText, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import Layout from '../components/Layout';

const BotaoEspecial = ({nome = "nome vazio"}) => {
    return (
        <button onClick={() => console.log("clicou no botão")}> {nome} </button>
    )
}

export default function User() {
    return (
        <Layout>
            <SideBar />  
            <section>
                <form>
                    <Text fontSize="3xl" >Informaçoes Pessoais</Text>
                <FormControl>
                    <FormLabel>Primeiro Nome</FormLabel>
                    <Input />
                    <FormLabel>Ultimo Nome</FormLabel>
                    <Input />
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                    <FormHelperText>Nos nunca compartilharemos o seu email. ;)</FormHelperText>
                </FormControl>
                </form>
                    
                <form>
                    <Text fontSize="3xl" >Alterar Senha</Text>
                    <FormControl>
                        <FormLabel>Senha Atual</FormLabel>
                        <Input type="password" />
                        <FormLabel>Senha nova</FormLabel>
                        <Input type="password" />
                        <FormLabel>repetir senha nova</FormLabel>
                        <Input type="password" />
                        
                    </FormControl>
                </form>
                        
            </section>          
        </Layout>
    );
}

