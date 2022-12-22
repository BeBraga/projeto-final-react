import {Header} from './styles.js'
import React from 'react'
import Logo from '../../assets/Logo.png'
import Lupa from '../../assets/Lupa.png'
import Carrinho from '../../assets/Carrinho.png'

const Navbar = () => {
    return (
        <Header>
            <img src={Logo} alt='logo site'/>
            <a href='index.html' id='navbar_logo'>Caneta<br></br><span style={{color: '#1C5D98',}}> azul</span>{' '}<br></br>materiais</a>
            <input type="text"/>
            <section id='search_space' class='search_space'>
                <button><img src={Lupa} alt='lupa'/></button>
                <h1><u>Todos</u></h1>
                <h2>Materiais</h2>
                <h3>Cadernos</h3>
                <h4>Mochilas</h4>
            </section>
            <section id='profile_space' class='profile_space'>
                <img src={Carrinho} alt='carrinho'/>
                <p> Carrinho </p>
                <h1>0</h1>
            </section>
            <h1>Entrar</h1>
            <h2> Criar conta</h2>
        </Header>
    )
}

export default Navbar 