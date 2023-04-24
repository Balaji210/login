import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import ProtectedRoute from "./Component/ProotectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container >
      <Row className="main-row">
        <div style={{ width: "400px" }}>
          <Col className="main-card">
            <UserAuthContextProvider>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default App;