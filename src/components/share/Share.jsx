import "./Share.css";
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
          <div className="shareTop">
              <img src="/assets/person/user1.jpg" alt="" className="shareProfileImg" />
              <input  className="shareInputText" placeholder="Přidejte příspěvek" />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia className="shareIcon"/>
                    <span className="shareOptionText">Fotka nebo video</span>
                </div>
                <div className="shareOption">
                    <Label className="shareIcon"/>
                    <span className="shareOptionText">Označit</span>
                </div>
                <div className="shareOption">
                    <Room className="shareIcon"/>
                    <span className="shareOptionText">Poloha</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions className="shareIcon"/>
                    <span className="shareOptionText">Nálada</span>
                </div>
            </div>
            <div className="shareButtons">
                  <button className="shareButton">Sdílet</button>
            </div>
          </div>
      </div>
    </div>
  )
}