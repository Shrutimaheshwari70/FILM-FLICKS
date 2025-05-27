import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import axios from '../utils/Axios'
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown";
import Loading from "./Loading";
function Home() {
  document.title = "Flim-Flicks | Homepage";
  const [wallpaper,setwallpaper] = useState(null);
  const [trending, settrending] = useState(null)
  const [category, setcategory] = useState("all")
  let getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      // console.log(data);
      let randomdata =
      data.results[(Math.random()*data.results.length).toFixed()];
      setwallpaper(randomdata)
    } catch (err) {
      console.log(err);
    }
  };
  let getTrending = async () =>{
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      // console.log(data);
      settrending(data.results)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getHeaderWallpaper();
    getTrending()
  }, []);
  return trending && wallpaper? (
    <>
    <Sidenav />
    <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
      <Topnav />
      <Header data={wallpaper} />
      <div className="flex justify-between p-2">
        <h1 className="text-xl font-bold text-white">Trending Now🔥</h1>
        <br/>
        <DropDown
        title= "Filter"
        options={["movie","tv","all"]}
        func={(e)=>setcategory(e.target.value)}
        />
      </div>
      <HorizontalCards data={trending}/>
    </div>  
  </>
  ) : (
    <Loading/>
  );
}
export default Home;
