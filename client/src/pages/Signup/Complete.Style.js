import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 0;
    padding: 0;
    height: 100vh;
    transition: all 0.5s ease-in;
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    &::before,
    &::after {
        display: table;
        content: " ";
    }
    &::after {
        clear: both;
    }
`;
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100vh;
    }
`;
export const CompletePanel = styled.section`
    width: 600px;
    height: 430px;
    padding: 5.2rem 5.2rem 0;
    background: #fff;
    border-top: 5px solid #ff6b00;
    border-radius: 0 0 10px 10px;
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 100vh;
        padding: 15.1rem 2.6rem 0;
        background: #fff;
        border-top: 0px solid #ff6b00;
        border-radius: 0 0;
    }
`;
export const CompleteImg = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px) {
    }
`;
export const CompleteTxt = styled.div`
    margin: 40px 0 0;
    text-align: center;
    h4 {
        font-size: 2rem;
        font-weight: 700;
    }
    h5 {
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 18.5px;
        margin: 10px 0 0;
    }
    @media screen and (max-width: 600px) {
        margin: 30px 0 0;
        text-align: center;
        h4 {
            font-size: 2rem;
            font-weight: 700;
            color: #ff6c01;
        }
    }
`;
export const CompleteBtn = styled.div`
    display: flex;
    justify-content: center;
    margin: 60px 0 0;
    a {
        font-size: 1.4rem;
        font-weight: 700;
        margin: 0 1.5rem;
    }
    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 60px 0 0;
    }
`;
export const Btn = styled.a`
    padding: 12px 12px;
    display: inline-block;
    width: 120px;
    height: 48px;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #d9d9d9;
    white-space: nowrap;
    padding: 12px 12px;
    font-size: 1.2rem;
    line-height: 1.4;
    border-radius: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: background;
    transition-duration: 0.4s;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 20%);
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(0 0 0 / 8%);
    @media screen and (max-width: 600px) {
        &:first-child {
            width: 100%;
            margin: 25rem 0 0 0;
        }
        &:last-child {
            width: 100%;
            margin: 1.5rem 0 0 0;
        }
    }
`;
export const BtnFill = styled(Btn)`
    background: #ff6c01;
    text-shadow: none;
    border: none;
    border-radius: 10px;
    padding: 14px 12px;
    font-size: 1.4rem;
    font-weight: 700;
    height: 48px;
    margin: 8px 0 0;
    a {
        color: #fff;
    }
`;
export const BtnDefault = styled(Btn)`
    background: #fff;
    text-shadow: none;
    border: 2px solid #ff6c01;
    border-radius: 10px;
    height: 48px;
    margin: 8px 0 0;
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
    @media screen and (max-width: 600px) {
        background: #bababa;
        text-shadow: none;
        border: none;
        color: #fff;
        border-radius: 10px;
    }
`;
export const BtnDefaultActive = styled(BtnDefault)`
    @media screen and (max-width: 600px) {
        background: #000;
        text-shadow: none;
        border: none;
        color: #fff;
        border-radius: 10px;
    }
`;