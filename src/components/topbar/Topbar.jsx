import "./Topbar.css"
import {Search, Person, Chat, Notifications, MenuRounded} from "@material-ui/icons"

export default function Topbar() {
  return (
  <div className="topbarContainer">
      <div className="topbarLeft">
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        <span className="logo">Asocial site</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Vyhledat" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person className="topbarIcon"/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat className="topbarIcon"/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications className="topbarIcon"/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/user1.jpg" alt="" className="topbarImg" />
      </div>
  </div>
  )
}
