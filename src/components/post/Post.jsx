import "./Post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/user1.jpg" alt="" />
                        <span className="postUsername">Random Guy</span>
                        <span className="postDate">1 hour ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
            <div className="postCenter">
                <span className="postText">Today was a very special day!!!</span>
                <img className="postImg"src="/assets/post/post1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="" alt="" />
                    <span className="postLikeCounter">109 people like it</span>
                </div>
                <div className="postBottomRight">

                </div>
            </div>
          </div>
        </div>
    )
  }