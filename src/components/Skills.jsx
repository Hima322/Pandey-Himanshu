import { Container } from "react-bootstrap";
import "../styles/main.css";

export default function Skills() {
  const skills = [
    { icon: "🪟", text: "Windows Forms (WinForms)" },
    { icon: "🔗", text: "REST API Development" },
    { icon: "⚛️", text: "React.js" },
    { icon: "📜", text: "JavaScript / jQuery / AJAX" },
    { icon: "💻", text: "ASP.NET / ASP.NET Core" },
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
