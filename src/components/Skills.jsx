import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
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
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold fs-2 fs-md-1">My Skills</h2>
          <p className="text-light small">
            .NET Developer | Industrial Automation | Software Engineering
          </p>
        </div>

        {/* Slider */}
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
    <div className="px-2">
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center p-3"
        style={{
          background: "rgba(255,255,255,0.1)",
          borderRadius: "16px",
          minHeight: "90px",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            fontSize: "28px",
            marginBottom: "6px",
          }}
        >
          {icon}
        </span>

        <span
          style={{
            fontSize: "14px",
            lineHeight: "1.3",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
