import { useEffect, useRef, useState } from "react";
import "./showConfirmationDialog.css";

interface Props {
    selectedDate: Date,
    selectedTreatment: String,
    selectedTime: String,
    openCloseConfirmationDialog: (value: Boolean) => void,
    updateSuccess: (value: Boolean) => void,
    updateBookingNumber : (value: number) => void
}

function ShowConfirmationDialog(props: Props) {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isEmailValid, setIsEmailValid] = useState<Boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<Boolean>(true);

    const numberPattern: RegExp = /^\d+$/;
    const phoneNumberInputRef = useRef<HTMLInputElement>(null);
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInputRef = useRef<HTMLInputElement>(null);
    

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(name, email, phoneNumber);

        if (isEmailValid && isPhoneNumberValid && name.trim() !== "") {
            fetch("http://localhost:8080/api/create-booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    "bookingNumber": 0,
                    "name": name,
                    "phoneNumber": phoneNumber,
                    "email": email,
                    "sessionType": props.selectedTreatment,
                    "date": props.selectedDate.toLocaleDateString(),
                    "session": props.selectedTime
                })
            }).then(res => res.json())
            .then(data => {
                props.updateSuccess(true);
                props.updateBookingNumber(data.bookingNumber);
            })
            props.openCloseConfirmationDialog(false);
        }
    } 

    useEffect(() => {
        
        const phoneNumberInput = phoneNumberInputRef.current;
        if (phoneNumberInput) {
            setIsPhoneNumberValid(numberPattern.test(phoneNumber) && phoneNumber.length >= 8);
        }

    }, [phoneNumber])

    useEffect(() => {
        const emailInput = emailInputRef.current;
        if (emailInput) {
            setIsEmailValid(emailPattern.test(email));
        }
    }, [email])

  return (
    <form id="confirmationForm" onSubmit={handleSubmit}>
        <h2>Enter your details and confirm the booking...</h2>
        <p>{props.selectedTreatment}</p>
        <p>{props.selectedDate.toDateString()}</p>
        <p>{props.selectedTime}</p>
        <div>
        <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
        <input ref={emailInputRef} placeholder='@email' value={email} onChange={ (e) => setEmail(e.target.value) } style={ { color: isEmailValid ? 'green' : 'red' }}/>
        <input ref={phoneNumberInputRef} placeholder='Phone Number' value={phoneNumber} onChange={ (e) => setPhoneNumber(e.target.value) } style={ { color: isPhoneNumberValid ? 'green' : 'red' }}/>
        </div>
        <button id="formButton" type="submit">Confirm</button>
    </form>
    
  )
}

export default ShowConfirmationDialog