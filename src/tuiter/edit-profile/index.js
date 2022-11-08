import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfileComponent = ({stopEdit}) => {
    const profile = useSelector(state => state.profile);
    const [profileState, setProfileState] = React.useState({profile})
    const dispatch = useDispatch();
    const updateProfileData = (event) => {
        setProfileState({
            ...profileState,
            [event.target.name]: event.target.value
        })
    }
    const saveClickHandler = () => {
        dispatch(updateProfile({profile: profileState}));
    }
    return(
        <>
            <div className="border border-light">
                <div className="d-flex ps-2 pe-2 align-items-center justify-content-between">
                    <div><i className="bi bi-x-lg" onClick={stopEdit} aria-hidden="true"></i></div>
                    <p><strong>Edit Profile</strong></p>
                    <div className="float-right"><button className="btn btn-dark rounded-pill border me-2" onClick={() => {stopEdit(); saveClickHandler()}}>Save</button></div>
                </div>
                <div className="wd-height-250px">
                    <div className="position-relative">
                        <img className="w-100 wd-height-200px" src={`./images/${profile.bannerPicture}`}/>
                        <img className="rounded-circle position-absolute wd-imgdim-96px wd-pic" src={`./images/${profile.profilePicture}`}/>
                    </div>
                </div>
                <div className="wd-margin-5px ">
                    <div className="form-floating">
                        <input type="text" id="firstName" className="form-control" name="firstName" defaultValue={profile.firstName} onChange={(event) => updateProfileData(event)}/>
                        <label for="firstName">First Name</label>
                    </div>
                    <div className="wd-top-margin-12px form-floating">
                        <input type="text" id="lastName" className="form-control" name="lastName" defaultValue={profile.lastName} onChange={(event) => updateProfileData(event)}/>
                        <label for="lastName">Last Name</label>
                    </div>
                    <div className="wd-top-margin-12px form-floating">
                        <textarea id="bio" className="form-control" name="bio" defaultValue={profile.bio} onChange={(event) => updateProfileData(event)}/>
                        <label for="bio">Bio</label>
                    </div>
                    <div className="wd-top-margin-12px form-floating">
                        <input type="text" id="location" className="form-control" name="location" defaultValue={profile.location} onChange={(event) => updateProfileData(event)}/>
                        <label for="location">Location</label>
                    </div>
                    <div className="wd-top-margin-12px form-floating">
                        <input type="text" id="website" className="form-control" name="website" defaultValue={profile.website} onChange={(event) => updateProfileData(event)}/>
                        <label for="website">Website</label>
                    </div>
                    <div className="wd-top-margin-12px">
                        <label for="dateOfBirth">Date of Birth</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" defaultValue={profile.dateOfBirth} onChange={(event) => updateProfileData(event)}/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EditProfileComponent;