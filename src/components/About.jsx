import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section
      id="about"
      className="py-5 text-white"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      <Container>
        {/* Heading */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold display-6">About Me</h2>
            <p className="text-light mt-2">
              Software Engineer | Industrial Automation | .NET Developer
            </p>
          </Col>
        </Row>

        {/* Content */}
        <Row className="justify-content-center">
          <Col md={10}>
            <p className="text-light" style={{ lineHeight: "1.9" }}>
              I am a <strong>Software Engineer</strong> with
              <strong> 2.6+ years of experience</strong> in developing
              <strong> industrial automation software</strong> using
              <strong> ASP.NET MVC, Web API, C# and SQL Server</strong>.
            </p>

            <p className="text-light" style={{ lineHeight: "1.9" }}>
              Currently working at
              <strong>
                {" "}
                Pioneer Machine & Automation Pvt. Ltd., Ghaziabad
              </strong>
              , where I build real-time applications that integrate
              <strong> PLCs, machines, sensors, scanners and printers</strong>
              for production environments.
            </p>

            <p className="text-light" style={{ lineHeight: "1.9" }}>
              My expertise includes
              <strong>
                {" "}
                OEE & ANDON dashboards, live machine monitoring,
                manufacturing workflows and industrial system integration
              </strong>
              , focusing on reliability, performance and scalability.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

