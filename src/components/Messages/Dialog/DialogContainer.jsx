import { connect } from "react-redux"
import { addMessageTextActionCreator, changeInputMessageTextActionCreator } from "../../../redux/messagesReducer"
import { Dialog } from "./Dialog"


// export let DialogContainer = (props) => {

//     let addNewMessage = (text) => {
//         // props.addMessageText(textareaMessage.current.value)
//         // props.changeInputMessageText('')
//         props.store.dispatch(addMessageTextActionCreator(text))
//         props.store.dispatch(changeInputMessageTextActionCreator(''))
//     }
//     let inputOnChange = (text) => {
//         // props.changeInputMessageText(text)
//         props.store.dispatch(changeInputMessageTextActionCreator(text))
//     }

//     return (
//         <Dialog onAddNewMessage={addNewMessage} onInputOnChange={inputOnChange} textMessageData={props.store.getState().messagePage.textMessageData} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        textMessageData: state.messagePage.textMessageData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddNewMessage: (text) => {
            {
                dispatch(addMessageTextActionCreator(text))
                dispatch(changeInputMessageTextActionCreator(''))
            }
        },
        onInputOnChange: (text) => {
            dispatch(changeInputMessageTextActionCreator(text))
        }
    }
}

export let DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)