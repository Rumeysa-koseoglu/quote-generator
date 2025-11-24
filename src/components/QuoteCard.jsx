import React from "react";

function QuoteCard({ quote, author }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center justify-center gap-10 text-[#e6dad0] bg-[#424c388a] rounded-[40px] mx-6 p-8 shadow-xl hover:shadow-2xl w-full md:max-w-[750px] sm:max-w-[550px] h-[380px] ">
        {quote ? (
          <>
            <p className="font-lucida text-[20px] my-8">'{quote}'</p>
            <span className="mr-2 text-[18px] font italic ">-{author}</span>
          </>
        ) : (
          <span className="text-[#e6dad0] text-[20px] italic font-verdana">
            click generate to get a quote..
          </span>
        )}
      </div>
    </div>
  );
}

export default QuoteCard;
