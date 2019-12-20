import {addFriend, updateNewFriend} from "../type_action/type_action";

let initialState =  {
    friendsData: [
        {
            id: 1,
            name: "Petya",
            lastName: "Petrov",
            avatar: "http://konkurent-azov.ru/pics/avatarki-animirovanie-dlya-skaypa.jpg"
        },
        {
            id: 2,
            name: "Ivan",
            lastName: "Ivanov",
            avatar: "https://klike.net/uploads/posts/2018-06/1528377375_1.jpg"
        },
        {
            id: 3,
            name: "Vasya",
            lastName: "Vasyliev",
            avatar: "http://arrowseries.ru/sites/default/files/photo/arrow-avatar-yxkea.jpg"
        }
    ],
    newFriend: "Name lastName"
}

const sidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        case addFriend:
            let newFriend = {
                id: 4,
                name: state.newFriend,
                lastName: "Bilik",
                avatar: "http://www.youloveit.ru/uploads/posts/2019-08/1565284946_red4.jpg"
            };
            return {
                ...state,
                newFriend: "",
                friendsData: [...state.friendsData, newFriend]
            }
        case updateNewFriend:
            return {
                ...state,
                newFriend: action.name
            }
        default:
            return state;
    }
}

export default sidebarReducer;