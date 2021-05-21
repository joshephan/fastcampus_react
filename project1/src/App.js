import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [second, setSecond] = useState(0);

  // 마운트 이후 실행
  useEffect(() => {
    console.log("마운트");
    let inteval = setInterval(() => {
      setSecond(second + 1);
    }, 1000);

    // 클린업, 언마운트
    return () => {
      console.log("언마운트");
      clearInterval(inteval);
    }
  }, [second]);

  return (
    <div>
      <p>{second}초</p>
    </div>
  );
}

export default App;
