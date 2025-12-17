import { Container } from "react-bootstrap";
import "../styles/main.css";

export default function Skills() {
  const skills = [
    { icon: "🧩", text: "ASP.NET Web Forms" },
{ icon: "🏗️", text: "ASP.NET MVC" },
{ icon: "🗄️", text: "SQL Server" },
{ icon: "🐬", text: "MySQL" },
{ icon: "🔌", text: "ADO.NET" },
{ icon: "📊", text: "Database Design & Optimization" },
{ icon: "🔐", text: "Authentication & Authorization" },
{ icon: "⚙️", text: "Web API Integration" },
{ icon: "📦", text: "Entity Framework" },
{ icon: "🛠️", text: "Stored Procedures & Views" }

  ];

  return (
    <section id="skills">
      <Container>
        <div className="text-center mb-4 skills-heading">
          <h2>My Skills</h2>
          <p>.NET Developer | Industrial Automation | Software Engineering</p>
        </div>

        <div className="skills-scroll">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <span className="icon">{skill.icon}</span>
              <span className="text">{skill.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
