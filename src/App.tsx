import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return (
    <>
      <h2>asd</h2>
      <h1>asdf</h1>
    </>
  );
}

export default App;
