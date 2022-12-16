import React from 'react'
import {Body} from './styles.js'
import Apontador from '../../assets/Apontador.jpg'
import Borracha from '../../assets/Borracha.jpg'
import Caneta_azul from '../../assets/Caneta_azul.jpg'
import Caneta_vermelha from '../../assets/Caneta_vermelha.webp'
import Ecolapis_de_cor from '../../assets/Ecolapis_de_cor.webp'
import Ecolapis_grafite from '../../assets/Ecolapis_grafite.webp'
import Lapiseira from '../../assets/Lapiseira.webp'
import Caderno_1m from '../../assets/Caderno_1m.webp'
import Caderno_10m from '../../assets/Caderno_10m.jpeg'
import Caderno_anotacoes from '../../assets/Caderno_anotacoes.webp'
import Caderno_u_1m from '../../assets/Caderno_u_1m.jpg'
import Caderno_u_10m from '../../assets/Caderno_u_10m.webp'
import Agenda from '../../assets/Agenda.jpg'
import Mochila_anime from '../../assets/Mochila_anime.png'
import Mochila_de_rodinha_b from '../../assets/Mochila_de_rodinha_b.png'
import Mochila_de_rodinha_p from '../../assets/Mochila_de_rodinha_p.jpg'
import Mochila_de_rodinha_r from '../../assets/Mochila_de_rodinha_r.png'
import Mochila_lateral from '../../assets/Mochila_lateral.jpg'
import Mochila_preta from '../../assets/Mochila_preta.jpg'
import Mochila_rosa from '../../assets/Mochila_rosa.jpg'


const Main = () => {
    return (
        <Body>              
            <section id='materiais' class='materiais'>
                <p><u>Buscar por</u>: materiais</p>
                <img src={Apontador} class='img1' alt='Apontador Tilibra'/>
                <img src={Borracha} class='img2' alt='Borracha Tilibra'/>
                <img src={Caneta_azul} class='img3' alt='Caneta azul Bic'/>
                <img src={Caneta_vermelha} class='img4' alt='Caneta vermelha Bic'/>
                <img src={Ecolapis_de_cor} class='img5' alt='Ecolapis de cor Faber Castell'/>
                <img src={Ecolapis_grafite} class='img6' alt='Ecolapis grafite Faber Castell'/>
                <img src={Lapiseira} class='img7' alt='Lapiseira Faber Castell'/>
            </section>
            <section id='cadernos' class='cadernos'>
                <p><u>Buscar por</u>: cadernos</p>
                <img src={Caderno_1m} class='img1' alt='Caderno 1 matéria Bic'/>
                <img src={Caderno_10m} class='img2' alt='Caderno 10 matérias Tilibra'/>
                <img src={Caderno_anotacoes} class='img3' alt='Caderno de anotações Tilibra'/>
                <img src={Caderno_u_1m} class='img4' alt='Caderno universitário 1 matéria Tilibra'/>
                <img src={Caderno_u_10m} class='img5' alt='Caderno universitário 10 matérias Bic'/>
                <img src={Agenda} class='img6' alt='Agenda Bic'/>
            </section> 
            <section id='mochilas' class='mochilas'>
                <p><u>Buscar por</u>: mochilas</p>
                <img src={Mochila_anime} class='img1' alt='Mochila anime Faber Castell'/>
                <img src={Mochila_de_rodinha_b} class='img2' alt='Mochila de rodinha branca Bic'/>
                <img src={Mochila_de_rodinha_p} class='img3' alt='Mochila de rodinha preta Tilibra'/>
                <img src={Mochila_de_rodinha_r} class='img4' alt='Mochila de rodinha rosa Bic'/>
                <img src={Mochila_lateral} class='img5' alt='Mochila lateral Faber Castell'/>
                <img src={Mochila_preta} class='img6' alt='Mochila preta Tilibra'/>
                <img src={Mochila_rosa} class='img7' alt='Mochila rosa Tilibra'/>
            </section>      
        </Body>
    )
}

export default Main