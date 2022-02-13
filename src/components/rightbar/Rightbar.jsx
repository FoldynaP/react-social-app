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
      <h4 className="rightbarTitle">Informace o uživateli</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Město:</span>
          <span className="rightbarInfoValue">Česká Třebová</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Zaměstnání:</span>
          <span className="rightbarInfoValue">Řezník</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Věk:</span>
          <span className="rightbarInfoValue">25</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Koníčky:</span>
          <span className="rightbarInfoValue">Sport</span>
        </div>
      </div>
      <h4 className="rightbarTitle">Sledující:</h4>
        <div className="rightbarFollowers">
          <div className="rightbarFollowing">
            <img src="/assets/person/user2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Random Guy</span>
          </div>
        </div>
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