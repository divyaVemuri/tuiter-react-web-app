const PostListItem = (post) =>{

    return(`
        <div class="d-flex wd-left-padding-16px wd-inline-block wd-top-padding-12px ">
            <div class="wd-inline-block wd-align">
                <img class="wd-border-circle wd-inline-block wd-img-dim wd-class-top-float "
                src=${post.profilePic}/>
            </div>
            <div class="wd-left-padding-16px wd-inline-block wd-width wd-align">
                <div>
                    <p class="wd-text-color-white">${post.name} <span class="wd-text-color-grey"> @${post.handle} ${post.time}</span>
                    </p>
                </div>
                <div>
                    <p class="wd-text-color-white wd-text-font-15px wd-width-506px wd-bottom-padding-12px">
                        ${post.title}
                    </p>
                </div>
                <div>
                    <img class="wd-img-size wd-rounded-edges-top" src="${post.image}"/>
                </div>
                <div class="wd-border-all wd-rounded-edges-bottom wd-width">
                    <div class="wd-padding-all-12px">
                        <div class="wd-text-font-15px wd-text-bold wd-text-color-white wd-no-padding">
                            <p class="wd-no-margin">${post.imageTitle}</p>
                        </div>
                        <div class="wd-text-font-15px wd-text-color-grey wd-no-margin">
                            <p class="wd-no-margin wd-no-padding">
                                ${post.imageText}</p>
                        </div>
                    </div>
                </div>
               
                <div class="d-flex wd-display-flex wd-top-padding-12px">
                    <div>
                        <i class="fa fa-comment-alt"></i>
                            ${post.comments}
                    </div>
                    <div>
                        <i class="fa fa-retweet"></i>
                            ${post.retweets}
                    </div>
                    <div>
                        <i class="fa fa-heart wd-color-red "></i>
                            ${post.likes}
                    </div>
                    <div>
                        <i class="fa fa-upload"></i>
                            
                    </div>
                </div>
            </div>
        </div>
    `);
}

export default PostListItem;