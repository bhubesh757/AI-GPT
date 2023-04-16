"use client"
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from '@firebase/firestore';
import { db } from '../../firebase';
import ChatRow from './ChatRow';

type Props = {};
function Sidebar({}: Props) {
    const { data: session } = useSession();

    //firebase hooks
    const [chats , loading , error] = useCollection(
        session && collection(db , 'users' , session.user?.email , 'chats') 
    );

    console.log(chats);
      return (
    <div className='p-2 flex flex-col h-screen'>
    <div className='flex-1'>
        <div>
        {/* New chat */}
       <NewChat></NewChat>


        <div>
            {/* models */}
            

        </div>
        {/* map throught the chatrows */}
        {chats?.docs.map(chat => (
    <ChatRow key={chat.id} id={chat.id} session={session}></ChatRow>
))}

        {/* chatrows in the list */}
    </div>
    </div>
    {session &&  (
    <img
    onClick={() => signOut()}
     src ={session?.user?.image} alt = "profile" className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50' ></img> )} 
      
    </div>
  )
}

export default Sidebar