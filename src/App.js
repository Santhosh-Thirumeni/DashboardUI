import React, { useState } from "react"
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./App.scss";
import FeedListView from "./components/FeedListView";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OtherPage from "./OtherPage";
import {menuOptions, recentlyAddedMenuOptions} from "./Data"

function App() {
  /**State for handling sidebar visibility */
  const [canShowSideBar, setCanShowSideBar] = useState(false);
  /**Function for updating the state based on menu button's click state in header */
  const updateState = (receivedState) =>{
    setCanShowSideBar(receivedState);
  }
  return (
    <>
    <BrowserRouter>
    <Header onClickButton={updateState}/>
    <SideBar onToggle={canShowSideBar}/>
    <Routes>
    <Route path="/" exact element={<FeedListView />}/>
    {menuOptions.map((page, index)=>(<Route path={page.link} key={index} element={<OtherPage pageName={page.option}/>}/>))}
    {recentlyAddedMenuOptions.map((page, index)=>(<Route path={page.link} key={index} element={<OtherPage pageName={page.option}/>}/>))}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
