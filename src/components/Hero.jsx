import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import myPhoto from "../assests/MyPhoto.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={6} className="text-start">
            <motion.h5
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="mb-2 text-warning"
            >
              Hello
            </motion.h5>

            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="fw-bold mb-3"
              style={{
                background:
                  "linear-gradient(90deg, #ff6a00, #ee0979, #ff6a00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              I'm Himanshu Pandey
            </motion.h1>

            <motion.h4
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                background:
                  "linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Software Engineer
            </motion.h4>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4"
            >
              {/* GitHub Projects */}
              <a
                href="https://github.com/Hima322"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="danger" className="me-3">
                  Get a Project
                </Button>
              </a>

              {/* Resume PDF */}
              <a href="/ResumeHimanshu.pdf" download>
                <Button variant="outline-light">My Resume</Button>
              </a>
            </motion.div>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center position-relative mt-4 mt-md-0">
            {/* Floating halo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,110,0,0.3), transparent 70%)",
                zIndex: 0,
                filter: "blur(50px)",
              }}
            />

            {/* Profile image */}
            <motion.img
              src={myPhoto}
              alt="Himanshu Pandey"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: "550px", zIndex: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Decorative floating circles */}
      <motion.div
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          top: "20%",
          left: "10%",
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          bottom: "10%",
          right: "15%",
        }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
}
