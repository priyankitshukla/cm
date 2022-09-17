import React from "react";
import ResourceBottom from "./ResourceBottom";
class MarchantNavy extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Marchant Navy</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Opportunity to travel around the world, enjoy adventures on the
              high seas and possibility of high remuneration makes Merchant Navy
              an attractive career opportunity for many youngsters. Merchant
              Navy is different from the Indian Navy as it operates in the
              domain of offering commercial services unlike Indian Navy, which
              is mainly, involved with India's defense. Merchant Navy forms the
              backbone of international trade and import-export business via the
              sea route. Though the career offers high remuneration, which lures
              the aspirants, but its a tough job, as one has to stay away from
              home for months. Job opportunities for this career option are
              excellent with both government and private shipping companies
              requiring trained professionals for positions in multiple
              departments of ships such as Deck, Engine and Service. Student's
              interested in this career must pursue PCM at the 10+2 level and
              should also meet the set physical requirements. Admission in
              colleges is through an entrance test followed by screening test/
              written examination and interviews. Top recruiting firms -
              Shipping Corporation of India, Great Eastern Shipping, Chevron &
              Mobil of USA, d'Amico, Wallem Ship Management of Hong Kong
              Trending fields - Marine Engineers, Navigating Officers.
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
          <ResourceBottom pageName="Marchant Navy"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default MarchantNavy;
