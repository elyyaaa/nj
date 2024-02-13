import './App.css';
import Modal from "./components/modal/Modal";
import {useState} from "react";
import List from "./components/list/List";
function App() {
    const tasks = [
        { id: 1, title: 'coding', completed: false },
        { id: 2, title: 'eat', completed: false },
        { id: 3, title: 'sleep', completed: false },
    ]
    const [show, setShow] = useState(false)
    console.log(show)
    const handleShow = ()=>{
      setShow(!show)

    }
  return (
    <>
        {
            show && <Modal handleShow={handleShow}>

            </Modal>
        }
        <button onClick={handleShow}>open</button>
        <h1>Task List</h1>
        <List tasks={tasks} />

    </>
  );
}

export default App;
