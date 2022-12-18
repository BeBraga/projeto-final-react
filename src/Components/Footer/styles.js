import styled from 'styled-components'

export const Content = styled.div`
        width: 100%;
        background-color: #FFC700;
        height: 4.5rem;
        display: flex;

        p{
            font-size: 1.25rem;
            font-weight: bold;
            margin: 1.5rem 0rem 0rem 2rem;
        }

        .img1{
            width: 3.5rem;
            height: 2.5rem;
            margin: 1rem 0rem 0rem 3rem;
        }

        .img2{
            width: 3rem;
            height: 3rem;
            margin: 0.7rem 0rem 0rem 1rem;
        }

        .img3{
            width: 4rem;
            height: 4rem;
            margin: 0.3rem 0rem 0rem 0.6rem;
        }

        .img4{
            width: 4rem;
            height: 4rem;
            margin: 0.3rem 0rem 0rem 0.1rem;
        }

        .img5{
            width: 4.5rem;
            height: 4.5rem;
            margin: 0rem 0rem 0rem -0.3rem;
        }

        h1{
            font-size: 1.25rem;
            margin: 1.5rem 0rem 0rem 60rem;
            font-weight: bold;
        }

        @media screen and (max-width:430px) {
            height: 6rem;

        p{
            font-size: 1rem;
            font-weight: bold;
            margin: 1rem 0rem 0rem 5rem;
            white-space: nowrap;
        }
        
        .img1{
            width: 2.5rem;
            height: 2rem;
            margin: 3.3rem 0rem 0rem -9.5rem;
        }

        .img2{
            width: 2.5rem;
            height: 2.5rem;
            margin: 2.9rem 0rem 0rem 0.5rem;
        }

        .img3{
            width: 3rem;
            height: 3rem;
            margin: 2.9rem 0rem 0rem 0.2rem;
        }

        .img4{
            width: 3.2rem;
            height: 3.2rem;
            margin: 2.8rem 0rem 0rem -0.3rem;
        }

        .img5{
            width: 3.5rem;
            height: 3.5rem;
            margin: 2.6rem 0rem 0rem -0.5rem;
        }

        h1{
            font-size: 1rem;
            margin: 1.5rem 0rem 0rem 1rem;
            font-weight: bold;
        }
`