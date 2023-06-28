import React, { useEffect, useState } from "react";
import { Typography, Select, Menu, Input, Button, Avatar, Divider } from "antd";
import {
  SearchOutlined,

} from "@ant-design/icons";
import Message from "../components/Message";
import NavBar from "../components/NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { collection, getDocs, limit, onSnapshot, query, QuerySnapshot } from "firebase/firestore";

const { Title, Text } = Typography;

const Home = () => {
  const [user] = useAuthState(auth)
  const [members, setMembers] = useState([])
  const [receiver, setReceiver] = useState("");
  // const [selectedMember, setSelectedMember] = useState([])
  const selectedMember = [];
  console.log(user)
  useEffect(() => {
    const q = query(
      collection(db, "users")
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let members = [];
      QuerySnapshot.forEach((doc) => {
        members.push({ ...doc.data() })
      })
      setMembers(members);

    })

    return () => unsubscribe;
  }, [])
  members.forEach((mem) => {
    if(mem.uid!=auth.currentUser.uid){
      selectedMember.push({ label: mem.name, value: mem.uid })
    }
  }
  )
  console.log(members);
  console.log(selectedMember)

  function logout() {
    auth.signOut();
  }
  function handleReceiver(value){
    setReceiver(value);
    console.log(receiver);
  }
  return (
    <div className="chat-app">
      <button onClick={logout}>signout</button>
      <div className="app">
        <div className="display">
          <NavBar />
          <div className="main">
            <div className="left-panel">
              <Input
                className="search-inp-home"
                prefix={<SearchOutlined />}
                placeholder=" SEARCH"
              />
              <div className="members">
                <div className="member-list">
                  <div className="mem">
                    {
                      members.map((mem) => {
                        const { uid } = auth.currentUser;
                        return <div className="mem-display1">{mem.uid != uid &&
                          <>
                            <div className="mem-display" >
                              <Avatar
                                size={60}
                                src={mem.avatar}
                                alt="no"
                              />
                              <div className="name" onClick={()=>setReceiver(mem.uid)}>
                                <h4>{mem.name}</h4>

                              </div>


                            </div>
                            <Divider />
                          </>}
                        </div>

                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="right-panel">
              <div className="message-options">

                <Select

                  className="select-member-btn"
                  style={{
                    width: '50%',
                    height: '50%'
                    // fontSize:30
                  }}

                  onChange={handleReceiver}
                  options={selectedMember}
                />
                <button className="options-btn"> CLEAR CHAT </button>
                <button className="options-btn">MORE</button>
              </div>
              <div className="message">
                <Message receiver={receiver}/>
                {/* {messages?.map((m)=>{
                  <Mess key={m.id} message={m}/>
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
