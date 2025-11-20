import "./App.css";
import QuoteCard from "./components/QuoteCard";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    console.log("button is clicked");
  };

  return (
    <>
      <QuoteCard quote={quote} author={author} />
      <Button onClick={handleGenerate} />
    </>
  );
}

export default App;
