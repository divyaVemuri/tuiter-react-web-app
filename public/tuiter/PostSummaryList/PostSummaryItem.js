const PostSummaryItem = (post) => {
    return (`
    <div class=" d-flex wd-tile p-2">
        <div class="col-10">
            <div>
                ${post.topic}
            </div>
            <div>
                <span class="">
                     ${post.userName}
                    <i class="fa fa-check-circle ms-1" aria-hidden="true"></i> 2h
                </span>
            </div>
            <div>
                ${post.title}
            </div>
        </div>
        <div class="wd-inline-block align-items-right col-2">
            <img class="wd-image-rounded-border wd-image-dim wd-padding-all-12px "
                 src=${post.image}/>
        </div>
    </div>
    `);
}

export default PostSummaryItem;


