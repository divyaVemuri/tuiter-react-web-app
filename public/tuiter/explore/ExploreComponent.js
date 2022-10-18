import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
         <div class="col">
        <div>
            <div class=" row d-flex align-items-center">
                <div class="col-11">
                    <input type="text" class="form-control rounded-pill w-600"
                           placeholder="Search Twitter">


                </div>
                <a href="" class="col-1"><i class="fa fa-cog ms-2" aria-hidden="true"></i></a>
            </div>

            <div>
                <ul class="nav nav-tabs mt-2">
                    <li class="nav-item">
                        <a class="nav-link active fw-bold" href="">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold" href="">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold" href="">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold" href="">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold" href="">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div>
                <div class="card wd-tile w-100 mt-2">
                    <img src="space.png" class="card-img rounded-0 w-100">
                    <div class="card-img-overlay d-flex align-items-end text-white"><h2>SpaceX's
                        Starship</h2></div>
                </div>
                ${PostSummaryList()}
            </div>
            
            
        </div>
    </div>
       <!-- image with overlaid text -->
       
`);


}

export default ExploreComponent;
