import React from "react";

function QuoteCard({ quote, author }) {
  return (
    <div>
      <div className="card">
        {quote ? (
          <>
            <p>'{quote}'</p>
            <span>{author}</span>
          </>
        ) : (
          <span>click generate to get a quote..</span>
        )}
      </div>
    </div>
  );
}

export default QuoteCard;
