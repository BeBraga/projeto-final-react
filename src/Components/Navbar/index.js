import {Header} from './styles.js'
import React from 'react'
import Logo from '../../assets/Logo.png'
import Lupa from '../../assets/Lupa.png'
import Carrinho from '../../assets/Carrinho.png'

const Navbar = () => {
    return (
        <Header>
            <img src={Logo} alt='logo site'/>
            <p>Caneta<br></br><span style={{color: '#1C5D98',}}>azul</span>{' '}<br></br>materiais</p>
            <input type="text"/>
            <section id='search_space' class='search_space'>
                <button><img src={Lupa} alt='lupa'/></button>
                <p><u>Todos</u> Materiais Cadernos Mochilas</p>
            </section>
            <section id='profile_space' class='profile_space'>
                <img src={Carrinho} alt='carrinho'/>
                <p> Carrinho </p>
                <h1>0</h1>
            </section>
            <h2>Entrar</h2>
            <h3> Criar conta</h3>
        </Header>
    )
}

export default Navbar 