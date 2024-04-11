interface Props {
    selectedDate: Date | null;
    updateSelectedDate: (date: Date | null) => void;
    selectedTreatment: string;
    updateSelectedTreatment: (treatment: string) => void;
    selectedTime: string;
    updateSelectedTime: (time: string) => void;
    confirmation: Boolean;
    updateConfirmation: (value: Boolean) => void;
}

function ReturnButton(props: Props) {

    const handleClick = () => {
        switch (true) {
            case props.selectedDate != null && props.selectedTreatment == "":
                props.updateSelectedDate(null); 
                break;
            case props.selectedDate != null && props.selectedTreatment != "" && props.selectedTime === "":
                props.updateSelectedTreatment("");
                break;
            case props.selectedDate != null && props.selectedTreatment != "" && props.selectedTime !== "":
                props.updateSelectedTime("");
                props.updateConfirmation(false);
                break;

        }
    }

  return (
    <button onClick={handleClick}>Back</button>
  )
}

export default ReturnButton