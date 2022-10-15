import React,{useState} from "react";

export default function Text(props) {

    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (<div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={()=>{
            props.bclick(inputText,setInputText);

        }}>
            <span>Add</span>
        </button>
    </div>)

}