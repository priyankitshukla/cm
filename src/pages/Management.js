import React from "react";
import ResourceBottom from "./ResourceBottom";
class Management extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Management</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              A career in Management makes students familiar with knowledge of
              business, trade, management techniques, industry, basics of
              economics, fiscal policies, industrial policies, share market,
              stock markets, etc. Management studies teaches one how to manage a
              business professionally. With increasing competition in the field,
              huge number of colleges providing management related courses have
              mushroomed across the country offering traditional specializations
              such as Finance, Marketing, Sales, Operations and Human Resources
              to the trending specializations like Health Care Management,
              Sports Management, Rural Management, Fashion Management etc.
              Students who are keen to take up management as a career option
              after class 12th can opt for BBA, BBS or BBM for developing a
              sound base in the field of management education. After graduation,
              one may opt for an MBA degree in a specialized field. Management
              is a career option which can also be pursued after almost any
              graduation degree such as Law, Engineering, Medicine, Social
              Sciences among others. Management is one of the most sought after
              careers because of the lucrative salaries and good future
              prospects it offers; especially if one graduates from the leading
              management colleges. Trending Fields: Sports Management, Health
              Care Management, Operations Management, Human Resource Management,
              Finance Management.
            </span>
          </p>
          <div>
            <ul>
              <li>Career Path</li>
              <li>Leading Institutes in India</li>
              <li>Leading Institutes Abroad</li>
              <li>Entrance Exams</li>
            </ul>
          </div>
          <ResourceBottom pageName="Management"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Management;
