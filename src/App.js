
import './App.css';


import Body from './component/body'
import Tablist from './component/tablist'
import { useState } from 'react';


function App() {
  const [active, setactive] = useState(1)
  const tabs = [{
    id: 1,
    title: 'Text'
  },
  {
    id: 2,
    title: 'Image'
  },
  {
    id: 3,
    title: 'Video'
  },
  {
    id: 4,
    title: 'Table'
  },
  {
    id: 5,
    title: 'Email'
  }
  ]
  const changetab = (id) => {
    setactive(id)
  }
  return (

    <div className="App">
      <h1>Programming Assignment 3</h1>
      <div className="nav-bar">
        <Tablist tabs={tabs} activetab={active} ctab={changetab} />
      </div>
      <div className="main-body">
        <Body activetab={active} />
      </div>
    </div>
  );
}
export default App;
