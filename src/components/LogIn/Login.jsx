import React from "react";
import s from "./login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {required} from "../../helpers/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/actions/authAction";
import {Redirect} from "react-router-dom";

const LogInForm = ({handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field validate={[required]} type="email" component={Input} name={"email"} placeholder={"Email"} required />
                </div>
                <div>
                    <Field validate={[required]} type="password" component={Input} name={"password"} placeholder={"Password"} required />
                </div>
                <div>
                    <label for={"chx"}>
                        <Field  type={"checkbox"} component={Input} name={"rememberMe"} id={"chx"} /> remember me
                    </label>
                </div>
                {error && <div className={s.formSummaryError}>{error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'}) (LogInForm)

const LogIn = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1 className={s.item}>LogIn</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login (email, password, rememberMe) {
            dispatch(login(email, password, rememberMe));
        },
        logout() {
            dispatch(logout())
        }
    }

}

export default connect (mapStateToProps, mapDispatchToProps) (LogIn);


