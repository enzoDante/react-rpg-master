import styled from "styled-components";

export const Styledindex = styled.main`
    min-width: 200px;
    max-width: 1500px;
    min-height: 500px;
    border-radius: 0 0 20px 20px;
    margin: auto;
    background-color: #202020;
    color: #D6E1DF;

    form{
        /* display: flex; */
        /* border: 2px solid black; */
        max-width: 500px;
        margin: auto;
        
        div{
            display: inline-block;
            padding: 10px;
            /* border: 2px solid red; */
        }
        #atributos{
            vertical-align: top;
        }
        #labadd{
            vertical-align: top;
        }

        #modalaparece{
            /* border: 2px solid red; */
            vertical-align: top;
            /* border-radius: 50%; */
        }
        span{
            font-size: 2.5em;
            cursor: pointer;

        }
        .form{
            /* display: none; */
            position: relative;
            border: 2px solid black;
            border-radius: 20px;
            /* animation: aparece 600ms; */
            /* display: none; */
        }
        .aparece{
            display: inline-block;
            animation: aparece 600ms;
        }
        .desaparece{
            transition: opacity 600ms, display 600ms;
            /* visibility: hidden; */
            /* animation: desaparece 600ms; */
            display: none;
            opacity: 0;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
        label{
            margin: 5px;
        }
        input[type=text]{
            display: block;
            margin: auto;
            margin-left: -4px;
            font-size: 1em;
            font-weight: bold;
            height: 25px;
            width: 100%;
            border-radius: 6px;
            border: 2px solid black;
            color: white;
            background-color: transparent;
            outline: none;
        }
        input[type=number]{
            display: block;
            margin: 5px;
            font-size: 1em;
            font-weight: bold;
            height: 20px;
            width: 100px;
            text-align: center;
            border-radius: 6px;
            border: 2px solid black;
            color: white;
            background-color: transparent;
            outline: none;
            
        }
        textarea{
            color: white;
            display: block;
            background-color: #313131;
            resize: none;
            border: 2px solid black;
            outline: none;
            border-radius: 10px;
            width: 200px;
            height: 150px;
            font-size: 1.2em;
            padding: 10px;
            
        }
        textarea::-webkit-scrollbar{
            width: 4px;
            background-color: #b4b4b4;
            border-radius: 20px;
        }
        textarea::-webkit-scrollbar-thumb{
            background-color: #797979;
            border-radius: 20px;
        }
        button{
            font-size: 1.1em;
            font-weight: bold;
            min-width: 100px;
            height: 50px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #333333;
            border: 3px solid #112838;
            outline: none;
            color: white;
            transition: linear 200ms;
            /* vertical-align: text-bottom; */
            display: block;
            margin: auto;
            
        }
        button:hover{
            opacity: 0.5;
        }

        @keyframes aparece{
            from { opacity: 0; transform: translateY(-50px); }
            to { opacity: 1; transform: translateY(0px); }
        }
        @keyframes desaparece{
            from { display: inline-block; opacity: 1; transform: translateY(0px); }
            to { opacity: 0; transform: translateY(-50px); }
        }

        .virax{
            transition: 200ms;
            transform: rotate(45deg);
        }
        .volta{
            transition: 200ms;
            transform: rotate(90deg);
        }
    }

`
//1C2025
//313131
//202020
//333333
//112838
//D6E1DF text