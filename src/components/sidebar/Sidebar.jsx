import "./Sidebar.css";
import { RssFeed } from "@material-ui/icons"
import { Event } from "@material-ui/icons"
import { MailOutline } from "@material-ui/icons"
import { OndemandVideo } from "@material-ui/icons"
import { Group } from "@material-ui/icons"
import { WorkOutline } from "@material-ui/icons"
import { Storefront } from "@material-ui/icons"
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemtext">Hlavní obsah</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemtext">Události</span>
          </li>
          <li className="sidebarListItem">
            <MailOutline className="sidebarIcon" />
            <span className="sidebarListItemtext">Zprávy</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideo className="sidebarIcon" />
            <span className="sidebarListItemtext">Videa</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemtext">Memes</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemtext">Inzeráty</span>
          </li>
          <li className="sidebarListItem">
            <Storefront className="sidebarIcon" />
            <span className="sidebarListItemtext">Market</span>
          </li>
        </ul>
        <div className="sidebarMore">
          <a className="sidebarMoreBtn" href="#">
            <span class="bottom"></span>
          </a>
        </div>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <CloseFriend/>
        </ul>
      </div>
    </div>
  )
}