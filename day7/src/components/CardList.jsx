import React, {useState, useRef} from 'react'
import {Space, Card, Input, Modal} from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import '../assets/styles/style.css'
import { useSelector, useDispatch } from 'react-redux'
import {addNote, deleteNote, updateNote} from '../redux/notesSlice'
import JoditEditor from 'jodit-react'
import CreateArea from './CreateArea'

const CardList = () => {

  const data = useSelector((state)=> state.notes.notes)
  const [index, setIndex] = useState(0)
  const [cardOpen, setCardOpen] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  

  const searchData = useSelector((state)=> state.notes.str)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if(task=="" && content==""){
      setIsModalOpen(true);
      return;
    }
 
    const newNote = {
      name:task,
      desc:content
    }

    dispatch(updateNote({
      ind:index,
      newNote:newNote
    }))
    setContent("");
    setTask("");
    setIsModalOpen(false);

  
  };
  const handleCancel = () => {
    setTask("");
    setContent("")
    setIsModalOpen(false);
  };
  function handleEdit(e,i){
    e.stopPropagation()
    setIndex(i);
    setTask(data[i].name)
    setContent(data[i].desc)
    setIsModalOpen(true)
  }

  function showCard(e){
    setCardOpen(true);
  }

  function detailsOk(){
    setCardOpen(false);
  }

  // console.log(searchData)
  return (
    <div>
        <Space className='listing' direction="horizontal" size="middle" style={{ display: 'flex' }}>
          {data.map((d, i)=>{
            if(data[i].name.toLowerCase().includes(searchData.toLowerCase()) || data[i].desc.toLowerCase().includes(searchData.toLowerCase())){
              return(
              <Card className='card' title={data[i].name} onClick={(e)=> showCard(e)} key={i}>
                <div className='desc' dangerouslySetInnerHTML={{__html: data[i].desc}}></div>
                <div className="options">
                <EditOutlined onClick={(e)=>handleEdit(e,i) } className='edit-outlined'/>
                <DeleteOutlined onClick={()=>dispatch(deleteNote({ind: i}))} />
                </div>
              </Card>
              )

            }
                    
          })}


            <Modal title="Basic Modal"  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      
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
      <Modal title="Details"  open={cardOpen} onCancel={detailsOk} onOk={detailsOk}>
        <div>{task.name}</div>
        <p>{task.desc}</p>
      

    </Modal>
      
    
 
  </Space>
    </div>
  )
}

export default CardList;