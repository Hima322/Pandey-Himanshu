import { Container, Row, Col, Card } from "react-bootstrap";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-5 text-white"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      <Container>
        {/* Heading */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold display-6">Experience</h2>
         
          </Col>
        </Row>

        {/* Experience Card */}
        <Row className="justify-content-center">
          <Col md={10}>
            <Card
              className="border-0 shadow-lg"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Card.Body className="p-4">
                {/* Role */}
                <h4 className="fw-semibold mb-1">
                  Software Engineer
                </h4>

                {/* Company */}
                <p className="text-info mb-1">
                  Pioneer Machine & Automation (P) Ltd
                </p>

                {/* Location & Duration */}
                <p className="text-light mb-4">
                  Ghaziabad, Delhi NCR <br />
                  <small>August 2023 – Present</small>
                </p>

                {/* Responsibilities */}
                <ul
                  className="text-light"
                  style={{ lineHeight: "1.9" }}
                >
                  <li>
                    Developed scalable industrial applications using
                    <strong> ASP.NET MVC, Web API, C#, and SQL Server</strong>
                    with real-time REST communication for production environments.
                  </li>

                  <li>
                    Built <strong>OEE dashboards</strong> showing live machine
                    performance, downtime, shift metrics, and
                    <strong> Six Big Losses</strong> with responsive UI using
                    <strong> Bootstrap, jQuery, and AJAX</strong>.
                  </li>

                  <li>
                    Integrated <strong>Mitsubishi PLCs</strong> through
                    <strong> MC Protocol, Modbus, and OPC</strong> and developed
                    Windows Services for continuous machine data acquisition and
                    cloud synchronization.
                  </li>

                  <li>
                    Implemented <strong>ZPL-based QR code printing</strong>,
                    torque validation, barcode verification, and automated
                    tracking across multi-station conveyor systems.
                  </li>

                  <li>
                    Designed complete <strong>manufacturing workflows</strong>
                    with real-time tracking, alarms, and production reporting.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
