import styled from "styled-components"

export const SetMenuLayout = styled.div`
width: calc(100% - 300px);
height: calc(100vh - 70px);
margin-left: 300px;
background-color: #F6F6F6;
padding: 50px 80px;
box-sizing: border-box;
@media screen and (max-width: 700px) {
    width: 100%;
    height: calc(100vh - 50px);
    margin-left: 0;
    padding: 0;
}
`
export const Head = styled.p`
font-size: 24px;
font-weight: 700;
margin-bottom: 30px;
@media screen and (max-width: 700px) {
    display: none;
}
`

export const MenuLayout = styled.div`
position: relative;
width: 100%;
height: auto;
filter: drop-shadow( 0px 2px 4px rgba(0, 0, 0, 0.15));
`
export const CategoryWrap = styled.ul`
width: calc(100% - 120px);
overflow-y: scroll;
display: flex;
height: 53px;
&.editFalse{
    width: 100%;
}

`

export const MenuContainerWarp = styled.div`
background-color: white;
max-height: calc(100vh - 420px);
overflow-x: scroll;
padding: 30px 65px; 
border-radius: 0 3px 3px 3px;
@media screen and (max-width: 700px) {
    box-sizing: border-box;
    min-height: calc(100vh - 187px);
    padding: 24px 15px;
}
`
export const SettingHead = styled.p`
font-size: 15px;
font-weight: 700;
margin-bottom: 26px;
`
export const MenuListUl = styled.ul`


`
export const NoMenu = styled.p`
& span {
    font-size: 14px;
    color: #6D6D6D;
    text-align: center;
    display: block;
    margin-bottom: 12px;
}
    
    padding: 50px 40px;

`

export const AddBtn = styled.button`
display: flex;
align-items: center;
padding: 12px 40px;
cursor: pointer;
border-radius: 10px;
border: 2px solid #FF6C01;
background-color: transparent;
font-size: 15px;
font-weight: 700;
margin: 0 auto;
& img {
    width: 12px;
    height: 12px;
    margin-right: 5px;
}
`
export const BtnWrap = styled.div`
margin-left: auto;
display: block;
position: absolute;
bottom: 46px;
    right: 80px;
    @media screen and (max-width: 700px) {
        background-color: white;
        box-sizing: border-box;
        padding: 20px 15px;
        width: 100%;
        bottom: 0;
        position: fixed;
        right: 0;
        transform: translate(0);
        display: flex;
    }
`
export const WhiteBtn = styled.button`
width: 120px;
align-items: center;
padding: 12px 0px;
cursor: pointer;
border-radius: 10px;
border: 2px solid #FF6C01;
background-color: white;
font-size: 15px;
font-weight: 700;
margin-right: 10px ;
filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
@media screen and (max-width: 700px) {
    width: 50%;
}
`
export const OrangeBtn = styled.button`
filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
width: 120px;
display: block;
    margin: 0 auto;
height: 47px;
align-items: center;
padding: 12px 0px;
border: 2px solid #FF6C01;
cursor: pointer;
color: white;
border-radius: 10px;
border: none;
background-color: #FF6C01;
font-size: 15px;
font-weight: 700;
@media screen and (max-width: 700px) {
    width: 50%;
}
`
export const CategoryAddBtn = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
text-decoration: underline;
position: absolute;
top: 14px;
right: 5px;
display: flex;
align-items: center;
& img {
    margin-right: 8px;
}
`