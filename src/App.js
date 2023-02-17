import logo from './logo.svg';
import './App.css';

function App() {
// 1st method of: " samelar patan dynamic data " declar
  var parson={
    name: "Dr. sirin sarmin",
    singar: "hello"
  }
  var parson2={
    name: "eva rahman",
    sing: "kokl konto",
  }
  var style={
      color:'black',
      backgroundColor:'red'
  }

  // 2nd method of :"samelar patan dynamic data"  declar
  const nayoks=['josim','rubal','dipjol','mosumi','sakib']

  const product=[
    {name:"adobe", price:"$20.99"},
    {name:"Ilestator", price:"$50.99"},
    {name:"pdf", price:"$2.99"}

  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        
        
        <p style={style}>singar:{parson.name+" "+parson.singar}</p>
        <p style={{color:'black', backgroundColor:'yellow'}}>singar:{parson2.name+" "+parson2.sing}</p>

        <Person name={nayoks[1]} food="pape" naika="mousumi"></Person>
        <Person name={nayoks[0]} food="jac" naika="sabnur" ></Person>
        <Person name={nayoks[2]} food="goaba" naika="morjina"></Person>
        <Person name={nayoks[3]} food="pape" naika="mousumi"></Person>
        <Person name={nayoks[4]} food="pape" naika="mousumi"></Person>

       
        <Product name="adobe" price="$20.99" ></Product>
        <Product name="meta" price="$39.99" ></Product>
        <Product name="windows" price="$9.99" ></Product>
        <Product name={product[1].name} price={product[1].price}></Product>    
        <Product name={product[0].name} price={product[0].price}></Product>    
        <Product name={product[2].name} price={product[2].price} ></Product> 
           
        <Product products={product[0]} ></Product>
      </header>
    </div>
  );
}



// 3rd method of: " samelar patan dynamic data " declar
var style={border:'2px solid red', margin:'20px'}
function Person(props){
 
  return(
    <div style={style} >
       <h1>name:{props.name}</h1>
       <h2>naika:{props.naika}</h2>
       <p>food:{ props.food}</p>

     
       
    </div>
   
    
  )
}

//test make a product div
function Product(props) {

  const productStyle={
   backgroundColor:'gray',
   width:'300px',
   height:'300px',
   borderRadius:'2px',
   border:'2px solid gold',
   float:'left',
   color:'black'

 }
 return(
   <div style={productStyle}> 

    <h2>name:{props.name} </h2>
    <h1>{props.price}</h1>
    <button>Buy now</button>
    

   </div>
 );
}

const {a} = {a:10}
console.log(a);
export default App;
