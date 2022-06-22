import React from 'react';
import { Navbar,Container,Nav,FormControl,Button,Dropdown,Col,Row,NavDropdown,Offcanvas,Form ,Modal} from 'react-bootstrap';
import logoOrange from '../assets/freeLogo.png';
import logo from '../assets/buying.gif'
import styles from  './Header.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"


const Header = () => {


  const changeModal=()=>{
     setShowmodal(
      true
     )
  };

  const changeModalPassword=()=>{
    setShowmodalPassword(
     true
    )
 }

 const changeModalForm=()=>{
  setShowmodalForm(
   true
  )
}

const goMainPage=()=>{
  setShowmodalForm(
    false
   );
   setShowmodalForm(
    false
   );
   setShowmodalPassword(
    false
   );
   setShowmodal(
    false
   )
}


    const navigate = useNavigate()
    
    const [name, setName] = useState([])
    const [showHome , setShowHome] = useState(false); 
    const [showModalForm , setShowmodalForm] = useState(false); 
    const [showModalPassword , setShowmodalPassword] = useState(false); 
    const [showModal , setShowmodal] = useState(false); 
    const [show, setShow] = useState(false);
    const showDropdown = e=>
    {setShow(!show);}

    const hideDropdown = e =>
    {setShow(false);}


    return (
        <div>
            { 
            [,  'lg'].map((expand) => (
    <Navbar  fluid fixed="top" key={expand} bg="light" expand={expand} className="mb-3">
      <Container className='container1'   fluid>
        <Navbar.Brand className='navbarBrand' href="#">
        <img src={logo}  class='img' />
                        <br></br>
                        
                        <div class="vl"></div>

                        
                         {name.length === 0 ?
                         <Button onClick={() => changeModal()} className={styles.btn} variant="outline-success">ورود | ثبت‌ نام</Button> :
                         name}
                        
                       
        </Navbar.Brand>
        <Navbar.Toggle className='tggleNav' aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className='offcanves1'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 navbarToggle">
              <Nav.Link href="#action1">سوپرمارکت</Nav.Link>
              <Nav.Link href="#action2">پرفروش‌ترین‌ه</Nav.Link>
              <Nav.Link href="#action2">تخفیف‌ها و پیشنهادها</Nav.Link>
              <Nav.Link href="#action2">شگفت‌انگیزها</Nav.Link>
              <Nav.Link href="#action2">سوالی دارید؟</Nav.Link>

              <NavDropdown
                title="دسته‌بندی کالاها"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                className='dropdownNavbar'
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Offcanvas.Body>
          <Form className="d-flex formNavbar">
              <FormControl
                type="search"
                placeholder="... جستجو "
                className="me-2 inputNav"
                aria-label="Search"
              />
              <img src={logoOrange} class='logoShop' />
            </Form>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>






  ))} 




      <Modal show={showModal} onHide={goMainPage}>
           <Modal.Header closeButton>
           <Modal.Title className='textModal'>لطفا شماره موبایل خود را وارد کنید</Modal.Title>
           </Modal.Header>

           <Modal.Body>
              <FormControl className='inputShowModal'/>
           </Modal.Body>

           <Modal.Footer>
           <Button className='btnModal' onClick={() => changeModalPassword()} variant="secondary">تایید</Button>
           </Modal.Footer>
      </Modal>



      <Modal show={showModalPassword} onHide={goMainPage}>
           <Modal.Header closeButton>
           <Modal.Title className='textModal'>لطفا کد تایید خود را وارد کنید</Modal.Title>
           </Modal.Header>

           <Modal.Body>
           <FormControl className='inputShowModal'/>
           </Modal.Body>

           <Modal.Footer>
           <Button className='btnModal' onClick={() => changeModalForm()} variant="secondary">تایید</Button>
           </Modal.Footer>
      </Modal>











      <Modal show={showModalForm} onHide={goMainPage}>
          

           <Modal.Body>
           <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label className='textModal'>لطفا نام و نام خانوادگی خود را وارد کنید</Form.Label>
           <FormControl className='inputShowModal' onChange={(event) => setName(event.target.value) } type="text"  />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label className='textModal2'>لطفا پسورد خود را وارد کنید</Form.Label>
             <Form.Control className='inputShowModal' type="password" />
           </Form.Group>
           </Form>
           </Modal.Body>

           <Modal.Footer>
           <Button className='btnModal' onClick={() => goMainPage()} variant="secondary">ورود</Button>
           </Modal.Footer>
      </Modal>


  


        
        

        </div>
    );
};

export default Header;