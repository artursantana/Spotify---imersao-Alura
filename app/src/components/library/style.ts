

import styled from "@emotion/styled";


export const Container = styled.div`
background-color: #121212;
width: 300px;
padding: 5px;
display: flex;
justify-content: space-between;
flex-direction: column;
color: #b3b3b3;
font-weight: 600;
font-size: 14px;
margin-top: 10px;
border-radius: 8px;


.icon{
    font-size: 20px;
    margin-right: 10px;
    font-weight: 300;
    padding-right: 8px;
}
.plus{
    margin: 20px 10px;
    align-items: center;
}
.cookies {
    margin: 20px 0px 20px 0px;

    a{
        text-decoration: none;
        color: #b3b3b3;
    }
}
.languages_button{ 
    border: solid white 1px;
    max-width: 180px;
    padding: 7px;
    text-align: center;
    border-radius: 25px;
    color: white;
}
`
export const LibraryContainer = styled.div`
display: flex;
justify-content: space-between;




button{
    margin-right: 10px;
    border: none;
    background-color: transparent;
    color: #b3b3b3;
    font-weight: 700;
    text-align: center;
    text-transform: none;
    padding: 20px 10px;
    display: flex;
}
`

export const SectionContainer = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
gap: 20px;
background-color: #242424;
color: #b3b3b3;
font-weight: 600;
font-size: 14px;
padding: 16px 20px;
font-family: sans-serif;

div{
    display: flex;
    flex-direction: column;

    .title{
        color: white;
        font-weight: 900;
    }
}

button{
    border-radius: 25px;
    width: 85px;
    height: 35px;
}
`