import React from "react";
import postArray from './posts.json';
import PostListItem from "./post-list-item";

const PostList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Posts</h3>
            </li>
            {
                postArray.map(post =>
                    <PostListItem
                        key={post._id}
                        post={post}/>
                )
            }
        </ul>
    );
};

export default PostList;

