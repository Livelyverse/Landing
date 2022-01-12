import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import './../components.scss';
import {headBoard , marketing , business} from './data';
import DepMembers from './DepMembers';

import gabriela from './../../img/TeamMembers/gabriela.png';


const Departments = () => {
    const titles = ['Headboard' , 'Marketing' , 'Business Development'];

    return(
        <Container fluid className='departmentsWrapper'>
            <Container>
                <Accordion defaultActiveKey={'0'}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> Headboard </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                {headBoard.map((item) => {
                                    return (<DepMembers name={item.name} image={item.image} position={item.position} bio={item.bio} />)
                                })}
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={'1'}>
                    <Accordion.Item eventKey="1" >
                        <Accordion.Header>Marketing Development</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                {marketing.map((item) => {
                                    return (<DepMembers name={item.name} image={item.image} position={item.position} bio={item.bio} />)
                                })}
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={'2'}>
                    <Accordion.Item eventKey="2" >
                        <Accordion.Header>Strategic consultant </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                {business.map((item) => {
                                    return (<DepMembers name={item.name} image={item.image} position={item.position} bio={item.bio} />)
                                })}
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </Container>
    )
}

export default Departments;