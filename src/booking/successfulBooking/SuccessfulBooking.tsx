import { useState } from "react";

interface Props {
    selectedDate: Date | null;
    selectedTreatment: string;
    selectedTime: string;
    bookingNumber: number
    updateSelectedDate: (date: Date | null) => void;
  }

function SuccessfulBooking(props: Props) {

    const [randomStaff] = useState<string[]>(["Azazel", "Belial"]);

    const randomNumber: number = Math.random() < 0.5 ? 0 : 1;

  
    const handleClick = () => {
        props.updateSelectedDate(null);
    }
    
    return (
    <>
    <h2>Success!! ...and all it costs is your soul!</h2>
    <div>
    <h2>Booking Number: {props.bookingNumber}</h2>
    <h3>{props.selectedDate?.toDateString()}</h3>
    <h3>{props.selectedTime}</h3>
    <h3>{props.selectedTreatment} with {randomStaff[randomNumber]}</h3>
    </div>
    <button onClick={() => handleClick()}>Return</button>
    </>
  )
}

export default SuccessfulBooking