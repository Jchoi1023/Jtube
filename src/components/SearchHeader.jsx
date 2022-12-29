import React, { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import {useNavigate, Link, useParams} from 'react-router-dom';

export default function Header() {
  const {keyword} = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }
  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className="flex items-center">
        <BsYoutube className='text-4xl text-red-700'/>
        <h1 className="font-bold ml-2 text-3xl">J_tube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
        className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <GoSearch />
        </button>
      </form>
    </header>
  );
}