import styled from "styled-components"

export const HeaderWrap = styled.div`
position: fixed;
z-index: 10;
top: 0;
left: 0;
width: 100%;
height: 70px;
background-color: white;
box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.2);

`

export const Inside = styled.div`
height: 70px;
padding : 0 80px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const ButtonWrap = styled.div`
display: flex;

`
export const LogoImg = styled.img`
width: 50px;
height: 60px;
`
export const Button = styled.button`

& a {
    height: 33px;
border-radius:20px;
background-color: #FF6B00;
color: white;
padding: 6px 12px;
cursor: pointer;
border: none;
font-size: 16px;
transition: 0.3s;
text-decoration: none;
}
padding: 0;
background-color: transparent;
border: none;



`
export const LineBtn = styled.button`
& a {
    height: 33px;
border-radius: 20px;
color: #FF6B00;
padding: 6px 12px;
cursor: pointer;
background-color: white;
border: none;
margin-right: 24px;
font-size: 16px;
transition: 0.3s;
text-decoration: none;
}
padding: 0;
background-color: transparent;
border: none;
& :hover {
    background-color: #FFEBDD;
}
`
export const LineBtnUser = styled.button`

& a {
    text-decoration: underline;
    height: 33px;
border-radius: 20px;
padding: 6px 12px;
cursor: pointer;
background-color: white;
border: none;
margin-right: 24px;
font-size: 16px;
transition: 0.3s;
display: flex;
align-items: center;
color: black;
font-weight: 700;
}
padding: 0;
background-color: transparent;
border: none;


& img {
    margin-right: 12px;
    border-radius: 100%;
    height: 38px;
    width: 38px;
    overflow: hidden;
}

`
export const LineBtnUserNoUnder = styled.button`

& a {
    text-decoration: none;
    height: 33px;
border-radius: 20px;
padding: 6px 12px;
cursor: pointer;
background-color: white;
border: none;
font-size: 15px;
transition: 0.3s;
display: flex;
align-items: center;
color: #FF6B00;
font-weight: 700;
}
padding: 0;
background-color: transparent;
border: none;

& img {
    margin-right: 12px;
    height: auto;
    width: 20;
    
}

`