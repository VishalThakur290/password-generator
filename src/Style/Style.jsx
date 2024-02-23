import styled from 'styled-components';
import { color } from './Color';

export const MainWrapper = styled.section`
    background: ${color.primary};
    color: ${color.secondary};
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;
export const RandomPasswordWrapper = styled.section`
    display: flex;
    width: 35%;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 90%;
        height: auto;
    }
`;
export const RandomPasswordWrapperSection = styled.section`
    background: ${props => props.background || color.grey};
    color: ${props => props.color || color.secondary};
    display: flex;
    width: 100%;
    height: auto;
    padding: 10px 20px;
    margin: ${props => props.margin || 0};
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: ${props => props.justify_content}
`;
export const RandomPasswordWrapperCheckList = styled.section`
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    padding: 5px 0;
`;
export const Label = styled.label`
    font-size: 15px;
    margin: 0 0 0 10px;
    padding: 0;
`;
export const PasswordStatus = styled.section`
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
    margin: 0;
    height: auto;
    width: 100%;
`;
export const PasswordStatusBox = styled.section`
    heigth: 10px;
    width: 20px;
    background: ${props => props.background || color.grey};
    margin: 0 0 0 10px;
`;
export const Button = styled.button`
    background: ${color.success};
    margin: 0;
    padding: 10px;
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    color: ${color.secondary};
    font-size: 16px;
`;
export const WatermarkDetails = styled.p`
    position: absolute;
    bottom: 5px;
    right: 20px;
`;