import React from "react";
import {useState, useEffect} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect ( () => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

     const deActiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
                {!editMode &&
                    <div>
                       <b>Status</b>: <span onDoubleClick={activeEditMode}>{props.status || "-----"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onBlur={deActiveEditMode} onChange={onStatusChange} value={status} autoFocus={true} />
                    </div>

                }
        </div>
    )

}


export default ProfileStatusWithHooks;

