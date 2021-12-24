import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from "../../components/feed/Feed"
import "./profile.css";
import {useState,useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState({});
    const username = useParams().username;

    useEffect(()=>{
        const fetchUser  = async () => {
            const res = await axios.get(`/users?username=${username}`)
            setUser(res.data);
        };
        fetchUser();
    },[username]);


    return (
        <>
            <Topbar/>
            <div className="profile">
                <Leftbar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImage" src={user.coverPicture ? PF+user.coverPicture : PF+"person/noCover.png"} alt="" />
                            <img className="profileUserImage" src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        {/* todo */}
                        <Feed username={username}/> 

                        <Rightbar user={user}/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
