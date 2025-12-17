import { Container, Button, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function ContactSimple() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{ background: "#0f0c29", color: "white" }}
    >
      <Container style={{ maxWidth: "700px" }}>
        {/* Contact Title */}
        <h2 className="mb-4">Contact Me</h2>
        <p className="mb-3">
          I’m always open for a chat. Reach out to me via phone, email, or click the button to send a message.
        </p>

        {/* Contact Details */}
        <div className="mb-4">
          <p>
            <FaPhone className="me-2" /> +91 6392760053
          </p>
          <p>
            <FaEnvelope className="me-2" /> hp2921065@gmail.com
          </p>
        </div>

        {/* Contact Button */}
        <Button
          variant="danger"
          href="mailto:hp2921065@gmail.com"
          className="mb-4"
        >
          Send a Message
        </Button>

        {/* Social Icons */}
        <Row>
          <Col>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/himanshu-pandey-650aa8229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/6392760053"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://github.com/Hima322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>

        {/* Optional small footer text */}
        <p className="mt-3 text-muted fs-6">Feel free to reach out anytime!</p>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        Button:hover {
          transform: scale(1.05);
          transition: 0.3s;
        }
        a:hover {
          color: #ffc107;
          transition: 0.3s;
        }
      `}</style>
    </section>
  );
}
