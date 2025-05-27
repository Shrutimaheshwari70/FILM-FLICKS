// import { div } from 'framer-motion/client';
import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Cards from './partials/Cards';
import DropDown from './partials/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    const navigate = useNavigate(); // back krta h ek page piche
    const [trending,settrending] = useState([]);
    const [duration,setduration] = useState('day');
    const [category, setcategory] = useState("all");
    const [page,setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true)
    document.title = 'Flim-Flicks | Trending'
    let GetTrending = async () => {
        try {
          const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
        //   console.log(data);
        if(data.results.length>0){
          settrending((prev)=>[...prev,...data.results])
          setpage((prev)=>prev+1);

        }else{
          sethasMore(false)
        }
        } catch (err) {
          console.log(err);
        }
      };
      const refreshhandler =()=>{
        if(trending.length === 0){
          GetTrending()
        }else{
          setpage(1);
          settrending([])
          GetTrending()
        }
      }
      useEffect(()=>{
        refreshhandler()
      },[category,duration])
  return trending.length>0?(
    <div className='w-screen h-screen px-[5%]'>
        <div className='w-full flex items-center justify-between'>
            <h1 className='text-2xl font-semibold text-zinc-400'>
                <i onClick={()=>navigate(-1)} className='hover:text-[#CC1515] ri-arrow-left-line p-3 text-xl'></i>{" "}Trending{" "}
            </h1>
            <div className='flex items-center w-[80%]'>
                <Topnav/>
                <DropDown title='Category' 
                options={['movie','tv','all']} 
                func={(e)=>setcategory(e.target.value)} />
                <DropDown title='Duration' 
                options={['day','week']} 
                func={(e)=>setduration(e.target.value)} />
                
            </div>
        </div>
        <InfiniteScroll dataLength={trending.length} next={GetTrending} hasMore={hasMore} loader={<h1>loading...</h1>}>
        <Cards data={trending} title="tv"/>

        </InfiniteScroll>
    </div>
  ):<Loading/>
}

export default Trending;