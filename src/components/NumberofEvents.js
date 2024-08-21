import {useState} from "react";



const NumberofEvents = ({event}) => {
    const [number, setNumber] = useState(32);

    const handleInputChanged = (e) => { 
        setNumber(e.target.value)

    }

    return (
    <div id = "NumberofEvents">
        <div id = 'event textbox'>
        <input
        type="text"
        className="event" 
        value = {number}
        onChange = {handleInputChanged}

      />
    </div>
        
        </div>
    )

}

export default NumberofEvents;