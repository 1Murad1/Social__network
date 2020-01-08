import React from 'react';
import s from "./dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../helpers/validators/validator";

const Dialogs = (props) => {
    let dialogElements = props.dialogPage.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messageElements = props.dialogPage.messagesData.map(m => <Messages message = {m.message} />);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    if(!props.isAuth) return <Redirect to = "/profile" />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messagesItems}>
                <div>{messageElements}</div>
                <NewAddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const  maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]} name="newMessageText" placeholder="Enter your message" />
            </div>
            <div>
                <button>addMessage</button>
            </div>
        </form>
    )
}

const NewAddMessageForm = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;