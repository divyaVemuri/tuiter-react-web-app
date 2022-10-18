const WhoToFollowListItem = (who) =>{
    return(`
            <div class="list-group-item align-items-center d-flex">
                    <div class="col-1">
                        <img src=${who.avatarIcon} class="wd-img-dim-48px rounded-circle"/>
                    </div>
                    <div class="col-9 wd-left-padding-12px">
                        <div class="d-flex flex-column wd-left-padding-12px">
                                <span class="ms-2 wd-text-bold">
                                    ${who.userName}
                                    <i class="fa fa-check-circle ms-2"></i>
                                </span>
                            <span class="ms-2">@${who.handle}</span>
                        </div>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-primary me-2 rounded-pill">
                            Follow
                        </button>
                    </div>
                </div>
    `);
}
export default WhoToFollowListItem;