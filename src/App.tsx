import { useState } from 'react'
import Header from './components/header/header'
import Project from './components/main/project';
import './App.css'

type ObjectItemType = {
  id: number;
  name: string;
};

function App() {
  const [show, setShow] = useState<boolean>(false);
  const [allProjects, setAllProjects] = useState<ObjectItemType[]>([]);

  return (
    <>
      <Header show={show} setShow={setShow} />
      <Project show={show} setShow={setShow} allProjects={allProjects} setAllProjects={setAllProjects} />
    </>
  )
}

export default App
