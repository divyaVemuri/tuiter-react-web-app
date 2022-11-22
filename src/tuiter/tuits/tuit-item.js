import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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
                        {post.replies}
                    </div>
                    <div>
                        <i className="bi bi-arrow-down-up pe-2"></i>
                        {post.retuits}
                    </div>
                    <div>

                        <i onClick={() => {
                            if(post.liked){
                                dispatch(updateTuitThunk({
                                    ...post, liked: false, likes: post.likes - 1}))

                            }else {
                                dispatch(updateTuitThunk({
                                    disliked: false,
                                    ...post, liked: true, likes: post.likes + 1}))
                            }
                        }}
                           className={`bi pe-2 ${post.liked ? "bi-heart-fill wd-color-red":"bi-heart"}`} aria-hidden="true"></i>{post.likes}
                    </div>

                    <div>

                        <i onClick={() => {
                            if(post.disliked){
                                dispatch(updateTuitThunk({
                                    ...post, disliked: false, dislikes: post.dislikes - 1}))

                            }else {
                                dispatch(updateTuitThunk({
                                    liked: false,
                                    ...post, disliked: true, dislikes: post.dislikes + 1}))
                            }
                        }}
                           className={`bi pe-2 ${post.disliked ? "bi-hand-thumbs-down-fill ":"bi-hand-thumbs-down"}`} aria-hidden="true"></i>{post.dislikes}
                    </div>
                    {/*<div>*/}
                    {/*    <i className="bi bi-share pe-2"></i>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};
export default TuitItem;