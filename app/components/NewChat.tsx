"use client";
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { PlusIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { db } from '../../firebase';


function NewChat() {
    const router = useRouter();
    const {data : session } = useSession();

    //Firebase part 
    //create a new chat using the function
    const createNewChat = async() => {
        const doc = await addDoc(
            collection(db , "users" ,session?.user?.email , 'chats' ),{
                messages:[],
                userId :session?.user?.email!,
                createdAt : serverTimestamp()
            }
            );

            router.push(`/chat/${doc.id}`)
    };
  return (
    <div onClick={createNewChat} className='border-gray-700 border chatRow'>
         <PlusIcon className='h-4 w-4'></PlusIcon>
        <p>
           New Chat
        </p>
    </div>
  )
}

export default NewChat