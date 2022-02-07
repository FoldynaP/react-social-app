import "./Share.css";
import {PermMedia} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
          <div className="shareTop">
              {/* <img src="/assets/person/user1.jpg" alt="" className="shareProfileImg" /> */}
              <input placeholder="Přidejte příspěvek" />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia/>
                    <span className="shareOptionText"></span>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}