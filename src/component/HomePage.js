import React from "react";
import PizzaList from '../container/PizzaListContainer';
import ActionButtons from '../container/ActionButtonsContainer';
import ToppingSelector from '../container/ToppingSelectorContainer';
import TotalOrder from '../container/TotalOrderContainer';
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
                            <h3>Pizzas Menu</h3>
                            <PizzaList/>
                        </section>
                    </Col>
                    <Col>
                        <section>
                            <ToppingSelector />
                        </section>
                        <section>
                            <ActionButtons/>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TotalOrder/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
