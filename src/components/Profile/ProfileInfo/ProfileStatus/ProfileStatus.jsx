import React from "react";
import s from "./profileStatus.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: true,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState ( {
            editMode: false
        })
    }

    deActiveEditMode = () => {
        this.setState ( {
            editMode: true
        });
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status:  e.currentTarget.value
        })
    }


    render() {
        return (
            <div className={s.profileStatus}>
                {
                    this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.activeEditMode}>{this.props.status || "-----"}</span>
                        </div>
                        : <div>
                            <input onBlur={this.deActiveEditMode} autoFocus={true} onChange={this.onStatusChange} value={this.state.status} />
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;