
import profileReducer from "./profileReducer";
import  {addPostActionCreator, deletePostActionCreator} from "../actions/ProfileAction";
import React from "react";

let state = {
    postData: [
        {
            id: 1,
            message: "I'm ReactJs developer!",
            likesCount: 5
        },
        {
            id: 2,
            message: "I'm programist!!!",
            likesCount: 15
        }
    ]
}

it('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator ("it-kamasutra.com");

    // 2. action
    let newState = profileReducer (state, action)
    // 3. expectation

    expect(newState.postData.length).toBe(3)
});

it('delete post', () => {
    // 1. test data
    let action = deletePostActionCreator (1);

    // 2. action
    let newState = profileReducer (state, action)
    // 3. expectation

    expect(newState.postData.length).toBe(1)
});