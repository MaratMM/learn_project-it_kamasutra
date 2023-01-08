import style from "./Dialog.module.css"
import React from "react"
import { addMessageTextActionCreator, changeInputMessageTextActionCreator } from "../../../redux/state"


export let Dialog = (props) => {

    let textMessage = props.textMessageData.map((elem) => {
        return (
            <div className={style.itemDialog}>{elem.textMessage}</div>
        )
    })
    
    let textareaMessage = React.createRef()
    let addNewMessage = () => {
        // props.addMessageText(textareaMessage.current.value)
        // props.changeInputMessageText('')
        props.dispatch(addMessageTextActionCreator(textareaMessage.current.value))
        props.dispatch(changeInputMessageTextActionCreator(''))
    }
    let inputOnChange = () => {
        let text = textareaMessage.current.value
        // props.changeInputMessageText(text)
        props.dispatch(changeInputMessageTextActionCreator(text))
    }

    return (
        <div className={style.dialog}>
            {textMessage}
            <textarea ref={textareaMessage} value={props.inputMessageText} placeholder='Enter you message' onChange={inputOnChange} name="" id="" cols="30" rows="10"></textarea>
                    <button onClick={addNewMessage}>send Message</button>
        </div>
    )
}