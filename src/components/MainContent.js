import React from "react";
import TopMenu from "./TopMenu";
import AlbumList from "./AlbumList";
import GenrePicker from "./GenrePicker";


function MainContent() {
  return <main>
    <TopMenu/>

    <GenrePicker/>
    <AlbumList/>
    
    </main>;
}

export default MainContent;
