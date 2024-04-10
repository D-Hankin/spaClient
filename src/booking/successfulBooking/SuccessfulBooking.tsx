interface Props {
    updateSelectedDate: () => void;
}

function SuccessfulBooking(props: Props) {
  
    const handleClick = () => {
        props.updateSelectedDate();
    }
    
    return (
    <>
    <h2>SuccessfulBooking!!!</h2>
    <button onClick={() => handleClick()}>Start a New Booking</button>
    </>
  )
}

export default SuccessfulBooking