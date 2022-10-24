import React from "react";

const PostListItem = (
    {
        post = {
            name: 'Elon Musk',
            handle: 'elonmusk',
            time: '23h',
            title: 'Amazing show about @inspiration4x mission!',
            profilePic: '../images/profilePicture.png',
            comments: '4.2k',
            retweets: '3.5k',
            likes: '37.5k',
            image: '../images/icon.png',
            imageTitle: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
            imageText: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4' +
                ' crew on the first all-civilian orbital space ...'
        }
    }
) => {
    return (
        <div className="d-flex wd-left-padding-16px wd-inline-block wd-top-padding-12px ">
            <div className="wd-inline-block wd-align">
                <img className="wd-border-circle wd-inline-block wd-img-dim wd-class-top-float "
                     src={`../tuiter/images/${post.profilePic}`}/>
            </div>
            <div className="wd-left-padding-16px wd-inline-block wd-width wd-align">
                <div>
                    <p className="wd-text-color-white">{post.name} <span
                        className="wd-text-color-grey"> @{post.handle} - {post.time}</span>
                    </p>
                </div>
                <div>
                    <p className="wd-text-color-white wd-text-font-15px wd-width-506px wd-bottom-padding-12px">
                        {post.title}
                    </p>
                </div>
                <div>
                    <img className="wd-img-size wd-rounded-edges-top" src={`../tuiter/images/${post.image}`}/>
                </div>
                <div className="wd-border-all wd-rounded-edges-bottom wd-width">
                    <div className="wd-padding-all-12px">
                        <div className="wd-text-font-15px wd-text-bold wd-text-color-white wd-no-padding">
                            <p className="wd-no-margin">{post.imageTitle}</p>
                        </div>
                        <div className="wd-text-font-15px wd-text-color-grey wd-no-margin">
                            <p className="wd-no-margin wd-no-padding">
                                {post.imageText}</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex wd-display-flex wd-top-padding-12px">
                    <div>
                        <i className="fa fa-comment-alt"></i>
                        {post.comments}
                    </div>
                    <div>
                        <i className="fa fa-retweet"></i>
                        {post.retweets}
                    </div>
                    <div>
                        <i className="fa fa-heart wd-color-red "></i>
                        {post.likes}
                    </div>
                    <div>
                        <i className="fa fa-upload"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostListItem;