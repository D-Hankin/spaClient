import { useEffect, useState } from 'react'
import './App.css'
import Menu from './menu/Menu'
import Home from './home/Home';
import Booking from './booking/Booking';
import Staff from './staff/Staff';
import Contact from './contact/Contact';

function App() {

  const [page, setPage] = useState("");

  useEffect(() => {
  
    let pageUrl = page;

    if (!pageUrl) {
      const queryParameters: URLSearchParams = new URLSearchParams(window.location.search);
      const getUrl: string | null = queryParameters.get("page");
  
      if(getUrl) {
        pageUrl = getUrl;
        setPage(getUrl) 
      } else {
        pageUrl = "home";
      }
    }

    window.history.pushState(
      null, 
      "",
      "?page=" + pageUrl
    )
  }, [page])

  const updatePage = (newPage: string) => {
    setPage(page+newPage);
  }

  return (
    <>
      <h1 id='headerDiv'>The Pit of Despair Spa and Relaxtion Center</h1>
      <div id='contentDiv'>
        <div id='menuLeftDiv'>
          <Menu page={page} setPage={setPage} />
        </div>
        <div id='contentRightDiv'>
          { page.startsWith("home") ? <Home key={page} /> : null}
          { page.startsWith("booking") ? <Booking key={page} updatePage={updatePage}/> : null}
          { page.startsWith("staff") ? <Staff key={page} /> : null}
          { page.startsWith("contact") ? <Contact key={page}/> : null}
      </div>
    </div>
    </>
  )
}

export default App
