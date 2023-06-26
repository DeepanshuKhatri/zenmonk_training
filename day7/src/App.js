import React, { useState } from "react";
import { Layout, Typography, Avatar, Input, Button, Drawer } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { SearchOutlined } from "@ant-design/icons";
import "./App.css";
import CardList from "./components/CardList";
import { useDispatch } from "react-redux";
import { addNote, addString } from "./redux/notesSlice";
import CreateArea from "./components/CreateArea";

const { Title } = Typography;
const App = () => {
  const [task, setTask] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function onSearch(e) {
    dispatch(addString(e));
    console.log(e);
  }
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="keep">
            <Avatar
              className="logo"
              src={require("./assets/images/keeperLogo.png")}
            />
            <Title level={2}>Keep</Title>
            <Input
              className="search"
              prefix={<SearchOutlined className="search-logo" />}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </Header>
        <Content className="add-item-content">
        {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer> */}
          <CreateArea />
        </Content>
        <Content className="note-display">
          <CardList />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
