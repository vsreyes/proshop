import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Proshop</Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
