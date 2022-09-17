import React from "react";
import ResourceBottom from "./ResourceBottom";
class Entrepreneurship extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Entrepreneurship</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Entrepreneurs are leaders willing to take risk and exercise
              initiative. They look to take advantage of market opportunities
              often by innovating or improving existing products & services.
              Developed countries are moving from 'managerial' to
              'entrepreneurial' economies. India, as an emerging economy, is
              ensuring that entrepreneurship is embraced as a career choice for
              the young. The ecosystem for Entrepreneurship commonly known as
              Start-Ups is at its brightest. While no specific education or
              training is required to start a business venture of your own, the
              odds of success increase exponentially when entrepreneurs have a
              solid education background. With the popularity of
              entrepreneurship rising, many universities/ institutes offer
              programs to groom budding entrepreneurs. These programs are
              available both at undergraduate (BBS, BBA) and post graduate
              levels (MBA). Most top business schools also provide courses for
              entrepreneurship. Entrepreneurs are job creators rather than job
              seekers. They create products and services. Other than the path of
              owning one's own business, participating in a family business or
              starting a partnered venture, entrepreneurs also take up roles in
              the field of business consulting, sales, research and development,
              not-for-profit management, and mid-level management. Trending
              Fields: E-Commerce, M-Commerce, EduTech, FinTech, Healthcare
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
          <ResourceBottom pageName="Entrepreneurship"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Entrepreneurship;
