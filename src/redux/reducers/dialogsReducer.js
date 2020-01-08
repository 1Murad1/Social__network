import {addMessage} from "../type_action/type_action";

let initialState = {
    dialogsData: [
        {
            name: "Sanya",
            id: 1
        },
        {
            name: "Vika",
            id: 2
        },
        {
            name: "Lera",
            id: 3
        },
        {
            name: "Masha",
            id: 4
        },
        {
            name: "Olya",
            id: 5
        }
    ],
    messagesData: [
        {
            message: "Hello",
            id: 1
        },
        {
            message: "How are you?",
            id: 2
        },
        {
            message: "Good night",
            id: 3
        }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {
                message: action.newMessageText,
                id: 4
            };
            return  {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }
        default:
            return state;
    }
}

export default dialogsReducer;