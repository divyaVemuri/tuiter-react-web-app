import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <div className="border border-light d-flex wd-left-padding-16px wd-inline-block wd-top-padding-12px ">
            <div className="wd-inline-block wd-align">
                {/*<img className="wd-border-circle wd-inline-block wd-img-dim wd-class-top-float "*/}
                {/*     src={`../tuiter/images/${post.image}`}/>*/}

            </div>
            <div className="wd-left-padding-16px wd-inline-block wd-width wd-align">
                <div>
                    <p className="">{post.name} <span
                        className="wd-text-color-grey"> {post.handle} - {post.time}</span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                    </p>
                </div>
                <div>
                    <p className=" wd-text-font-15px">
                        {post.tuit}
                    </p>
                </div>

                <div className="wd-border-all wd-rounded-edges-bottom wd-width">
                    <div className="">
                        <div className="wd-text-font-15px wd-text-bold wd-text-color-white wd-no-padding">
                            <p className="wd-no-margin">{post.imageTitle}</p>
                        </div>
                        <div className="wd-text-font-15px wd-text-color-grey wd-no-margin">
                            <p className="wd-no-margin wd-no-padding">
                                {post.imageText}</p>
                        </div>

                    </div>
                </div>

                <div className="d-flex wd-display-flex wd-bottom-padding-12px">
                    <div>
                        <i className="bi bi-chat pe-2"></i>
                        {post.comments}
                    </div>
                    <div>
                        <i className="bi bi-arrow-down-up pe-2"></i>
                        {post.retweets}
                    </div>
                    <div>
                        <i className="bi bi-heart wd-color-red pe-2"></i>
                        {post.likes}
                    </div>
                    <div>
                        <i className="bi bi-share pe-2"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;