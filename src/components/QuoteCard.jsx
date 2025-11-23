import React from "react";

function QuoteCard({ quote, author }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center justify-center gap-8 text-[#e6dad0] text-18px bg-[#424c388a] rounded-[40px] mx-6 p-8 shadow-xl hover:shadow-2xl font-lucida w-full md:max-w-[750px] sm:max-w-[550px] h-[340px] ">
        {quote ? (
          <>
            <p>'{quote}'</p>
            <span className="mr-2">{author}</span>
          </>
        ) : (
          <span>click generate to get a quote..</span>
        )}
      </div>
    </div>
  );
}

export default QuoteCard;
