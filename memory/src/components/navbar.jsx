


import image from '../assets/logocasino.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function logo() {
  return (
    <>
     
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../assets/logocasino.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default logo;