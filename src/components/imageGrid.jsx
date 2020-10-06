import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const ImageGrid = (props) => {
  const { images, path, size } = props;
  if (!images) {
    return null;
  }
  return (
    <Container>
      <Row>
        {images.map((img, idx) => (
          <Col xs={6} md={4} key={idx}>
            {" "}
            <Image
              className="overflow-hidden"
              key={idx}
              rounded
              src={img[path]}
              style={{ width: size, height: size * 1.5 }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageGrid;
