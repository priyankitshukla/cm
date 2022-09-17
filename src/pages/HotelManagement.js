import React from "react";
import ResourceBottom from "./ResourceBottom";
class HotelManagement extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Hotel & Management</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Hotel Management is emerging to be one of the most lucrative
              careers in today's age. The hospitality industry has tremendously
              expanded over the years, which has created a lot of opportunities
              for the people. A good manager should have good communication
              skills along with organizational skills to coordinate among
              different departments. The various fields under hotel management
              include hotel & restaurant management, cruise ship management,
              hospital administration, hotel and tourism association, airline
              catering and cabin services, club management, etc. One can apply
              for hotel management on the basis of an entrance exam followed by
              a personal interview. National Council for Hotel Management and
              Catering Technology conducts the leading entrance exam on a yearly
              basis. Premium hospitality chains like Taj, Oberoi and ITC have
              their own hospitality programs and separate selection criteria.
              There are also several private colleges and institutes, which have
              their own, entrance exams. The basic requirement for this degree
              is minimum of 50% marks in 10+2 level. After clearing the entrance
              exam one can take a bachelor's degree in hotel management or in
              travel and tourism. Diploma courses are also available which lasts
              for 6 months to 3 years. Top recruiters include Oberoi Group of
              Hotels, ITC Group of Hotels, Ambassador Group of Hotels, Indian
              Hotels Company Limited etc.
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
          <ResourceBottom pageName="Hotel & Management"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default HotelManagement;
