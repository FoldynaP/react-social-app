import "./Post.css"
import {MoreVert, ThumbUp, ThumbDown} from "@material-ui/icons"

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
                    <ThumbUp htmlColor="Green"/>
                    <span className="postLikeCounter">5 To se mi líbí</span>
                    <ThumbDown htmlColor="Red"/>
                    <span className="postLikeCounter">2 To se mi nelíbí</span>
                </div>
                <div className="postBottomRight">
                    <span className="potBottomRightComments">4 Komentáře</span>
                </div>
            </div>
          </div>
        </div>
    )
  }