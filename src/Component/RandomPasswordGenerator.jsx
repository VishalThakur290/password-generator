import React, { useState } from 'react';
import { RandomPasswordWrapper, RandomPasswordWrapper_Section, RandomPasswordWrapper_CheckList, Label, Password_status, Password_status_Box, Button } from '../Style/Style';
import { color } from '../Style/Color';
import { RiFileCopyLine, RiFileCopyFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RandomPasswordGenerator = () => {
    const [copied, setCopied] = useState(false);
    const [password, setPassword] = useState("Generate Password");
    const [passwordStrong, setPasswordStrong] = useState(0);
    const [passwordCheckList, setPasswordCheckList] = useState({
        loswercase_letter: false,
        uppercase_letter: false,
        number: false,
        symbol: false,
    });
    const [password_length, setPassword_length] = useState(5);
    const copy = () => {
        if (password !== "Generate Password") {
            navigator.clipboard.writeText(password);
            notification("Copied ✔");
            setCopied(true);
            const timer = setTimeout(() => {
                setCopied(false);
            }, 1000)

            return () => {
                clearTimeout(timer);
            }
        }
    }
    const notification = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    let loswercase_letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let uppercase_letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '}', '{', '[', ']'];
    const generate_password = () => {
        var characters = [];
        var password = "";
        setPasswordStrong(0);
        if (passwordCheckList.loswercase_letter || passwordCheckList.uppercase_letter || passwordCheckList.number || passwordCheckList.symbol) {
            if (passwordCheckList.loswercase_letter) {
                characters = [...characters, ...loswercase_letter]
                setPasswordStrong(passwordStrong => passwordStrong + 1);
            }
            if (passwordCheckList.uppercase_letter) {
                characters = [...characters, ...uppercase_letter]
                setPasswordStrong(passwordStrong => passwordStrong + 1);
            }
            if (passwordCheckList.number) {
                characters = [...characters, ...number]
                setPasswordStrong(passwordStrong => passwordStrong + 1);
            }
            if (passwordCheckList.symbol) {
                characters = [...characters, ...symbol]
                setPasswordStrong(passwordStrong => passwordStrong + 1);
            }
            var characters_length = characters.length;
            for (let i = 0; i < password_length; i++) {
                password = password + characters[Math.floor(Math.random() * characters_length)];
            }
            notification("Password Generated ✔")
        }
        setPassword(password);
    }
    const setPasswordCheckListSatus = (name, value) => () => {
        setPasswordCheckList((prev) => ({ ...prev, [name]: value }));
    }
    return (
        <RandomPasswordWrapper>
            <RandomPasswordWrapper_Section justify_content="space-between">
                <section>{password}</section>
                <section>{copied ? <RiFileCopyFill onClick={copy} style={{ cursor: 'pointer' }} /> : <RiFileCopyLine onClick={copy} style={{ cursor: 'pointer' }} />}</section>
            </RandomPasswordWrapper_Section>
            <RandomPasswordWrapper_Section margin="15px 0 0 0">
                <input type="range" name="password_length" id="password_length" min="5" max="25" value={password_length} onChange={(e) => setPassword_length(e.target.value)} style={{ width: '100%' }} />
            </RandomPasswordWrapper_Section>
            <RandomPasswordWrapper_Section margin="15px 0 0 0">
                <label>Password Length: {password_length}</label>
            </RandomPasswordWrapper_Section>
            <RandomPasswordWrapper_Section>
                <RandomPasswordWrapper_CheckList>
                    <input type="checkbox" onChange={setPasswordCheckListSatus("uppercase_letter", !passwordCheckList.uppercase_letter)} id="uppercase" />
                    <Label htmlFor="uppercase">Include Uppercase Letters</Label>
                </RandomPasswordWrapper_CheckList>
                <RandomPasswordWrapper_CheckList>
                    <input type="checkbox" onChange={setPasswordCheckListSatus("loswercase_letter", !passwordCheckList.loswercase_letter)} id="lowercase" />
                    <Label htmlFor="lowercase">Include Lowercase Letters</Label>
                </RandomPasswordWrapper_CheckList>
                <RandomPasswordWrapper_CheckList>
                    <input type="checkbox" onChange={setPasswordCheckListSatus("number", !passwordCheckList.number)} id="number" />
                    <Label htmlFor="number">Include Number Letters</Label>
                </RandomPasswordWrapper_CheckList>
                <RandomPasswordWrapper_CheckList>
                    <input type="checkbox" onChange={setPasswordCheckListSatus("symbol", !passwordCheckList.symbol)} id="symbol" />
                    <Label htmlFor="symbol">Include Symbol Letters</Label>
                </RandomPasswordWrapper_CheckList>
            </RandomPasswordWrapper_Section>
            <RandomPasswordWrapper_Section background={`${color.light_grey}`} color={`${color.primary}`} justify_content="space-between">
                <section>Password Strength</section>
                <Password_status>
                    <section><b>
                        {passwordStrong === 1 && "Week"}
                        {passwordStrong === 2 && "Medium"}
                        {passwordStrong === 3 && "Strong"}
                        {passwordStrong === 4 && "Strongest"}
                    </b></section>
                    <Password_status_Box background={passwordStrong >= 1 && `${color.warning}`} />
                    <Password_status_Box background={passwordStrong > 1 && passwordStrong <= 4 && `${color.yellow}`} />
                    <Password_status_Box background={passwordStrong > 2 && passwordStrong <= 4 && `${color.primary}`} />
                    <Password_status_Box background={passwordStrong > 3 && passwordStrong <= 4 && `${color.success}`} />
                </Password_status>
            </RandomPasswordWrapper_Section>
            <RandomPasswordWrapper_Section>
                <Button onClick={generate_password}>Generate Password</Button>
            </RandomPasswordWrapper_Section>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
        </RandomPasswordWrapper>
    )
}

export default RandomPasswordGenerator