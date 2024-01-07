import React, { useState } from 'react'
import Profile from "../../Assets/Profile.svg"
import HomeIcon from "../../Assets/Home.svg"
import Message from "../../Assets/Message.svg"
import Trending from "../../Assets/Trending.svg"
import Reels from "../../Assets/Reels.svg"
import Search from "../../Assets/Search.svg"
import Logo from "../../Assets/Logo.svg"
import Logout from "../../Assets/Logout.svg"
import User from "../../Assets/User.svg"
import DummyImage from "../../Assets/DummyImage.png"
import Heart from "../../Assets/Heart.svg"
import FilledHeart from "../../Assets/FilledHeart.svg"
import Comments from "../../Assets/Comment.svg"
import Share from "../../Assets/Share.svg"
import SavePost from "../../Assets/SavePost.svg"
import Dot from "../../Assets/Dot.svg"
import AddPost from "../../Assets/AddPost.svg"
import "./home.css"
import CreatePost from './CreatePost'
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal, selectModalState } from "../../Features/ModalSlice";

export default function Home() {
  const [isLiked , setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const showModal = useSelector(selectModalState);
  
  const handleLikeButton = () =>{
    setIsLiked(!isLiked);
  }

  const handleCreatePost = () => {
    dispatch(openModal());
  };

  return (
    <div className='h-screen flex overflow-hidden'>
      <div className='w-[15%] bg-white flex flex-col'>
        <div className='h-[15%] flex justify-center items-center'>
          <img src={Logo} className='w-[35px]' />
          <h1 style={{ fontFamily: "Agbalumo", fontSize: "27px" }}>NetworkHook</h1>
        </div>
        <div className='h-[75%] flex flex-col '>
          <div className='flex items-center mx-3 SideContent'>
            <img src={HomeIcon} className='mx-4 w-[30px]' />
            <h4>Home</h4>
          </div>
          <div className='flex items-center mx-3 SideContent'>
            <img src={Search} className='mx-4 w-[30px]' />
            <h4>Search</h4>
          </div>
          <div className='flex items-center mx-3 SideContent'>
            <img src={Trending} className='mx-4 w-[30px]' />
            <h4>Trending</h4>
          </div>
          <div className='flex items-center mx-3 SideContent'>
            <img src={Reels} className='mx-4 w-[30px]' />
            <h4>Reels</h4>
          </div>
          <div className='flex items-center mx-3 SideContent'>
            <img src={Message} className='mx-4 w-[30px]' />
            <h4>Message</h4>
          </div>
          <div className='flex items-center mx-3 SideContent' onClick={handleCreatePost}>
            <img src={AddPost} className='mx-4 w-[30px]' />
            <h4>Create Post</h4>
          </div>
          <CreatePost openModal={showModal} onClose={() => dispatch(closeModal())} />
          <div className='flex items-center mx-3 SideContent'>
            <img src={Profile} className='mx-4 w-[30px]' />
            <h4>Profile</h4>
          </div>
        </div>
        <hr />
        <div className='h-[10%]'>
          <div className='flex items-center mx-3 my-3 SideContent'>
            <img src={Logout} className='mx-4 w-[30px]' />
            <h4>Logout</h4>
          </div>
        </div>
      </div>
      <div className='w-[60%] overflow-y-scroll bg-[#ececec] h-full py-3 scrollbar-hide'>
        <div className='bg-white w-[50%] m-auto rounded-[10px] mb-3'>
          <div className='flex items-center pt-3'>
            <img src={User} className='w-[35px] border rounded-full mx-3' />
            <h2 className='font-bold'>mohammad_kaif </h2>
            <img src={Dot} className='ml-2'/>
            <h3 className='text-slate-400'> 1 days ago</h3>
          </div>
          <img src={DummyImage} className='w-[485px] h-[485px] m-auto py-4' onDoubleClick={handleLikeButton}/>
          <div className='flex justify-between'>
            <div className='flex items-center ml-3 pb-2'>
              <img src={isLiked ? FilledHeart : Heart} className='mr-3 cursor-pointer' onClick={handleLikeButton}/>
              <img src={Comments} className='mr-3 cursor-pointer' />
              <img src={Share} className='mr-3 cursor-pointer' />
            </div>
            <img src={SavePost} className='mr-4 cursor-pointer' />
          </div>
          <h3 className='w-[17%] font-[600]'>21 likes</h3>
          <div className='text-start mx-3 pb-3'>
            <p><span>mohammad_kaif</span> Not to be confused with gray, charcoal is one of the most versatile colors. Gray is a mixture of white and black, but charcoal has a hint of blue added to the mix. The hex code for charcoal is #36454F.</p>
          </div>
        </div>
      </div>
      <div className='w-[25%] px-8'>
        <div className='flex items-center mt-8'>
          <img src={User} className='w-[40px] border rounded-full mx-3' />
          <h3>mohammad_kaif</h3>
        </div>
        <div className='h-[50px] flex justify-around w-[70%] text-center items-center mt-4'>
          <div>
            <h4 className='font-bold'>1000</h4>
            <p className='text-5m'>Posts</p>
          </div>
          <div>
            <h4 className='font-bold'>1000</h4>
            <p className='text-5m'>Following</p>
          </div>
          <div>
            <h4 className='font-bold'>1000</h4>
            <p className='text-5m'>Followers</p>
          </div>
        </div>
      </div>
    </div>
  )
}
