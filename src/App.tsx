import { useEffect, useState } from 'react'
import './App.css'
import Menu from './menu/Menu'

function App() {

  const [page, setPage] = useState("home");

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

  return (
    <>
      <h1>The New World Order Spa and Relaxtion Center</h1>
      <div id='contentDiv'>
        <Menu page={page} setPage={setPage} />
      </div>
    </>
  )
}

export default App
