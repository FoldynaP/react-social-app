import "./Rightbar.css";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/rightbar/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Random guy</b> a <b>3 další</b> mají dnes narozeniny</span>
        </div>
        <div className="rightbarAdContainer">
          <img src="/assets/post/post2.jpg" alt="" className="rightbarAd" />
          <span className="rightbarAdText">Tohle je reklama</span>
        </div>
        <div className="rightbarFriendListContainer">
          <hr className="rightbarFriendSeparator" />
          <h4 className="rightbarTitle">Přátelé Online</h4>
            <ul className="rightbarFriendList">
              <Online/>
            </ul>
        </div>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
      <h4>  </h4>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar/>
        </div>
      </div>
  )
}