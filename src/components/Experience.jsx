import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
 import projects from "../data/project.json";

export default function Experience() {
  const [count, setCount] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);



  // Counter
useEffect(() => {
  let current = 0;
  const end = 19;
  const duration = 4000; 
  const interval = duration / end; 

  const timer = setInterval(() => {
    current++;
    setCount(current);
    if (current === end) clearInterval(timer);
  }, interval);

  return () => clearInterval(timer);
}, []);


  // Project text rotate
  useEffect(() => {
    const textTimer = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }, 2500);
    return () => clearInterval(textTimer);
  }, []);

  return (
    <section
      id="experience"
      className="py-5 text-white"
      style={{
        background: "linear-gradient(135deg, #0b0c2a, #1b1f4a, #101224)",
      }}
    >
      <Container>
        {/* Heading */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold display-6">Experience</h2>
            <p className="text-secondary">
              Industrial Automation & Software Engineering
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Card
              className="border-0 position-relative experience-card"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(14px)",
                borderRadius: "22px",
              }}
            >
              <Card.Body className="p-4 p-md-5">
                <Row className="align-items-center">
                  {/* Left Counter */}
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex flex-column align-items-center mb-4 mb-md-0"
                  >
                    <div className="counter-wrapper">
                      <div className="counter-ring"></div>
                      <div className="counter-circle">
                        <span className="counter-number">{count}+</span>
                        <span className="counter-label">Projects</span>
                      </div>
                    </div>

                    <div className="project-text mt-4 text-center">
                      {projects[projectIndex]}
                    </div>
                  </Col>

                  {/* Right Content */}
                  <Col xs={12} md={8}>
                    {/* 🔥 Role Badge */}
                    <div className="role-badge mb-2">
                      Software Engineer
                    </div>

                    <p className="company-name mb-1">
                      Pioneer Machine & Automation (P) Ltd
                    </p>

                    <p className="text-light mb-4">
                      Ghaziabad, Delhi NCR <br />
                      <small>August 2023 – Present</small>
                    </p>

                    <ul className="text-light experience-list">
                      <li>
                        Developed industrial automation systems using
                        <strong> ASP.NET MVC, Web API, C#, SQL Server</strong>.
                      </li>
                      <li>
                        Built live <strong>OEE & ANDON dashboards</strong>
                        for real-time machine monitoring.
                      </li>
                      <li>
                        Integrated <strong>Mitsubishi PLCs</strong> using
                        <strong> MC Protocol, Modbus & OPC</strong>.
                      </li>
                      <li>
                        Delivered conveyor, frame line, power line and recliner
                        automation projects with full production tracking.
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* 🎨 Styles */}
      <style>
        {`
        /* Side Frame */
        .experience-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 20px;
          bottom: 20px;
          width: 5px;
          background: linear-gradient(180deg, #00f5ff, #007bff);
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0,245,255,0.8);
        }

        .role-badge {
          display: inline-block;
          padding: 6px 14px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #00f5ff;
          border: 1px solid rgba(0,245,255,0.6);
          border-radius: 20px;
          background: rgba(0,245,255,0.08);
        }

        .company-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #9befff;
        }

        .counter-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .counter-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: conic-gradient(#00f5ff, #0dcaf0, #007bff, #00f5ff);
          animation: spin 6s linear infinite;
        }

        .counter-circle {
          position: absolute;
          inset: 14px;
          border-radius: 50%;
          background: radial-gradient(circle at top, #1e3c72, #0b1026);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 30px rgba(0,255,255,0.5),
                      0 0 40px rgba(0,123,255,0.7);
        }

        .counter-number {
          font-size: 3rem;
          font-weight: 800;
          color: #00f5ff;
        }

        .counter-label {
          font-size: 0.8rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #ccefff;
        }

        .project-text {
          font-size: 0.95rem;
          color: #9befff;
          animation: fadeSlide 2.5s ease-in-out infinite;
          min-height: 40px;
        }

        .experience-list {
          line-height: 1.9;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        @media (max-width: 768px) {
          .experience-card::before {
            left: 10px;
            top: 0;
            bottom: auto;
            width: calc(100% - 20px);
            height: 4px;
          }

          .counter-wrapper {
            width: 150px;
            height: 150px;
          }

          .counter-number {
            font-size: 2.2rem;
          }
        }
        `}
      </style>
    </section>
  );
}
