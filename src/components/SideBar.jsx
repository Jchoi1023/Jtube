import React from 'react';
import { VscHome, VscHistory } from 'react-icons/vsc';
import { BsCollectionPlay } from 'react-icons/bs';
import { MdOutlineLocalPlay, MdOutlineVideoLibrary } from 'react-icons/md';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { RxClock } from 'react-icons/rx';
import { BiMoviePlay } from 'react-icons/bi';
import { GrLike } from 'react-icons/gr';
import { CgMusicNote } from 'react-icons/cg';
import { HiOutlineFire, HiOutlineNewspaper } from 'react-icons/hi';
import { SiYoutubegaming } from 'react-icons/si';
import {GiAerialSignal} from 'react-icons/gi';
import {BsTrophy} from 'react-icons/bs';

export default function SideBar() {
  return (
    <div className='text-2xl'>
      <div className='flex items-center mb-4'>
        <VscHome />
        <p className='text-sm ml-5'>Home</p>
      </div>
      <div className='flex items-center mb-4'>
        <MdOutlineLocalPlay />
        <p className='text-sm ml-5'>Shorts</p>
      </div>
      <div className='flex items-center mb-4'>
        <BsCollectionPlay />
        <p className='text-sm ml-5'>Subscriptions</p>
      </div>
      <div className='border-b'></div>
      <div className='flex items-center mb-4 mt-4'>
        <MdOutlineVideoLibrary />
        <p className='text-sm ml-5'>Library</p>
      </div>
      <div className='flex items-center mb-4'>
        <VscHistory />
        <p className='text-sm ml-5'>History</p>
      </div>
      <div className='flex items-center mb-4'>
        <AiOutlinePlaySquare />
        <p className='text-sm ml-5'>Your videos</p>
      </div>
      <div className='flex items-center mb-4'>
        <RxClock />
        <p className='text-sm ml-5'>Watch later</p>
      </div>
      <div className='flex items-center mb-4'>
        <BiMoviePlay />
        <p className='text-sm ml-5'>Your movies & TV</p>
      </div>
      <div className='flex items-center mb-4'>
        <GrLike />
        <p className='text-sm ml-5'>Liked videos</p>
      </div>
      <div className='border-b'></div>
      <p className='mb-4 mt-4 text-base'>Explore</p>
      <div className='flex items-center mb-4'>
        <HiOutlineFire />
        <p className='text-sm ml-5'>Trending</p>
      </div>
      <div className='flex items-center mb-4'>
        <CgMusicNote />
        <p className='text-sm ml-5'>Liked videos</p>
      </div>
      <div className='flex items-center mb-4'>
        <BiMoviePlay />
        <p className='text-sm ml-5'>Movies & TV</p>
      </div>
      <div className='flex items-center mb-4'>
        <GiAerialSignal />
        <p className='text-sm ml-5'>Live</p>
      </div>
      <div className='flex items-center mb-4'>
        <SiYoutubegaming />
        <p className='text-sm ml-5'>Gameing</p>
      </div>
      <div className='flex items-center mb-4'>
        <HiOutlineNewspaper />
        <p className='text-sm ml-5'>News</p>
      </div>
      <div className='flex items-center mb-4'>
        <BsTrophy />
        <p className='text-sm ml-5'>Sports</p>
      </div>    
    </div>
  );
}
