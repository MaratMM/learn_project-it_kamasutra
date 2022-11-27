import style from "./Dialog.module.css"


export let Dialog = (props) => {

    let textMessage = props.textMessageData.map((elem) => {
        return (
            <div className={style.itemDialog}>{elem.textMessage}</div>
        )
    })
    

    return (
        <div className={style.dialog}>
            {textMessage}
        </div>
    )
}