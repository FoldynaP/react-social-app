import "./Sidebar.css";
import { RssFeed } from "@material-ui/icons"
import { Event } from "@material-ui/icons"
import { MailOutline } from "@material-ui/icons"
import { OndemandVideo } from "@material-ui/icons"
import { Group } from "@material-ui/icons"
import { WorkOutline } from "@material-ui/icons"
import { Storefront } from "@material-ui/icons"


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemtext">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemtext">Events</span>
          </li>
          <li className="sidebarListItem">
            <MailOutline className="sidebarIcon" />
            <span className="sidebarListItemtext">Messages</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideo className="sidebarIcon" />
            <span className="sidebarListItemtext">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemtext">Groups</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemtext">Jobs</span>
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
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jan Novák</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kuba Skála</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user1.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Vojta Hylák</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user1.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Petr Nárožný</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Hanka Nejedlá</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lenka Smrková</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Filip Kozel</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Michal Korbáček</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Zdeněk Šťastný</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Honza Vomočil</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Klára Vejdová</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Nikola Nárožná</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jan Pobožný</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/user2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Svatopluk Čech</span>
          </li>
        </ul>
      </div>
    </div>
  )
}