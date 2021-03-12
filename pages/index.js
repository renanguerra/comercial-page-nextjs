import React,{useEffect} from  'react'
import Head from "next/head";
import GlobalStyles from '../globalStyles'
import styled from 'styled-components'

import Card from '../components/cards/index'

const Main = styled.div`


    [data-anime]{
        opacity:0;
        transition: 0.3s;
    }

    [data-anime="left"]{
        transform: translate3d(-50px,0,0)
    }

    [data-anime="right"]{
        transform: translate3d(50px,0,0)
    }

    [data-anime].animate{
        opacity:1;
        transform: translate3d(0px,0px,0px)
    }
`
const HeaderInformations = styled.div`
    width:100%;
    min-height:40px;
    background-color:#2F2C2C;  
    color:white;
    font-size: 14px;
    font-family:'Montserrat',sans-serif;
    display:flex;
    justify-content:space-between;
    align-items:center;

    div:first-child{
        margin-left:20px;
    }

    div{
        margin-right: 20px;
    }

    @media(max-width: 680px){
        flex-direction:column;

        div{
            margin-right: 0px;
            margin-bottom: 3px;
        }

    }

    @media(max-width: 390px){
        display:none;
    }
`
const HeaderMenu = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    font-family:'Montserrat',sans-serif;
    width:100%;
    height: 80px;
    background-color: #660000;
    color:white;

    div:first-child{
        width:60px;
        margin-left:40px;
    }

    nav{
        width:100%;
    }

    nav ul{
        list-style:none;
        display:flex;
        margin-right:40px;
    }

    nav ul li{
        margin: 5px 10px 5px 10px;
        cursor: pointer;
        transition: .3s;
        border-bottom: 3px solid #660000;
        
        :hover{
            border-bottom: 3px solid white;
        }

        a{
            text-decoration:none;
            color:white;
        }
    }

    @media(max-width:680px){
        div:nth-child(2){
            display:none;
        }
    }
    
`
const Slider = styled.div`
    width:100%;
    height:550px;

    background-image: url('https://static8.depositphotos.com/1005021/998/i/950/depositphotos_9989737-stock-photo-hand-presses-the-trigger-fire.jpg"');
    background-size: cover;
`
const Overlay = styled.div`
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    div:nth-child(2){
        height:1px;
        width:400px;
        margin-top: 40px;
        background-color:white;
        margin-bottom:-40px;
    }
    
    position:absolute;
    width:100%;
    height:550px;
    background-color:rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    font-size:30px;
    color:white;

    h3{
        width:80%;
        text-align:center;
    }

`
const Services = styled.section`
    width:100%;
    background-color: #F3F0F0;
    padding-top:30px;
    padding-bottom: 30px;
    display:flex;
    flex-direction:column;
    align-items:space-around;


    div:nth-child(3){
        align-self:center;
        justify-content:center;
    }

`
const ServiceCards = styled.div`
    display:flex;

    div{
        margin: 0 auto;
        margin-top: 70px;
        margin-bottom: -20px;
    }

    div:nth-child(2){
        margin-top: -20px
    }

    @media(max-width:980px){
        display:block;

        div{
            margin-top: 30px;
        }

        
    }
`
const About = styled.section`
    width:100%;
    min-height:550px;
    padding-top:30px;
    padding-bottom: 30px;

    div:nth-child(2){
        display:flex;
        font-family:sans-serif;
        justify-content:center;

        span{
            margin-top: 80px;
            margin-left: 50px;
            max-width:500px;
        }
    }

    @media(max-width: 940px){
        div:nth-child(2){
            display:flex;
            text-align:center;
            flex-direction:column;
            align-items:center;

            span{
                margin-top: 30px;
                width:80%;
                margin-left: 0px;
            }
        }
    }

`
const Image = styled.div`
    width: 300px;
    height: 400px;
    margin-top:50px;
    background: url("http://extintoresdequeretaro.com/images/prevencion-y-control-de-incendios.jpg");
    background-position: center;
    background-size: 710px;
    border-radius: 0px 50px;
`
const Contact = styled.section`
    width:100%;
    height:550px;
    background-color: #F3F0F0;
    padding-top:30px;
    padding-bottom: 30px;


    div:nth-child(2){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        
        div:first-child{
            margin-top: 40px;
            margin-bottom: 40px;
        }
    }
`
const Footer = styled.footer`
    min-width:100%;
    min-height:350px;
    font-size: 16px;
    background-color: #2F2C2C;
    padding-top:30px;
    color:white;
    display:flex;
    justify-content:space-around;
    padding-bottom: 30px;

    span{
        display:block;    
        margin-bottom:5px;
    }

    h4{
        margin-bottom: 10px;
    }

    div:first-child{
        ul{
            margin-top:10px;

            li{
                margin-top:5px;
            }
        }
    }

    @media(max-width: 760px){
       div:nth-child(1){
           display:none;
       }

       div:nth-child(2){
           display:none;
       }
    }
`
const Button = styled.button`
    width: 190px;
    height: 60px;
    font-weight:bold;
    color:white;
    background: #8C001A;
    border-radius: 5px;
    border:none;
    outline:none;
    margin-top: 100px;
    cursor:pointer;
    font-size:16px;
    transition: .5s;

    :hover{
        background: #8C001A;
    }
`
const Title = styled.h1`
    font-family:sans-serif;
    margin-left:30px;
    color: #8C001A;

    @media(max-width:500px){
        font-size: 30px;
    }
