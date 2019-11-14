import styled from 'styled-components';
import imagem_fundo from '../../assets/folha2.jpeg';

export const Css_cadastros = styled.div`
    .main_div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background: url(${imagem_fundo});
        background-size: cover;
    }
    .form_div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        /* justify-content: space-evenly; */
        flex-wrap: wrap;
        height: 45vh;
        width: 100vh;
        background-color: black;
        border-radius: 10px;
    }
    .div_engloba{
        display: flex;
        flex-direction: column;
        /* width: inherit; */
        height: 150px;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        /* background-color: white; */
    }
    .div_iputs{
        display: flex;
        flex-direction: column;
        /* width: inherit; */
        height: 150px;
        justify-content: space-evenly;
        align-items: center;
    }
    .div_label{
        display: flex;
        color: white;
        width: 90px;
        height: 20px;
        justify-content: space-evenly;
    }
    .div_botao{
        margin-left: 30px;
        display: flex;       
        flex-direction: column;
        /* width: inherit; */
        height: 150px;
        justify-content: space-evenly;
        align-items: center;
    }
    .botao{
        height: 28px;
        width: 290px;
        background-color: lightgreen;
        cursor: pointer;
    }
    .mouse{
        cursor: pointer;
    }
    label{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    input{
        text-indent: 8px;
        height: 25px;
    }
    @media only screen and (max-width: 850px) {
        .form_div{
            height: 400px;
        }
        label{
            font-size: 20px;
        }
        input{
            font-size: 20px;
            width: 200px;   
        }
        .botao{
            width: 250px;
            height: 32px;
        }
    }
`;