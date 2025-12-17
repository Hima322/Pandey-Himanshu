import { Container } from "react-bootstrap";
import Slider from "react-slick";

export default function Skills() {
  const skills = [
    { icon: "💻", text: "ASP.NET / ASP.NET Core" },
    { icon: "🔷", text: "C# Programming" },
    { icon: "🧩", text: "ASP.NET Web Forms" },
    { icon: "🪟", text: "Windows Forms (WinForms)" },
    { icon: "🔗", text: "REST API Development" },
    { icon: "⚛️", text: "React.js" },
    { icon: "📜", text: "JavaScript / jQuery / AJAX" },
    { icon: "🗄️", text: "SQL Server" },
    { icon: "🏭", text: "PLC Integration" },
    { icon: "🤝", text: "Communication & Teamwork" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4, // number of skills visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="skills"
      className="py-5 text-white"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Skills</h2>
          <p className="text-light">
            .NET Developer | Industrial Automation | Software Engineering
          </p>
        </div>

        <Slider {...settings}>
          {skills.map((skill, idx) => (
            <Skill key={idx} icon={skill.icon} text={skill.text} />
          ))}
        </Slider>
      </Container>
    </section>
  );
}

function Skill({ icon, text }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center mb-3 p-3 mx-2"
      style={{
        background: "rgba(255,255,255,0.08)",
        borderRadius: "15px",
        minHeight: "80px",
        fontSize: "18px",
        flexDirection: "column",
        textAlign: "center",
        transition: "0.3s",
      }}
    >
      <span style={{ fontSize: "32px" }} className="mb-2">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}
