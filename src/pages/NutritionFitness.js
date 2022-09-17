import React from "react";
import ResourceBottom from "./ResourceBottom";
class NutritionFitness extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Nutrition Fitness</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Due to the paucity of time & fast paced lifestyle, people today
              often resort to unhealthy eating habits which can lead to the
              development of many diseases. Dietetics is the science and art of
              providing different kinds of food to people based on the principle
              of nutrition. Professionals in this area create awareness
              regarding healthy eating habits. They help people of different age
              groups, culture and also the ones suffering from different
              problems and diseases to form a diet plan which helps in improving
              their condition and quality of life. With growing needs of
              customers, today, there is a lot of scope in the area of nutrition
              and dietetics. Various fields of specialization in this area
              include clinical dieticians, community dieticians, management
              dieticians and consultant dieticians. Science subjects in the +2
              level are recommended for a career in nutrition and fitness.
              Thereafter, one can pursue a bachelor's degree in any science
              related subject preferably in biology, clinical nutrition +
              dietetics, home science or food and nutrition. There are very good
              colleges all over India that provide education in this field.
              Dieticians can find a job in a variety of settings such as in
              gyms, slimming centre's, schools, hospitals, food related
              laboratories and research centre's in private as well as the
              government sector. Dieticians are much in demand in the mass media
              domain as they help promote the quality of life among people
              across regions. While most professionals work as dieticians to
              help people gain or lose weight, there are still many who can get
              into research and policy making related to different food items.
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
          <ResourceBottom pageName="Nutrition & Fitness"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default NutritionFitness;
