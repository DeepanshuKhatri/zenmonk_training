import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import SendMessage from './SendMessage'
import { useSelector } from "react-redux";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const Message = () => {
  const [user] = useAuthState(auth)

  const [messages, setMessages] = useState([]);
  
  const selector = useSelector(state=>state.auth.users)
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="message-chats">
  
        <div className="chat-message">

        {messages?.map((message) => (
          <>
          {
            message.sender==selector.uid ?
            <div className=""><p className="p2">{message.text}</p></div>
            :
            <div className=""><p className="p1">{message.text}</p></div>

          }
          
          </>
        ))}
        </div>


      <div className="message-input">
        <SendMessage/>

      
      </div>


    </div>
  );
};

export default Message;
    {/* <div className="receive">
        <div className="chat-avatar">
          <Avatar
            size={50}
            src={require("../assets/avatars/avatar1.png")}
            alt="no"
          />
        </div>

        <div className="received-message">
            <div>
          <p className="p1">Hi there, How are you?</p>
            </div>
            <div>

          <p className="p1">
            Waiting for your reply as i have to go back soon. I have to travel
            long distance.
          </p>
            </div>
        </div>
      </div>

      <div className="send-message">
        <div>

      <p className="p2">
              Hi, I am coming there in few minutes. Please Wait!! I am in taxi
              right now.
            </p>
        </div>
        </div>

        <div className="receive">
        <div className="chat-avatar">
          <Avatar
            size={50}
            src={require("../assets/avatars/avatar1.png")}
            alt="no"
          />
        </div>

        <div className="received-message">
            <div>
          <p className="p1">Thankyou very much, I am waiting here at StarBuck Cafe.</p>
            </div>
            
        </div>

      </div> */}