import React from 'react';
import {addNewsActionCreator, updateNewNewsActionCreator} from "../redux/actions/NewsAction";
import {connect} from "react-redux";
import News from "../components/News/News";

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNews: () => {
            dispatch(addNewsActionCreator())
        },
        updateNewNews: (news) => {
            dispatch(updateNewNewsActionCreator(news))
        }
    }
};

const NewsContainer = connect (mapStateToProps, mapDispatchToProps) (News);

export default NewsContainer;