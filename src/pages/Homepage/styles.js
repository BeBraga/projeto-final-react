/*import styled from 'styled-components'

export const Content = styled.div`

    .navbar{
        width: 100%;
        background-color: #00B2FF;
        height: 7.5rem;
        display: flex;
    }

    .navbar #navbar_logo img{ 
        max-width: 6.938rem;
        height: 7.5rem; 
        cursor: pointer;
    } 

    .navbar #navbar_text{
        color: #FFC700;
        align-items: center;
        font-size: 1.563rem;
        margin-top: 1rem;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
    }  

    .navbar button{
        background-color: #FFC700;
        width: 4.5rem;
        height: 2.5rem;
        margin-top: 1rem;
        margin-right: 1rem;
        cursor: pointer;
    }

    .navbar input{
        margin-left: 8rem;
        width: 60rem;
        height: 2.5rem;
        margin-top: 1rem;
        font-size: 1.5rem;
    }

    .navbar .search_space img{
        width: 2rem;
        height: 2rem;
        margin-top: 0.1rem;
    }

    .navbar .search_space h2{
        font-size: 1.5rem;
        color: black;
        cursor: pointer;
        position: relative;
        right: 50rem;
        bottom: 2rem;
    }

    .navbar .search_space h2:hover{
        text-decoration: underline
    }

    .navbar .search_space h3{
        font-size: 1.5rem;
        color: black;
        cursor: pointer;
        position: relative;
        right: 33rem;
        bottom: 5.2rem;
    }

    .navbar .search_space h3:hover{
        text-decoration: underline
    }

    .navbar .search_space h4{
        font-size: 1.5rem;
        color: black;
        cursor: pointer;
        position: relative;
        right: 17rem;
        bottom: 9rem;
    }

    .navbar .search_space h4:hover{
        text-decoration: underline
    }

    .navbar .profile_space img{
        width: 3.5rem;
        height: 3.5rem;
        margin-top: 1rem;
        margin-left: 5rem;
        margin-bottom: -1rem;
        margin-right: -5rem;
    }

    .navbar .profile_space p{
        margin-left: 5.5rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: black;
        margin-bottom: -6.5rem;
        font-weight: bold;
    }

    .navbar .profile_space p:hover{
        text-decoration: underline
    }

    .navbar .profile_space h1{
        margin-left: 10rem;
        margin-top: 1.5rem;
        font-size: 2rem;
        text-decoration: underline;
    }

    .navbar h1{
        margin-top: 3rem;
        font-size: 1.5rem;
        margin-left: 1.5rem;
        cursor: pointer;
    }

    .navbar h1:hover{
        text-decoration: underline;
    }

    .navbar h2{
        margin-top: 3rem;
        font-size: 1.5rem;
        margin-left: 1.5rem;
        cursor: pointer;
    }

    .navbar h2:hover{
        text-decoration: underline;
    }

    .main{
        background-color: #E9E9E9;
        display: grid;
    }

    .main .materiais {
        height: 20rem;
        width: 106rem;
        margin: 7rem 7rem 3rem 7rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black;
        background-color: white;
        overflow: hidden;
    }

    .main h1{
        font-size: 1.5rem; 
        font-weight: bold;
        margin-left: 1rem;
        cursor: pointer;
        margin-top: 1.4rem;
    }

    .main .materiais .slides img{
            margin-left: 1rem;
            margin-right: 0.5rem;
            cursor: pointer;
    }

    .main .materiais img{
        height: 14rem;
        width: 12rem;
        border-style: solid;
        border-color: black;
        border-radius: 5px;
        margin: -0.9rem 0rem 0rem 0rem;
    }

    .main .materiais .slides input{
        display: none;
    }

    .main .cadernos {
        height: 20rem;
        width: 106rem;
        margin: 0rem 7rem 3rem 7rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black;
        background-color: white;
        overflow: hidden;
    }
        
    .main h2{
        font-size: 1.5rem; 
        font-weight: bold;
        padding-left: 1rem;
        cursor: pointer;
    }

    .main .cadernos .slides img{
        margin-left: 1rem;
        margin-right: 0.5rem;
        cursor: pointer;
    }

    .main .cadernos img{
        height: 14rem;
        width: 12rem;
        border-style: solid;
        border-color: black;
        border-radius: 5px;
        margin: 0rem 0rem 7rem 0rem;
    }

    .main .cadernos .slides input{
        display: none;
    }

    .main .mochilas {
        height: 20rem;
        width: 106rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black;
        background-color: white;
        overflow: hidden;
        margin: 0rem 7rem 7rem 7rem;
    }

    .main h3{
        font-size: 1.5rem; 
        font-weight: bold;
        padding-left: 1rem;
        cursor: pointer;
    }

    .main .mochilas .slides img{
        margin-left: 1rem;
        margin-right: 0.5rem;
        cursor: pointer;
    }

    .main .mochilas img{
        height: 14rem;
        width: 12rem;
        border-style: solid;
        border-color: black;
        border-radius: 5px;
        margin: 0rem 0rem 0rem 2rem;
    }

    .main .mochilas .slides input{
        display: none;
    }

    .footer{
        width: 100%;
        background-color: #FFC700;
        height: 4.5rem;
        display: flex;
    }

    .footer p{
        font-size: 1.25rem;
        font-weight: bold;
        margin: 1.5rem 0rem 0rem 2rem;
        cursor: pointer;
    }

    .footer p:hover{
        text-decoration: underline;
    }

    .footer .img1{
        width: 3.5rem;
        height: 2.5rem;
        margin: 1rem 0rem 0rem 3rem;
        cursor: pointer;
    }

    .footer .img2{
        width: 3rem;
        height: 3rem;
        margin: 0.7rem 0rem 0rem 1rem;
        cursor: pointer;
    }

    .footer .img3{
        width: 4rem;
        height: 4rem;
        margin: 0.3rem 0rem 0rem 0.6rem;
        cursor: pointer;
    }

    .footer .img4{
        width: 4rem;
        height: 4rem;
        margin: 0.3rem 0rem 0rem 0.1rem;
        cursor: pointer;
    }

    .footer .img5{
        width: 4.5rem;
        height: 4.5rem;
        margin: 0rem 0rem 0rem -0.3rem;
        cursor: pointer;
    }

    .footer h1{
        font-size: 1.25rem;
        margin: 1.5rem 0rem 0rem 60rem;
        font-weight: bold;
    }

@media screen and (max-width:430px) {

    .navbar{
        height: 8rem;
    }

    .navbar #navbar_logo img{ 
    width: 4rem;
    height: 4rem; 
    margin-top: 0.5rem;
    margin-left: 1rem;
    }

    .navbar #navbar_text{
            display: none;
    }

    .navbar input{
            margin-left: -3rem;
            width: 22.5rem;
            height: 2rem;
            margin-top: 5rem;
            margin-right: -2.5rem;
    }

    .navbar button{
            background-color: #FFC700;
            width: 2.5rem;
            height: 2rem;
            margin-top: 5rem;
    }

    .navbar .search_space h1{      
            display: none;
    }

    .navbar .search_space h2{
            display: none;
    }

    .navbar .search_space h3{
            display: none;
    }

    .navbar .search_space h4{
            display: none;
    }

    .navbar .search_space img{
            width: 1.5rem;
            height: 1.5rem;
            margin-top: 0.1rem;
    }

    .navbar .profile_space p{
            display: none;
    }

    .navbar .profile_space img{
            width: 2.5rem;
            height: 2.5rem;
            margin: 1.3rem 0rem 0rem -14rem;
    }

    .navbar .profile_space h1{
            margin: -2.4rem -2rem 0rem -11rem;
            font-size: 1.5rem;
            text-decoration: underline;
    }

    .navbar h1{
            font-size: 1rem;
            margin: 2rem 0rem 0rem -9rem;
    }

    .navbar h1:active{
            text-decoration: underline;
    }

    .navbar h2{
            font-size: 1rem;
            margin: 2rem 0rem 0rem 0.5rem;

    }

    .navbar h2:active{
            text-decoration: underline;

    }

    .main{
        display: flex;
        background-color: #E9E9E9;
    }

    .main h1{
        font-weight: bold;
        font-size: 1.25rem;
        white-space: nowrap;
        margin-left: 1rem;
    }

    .main .materiais{
        width: 24.6rem;
        height: 17rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
        background-color: white;
        margin: 4rem 1rem 0rem 1rem;
    }

    .main .materiais .slides{
        width: 24.6rem;
        height: 17rem;
        display: flex;
    }

    .main .materiais .slides input{
        display: none;
    }

    .main .materiais .slide{
        width: 10rem;
        transition: 1s;
        margin-right: 1rem;
        margin-top: 3.5rem;
        margin-left: 1rem;
    }

    .main .materiais .slides img{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem -13rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .main .materiais .slides .image{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem 0rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .main .materiais .manual{
        width: 24.4rem;
        margin-top: -2rem;
        display: flex;
        justify-content: center;
    }

    .main .materiais .botao{
        border: 2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }

    .main .materiais .botao:not(:last-child){
        margin-right: 40px;
    }

    .main .materiais .botao:hover{
        background-color: white;
    }

    .main .materiais #radio1:checked ~ .first{
        margin-left: -53%;
    }

    .main .materiais #radio2:checked ~ .first{
        margin-left: -106%;
    }

    .main .materiais #radio3:checked ~ .first{
        margin-left: -159%;
    }

    .main .materiais #radio4:checked ~ .first{
        margin-left: -214%;
    }

    .main h2{
        font-weight: bold;
        font-size: 1.25rem;
        white-space: nowrap;
        margin-left: 0rem;
    }

    .main .cadernos{
        width: 24.6rem;
        height: 17rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
        background-color: white;
        margin: 23rem 0rem 0rem -25.5rem;
    }

    .main .cadernos .slides{
        width: 24.6rem;
        height: 17rem;
        display: flex;
    }

    .main .cadernos .slides input{
        display: none;
    }

    .main .cadernos .slide{
        width: 10rem;
        transition: 1s;
        margin-right: 1rem;
        margin-top: 3.5rem;
        margin-left: 1rem;
    }

    .main .cadernos .slides img{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem -13rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .main .cadernos .slides .image{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem 0rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .main .cadernos .manual{
        width: 24.4rem;
        margin-top: -2rem;
        display: flex;
        justify-content: center;
    }

    .main .cadernos .botao{
        border: 2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }

    .main .cadernos .botao:not(:last-child){
        margin-right: 40px;
    }

    .main .cadernos .botao:hover{
        background-color: white;
    }

    .main .cadernos #radio5:checked ~ .first{
        margin-left: -53%;
    }

    .main .cadernos #radio6:checked ~ .first{
        margin-left: -116%;
    }

    .main .cadernos #radio7:checked ~ .first{
        margin-left: -178%;
    }

    .main h3{
        font-weight: bold;
        font-size: 1.25rem;
        white-space: nowrap;
        margin-left: 0rem;
    }

    .main .mochilas{
        width: 24.6rem;
        height: 17rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
        background-color: white;
        margin: 42rem 0rem 4rem -24.5rem;
    }

    .main .mochilas .slides{
        width: 24.6rem;
        height: 17rem;
        display: flex;
    }

    .main .mochilas .slides input{
        display: none;
    }

    .main .mochilas .slide{
        width: 10rem;
        transition: 1s;
        margin-right: 1rem;
        margin-top: 3.5rem;
        margin-left: 1rem;
    }

    .main .mochilas .slides img{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem -13rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .main .mochilas .slides .image{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem 0rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .main .mochilas .manual{
        width: 24.4rem;
        margin-top: -2rem;
        display: flex;
        justify-content: center;
    }

    .main .mochilas .botao{
        border: 2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }

    .main .mochilas .botao:not(:last-child){
        margin-right: 40px;
    }

    .main .mochilas .botao:hover{
        background-color: white;
    }

    .main .mochilas #radio8:checked ~ .first{
        margin-left: -53%;
    }

    .main .mochilas #radio9:checked ~ .first{
        margin-left: -106%;
    }

    .main .mochilas #radio10:checked ~ .first{
        margin-left: -159%;
    }

    .main .mochilas #radio11:checked ~ .first{
        margin-left: -214%;
    }

    .footer{
        height: 7rem;
    }

    .footer p{
        font-size: 1rem;
        font-weight: bold;
        margin: 1.5rem 0rem 0rem 5rem;
        white-space: nowrap;
    }

    .footer p:active{
        text-decoration: underline;
    }
    
    .footer .img1{
        width: 2.5rem;
        height: 2rem;
        margin: 3.5rem 0rem 0rem -9.5rem;
    }

    .footer .img2{
        width: 2.5rem;
        height: 2.5rem;
        margin: 3.2rem 0rem 0rem 0.5rem;
    }

    .footer .img3{
        width: 3rem;
        height: 3rem;
        margin: 3.2rem 0rem 0rem 0.2rem;
    }

    .footer .img4{
        width: 3.2rem;
        height: 3.2rem;
        margin: 3.1rem 0rem 0rem -0.3rem;
    }

    .footer .img5{
        width: 3.5rem;
        height: 3.5rem;
        margin: 2.9rem 0rem 0rem -0.5rem;
    }

    .footer h1{
        font-size: 1rem;
        margin: 2.2rem 0rem 0rem 1rem;
        font-weight: bold;
    }
`   */