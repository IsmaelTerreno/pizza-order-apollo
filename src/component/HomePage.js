import React from "react";
import PizzaList from '../container/PizzaListContainer';
import PizzaForm from "./PizzaForm";
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <h1>Pizza Cart</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <section>
                            <h3>Menu</h3>
                            <PizzaList/>
                        </section>
                    </Col>
                    <Col>
                        <section>
                            <PizzaForm pizza={null}/>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
