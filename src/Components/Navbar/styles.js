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
                margin-top: 1rem;
                font-weight: bold;
        }  
        
        button{
                background-color: #FFC700;
                width: 4.5rem;
                height: 2.5rem;
                margin-top: 1rem;
                margin-right: 1rem;
        }

        input{
                margin-left: 8rem;
                width: 60rem;
                height: 2.5rem;
                margin-top: 1rem;
        }
        
        .search_space img{
                width: 2rem;
                height: 2rem;
                margin-top: 0.1rem;
        }

        .search_space p{
                color: black;
                margin-top: 1rem;
                margin-left: -51.5rem;
                word-spacing: 5rem;
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
        }

        h2{
                margin-top: 3rem;
                font-size: 1.5rem;
                margin-left: 3rem;
        }

        h3{
                margin-top: 3rem;
                font-size: 1.5rem;
                margin-left: 1.5rem;
        }

        @media screen and (max-width:430px) {
                height: 10rem;

                img{ 
                width: 4rem;
                height: 4rem; 
                margin-top: 0.5rem;
                margin-left: 0rem;
                }

                p{
                        font-size: 0rem;
                }

                input{
                        margin-left: -2rem;
                        width: 22.5rem;
                        height: 2rem;
                        margin-top: 5rem;
                        margin-right: -2.5rem;
                }

                button{
                        background-color: #FFC700;
                        width: 2.5rem;
                        height: 2rem;
                        margin-top: 5rem;
                }

                .search_space p{
                        color: black;
                        font-size: 1rem;
                        word-spacing: 1rem;
                        margin-left: -19rem;
                }

                .search_space img{
                        width: 1.5rem;
                        height: 1.5rem;
                        margin-top: 0.1rem;
                }

                .profile_space p{
                        display: none;
                }

                .profile_space img{
                        width: 2.5rem;
                        height: 2.5rem;
                        margin: 1.3rem 0rem 0rem -14rem;
                }

                h1{
                        margin: -2.4rem 0rem 0rem -11rem;
                        font-size: 1.5rem;
                        text-decoration: underline;
                }

                h2{
                        font-size: 1rem;
                        margin: 2rem 0rem 0rem -9rem;
                }

                h3{
                        font-size: 1rem;
                        margin: 2rem 0rem 0rem 0.5rem;

                }
`

 