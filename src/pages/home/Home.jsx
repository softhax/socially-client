import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from "../../components/feed/Feed"
import "./home.css"


export default function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Leftbar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}
