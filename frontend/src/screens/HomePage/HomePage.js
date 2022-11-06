import { Button, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import News from "../../components/News/News";
const LandingPage = () => {

  return (
    <center>

    <div className="main">
    <Container>
      <Row>

        <div className="intro-text">
          <div className="welcome">
            <h1 className="title">EXPENSE TRACKER</h1>
            <p className="subtitle">One place to store all your transactions</p>
          </div>
          <div className="buttonContainer">

            <a href="/login">
              <Button size="lg" className="landingbutton" style={{marginRight:8}}>
                Login
              </Button>
            </a>

            <Button href="/register"
              size="lg"
              className="landingbutton"
              variant="outline-primary"
            >
              Signup
            </Button>
          </div>
        </div>
        <News />

      </Row>
    </Container>
  </div>
  <div className="Newscar">

  </div>

  </center>

  );
};

export default LandingPage;
