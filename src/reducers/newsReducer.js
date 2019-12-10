export const addNews = "ADD-NEWS";
export const updateNewNews = "UPDATE-NEW-NEWS";

let initialState = {
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
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addNews:
            let newNews = {
                id: 3,
                newsPost: state.newNews,
                imgSrc: "https://wheeler-centre-heracles.s3.amazonaws.com/wheeler-centre/assets/f5/217b50a43d11e499b6b32e7db5f189/f7041e00a43d11e480ef111b8bba362b_content_small.jpg"
            }
            return {
                ...state,
                newNews: "",
                newsData: [...state.newsData, newNews]
            }
        case updateNewNews:
            return {
                ...state,
                newNews: action.newPostNews
            }
        default:
            return state;
    }
}

export default newsReducer;