import styled from "styled-components";

export const StyledPers = styled.div`

    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-flow: dense; */
    /* grid-auto-flow: row; */
    /* border: 2px solid red; */
    justify-items: center;
    @media screen and (max-width: 1300px){
        grid-template-columns: repeat(2, 1fr);
    }
    


    .item{
        margin: 20px;
        display: flex;
        position: relative;
        border: 2px solid green;
        border-radius: 10px;
        display: inline-block;
        width: 370px;
        padding: 10px;

        span{
            position: absolute;
            right: 10px;
            cursor: pointer;
            color: red;
        }
        h1{
            font-size: 1.5em;
            margin: 5px;
            width: 300px;
            overflow: auto;
            /* border: 2px solid */
        }
        #atributos{
            vertical-align: top;
            display: inline-block;
        }
        #adde{
            vertical-align: top;
            display: inline-block;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
        label{
            margin: 5px;
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

        #ldano{
            display: block;
        }
        #danolevado{
            display: inline-block;
        }
        button{
            font-size: 1em;
            font-weight: bold;
            min-width: 100px;
            height: 35px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #333333;
            border: 3px solid #112838;
            outline: none;
            color: white;
            transition: linear 200ms;
            /* vertical-align: text-bottom; */
            display: inline-block;
            /* margin: auto; */
            margin-left: 10px;
        }
        button:hover{
            opacity: 0.5;
        }

    }
    @media screen and (max-width: 870px){
        grid-template-columns: 1fr;
        .item{
            width: 335px;
            margin: 5px;
            padding: 5px;

            h1{
                width: 280px;
            }
            input[type=number]{
                width: 80px;
                margin: 4px;
            }
            textarea{
                width: 180px;
            }
            button{
                font-weight: normal;
                margin-left: 4px;
            }

        }
    }

`