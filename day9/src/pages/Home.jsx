import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, FloatButton, Card } from "antd";
import { PlusOutlined,DeleteOutlined } from "@ant-design/icons";
import "../assets/styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import Template1 from "../views/template1";
import Template2 from "../views/template2";
import Template3 from "../views/template3";
import JsPDF from 'jspdf';

const Home = () => {
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.auth.loggedId);
  const data = useSelector((state) => state.auth.resumes) || [];
  // console.log(loggedUser)
  const index = data.findIndex((x) => x.id == loggedUser);
  // console.log(index)
  const userResume = data[index]?.resumes ?? [];
  console.log(userResume);
  function newResume() {
    navigate("/resumebuilder");
  }

  const generatePDF = (hello) => {

    const report = new JsPDF('portrait','pt','a4');
    report.html(document.getElementById(hello)).then(() => {
        report.save('report.pdf');
    }
    )}

  return (
    <div>
      <div className="display-resume" id="gty">
        {userResume.map((d, key) => {
          console.log(d)
          return (
            <div className="wrap-div"  >
              {d.template == "Template1" ? (
                <div className="report">
                  <Template1 personal={d} className="report" />
               </div>
              ) : null}
              {d.template == "Template2" ? (
                <div className="report"  id="hello">
                  <Template2 personal={d} className="report"   />

                </div>
              ) : null}
              {d.template == "Template3" ? (
                <div className="report">
                  <Template3 personal={d} className="report" />

                 </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <FloatButton
        shape="square"
        type="primary"
        className="plus-button-home-page"
        onClick={newResume}
        style={{
          right: 24,
        }}
        icon={<PlusOutlined className="plus-icon-home-page" />}
      />
    </div>
  );
};

export default Home;
