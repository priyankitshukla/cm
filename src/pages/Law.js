import React from "react";
import ResourceBottom from "./ResourceBottom";
class Law extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Law</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              A law degree arms one with serious advocacy skills, enabling one
              to argue in favor of any cause. Lawyers advice clients and provide
              solutions to legal issues at both private and public level. They
              interpret laws, rules and regulations and prepare legal documents.
              They argue and debate at the courts and take decisions on legal
              matters. As a lawyer one is expected to apply abstract law
              theories to solve problems of clients in diverse set of
              situations. India has over twelve lakh lawyers but according to
              reports only one fifth of them are capable to practice law in the
              courts. Thus there is a huge demand of well-trained & skilled
              lawyers. With the increase in the number of premier law colleges
              in the country and the increasing demand from the industry; a
              career in law is an extremely lucrative option for the youth.
              Today ,a huge range of specialization options has also emerged for
              lawyers such as International Taxation Law, Cyber Law, Environment
              Law, Sports Management Law, IPR, Aviation Law and Mergers &
              Acquisitions Law etc. Students interested in making a career in
              law can either do a 5 years' course straight after 12th class or a
              three-year law course after graduation in any discipline. After
              graduation one can further specialize by pursuing an LLM from an
              Indian or global university/college. People in the field of law,
              work at various corporate houses, law agencies, law firms,
              litigation, and administrative services amongst others. Today
              leading law firms are the most sought after destination for Law
              Graduates. Some of the top law firms in the country are: Amarchand
              Mangaldas, AZB & Partners, J Sagar Associates, Khaitan & Co,
              Luthra & Luthra. Trending Fields: Corporate Law, International
              Taxation, Cyber Law.
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
          <ResourceBottom pageName="Law"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Law;
