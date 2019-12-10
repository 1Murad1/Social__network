import React from 'react';
import s from "./dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    let dialogElements = props.dialogPage.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messageElements = props.dialogPage.messagesData.map(m => <Messages message = {m.message} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let message = event.target.value;
        props.dispatch(updateNewMessageActionCreator(message));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messagesItems}>
                {messageElements}
                <div>
                    <textarea ref = {newMessage} onChange={onMessageChange} value = {props.dialogPage.newMessageText}> </textarea>
                    <button onClick={addMessage}>addMessage</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;