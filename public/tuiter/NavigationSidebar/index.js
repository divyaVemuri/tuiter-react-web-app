const NavigationSidebar = () => {
    return (`
   <div class="list-group">
            <a href="" class="list-group-item align-items-center d-flex">
                <i class="fab fa-twitter" style="color: white"></i>
            </a>
            <a href="" id="home" class="list-group-item align-items-center d-flex">
                <i class="fa fa-home ms-2" style="color: white"></i>
                <span class="d-none d-lg-block ms-2">Home</span>
            </a>
            <a href="" id="explore" class=" list-group-item align-items-center d-flex">
                <i class="fa fa-hashtag ms-2" style="color: white"></i>
                <span class="d-none d-lg-block ms-2">Explore</span>
            </a>
            <a href="" class="list-group-item align-items-center d-flex">
                <i class="fa fa-bell ms-2" style="color: white"></i>
                <span class="d-none d-lg-block ms-2">Notifications</span>
            </a>
            <a href="" class="list-group-item align-items-center d-flex">
                <i class="fa fa-envelope ms-2" style="color: white"></i>
                <span class="d-none d-lg-block ms-2">Messages</span>
            </a>
            <a href="" class="list-group-item align-items-center d-flex">
                <i class="fa fa-bookmark ms-2" style="color: white"></i>
                <span class="d-none d-lg-block ms-2">Bookmarks</span>
            </a>
            <a href="" class="list-group-item align-items-center d-flex">
                <i class="fa fa-list-ul ms-2" style="color: white"></i>
                <span class="d-none d-lg-block ms-2">Lists</span>
            </a>
            <a href="" class="list-group-item align-items-center d-flex">
                <i class="fa fa-user ms-2 me-1" style="color: white"></i>
                <span class="d-none d-lg-block ms-2">Profile</span>
            </a>
            <a href="" class="list-group-item align-items-center d-flex">
                <i class="fa fa-ellipsis-h ms-2" style="color: white"></i>
                <span class="d-none d-lg-block ms-2">More</span>
            </a>
            <button class="btn btn-primary mt-2 rounded-pill">
                Tweet
            </button>
              </div>
 `);

}
export default NavigationSidebar;
