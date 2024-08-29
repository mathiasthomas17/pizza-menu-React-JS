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

      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaOBJ={pizza} key={pizza.key} />
          ))}
        </ul>
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
function Pizza(props) {
  // console.log(props);
  // Rule 1 - Func name must strat with capital
  //Func must return only 1 element
  return (
    <li className="pizza">
      <img src={props.pizzaOBJ.photoName} alt={props.pizzaOBJ.name} />
      <div>
        <h3>{props.pizzaOBJ.name}</h3>
        <p>{props.pizzaOBJ.ingredients}</p>
        <span>{props.pizzaOBJ.price + 8}</span>
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
      {isOpen && (
        <div className="order">
          <p>We're Opened until {openHours}</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

// React V18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
