import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";


let store = {
    _state: {
        profilePage: {
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
            ],
            newPostText: "Front end developer"
        },
        dialogPage: {
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
        },
        news: {
            newsData: [
                {
                    id: 1,
                    newsPost: "I'm senior developer!",
                    imgSrc: "https://sun9-21.userapi.com/c850736/v850736433/43585/axF1WvzWx88.jpg"
                },
                {
                    id: 2,
                    newsPost: "I'm very good speak English!",
                    imgSrc: "https://static10.tgstat.ru/channels/_0/ea/ea4c91727d7441d9c22793d599c06233.jpg"
                }
            ],
            newNews: "good news?"
        },
        sidebar: {
            friendsData: [
                {
                    id: 1,
                    name: "Ibragim",
                    lastName: "Abdualev",
                    avatar: "http://konkurent-azov.ru/pics/avatarki-animirovanie-dlya-skaypa.jpg"
                },
                {
                    id: 2,
                    name: "Sanya",
                    lastName: "Rybalko",
                    avatar: "https://klike.net/uploads/posts/2018-06/1528377375_1.jpg"
                },
                {
                    id: 3,
                    name: "Liza",
                    lastName: "Bezikaeva",
                    avatar: "http://arrowseries.ru/sites/default/files/photo/arrow-avatar-yxkea.jpg"
                }
            ],
            newFriend: "Name lastName"
        }
    },
    _rerenderEntireTree() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.news = newsReducer(this._state.news, action);

        this._rerenderEntireTree(this._state);
    }
};

export default store;


