import React, { useState } from "react";

const MoreForms = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Declaring Validation for the login process
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

    //Creating the Err's for the validation forms
    const firstNameErr = "First name has to be at least 2 characters!";
    const lastNameErr = "Last name has to be at least 2 characters!";
    const emailErr = "Email has to be at least 5 characters!";
    const passwordErr = "Password has to be at least 8 characters!";
    const confirmPasswordErr = "Password must match!";


    //First Name Handler
    const handleFirstName = (e) => {
        const newFirstName = e.target.value;

        setFirstName(newFirstName);
        if (newFirstName.length < 2 && newFirstName.length !== 0) {
            setIsFirstNameValid(false);
        }

        else {
            setIsFirstNameValid(true);
        }

    }

    //Last Name Handler
    const handleLastName = (e) => {
        const newLastName = e.target.value;

        setLastName(newLastName);
        if (newLastName.length < 2 && newLastName.length !== 0) {
            setIsLastNameValid(false);
        }

        else {
            setIsLastNameValid(true);
        }

    }

    //Email Handler
    const handleEmail = (e) => {
        const newEmail = e.target.value;

        setEmail(newEmail);
        if (newEmail.length < 5 && newEmail.length !== 0) {
            setIsEmailValid(false);
        }

        else {
            setIsEmailValid(true);
        }

    }

    //Password Handler
    const handlePassword = (e) => {
        const newPassword = e.target.value;

        setPassword(newPassword);
        if (newPassword.length < 8 && newPassword.length !== 0) {
            setIsPasswordValid(false);
        }

        else {
            setIsPasswordValid(true);
        }

    }

    //Confirm Password Handler
    const handleConfirmPassword = (e) => {
        const newConfirmPassword = e.target.value;

        setConfirmPassword(newConfirmPassword);
        if (newConfirmPassword !== password && newConfirmPassword.length !== 0) {
            setIsConfirmPasswordValid(false);
        }

        else {
            setIsConfirmPasswordValid(true);
        }

    }

    return (
        <div>
            <form>
                {/* First Name Form */}
                <div className="form-group">
                    <label htmlFor="firstName"> First Name:</label>
                    <input type="text" onChange={handleFirstName} name="firstName" />
                    {isFirstNameValid ? "" : <span style={{ color: "blue" }}>{firstNameErr}</span>}
                </div>

                {/* Last Name Form */}
                <div className="form-group">
                    <label htmlFor="lastName"> Last Name:</label>
                    <input type="text" onChange={handleLastName} name="lastName" />
                    {isLastNameValid ? "" : <span style={{ color: "blue" }}>{lastNameErr}</span>}
                </div>

                {/* Email Form */}
                <div className="form-input px-4 py-3 rounded-full">
                    <label htmlFor="email"> Email:</label>
                    <input type="text" onChange={handleEmail} name="email" />
                    {isEmailValid ? "" : <span style={{ color: "blue" }}>{emailErr}</span>}
                </div>

                {/*Password Form*/}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassword} name="password" type="password"></input>
                    {!isPasswordValid && <span style={{ color: "blue" }}>{passwordErr}</span>}
                </div>

                {/*Confrim Password Form*/}
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={handleConfirmPassword} name="confirmPassword" type="password"></input>
                    {!isConfirmPasswordValid && <span style={{ color: "red" }}>{confirmPasswordErr}</span>}
                </div>
            </form>
        </div>
    );
};

export default MoreForms