import React from "react";
import ResourceBottom from "./ResourceBottom";
class LifeScienceEnvironment extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Life Science & Environment</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Life Science is a boundless field which encompasses all areas of
              science that include systematic study of living organisms such as
              methodical study of the living organisms such as human beings,
              plants and animals. Two broad sub-sections of life sciences are -
              Medicine and Biology. Life scientists are mostly involved in the
              research and development. Specialized fields in the life sciences
              includes - Biodynamic, Cognitive Neuroscience, Evolutionary
              Genetics, Tissue Engineering, Molecular Biology and
              Neuro-informatics to name a few. Environmental science is
              basically the study of the conservation of energy, biodiversity,
              climatic change, groundwater and soil contamination and also for
              the treatment of air, water and noise pollution. It has emerged as
              a sought after career all over the globe since people have become
              aware and are ready to take the responsibility of keeping the
              environment clean. Specialized fields include - Ecology,
              Environmental Planning, and Pollution Biology etc. Candidate needs
              to pursue science subjects i.e. physics, chemistry, biology at
              10+2 level to proceed for the higher studies in these courses
              further. Some of the major recruiters include - Hospitals,
              Pharmaceutical Companies, Government Organizations, Reserach
              Centres etc. Trending Fields include - Ecologists, Molecular
              Biology, Environmental Science.
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
          <ResourceBottom pageName="Life Science & Environment"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default LifeScienceEnvironment;
