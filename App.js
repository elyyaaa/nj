import './App.css';
import { Button } from "./components/button/Button";
import User from "./components/user/User";
import Person from "./components/person/Person";
function App() {
  return (
      <>
          <div>Hello!</div>
          <Button text={"Open"}/>
          <Button text={"Close"}/>
          <Button text={"Edit"}/>
          <User name={"elya"} age={20}/>
          <Person name={"Emma"} zodiacSign={"Lion"}/>

      </>

  );
}

export default App;
