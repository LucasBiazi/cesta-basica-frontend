import styled from "styled-components";
import imagem_fundo from "../../assets/folha.jpeg"

export const Css_login = styled.div`
   .background {
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: url(${imagem_fundo});
        background-size: cover;
    }
    .ajuda_tf{
        display: flex;
        flex-direction: row;
        /* width: 500px; */
        height: 100px;
    }
    .tanto-faz{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 80px;
        /* height: inherit; */
    }
    .main_div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
        width: 100%;
        background-color: rgb(000,000,000,50%);
    }
    .div_efeito_1{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 450px;
        width: 1200px;
       background: rgb(000,000,000,25%);
    }
    .div_efeito_2{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 400px;
        width: 900px;
       background: rgb(000,000,000,30%);
    }
    .div_efeito_3{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 700px;
       background: rgb(000,000,000,35%);
    }

    .div_form{        
        display: flex;
        justify-content: space-evenly;        
        width: inherit;
        ;
        /* background-color: black; */
    }
    label{
        /* margin-right: 10px; */
        color: white;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 16px;
    }
    .div_inputs{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    input{
        text-indent: 8px;
        height: 25px;
        width: 200px;
        /* border-radius: 10%; */
    }
    .div_botao{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 130px;
        width: 284px;        
        /* background-color: white; */
    }
    .botao{
        height: 28px;
        width: inherit;
        background-color: lightgreen;
        cursor: pointer;
    }
    .botao2{
        height: 28px;
        width: 284px;
        background-color: lightgreen;
        cursor: pointer;    
    }
    .txt_botao{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: black;
        cursor: pointer;
    }
    @media only screen and (max-width: 850px) {
        .background{
            
        }
        .div_efeito_1{
            display: flex;
            justify-content: center;
            width: inherit;
            height: 700px;
        }
        .div_efeito_2{
            display: flex;
            justify-content: center;
            width: inherit;
            height: 600px;
        }
        .div_efeito_3{
            display: flex;
            justify-content: center;
            width: inherit;
            height: 500px;
        }
        .tanto-faz{
            height: 200px;
        }
        .div_inputs{
            height: 200px;
        }
        .div_botao{
            margin-top: 100px;
        }
        .botao, .botao2{
            width: 290px;
            height: 35px;
        }
        label{
            font-size: 20px;
        }

        input{
            font-size: 20px;
            height: 30px;
            width: 200px;
        }
    }
`;
