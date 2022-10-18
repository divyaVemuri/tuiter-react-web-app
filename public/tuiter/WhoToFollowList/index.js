import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollow = () =>{

    return (`
        <div class = "list-group">
            <div class="list-group-item align-items-center d-flex ">
                Who to follow
            </div>
            ${who.map(w => {return(WhoToFollowListItem(w));}).join('')}
        </div>
    `);
}
export default WhoToFollow;