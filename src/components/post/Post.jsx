import "./Post.css"
import {MoreVert, ThumbUp, ThumbDown} from "@material-ui/icons"
import {useState} from "react";
import {Users} from "../../PostsData"

export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)

        if(!isLiked){
            document.querySelector('.postLikeCounter').classList.add('liked');
        } else {
            document.querySelector('.postLikeCounter').classList.remove('liked');
        }
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg"src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp htmlColor="Green" onClick={likeHandler}/>
                    <span className="postLikeCounter">{like}To se mi líbí</span>
                    <ThumbDown htmlColor="Red"/>
                    <span className="postLikeCounter">To se mi nelíbí</span>
                </div>
                <div className="postBottomRight">
                    <span className="potBottomRightComments">{post.comment} Komentáře</span>
                </div>
            </div>
          </div>
        </div>
    )
  }