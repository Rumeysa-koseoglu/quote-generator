import React from "react";
import loadingSpinner from "../assets/spinner.svg";
import Spinner from "./Spinner";

function QuoteCard({ quote, author, loading }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center justify-center gap-10 text-[#e6dad0] bg-[#424c388a] rounded-[40px] mx-6 p-8 shadow-xl hover:shadow-2xl w-full md:max-w-[750px] sm:max-w-[550px] h-[380px]">
        {loading ? (
          <Spinner className="w-12 h-12 text-[#253526] animate-spin" />
        ) : (
          <>
            {quote ? (
              <>
                <p
                  className={`font-lucida text-[20px] my-8 ${
                    loading ? "fade-in" : ""
                  }`}
                >
                  '{quote}'
                </p>
                <span className="mr-2 text-[18px] font italic ">-{author}</span>
              </>
            ) : (
              <span className="text-[#e6dad0] text-[20px] italic font-verdana">
                click 'Generate Quote' to get a quote..
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default QuoteCard;
