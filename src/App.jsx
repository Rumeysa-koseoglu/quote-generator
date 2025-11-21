import "./App.css";
import QuoteCard from "./components/QuoteCard";
import Button from "./components/Button";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/quotes");

      const result = await response.json();

      const allQuotes = result.quotes;
      const randomIndex = Math.floor(Math.random() * allQuotes.length);
      const randomQuote = allQuotes[randomIndex];

      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <QuoteCard quote={quote} author={author} />
      <Button onClick={handleGenerate} />
    </>
  );
}

export default App;
