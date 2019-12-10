export const addMessage = "ADD-MESSAGE";
export const updateNewMessage = "UPDATE-NEW-MESSAGE";

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
    ],
    newMessageText: "You wrestler?"
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {
                message: state.newMessageText,
                id: 4
            };
            return  {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, newMessage]
            }
        case updateNewMessage:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state;
    }
}

export default dialogsReducer;