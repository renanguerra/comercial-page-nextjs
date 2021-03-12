import React from 'react'
import styled from 'styled-components'


const Main = styled.div`
    width: 300px;
    min-height: 367px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 27px;


    @media(max-width:420px){
        width:250px;
        height:317px;
    }
`

const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    width:100%;
    height:60px;
    background: #8C001A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 27px 27px 0px 0px;

    font-family:sans-serif;
    color:white;
    margin-top:20px;

    span{
        font-size:18px;
    }

`

const Body = styled.div`
    height:100%;
    padding: 40px;
    text-align:left;
    color: #2F2C2C;
`

export default function Card(){
    return(
        <Main>
            <Header>
                <span>Venda e Carga de extintores</span>
            </Header>

            <Body>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span> 
            </Body>

        </Main>
    )
}