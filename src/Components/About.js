import img from "./images/profile.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="80%"
              width="50%"
              alt="user"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Software Ambassador</h3>
            <br></br>
            <p style={{ color: "#728394" }}>
              A Software Ambassador combines the technical knowledge with project management skills
              to encourage digital transformation and a pragmatic way of working.

              My expertise 
            </p>
            <br></br>
            <p style={{ color: "#728394" }}>
              Always seeking challenging position in and organization where my
              skills find ample of oppurtunities for upgradation and growth of
              the company.
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+353 0894010329</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Dublin, Ireland</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>MSc - Intelligent Systems @ TCD (2021-2022)</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:borolebhushan8@gmail.com">
                        borolebhushan8@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
