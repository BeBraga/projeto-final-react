/*import {Content} from './styles.js'
import { useState } from 'react'
import Logo from '../../assets/Logo.png'
import Lupa from '../../assets/Lupa.png'
import Carrinho from '../../assets/Carrinho.png'
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
import Gmail from '../../assets/Gmail.png'
import Github from '../../assets/Github.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Twitter from '../../assets/Twitter.png'

const Homepage = () => {
    const [number, setNumber] = useState(0)
    return(
        <Content>
            <section class='navbar'>
                <a href='index.html' id='navbar_logo'><img src={Logo} alt='logo site'/></a>
                <a href='index.html' id='navbar_text'>Caneta<br></br><span style={{color: '#1C5D98',}}> azul</span>{' '}<br></br>materiais</a>
                <input type="text"/>
                <section class='search_space'>
                    <button><img src={Lupa} alt='lupa'/></button>
                    <h2>Materiais</h2>
                    <h3>Cadernos</h3>
                    <h4>Mochilas</h4>
                </section>
                <section id='profile_space' class='profile_space'>
                    <img src={Carrinho} alt='carrinho'/>
                    <p>Carrinho</p>
                    <h1>{number}</h1>
                </section>
                <h1>Entrar</h1>
                <h2>Criar conta</h2>
            </section>
            <section class='main'>
                <section class='materiais'>
                    <section class='slides'>
                        <h1><u>Buscar por</u>: materiais</h1>
                        <input type="radio" name="radio-btn" id="radio1"></input>
                        <input type="radio" name="radio-btn" id="radio2"></input>
                        <input type="radio" name="radio-btn" id="radio3"></input>
                        <input type="radio" name="radio-btn" id="radio4"></input>
                        <img onClick={() => setNumber(number + 1)} src={Apontador} class='slide first' alt='Apontador Tilibra'/>
                        <img onClick={() => setNumber(number + 1)} src={Borracha} class='image' alt='Borracha Tilibra'/>
                        <img onClick={() => setNumber(number + 1)} src={Caneta_azul} class='image' alt='Caneta azul Bic'/>
                        <img onClick={() => setNumber(number + 1)} src={Caneta_vermelha} class='image' alt='Caneta vermelha Bic'/>
                        <img onClick={() => setNumber(number + 1)} src={Ecolapis_de_cor} class='image' alt='Ecolapis de cor Fabber Castel'/>
                        <img onClick={() => setNumber(number + 1)} src={Ecolapis_grafite} class='image' alt='Lapiseira Faber Castell'/>
                        <img onClick={() => setNumber(number + 1)} src={Lapiseira} class='image' alt='Caneta vermelha Bic'/>
                    </section>
                    <div class='manual'>
                        <label for="radio1" class='botao'></label>
                        <label for="radio2" class='botao'></label>
                        <label for="radio3" class='botao'></label>
                        <label for="radio4" class='botao'></label>
                    </div>
                </section>
                <section class='cadernos'>
                    <section class='slides'>
                        <h2><u>Buscar por</u>: cadernos</h2>
                        <input type="radio" name="radio-btn" id="radio5"></input>
                        <input type="radio" name="radio-btn" id="radio6"></input>
                        <input type="radio" name="radio-btn" id="radio7"></input>
                        <img onClick={() => setNumber(number + 1)} src={Caderno_1m} class='slide first' alt='Caderno 1 matéria Bic'/>
                        <img onClick={() => setNumber(number + 1)} src={Caderno_10m} class='image' alt='Caderno 10 matérias Tilibra'/>
                        <img onClick={() => setNumber(number + 1)} src={Caderno_anotacoes} class='image' alt='Caderno de anotações Tilibra'/>
                        <img onClick={() => setNumber(number + 1)} src={Caderno_u_1m} class='image' alt='Caderno universitário 1 matéria Tilibra'/>
                        <img onClick={() => setNumber(number + 1)} src={Caderno_u_10m} class='image' alt='Caderno universitário 10 matérias Bic'/>
                        <img onClick={() => setNumber(number + 1)} src={Agenda} class='image' alt='Agenda Bic'/>
                    </section>
                    <div class='manual'>
                        <label for="radio5" class='botao'></label>
                        <label for="radio6" class='botao'></label>
                        <label for="radio7" class='botao'></label>
                    </div>
                </section>
                <section class='mochilas'>
                    <section class='slides'>
                        <h3><u>Buscar por</u>: mochilas</h3>
                        <input type="radio" name="radio-btn" id="radio8"></input>
                        <input type="radio" name="radio-btn" id="radio9"></input>
                        <input type="radio" name="radio-btn" id="radio10"></input>
                        <input type="radio" name="radio-btn" id="radio11"></input>
                        <img onClick={() => setNumber(number + 1)} src={Mochila_anime} class='slide first' alt='Mochila anime Faber Castell'/>
                        <img onClick={() => setNumber(number + 1)} src={Mochila_de_rodinha_b} class='image' alt='Mochila de rodinha branca Bic'/>
                        <img onClick={() => setNumber(number + 1)} src={Mochila_de_rodinha_p} class='image' alt='Mochila de rodinha preta Tilibra'/>
                        <img onClick={() => setNumber(number + 1)} src={Mochila_de_rodinha_r} class='image' alt='Mochila de rodinha rosa Bic'/>
                        <img onClick={() => setNumber(number + 1)} src={Mochila_lateral} class='image' alt='Mochila lateral Faber Castell'/>
                        <img onClick={() => setNumber(number + 1)} src={Mochila_preta} class='image' alt='Mochila preta Tilibra'/>
                        <img onClick={() => setNumber(number + 1)} src={Mochila_rosa} class='image' alt='Mochila rosa Tilibra'/>
                    </section>
                    <div class='manual'>
                        <label for="radio8" class='botao'></label>
                        <label for="radio9" class='botao'></label>
                        <label for="radio10" class='botao'></label>
                        <label for="radio11" class='botao'></label>
                    </div>
                </section>
            </section>
            <section class='footer'>
                <p>Sobre nós</p>
                <img src={Gmail} class='img1' alt='Gmail'/>
                <img src={Github} class='img2' alt='Github'/>
                <img src={Facebook} class='img3' alt='Facebook'/>
                <img src={Instagram} class='img4' alt='Instagram'/>
                <img src={Twitter} class='img5' alt='Twitter'/>
                <h1>Copyright © 2022 -   Caneta Azul LTDA</h1>
            </section>
        </Content>
    )
}

export default Homepage*/