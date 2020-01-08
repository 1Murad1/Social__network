import React from "react";
import s from "./myPost.module.css";
import Post from "./Post/Post";
import {maxLengthCreator, required} from "../../../helpers/validators/validator";
import {Textarea} from "../../../common/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";

const maxLength10 = maxLengthCreator(10);

let NewPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className={s.form}>
                <div>
                    <Field name={"newPostText"} component={Textarea} validate = {[required, maxLength10]} />
                </div>
                <div>
                    <button>addPost</button>
                    <button>remove</button>
                </div>
            </form>
        </div>

    )
}

let NewAddPostForm = reduxForm({form: 'profileAddPostForm'})(NewPostForm)

const MyPost = React.memo(props => {
     
    let postElements = props.profilePage.postData.map(p => <Post message = {p.message} likesCount = {p.likesCount} />)

    const newAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.myPost}>
            <h3>MyPost</h3>
            <NewAddPostForm onSubmit={newAddPost} />
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
})

export default MyPost;