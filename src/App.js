import logo from './logo.svg';
import './App.css';
import List from './components/card';
import { Items } from './components/card';


function App() {
  let data=["Android","Blackberry","iPhone","Windows Phone"];
  return (
    <div className="App">
       {/* <h3 style={{ textAlign:"center" }}>Mobile Operating System</h3>
      <ul style={{ border:"1px  green", width:100, margin:"auto"}}>
      <List from="Android"/>
      <List from="Blackberry"/>
      <List from="iPhone"/>
      <List from="Windows Phone"/>

      </ul> */}


      <h3 style={{ textAlign:"center" }}>Mobile Manufacturers</h3>
      <ul style={{ border:"1px  green", width:100, margin:"auto"}}>
      <List from="Samsung"/>
      <List from="HTC"/>
      <List from="Micromax"/>
      <List from="Apple"/>

      </ul> 

      <ul>
        <h3 style={{ textAlign:"center" }} >Mobile Manufacturers</h3>
        <Items style={{ border:"1px solid  green", width:100, margin:"auto"}} />
      </ul>

    

    


    </div>
  );
}

export default App;

