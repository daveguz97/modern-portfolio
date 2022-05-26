import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowSplash(false), 1000);
  }, []);
  return (
    <div className="App">
      {showSplash ? (
        <SplashPage title="Front end Developer" />
      ) : (
        <>
          <canvas className="bg"></canvas>
          <main className="absolute">
            <h1>Welcome to my Webpage</h1>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
