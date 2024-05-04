import { useEffect } from "react";

function Home() {
  useEffect(() => {
    fetch("http://localhost:8080")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <h1>hello Home</h1>;
}
export default Home;