`
const MenuIcon = styled.div`
    display:block;

    div{
        width: 30px !important;
        border: 2px solid white;
        margin-top: 5px;
        margin-right:40px;
        transition: 0.5s;
    }

    div:first-child{
        margin-left:0px;
    }

    div:nth-child(2){
        display:none;
    }


    :hover{
        div:nth-child(1){
            transform: rotate(45deg) translate(0px,7px);
        }

        div:nth-child(3){
            transform: rotate(-45deg) translate(0px,-6px);
        }

        div:nth-child(4){
            display:none;
        }
               
    }
    @media(min-width:680px){
        display:none;
    }
`
const Input = styled.input`
    width:300px;
    height:40px;
    border-radius: 5px;
    border:none;
    margin-bottom:10px;
    display:block;
    padding: 5px;


`
const Textarea = styled.textarea`
    width:300px;
    height:100px;
    border-radius: 5px;
    padding: 5px;
    border-radius: 2px;
    border:none;
    margin-bottom:-40px;
    display:block;
    font-family:'Roboto',sans-serif;

`
const FooterBar = styled.div`
    width:100%;
    border-top: 1px solid white;
    min-width:100%;
    height:30px;
    font-size: 14px;
    background-color: #2F2C2C;
    color:white;
    display:flex;
    justify-content:space-around;
    align-items:center;


`

export default function home(){

    const handleScroll = () => {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
        const animatedClass = 'animate'

        const target = document.querySelectorAll('[data-anime]')
        
        target.forEach((element)=>{
            if(windowTop > element.offsetTop){
                element.classList.add(animatedClass)
            }
        })


    }

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
    });

    return(
        <Main>
            <Head>
                <title>Pagina Comercial</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>


            <GlobalStyles/>

            <HeaderInformations>
                <div>
                    <span>(85) 98888-8888</span>
                    <span>(85) 98888-8888</span>
                </div>

                <div>
                    <span>Av. Santos Dummont, N° XXXX – Aldeota – Fortaleza - CE</span>
                </div>
            </HeaderInformations>

            <HeaderMenu>
                <div>
                    <img src='https://www.flaticon.com/svg/vstatic/svg/262/262113.svg?token=exp=1615457827~hmac=98f7b136a406da3b95dc74be59d28dff'/>
                </div>
                    
                <div>
                    <nav>
                        <ul>
                            <li><a href='#inicio'>Inicio</a></li>
                            <li><a href='#serviços'>Serviços</a></li>
                            <li><a href='#about'>Quem somos nós</a></li>
                            <li><a href='#contact'>Contato</a></li>
                        </ul>
                    </nav>
                </div>

                <MenuIcon>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </MenuIcon>
            </HeaderMenu>

            <Slider id='inicio'>
                <Overlay>
                    <div>
                        <h3>Projetos contra incêndio e pânico - PSIP</h3>

                        <Button>Solicitar Orçamento</Button>
                    </div>
                </Overlay>

                <img src="" alt=""/>
            </Slider>

            <Services id='serviços' data-anime='left'>
                <div>
                    <Title>Serviços</Title>
                </div>

                <ServiceCards>
                    <div>
                        <Card></Card>
                    </div>

                    <div>
                        <Card></Card>
                    </div>

                    <div>
                        <Card></Card>
                    </div>
                </ServiceCards>
                
                <div>
                    <Button onClick={e => {window.open('https://api.whatsapp.com/send?phone=558530020203&text=MensagemBase')}}>Solicitar Orçamento</Button>
                </div>
                
                
            </Services>

            <About id='about' data-anime='right'>
                <div>
                    <Title>Quem somos nós?</Title>
                    <div></div>
                </div>

                <div>
                    <Image/>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
            </About>

            <Contact id='contact' data-anime='left'>
                <div>
                    <Title>Contato</Title>
                </div>

                <div>
                    <div>
                        <h2>Entre em contato conosco</h2>
                    </div>
                   
                    <Input type='text' placeholder='Nome completo ou Empresa'/>
                    <Input type='text' placeholder='Telefone para contato'/>
                    <Input type='email' placeholder='Email'/>
                    <Textarea type='textarea' cols="40" rows="5" placeholder='Digite sua mensagem aqui'/>

                    <Button>Enviar</Button>
                </div>

            </Contact>

            <Footer>
                <div>
                    <h4>Institucional</h4>
                    <ul>
                        <li>Missão</li>
                        <li>Produtos</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Trabalhe conosco</li>
                    </ul>
                </div>

                <div>
                    <h4>Dados Comerciais</h4>
                    <span>Telefone: (85) 98858-8858</span>
                    <span>Email: contato@cliente.com</span>
                </div>

                <div>
                    <h4>Como Chegar?</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127397.76440924894!2d-38.610584109594086!3d-3.7709488905304034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74bac39439fd9%3A0xb7cda2d5727821d!2sFortaleza%20Extintores!5e0!3m2!1spt-BR!2sbr!4v1615541538785!5m2!1spt-BR!2sbr" width="300" height="200" loading="lazy"></iframe>
                </div>
            </Footer>

            <FooterBar>
                <span>Extintores - Todos os direitos reservados</span>
                <span>Orgulhosamente desenvolvido por Agência IMPULSE.</span>
            </FooterBar>
        </Main>
        
    )
}