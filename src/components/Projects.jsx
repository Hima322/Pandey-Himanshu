import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const projects = [
  {
    title: "Live PLC ANDON Dashboard",
    description:
      "Real-time industrial ANDON dashboard integrated with PLC using Mitsubishi MX Component. Displays machine status, alarms, downtime, and OEE.",
    tech: ["ASP.NET", "C#", "SQL Server", "PLC", "MX Component"],
    github: "",
    demo: "https://github.com/Hima322/INDUSTRIAL-OEE-DASHBOARD",
  },
  {
    title: "Export & Import Excel Data",
    description:
      "Web application to import Excel data into SQL Server and export database records back to Excel using ASP.NET and jQuery.",
    tech: ["ASP.NET", "C#", "SQL Server", "jQuery"],
    demo: "https://github.com/Hima322/Export-ImportDataFrom-Database",
  },
  {
    title: "Gate Pass Management System",
    description:
      "Web-based gate pass approval system for employees and students with secure workflow, approvals, and reporting.",
    tech: ["ASP.NET", "C#", "SQL Server"],
    
    demo: "https://github.com/Hima322/GatepassFor-going-Outside-Asp.Net",
  },
  {
    title: "PC Restart & Shutdown Tool",
    description:
      "Utility tool to restart or shut down multiple PCs from a single interface, designed for industrial and lab environments.",
    tech: ["C#", ".NET"],
    demo: "https://github.com/Hima322/PCRestart-ShutDown",
  },
  {
    title: "CRUD Operation App",
    description:
      "CRUD application using MongoDB and Express.js for database operations with clean REST APIs.",
    tech: ["Node.js", "Express", "MongoDB"],
  
    demo: "https://github.com/Hima322/Crud-opration",
  },
  {
    title: "Driver Datasheet & Screen App",
    description:
      "ASP.NET application for managing driver datasheets and real-time screen display for industrial use.",
    tech: ["ASP.NET", "C#", "SQL Server"],
  
    demo: "https://github.com/Hima322/covayer-Line-make-sheet-Driver-codriver--Datashowonscreen-",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-5 text-white"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Projects</h2>
          <p className="text-light mt-2">
            Real-world industrial & web applications
          </p>
        </div>

        {/* Projects Grid */}
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className="h-100 shadow-lg border-0"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                }}
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-semibold">
                    {project.title}
                  </Card.Title>

                  <Card.Text className="text-light small mt-2">
                    {project.description}
                  </Card.Text>

                  {/* Tech Stack */}
                  <div className="mb-3">
                    {project.tech.map((t, i) => (
                      <Badge
                        bg="secondary"
                        key={i}
                        className="me-1 mb-1"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto d-flex gap-2">
                    

                    <Button
                      variant="info"
                      size="sm"
                      href={project.demo}
                      target="_blank"
                      disabled={project.demo === "#"}
                    >
                      Live Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
