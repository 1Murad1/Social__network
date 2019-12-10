import React from 'react';
import s from "./news.module.css";
import Newsposts from "./Newsposts/Newsposts";
import {addNewsActionCreator, updateNewNewsActionCreator} from "../../redux/newsReducer";

const News = (props) => {

    let newsElements = props.news.newsData.map(news => <Newsposts newsPost={news.newsPost} imgSrc={news.imgSrc} />)

    let newNewsEl = React.createRef();

    let addNews = () => {
        props.dispatch(addNewsActionCreator());
    };

    let onNewsChange = (event) => {
        let news = event.target.value;
        props.dispatch(updateNewNewsActionCreator(news));
    }

    return (
        <div className={s.news}>
            <h2>News</h2>
            {newsElements}
            <div>
                <textarea ref={newNewsEl} value={props.news.newNews} onChange={onNewsChange} />
                <button onClick={addNews}>addNews</button>
            </div>
        </div>
    )
}

export default News;