import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [state, setstate] = useState(false);
 return (
    <div className="App">
      <header className="App-header" id="header">
        <aside id="button">
          <button onClick={changeWindow}>
            <h3>
              Você confia em mim?
            </h3>
          </button>
        </aside>

        {
          test()
        }
      </header>
    </div>
  );

  function changeWindow(event) {
    document.getElementById("button").style.display = "none";
    setstate(true);
  }

  function test() {
    if(state == true){
      return (
        <main>
          <iframe id="iframe" width={window.innerWidth} height={window.innerHeight} src="https://www.youtube.com/embed/BzV4BkxtyYs?autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </main>
      )
    }
  }
}

export default App;
