import styled from 'styled-components'

export const Header = styled.header`
        width: 100%;
        background-color: #00B2FF;
        height: 7.5rem;
        display: flex;

        img{ 
                max-width: 6.938rem;
                height: 7.5rem; 
        }

        p{
                color: #FFC700;
                align-items: center;
                font-size: 1.563rem;
                font-family: inter;
                margin-top: 1rem;
                font-weight: bold;
        }  
        
        button{
                background-color: #FFC700;
                width: 4.5rem;
                height: 2.9rem;
                margin-top: 1rem;
                border-radius: 0px;
                margin-right: 1rem;
        }

        input{
                margin-left: 8rem;
                width: 60rem;
                height: 2.5rem;
                margin-top: 1rem;
                boder-radius: 0px;
        }
        
        .search_space img{
                width: 2rem;
                height: 2rem;
        }

        .search_space p{
                color: black;
                margin-top: 1rem;
                margin-left: -52rem;
                word-spacing: 5rem;
                font-family: inter;
        }

        .profile_space img{
                width: 3.5rem;
                height: 3.5rem;
                margin-top: 1rem;
                margin-left: 5rem;
                margin-bottom: -1rem;
                margin-right: -5rem;
        }

        .profile_space p{
                margin-left: 5.5rem;
                margin-bottom: 1rem;
                font-size: 1.5rem;
                color: black;
                margin-bottom: -6.5rem;
        }

        h1{
                margin-left: 10rem;
                font-size: 2rem;
                text-decoration: underline;
                font-family: inter;
        }

        h2{
                margin-top: 3rem;
                font-size: 1.5rem;
                margin-left: 3rem;
                font-family: inter;
        }

        h3{
                margin-top: 3rem;
                font-size: 1.5rem;
                margin-left: 1.5rem;
                font-family: inter;
        }
`

 