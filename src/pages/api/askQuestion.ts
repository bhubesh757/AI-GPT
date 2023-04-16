// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { adminDb } from '../../../firebaseAdmin';
import query from '../../../lib/queryApi';

type Data = {
    answer: string;
  };
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
      console.log(req.body);
    const { prompt, chatId, model, session } = req.body;
    console.log(prompt, chatId, model, session);

  
    if (!prompt) {
      res.status(400).json({ answer: "Please Provide a prompt" });
      return;
    }
  
    if (!chatId) {
      res.status(400).json({ answer: "Please provide a valid chat Id" });
      return;
    }
  
    // ChatGpt Query
  
    const response = await query(prompt, chatId, model);
    onsole.log(response);

  
    const message: Message = {
      text: response || "ChatGpt unable to answer that!",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        email: "ChatGPT",
        avatar:
          "https://drive.google.com/uc?export=download&id=1ikaBBU-OsBSHkleHQmf15ww0vgX-A0Kz",
      },
    };
  
    await adminDb
      .collection("users")
      .doc(session?.user?.uid)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add(message);
  
    res.status(200).json({ answer: message.text });
  }
  