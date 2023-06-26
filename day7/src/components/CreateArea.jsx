import React, { useState, useRef } from "react";
import JoditEditor, {Jodit} from "jodit-react";
import {Form, Input, Button, Modal} from 'antd'
import { useDispatch } from 'react-redux';
import { addNote, addString } from '../redux/notesSlice';
import {PlusCircleOutlined} from '@ant-design/icons'
import '../assets/styles/style.css'

// import { addNotes } from "../slices/notesSlice";

function CreateArea() {
  const editor = useRef(null);
  const [content, setContent] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if(task=="") return;
    const note = {
      name:task,
      desc: content
      
    }
    dispatch(addNote(note));
    console.log(content)
    setContent("");
    setTask("");

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setTask("");
    setContent("")
    setIsModalOpen(false);
  };

  return (
    <div>
        <div className="button">

            <Button className="plus" type="primary" onClick={showModal}>
                <div className="plus-btn">Add Item</div>
            </Button>
        </div>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      
        <Input className="input"
            value={task}
            placeholder='Take a note...'
            onChange={e=>setTask(e.target.value)}
            />
             <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} 
          />

      </Modal>
        
 
     
    </div>
  );
}

export default CreateArea;