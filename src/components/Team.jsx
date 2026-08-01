import React from "react";
import "../styles/team.css";
import useReveal from "./Hooks/useReveal";
import f1 from "../assets/am.png";
import f2 from "../assets/g.jpg";

const founder = {
  name: "Austine Mbilitem",
  role: "Founder",
  initials: "AM",
  image: f1,
  bio: "Leads strategy and client relationships at Loct — makes sure every build actually solves the business problem behind the request, not just the surface ask. Started Loct after one too many conversations with business owners who'd been burned by agencies that disappeared after launch.",
};

const cofounder = {
  name: "Gift Ifeanyi",
  role: "Co-founder / Tech Lead",
  initials: "GI",
  image: f2,
  bio: "Leads design and development — turns strategy into fast, functional, real websites. Obsessive about the details most people never notice: load times, mobile quirks, the small animations that make a site feel alive.",
};

const teamMembers = [founder, cofounder];

function FounderRow({ person, imageSide, delay }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`founder-row ${imageSide === "right" ? "image-right" : ""} ${
        visible ? "visible" : ""
      }`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      <img className="founder-image" src={person.image} alt={person.initials} />

      <div className="founder-info">
        <h2 className="founder-name">{person.name}</h2>
        <p className="founder-role">{person.role}</p>
        <p className="founder-bio">{person.bio}</p>
      </div>
    </div>
  );
}

// function TeamCard({ member, delay }) {
//   const [ref, visible] = useReveal();
//   return (
//     <div
//       ref={ref}
//       className={`team-card ${visible ? "visible" : ""}`}
//       style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
//     >
//       <div className="team-avatar" style={{ background: member.color }}>
//         {member.initials}
//       </div>
//       <h3 className="team-name">{member.name}</h3>
//       <p className="team-role">{member.role}</p>
//       <p className="team-bio">{member.bio}</p>
//     </div>
//   );
// }

function Team() {
  return (
    <div className="team-page">
      <section className="founders-section">
        <p className="team-eyebrow">MEET THE FOUNDERS</p>

        <FounderRow person={founder} imageSide="left" delay={0} />
        <FounderRow person={cofounder} imageSide="right" delay={0.15} />
      </section>

      {/* <section className="team-grid-section">
        <p className="team-eyebrow">MEET OUR TEAM</p>
        <h2 className="team-heading">The people behind the work</h2>
        <div className="team-grid">
          {teamMembers.map((m, i) => (
            <TeamCard key={m.name} member={m} delay={i * 0.15} />
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default Team;
