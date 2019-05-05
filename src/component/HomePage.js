import React from "react";
import PizzaList from '../container/PizzaListContainer';

const HomePage = () => {
    return (
        <div className="App">
            <header>
                <h1>Pizza Order</h1>
            </header>
            <section>
                <h3>Menu</h3>
                <PizzaList/>
            </section>
        </div>
    );
};

export default HomePage;
