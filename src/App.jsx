import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Col, Row } from "antd";
import banner from "./assets/bg-banner.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Row gutter={[0,80]} style={{ height: "100px", background: "red" }}>
        <Col span={24} style={{ height: "100px" }}>
          <img src={banner} style={{ width: "100%" }} />
        </Col>
      </Row>
    </>
  );
}

export default App;
