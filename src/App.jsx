import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom"; 
import ViewCrewmate from './pages/ViewCrewmate'
import CreateCrewmate from './pages/CreateCrewmate.jsx';
import EditCrewmate from './pages/EditCrewmate.jsx'
import NavBar from './components/NavBar.jsx'
import CrewmateInfo from './components/CrewmateInfo.jsx'
import { Link } from 'react-router-dom'
import { supabase } from './client.js'
import './App.css'

function App() {
  const [crewmates, setCrewmates] = useState([]); 
  
  useEffect(()=> {
      const fetchData = async () => {
          const { data } = await supabase
          .from("characters")
          .select()
          .order("created_at", { ascending: true });

      setCrewmates(data);
      };
      fetchData();
      }, [])


  // Sets up routes
  let elements = useRoutes([
    {
      path: "/",
      element: <div className='App'>
              <h1>Welcome to the Crewmate Creator!</h1>
              <h3>Here is where you can create your very own set of crewmates before sending them off into space!</h3>
              </div>
    },
    {
      path: "/new-crewmate",
      element: <CreateCrewmate /> 
    },
    {
      path: "/crewmates",
      element: <ViewCrewmate data={crewmates}/>
    },
    {
    path:"crewmates/edit/:id",
    element: <EditCrewmate data={crewmates} />
    },
    {
      path: "crewmates/crewmate/:id",
      element: <CrewmateInfo data={crewmates}/>
    }, 
    {
      path: "crewmates/crewmate/:id/edit/:id",
      element: <EditCrewmate allCrewmates={crewmates} /> 
    }
  ]);

  return (
    <div className="App">
      <NavBar />
      {elements}
    </div>
  )
}

function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Main;

