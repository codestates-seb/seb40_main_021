import styled from "styled-components"

export const GnbContainer = styled.div`
position: absolute;
top: 70px;
left: 0;
width: 300px;
height: calc(100vh - 70px);
background-color: #313E46;
`
export const GnbList = styled.ul`
width: 100%;
`
export const TopLi = styled.li`

height: 214px;

& a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 214px;
    width: 100%;
font-size: 16px;
color: white;
text-decoration: none;
text-align: center;
font-weight: 700;

}

`
export const Bell = styled.div`

    background-color: #313E46;
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin-bottom: 9px;
    background-color: #12232D;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 12px;
    & img {
        margin-top:-7px;
    }

    & span {
        padding: 3px 10px;
        border-radius: 25px;
        background-color: #FF5252;
        font-size: 24px;
        color: white;
        position: absolute;
        left: calc(100% - 24px);
        top: -5px;
    }

`
export const Li = styled.li`
list-style: none;

& a {
    height: 70px;
    display: flex;
    align-items: center;
    border-top: 1px solid #7E919C;
    background-color: #313E46;
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    padding-left: 34px;

    &.active {
        background-color: #F6F6F6;
        color: black;
    }
}
`
export const TableImg = styled.img`
width: 24px;
height: 24px;
margin-right: 12px;
`
export const MenuImg = styled.img`
width: 20px;
height: 20px;
margin-right: 12px;
`
export const PlusImg = styled.img`
width: 16x;
height: 16px;
margin-right: 12px;
margin-top: -5px;
`
export const QrImg = styled.img`
width: 30px;
height: 30px;
margin-right: 6px;
margin-top: -14px;
`