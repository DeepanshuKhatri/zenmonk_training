import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Form, Modal, Select, Card } from "antd";
import "../assets/styles/styles.css";
import { addResume } from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import Template1 from "../views/template1";
import Template2 from "../views/template2";
import Template3 from "../views/template3";

const { TextArea } = Input;

const ResumeBuilder = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [templateModel, setTemplateModel] = useState(true);
  const navigate = useNavigate();
  const [personal, setPersonal] = useState({
    fname: "dummy",
    lname: "dummy",
    email: "dummy",
    phone: "9999999999",
    yourself: "hi everyone",
    gender: "Male",
    template: "Template1",
  });
  const [template, setTemplate] = useState("Template1");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handlePersonalDetails(event) {
    const { name, value } = event.target;
    setPersonal((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    setTemplate("template1");
    console.log(personal);
  }
  function handleGender(value) {
    setPersonal((prevValue) => {
      return {
        ...prevValue,
        gender: value,
      };
    });
  }
  const selector = useSelector((state) => state.auth.resumes);

  const submit = () => {
    dispatch(addResume(personal));
    navigate("/home");
  };

  const reset = () => {
    setPersonal({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      yourself: "",
      gender: "Male",
      template: "",
    });
  };

  function handleSelectTemplate(e) {
    const name = e.target.value;
    console.log(name);
    setPersonal((prev) => {
      return {
        ...prev,
        template: name,
      };
    });
    // handlePersonalDetails({target :{name:'template', value}})
    setTemplateModel(false);
    console.log(personal);
  }

  return (
    <div>
      {/* <Template1/> */}
      <Modal
        width="1000px"
        title="Basic Modal"
        open={templateModel}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card
          className="select-template"
          name="Template1"
          value="Template1"
          onClick={() => {
            setPersonal((prev) => {
              return { ...prev, template: "Template1" };
            });
            setTemplateModel(false);
          }}
        >
          <Template1 personal={personal} />
        </Card>
        <Card
          className="select-template"
          name="Template2"
          value="Template2"
          onClick={() => {
            setPersonal((prev) => {
              return { ...prev, template: "Template2" };
            });
            setTemplateModel(false);
          }}
        >
          <Template2 personal={personal} />
        </Card>
        <Card
          className="select-template"
          name="Template3"
          value="Template3"
          onClick={() => {
            setPersonal((prev) => {
              return { ...prev, template: "Template3" };
            });
            setTemplateModel(false);
          }}
        >
          <Template3 personal={personal} />
        </Card>
        {/* <Template1 personal={personal}/>
        <Template2 personal={personal}/>
        <Template3 personal={personal}/> */}
      </Modal>
      <Form>
        <Form.Item>Personal Details</Form.Item>
        <Form.Item label="Enter First Name">
          <Input
            value={personal.fname}
            onChange={handlePersonalDetails}
            name="fname"
          />
        </Form.Item>
        <Form.Item label="Enter Last Name">
          <Input
            value={personal.lname}
            onChange={handlePersonalDetails}
            name="lname"
          />
        </Form.Item>
        <Form.Item label="Enter E-mail">
          <Input
            value={personal.email}
            onChange={handlePersonalDetails}
            name="email"
          />
        </Form.Item>
        <Form.Item label="Enter Phone Number">
          <Input
            value={personal.phone}
            onChange={handlePersonalDetails}
            name="phone"
          />
        </Form.Item>
        <Form.Item label="About Yourself">
          <TextArea
            rows={4}
            value={personal.yourself}
            onChange={handlePersonalDetails}
            name="yourself"
          />
        </Form.Item>
        <Form.Item label="Select Gender">
          <Select
            defaultValue={handlePersonalDetails.gender}
            style={{
              width: 120,
            }}
            //   onChange={handleChange}
            onChange={handleGender}
            options={[
              {
                value: "Male",
                label: "Male",
              },
              {
                value: "Female",
                label: "Female",
              },
            ]}
          />
        </Form.Item>
        <Button onClick={showModal}>Preview</Button>
        <Button onClick={submit}>Submit</Button>
        <Button onClick={reset}>Reset</Button>
      </Form>
      <Modal
        title="Basic Modal"
        width={1000}
        className="modal-resume"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <{template} personal={personal}/> */}
        {/* {template} */}
        {/* <h1>hello</h1> */}
        {personal.template == "Template1" ? (
          <Template1 personal={personal} />
        ) : null}
        {personal.template == "Template2" ? (
          <Template2 personal={personal} />
        ) : null}
        {personal.template == "Template3" ? (
          <Template3 personal={personal} />
        ) : null}

        <button
          name="template"
          value="Template1"
          onClick={handlePersonalDetails}
        >
          Template1
        </button>
        <button
          name="template"
          value="Template2"
          onClick={handlePersonalDetails}
        >
          Template2
        </button>
        <button
          name="template"
          value="Template3"
          onClick={handlePersonalDetails}
        >
          Template3
        </button>
      </Modal>
    </div>
  );
};

export default ResumeBuilder;

{
  /* 
            <Form.Item>Education</Form.Item>
            <Form.Item>Class 10th</Form.Item>
            <Form.Item label="School Name"><Input/></Form.Item>
            <Form.Item label="Enter Passing Year"><Input type='number' /></Form.Item>
            <Form.Item label="Enter 10th Grade"><Input/></Form.Item>
            <Form.Item>Class 12th</Form.Item>
            <Form.Item label="School Name"><Input/></Form.Item>
            <Form.Item label="Enter Passing Year"><Input type='number' /></Form.Item>
            <Form.Item label="Enter 10th Grade"><Input/></Form.Item>
            <Form.Item>Graduation Details</Form.Item>
            <Form.Item label="College/University Name"><Input/></Form.Item>
            <Form.Item label="Enter Passing Year"><Input type='number' /></Form.Item>
            <Form.Item label="Enter CGPA"><Input/></Form.Item> */
}
{
  /* <Button onClick={preview}>Preview</Button> */
}
