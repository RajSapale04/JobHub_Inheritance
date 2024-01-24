import React from "react";
import { Calendar } from "./Calendar";
import { Group } from "./Group";
import { Home2 } from "./Home2";
import { Interviews } from "./Interviews";
import { Message } from "./Message";
import { Notification } from "./Notification";
import { Podcasts } from "./Podcasts";
import { SearchIcon } from "./SearchIcon";
import { Vector8 } from "./Vector8";
import "./style.css";

export const ForumUiDesign = () => {
  return (
    <div className="forum-UI-design">
      <img className="main" alt="Main" src="main.png" />
      <header className="header">
        <div className="main-2">
          <div className="div-2">
            <img className="logo" alt="Logo" src="logo.svg" />
            <div className="hipnode">Knowledgechain</div>
          </div>
          <div className="main-3">
            <div className="icons">
              <div className="home">
                <Home2 className="icon-instance-node" color="white" />
              </div>
              <div className="home-wrapper">
                <Calendar className="icon-instance-node" color="#F4F6F8" />
              </div>
              <div className="home-wrapper">
                <Group
                  divClassName="design-component-instance-node"
                  ellipseClassName="group-instance"
                  ellipseClassNameOverride="group-instance"
                  img="subtract-7.svg"
                  subtract="subtract-6.svg"
                  subtract1="subtract-5.svg"
                  subtract2="subtract-4.svg"
                />
              </div>
              <div className="home-wrapper">
                <Podcasts className="icon-instance-node" color="#F4F6F8" />
              </div>
              <div className="home-wrapper">
                <Interviews className="icon-instance-node" color="#F4F6F8" />
              </div>
            </div>
            <div className="search">
              <div className="title-wrapper">
                <div className="title">
                  <input className="type-here-to-search" placeholder="Type here to search..." type="text" />
                  <SearchIcon className="search-icon" color="#858EAD" />
                </div>
              </div>
              <div className="right-info">
                <div className="div-3">
                  <Message className="icon-instance-node" color="#F4F6F8" />
                </div>
                <div className="div-3">
                  <Notification className="icon-instance-node" color="#F4F6F8" stroke="#262D34" />
                </div>
                <div className="div-2">
                  <div className="name">
                    <div className="profile-image">
                      <div className="mask-group-wrapper">
                        <img className="mask-group" alt="Mask group" src="mask-group.png" />
                      </div>
                    </div>
                    <div className="text-wrapper">AR. Jakir</div>
                  </div>
                  <Vector8 className="icon-instance-node" color="#F4F6F8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
