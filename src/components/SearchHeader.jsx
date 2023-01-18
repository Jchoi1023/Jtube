import React, { useEffect, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { RiVideoAddLine } from 'react-icons/ri';
import { BsBell } from 'react-icons/bs';

export default function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-2xl text-red-700' />
        <h1 className='font-bold ml-2 text-2xl'>J_Tube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-white border text-black rounded-l-3xl'
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='bg-zinc-100 px-4 rounded-r-3xl'>
          <GoSearch />
        </button>
      </form>
      <div className='flex items-center text-2xl'>
        <RiVideoAddLine className='mr-6'/>
        <BsBell className=''/>
      </div>
    </header>
  );
}
