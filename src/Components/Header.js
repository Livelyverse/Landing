import React, { useState }  from "react";
import './components.scss';
import logo from './../img/logo.svg';
import menu from './../img/menu.svg';
import drawer from './../img/drawer.svg';
import { Col, Container, Dropdown, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { getUserName } from "./Util/helper";
import RegisterModal from "./Auth/RegisterModal";
import LoginModal from "./Auth/LoginModal";
import Button from "./Button";
import { Logout } from "../API/Auth";
import { isMobile } from "react-device-detect";
import dash from './../img/dash.png';
import prof from './../img/prof.png';
import lout from './../img/logout.png';
import { IsUserLogged } from "./Util/CookieManager";
import adminProf from "../img/icon-admin.png"

export default function Header(props){
    const [show, setShow] = useState(false);
    const [registerShow , setRegisterShow] = useState(false);
    const [loginShow , setLoginShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {active} = props;
    const Cookie = new Cookies();
    const userName = Cookie.get('userName');
    const logged = IsUserLogged(userName);
    return(
        <Container className="header" fluid>
            <Offcanvas show={show} onHide={handleClose} placement="end" className="drawer"> 
                <Offcanvas.Header className="title">
                    <Offcanvas.Title className="titleChild">
                        {!isMobile && 
                            <Row>
                                <Col xs={10}>
                                    Lively Planet
                                </Col>
                                <Col xs={2} style={{textAlign:'right'}}>
                                    <img src={drawer} onClick={handleClose} />
                                </Col>
                            </Row>
                        }
                    </Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row className="drawerMenu">
                        {isMobile && 
                            <Col xs={12} className="logoMobile" onClick={handleClose}>
                                <Link to={'/'}>
                                    <img src={logo} />
                                </Link>
                            </Col>
                        }
                        <Col xs={12} >
                            <Link className={active === 0 ? 'active' : ''} to={'/'}> Home </Link>
                        </Col>
                        <Col xs={12} >
                            <Link className={active === 1 ? 'active' : ''} to={'/partners'}> Partners </Link>
                        </Col>
                        <Col xs={12}>
                            <Link className={active === 2 ? 'active' : ''} to={'/team'}> Team </Link>
                        </Col>
                        <Col xs={12}>
                            <Link className={active === 3 ? 'active' : ''} to={'./transaction'}>
                            Transaction History</Link>
                        </Col>
                        <Col xs={12}>
                            <Link className={active === 4 ? 'active' : ''} to={'/blogs'}> Blogs </Link>
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
            <Row>
                <Col xs={12} lg={6} className="logo">  
                    <Link to={'/'}>
                        <img src={logo} />
                    </Link>
                </Col>
                <Col xs={12} lg={6}>
                    <Row className="rightMenu">
                        <Col xs={2} lg={1}  onClick={handleShow}>
                            <img className="menutoggle" src={menu}></img>
                        </Col>
                        {(!logged) && 
                            <>
                            <Col xs={3} lg={2}>
                            <Button type="color" onClick={()=> setLoginShow(true)}> login </Button>
                            </Col>
                            <Col xs={3} lg={2}>
                                <Button type="transparent" onClick={() => setRegisterShow(true)}> Register </Button>
                            </Col>
                            </>
                        }
                        {(logged) && 
                            <Col xs={6} lg={2}>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        {getUserName()}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        
                                        <Dropdown.Item>
                                            <Link to={'./planet'}>
                                                Planet<img src={dash}/>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to={'./profile'}>
                                                Profile<img src={prof} />
                                            </Link>
                                        </Dropdown.Item>
                                        {(() => {
                                            if (userName == "admin") {
                                                return(
                                                    <Dropdown.Item>
                                                        <Link to={'./admin'}>
                                                            Admin<img src={adminProf} />
                                                        </Link>
                                                    </Dropdown.Item>
                                                )
                                            }
                                        })()}
                                        <Dropdown.Item onClick={(e) => {e.preventDefault(); Logout(userName); }} className="red">
                                                LogOut <img src={lout} />
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        }
                    </Row>
                </Col>
            </Row>    
            <RegisterModal show={registerShow} onHide={()=> setRegisterShow(false)} toggle={()=>{
                setRegisterShow(false);
                setLoginShow(true)
            }}/>  
            <LoginModal show={loginShow} onHide={()=> setLoginShow(false)} toggle={()=>{
                setLoginShow(false)
                setRegisterShow(true);
            }}/> 
        </Container>
    )
}

