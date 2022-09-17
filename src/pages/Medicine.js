import React from "react";
import ResourceBottom from "./ResourceBottom";
class Medicine extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Medicine</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Medicine is one of the most valuable and sought after career for
              those interested in science. There is immense scope for medicine
              as a professional career. It is a very challenging profession and
              requires utmost patience to excel. Career gestation period in
              medicine is relatively longer than other career options as
              specialization post the MBBS degree is highly recommended.
              Intricate and fast lifestyles have given rise to multiple new
              diseases, which the general doctors armed with a MBBS degree find
              difficult to deal with. This makes specializations a necessity in
              this field. Specialization may include General Surgery, General
              Medicine, Pediatrics, Obstetrics, Gynecology, Neurology,
              Ophthalmology, Cardiology, Dermatology, anesthesiology etc. Other
              systems of medicine like Homeopathy, Ayurveda, Unani, Dentistry &
              Veterinary Science are also fast emerging fields with excellent
              career opportunities. Medical Science courses are offered at
              undergraduate, postgraduate and doctorate levels. At the
              undergraduate level, an MBBS degree is awarded in allopathic
              system of medical science, whereas in Homeopathic, Unani System
              and Ayurvedic System of Medical science, BHMS, BUMS and BAMS
              degree are awarded. A BDS degree is awarded at the undergraduate
              level in dental science. For veterinary science, BSc degree is
              awarded. The competition environment in the field of Medicine is
              extremely vigorous as the number of seats in premier institutes is
              significantly less in comparison to the aspiring candidates.
              However with the increasing focus on healthcare, the number of
              medical colleges in the country is rapidly increasing. Candidate
              seeking admission in the field of medicine should have had the
              subject combination of Science with Biology at 10+2 level.
              Entrance test like: NEET (National Eligibility cum Entrance Test)
              is the gateway to various medical colleges across the country,
              both private as well as public. Top recruiting companies include-
              Fortis, Apollo and Max amongst others. Trending fields include-
              Cardiologist, Surgeon, Psychiatrist, Neurologist.
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
          <ResourceBottom pageName="Medicine"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Medicine;
