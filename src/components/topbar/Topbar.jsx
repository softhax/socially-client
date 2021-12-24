import "./topbar.css"
import {Search,Person,Chat,Notifications} from '@material-ui/icons';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import { useContext } from "react";
import {logoutCall} from '../../apiCalls';

export default function Topbar() {

    const {user,dispatch} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleClick = () => {
        logoutCall(
          dispatch
        );
        window.location.replace("/");
      }

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="topbarLogo">Socially</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input type="text" className="searchInput" placeholder="Search for post, friend or video..." />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={user?`/profile/${user.username}`:""}>
                    <img src={user && user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImage" />
                   { user &&  <span className="topbarLink" onClick={handleClick}>Sign out</span>}
                </Link>
            </div>
        </div>
    )
}
