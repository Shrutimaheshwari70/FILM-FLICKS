// import { div } from 'framer-motion/client';
import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Cards from './partials/Cards';
import DropDown from './partials/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';

function Popular() {
    const navigate = useNavigate(); // back krta h ek page piche
    const [Popular,setPopular] = useState([]);
    const [category, setcategory] = useState("movie");
    const [page,setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true)
    document.title = 'Flim-Flicks | Trending'
    let GetPopular = async () => {
        try {
          const { data } = await axios.get(`/${category}/popular?page=${page}`);
        //   console.log(data);
        if(data.results.length>0){
          setPopular((prev)=>[...prev,...data.results])
          setpage((prev)=>prev+1);

        }else{
          sethasMore(false)
        }
        } catch (err) {
          console.log(err);
        }
      };
      const refreshhandler =()=>{
        if(Popular.length === 0){
          GetPopular()
        }else{
          setpage(1);
          setPopular([])
          GetPopular()
        }
      }
      useEffect(()=>{
        refreshhandler()
      },[category])
  return Popular.length>0?(
    <div className='w-screen h-screen px-[5%]'>
        <div className='w-full flex items-center justify-between'>
            <h1 className='text-2xl font-semibold text-zinc-400'>
                <i onClick={()=>navigate(-1)} className='hover:text-[#CC1515] ri-arrow-left-line p-3 text-xl'></i>{" "}Popular{" "}
            </h1>
            <div className='flex items-center w-[80%]'>
                <Topnav/>
                <DropDown title='Category' 
                options={['movie','tv']} 
                func={(e)=>setcategory(e.target.value)} />
                
            </div>
            <div className='w-[2%]'>
                <Topnav/>
            </div>
        </div>
        <InfiniteScroll dataLength={Popular.length} next={GetPopular} hasMore={hasMore} loader={<h1>loading...</h1>}>
        <Cards data={Popular} title={category}/>

        </InfiniteScroll>
    </div>
  ):<Loading/>
}

export default Popular;