import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";


/* IMPORTING Component > FORM */
function Form(){ 
  function Checkout({setBirds, setForm}) {


    const submitForm= (e) => {
        e.preventDefault();
        setBirds([]);
       setForm({})
        alert("You have adopted birds. Thank you!")
       
    }
    

    return (
        <div className="Checkout">
            <form onSubmit={submitForm}>
                <h1>Checkout</h1>
                    <label htmlFor="firstName">First Name</label>
                    
                    <input id="firstName" name="firstName" type='text' />

                    <label htmlFor="lastName">Last Name </label>
                    
                    <input id="lastName" name="lastName" type='text' />

                    <label htmlFor="email">Email </label>
                    
                    <input id="email" name="email" type='text' />

                    <label htmlFor="zipCode">Zip Code </label>
                    
                    <input id="zipCode" name="zipCode" type='text' />
                    <input type ="submit" value="Submit" /> 
            </form>
               
        </div>
    )


};
};

/* IMPORTING DATA > birdData */
  const birdData = [
  {
    img: "https://cdn.pixabay.com/photo/2020/06/03/13/47/bird-5255017_960_720.jpg",
    name: "Shoebill",
    amount: 100,
    id: 444,
  },
  {
    img: "https://i.imgur.com/20pjOv5b.jpg",
    name: "Resplendent Quetzal",
    amount: 200,
    id: 555,
  },
  {
    img: "https://i.imgur.com/GacKN4tb.jpg",
    name: "Royal Flycatcher",
    amount: 300,
    id: 777,
  },
  {
    img: "https://i.redditmedia.com/sl3adn3eXY65Y4yNLxMRO_O4y-Pf1EYCxPuHpV34WqI.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=f461fa6cd525892f85eb89268550867a",
    name: "Boat Billed Heron",
    amount: 600,
    id: 1333,
  },
  {
    img: "https://i.imgur.com/vHQizcwb.jpg",
    name: "Turaco",
    amount: 400,
    id: 888,
  },

  {
    img: "https://i.imgur.com/YHApS55.png",
    name: "King Vulture",
    amount: 500,
    id: 1010,
  },
  {
    img: "https://i.imgur.com/ZkvJHL8b.jpg",
    name: "Frilled Coquette Hummingbird",
    amount: 600,
    id: 1212,
  },

  {
    img: "https://i.imgur.com/VGAxKX1.png",
    name: "tweetr",
    amount: 10000,
    id: 999,
  },
  {
    img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/14/15/MPP.jpg?w968h681",
    name: "Ex Parrot",
    amount: 700,
    id: 2424,
  },
];

/* IMPORTING COMPONENT > CARDS */


function Cards(){
  function BirdCards({ birds, setBirds}) {

function birdForCarts (bird){
setBirds([...birds, bird])
}
  return( 
  
  
    <section>
      {/* {console.log(birds) } */}
      <ul className="birds">
        {birdData.map((bird) => (
         
         <li className="birds" id={bird.id}>
            <h4>{bird.name}</h4>
            <p>Price: ${bird.amount}</p>
            <img
              src={bird.img}
              width="200"
              height="200"
              alt="bird"
            ></img>
            <button className="myButton" onClick={() => birdForCarts(bird)}>
              Adopt
            </button>
          </li>
          
        ))}
      </ul>
    </section>
  );
  
 }}

/* IMPORTING DATA > bonusItems */

const bonusItems = [
  "Stickers",
  "Background for your computer",
  "Tote bag",
  "Invites to VIP live streams",
];

/* IMPORTING COMPONENT > CART */

function Cart({ birds, setBirds }) {
  const updateBirdsArray = (bird) => {
    birds.splice(birds.indexOf(bird), 1);

    setBirds([...birds]);
  };

  let total = birds.reduce((a, b) => {
    return b.amount + a;
  }, 0)

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>
        Total: $
        {total}
      </h4>
      {/*birds is a interable collection from the state state(=birds) value 4 birds */}
      <p>Discount: {birds.length >= 3 ? "10%" : "0%"}</p>
      <ol>
        {birds.map((bird) => {
          return (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
              <button
                onClick={() => {
                  updateBirdsArray(bird);
                }}
              ></button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
      {total > 99 ? <li>{bonusItems[0]} </li> : null}
       {total> 100 ? <li>{bonusItems[1]} </li> : null}
        {total > 499 ? <li>{bonusItems[2]}</li> : null}
        {total > 999 ? <li>{bonusItems[3]} </li> : null}
      </ul>
    </div>
  );
}
{
  
//let reduce = birds.reduce((a, b) => {return b.amount + a}, 0)  */
}

/* IMPORTING APP */

function App() {
  const [birds, setBirds] = useState([]);
  const [form, setForm] = useState({
firstName: "",
lastName: "",
email: "",
zipCode: "",
  });

  return (
    <>
    <div className="card">
      <h1>Hello, world!</h1>
 
     <Form setBirds={setBirds} setForm={setForm}/>
     </div>

     <div className="card">
        <Cart birds={birds} setBirds={setBirds}/>
   </div>
  
  <div className="card">
        <Cards
           birds={birds}
          setBirds={setBirds}
          />
   </div>
   </>
  );
};

/* THE INDEX JAVASCRIPT */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
