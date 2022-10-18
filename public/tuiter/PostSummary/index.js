import posts from "./posts.js";
import PostSummaryItem from "./PostList.js";

const PostList = () => {
    return (`
        <div class="list-group">
            ${posts.map(post => {return(PostSummaryItem(post));}).join('')}
        </div>
    `);
}
export default PostList;
