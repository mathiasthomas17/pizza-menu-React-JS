import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    // Inline Styling
    <header className="header">
      <h1>Mashariki Foods' CO.</h1>
    </header>
  );
}
// Menu Comp
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Mashariki Foods' CO is an American multinational pizza restaurant
            chain and international franchise founded in 1958 in Wichita, Kansas
            by Dan and Frank Carney. The chain, headquartered in Plano, Texas,
            operates 19,866 restaurants worldwide as of 2024
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaOBJ={pizza} key={pizza.key} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We ere still working on our menu.Please comeback</p>
      )}

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={15}
        photoName="pizzas/focaccia.jpg"
      />
      <Pizza
        name="Mashrooms"
        ingredients="Tomato Mashes"
        price={10}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}
// Pizza Component
function Pizza({ pizzaOBJ }) {
  // console.log(props);
  // Rule 1 - Func name must strat with capital
  //Func must return only 1 element
  // if (pizzaOBJ.soldOut) return null;

  return (
    <li className={`pizza ${pizzaOBJ.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaOBJ.photoName} alt={pizzaOBJ.name} />
      <div>
        <h3>{pizzaOBJ.name}</h3>

        <p>{pizzaOBJ.ingredients}</p>
        <span>{pizzaOBJ.soldOut ? "Solt Out" : pizzaOBJ.price + 8}</span>
      </div>
    </li>
  );
}

// Footer Comp
function Footer() {
  const hour = new Date().getHours();
  const openHours = 4;
  const closeHour = 22;
  // Conditional Rendering
  const isOpen = hour >= openHours && hour <= closeHour;
  console.log(hour);
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          Happy to welcom you between {openHours} and {closeHour}
        </p>
      )}
    </footer>
  );
}

// order
function Order(props) {
  return (
    <div className="order">
      <p>We're Opened until {props.closeHour}</p>
      <button className="btn">Order</button>
    </div>
  );
}
// React V18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
