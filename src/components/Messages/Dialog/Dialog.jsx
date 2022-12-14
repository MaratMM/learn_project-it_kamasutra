import style from "./Dialog.module.css"
import React from "react"


export let Dialog = (props) => {

    let textMessage = props.textMessageData.map((elem) => {
        return (
            <div className={style.itemDialog}>{elem.textMessage}</div>
        )
    })
    
    let textareaMessage = React.createRef()
    let addNewMessage = () => {
        props.addMessageText(textareaMessage.current.value)
        props.changeInputMessageText('')
    }
    let inputOnChange = () => {
        let text = textareaMessage.current.value
        props.changeInputMessageText(text)
    }

    return (
        <div className={style.dialog}>
            {textMessage}
            <textarea ref={textareaMessage} value={props.inputMessageText} onChange={inputOnChange} name="" id="" cols="30" rows="10"></textarea>
                    <button onClick={addNewMessage}>send Message</button>
        </div>
    )
}