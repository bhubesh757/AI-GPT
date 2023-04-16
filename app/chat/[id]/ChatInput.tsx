"use client"
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../../../firebase";

type Props = {  
    chatId : string
};


function ChatInput({chatId} : Props) {

    // use state
    const [prompt , setPrompt] = useState("")
    const { data: session } = useSession();
    const [loading, setIsLoading] = useState(true);

    // usesSWR to get he model
    const model = "text-davinci-003"

    const sendMessage = async (e: FormEvent <HTMLFormElement>) => {
        e.preventDefault()

        if(!prompt) return;

        const input = prompt.trim();
        setPrompt("");


        const message : Message = {
            text : input,
            createdAt : serverTimestamp(),
            user : {
              _id : session?.user?.uid || "",
              name : session?.user?.name || "",
              avatar : session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name || ""}`
            },
          };

        const chatRef = collection(db, 'users', session?.user?.email, 'chats', chatId, 'messages');
        console.log('chatRef:', chatRef);

        await addDoc(chatRef, message);


        const notification = toast.loading("AI is Thinking ")

        // notification
        await fetch('/api/askQuestion' , {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                prompt : input, chatId , model ,session
            }),
        }).then(() => {
            // toast notification to return successful message
            toast.success("ChatGPT has responded!", {
                id: notification,
        });
        
    });
    };
  return (
    <div className="bg-gray-700 text-gray-400 rounded-lg text-sm ">
        {/* chatinput */}
        <form 
        onSubmit={sendMessage}
        className="p-5 space-x-2 flex " >
            <input 
            className="bg-transparent focus:outline-none flex-1 disabled: cursor-not-allowed disabled:text-gray-300 "
            disabled = {!session}
            value={prompt}
            onChange = {(e) => setPrompt(e.target.value)}
            type="text" placeholder="Type what you think..">
            </input>
            {/* button */}
            <button 
            disabled = {!prompt || !session}
            className = "bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
            type="submit">
                <PaperAirplaneIcon className="h-4 w-4 rotate-3"></PaperAirplaneIcon>
            </button>
        </form>
    </div>
  )
}

export default ChatInput