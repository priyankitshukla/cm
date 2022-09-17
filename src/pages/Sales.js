import React from "react";
import ResourceBottom from "./ResourceBottom";
class Sales extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Sales</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Sales function forms the core of every business, whether it
              produces a physical product such as a car or tennis shoes, or
              offers a service, such as electrical testing or psychic healing. A
              link between the producer and the customer is necessary so that
              the customer is aware of and has access to the product; which is
              achieved by sales professionals. Selling of the products is the
              main objective of almost all firms. For this every firm small or
              big requires a professional often known as Sales Manager who takes
              care of the sales. Individuals from all backgrounds and all
              education levels enter the sales industry. MBA degree in Sales is
              preferred over other degrees by employers. Employment
              opportunities for sales people exist across a wide spectrum of
              sectors, the most popular of which in terms of the number of
              people employed, are: FMCG, Media, Pharmaceutical, Automotive and
              Retail. Trending fields: FMCG Industry, Pharmaceutical Industry,
              Automotive Industry.
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
          <ResourceBottom pageName="Sales"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Sales;
