import "./Share.css";
import {PermMedia, Label, Room, EmojiEmotions, AttachFile} from "@material-ui/icons"

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
                    <PermMedia className="shareIcon" htmlColor="Blue"/>
                    <span className="shareOptionText">Fotka nebo video</span>
                </div>
                <div className="shareOption">
                    <AttachFile className="shareIcon" htmlColor="purple"/>
                    <span className="shareOptionText">Soubor</span>
                </div>
                <div className="shareOption">
                    <Room className="shareIcon" htmlColor="green"/>
                    <span className="shareOptionText">Poloha</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions className="shareIcon" htmlColor="gold"/>
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