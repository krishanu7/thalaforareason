import React, { useState } from "react";
import ReactConfetti from "react-confetti";
import Swal from "sweetalert2";

import Video from "../assets/correct.mp4";
import Image from "../assets/wrong.png";
import AudioSample from "../assets/audiofalse.mp3";

const HeroSection = () => {
  const [inputVal, setInputVal] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleInputVal = (e) => {
    e.preventDefault();
    setInputVal(e.target.value);
  };

  const handleShare = () => {
    let urlToCopy = window.location.origin;
    const inputText = document.getElementById("snippet").value.trim();
    if (inputText !== "") urlToCopy = urlToCopy + `?s=${btoa(inputText)}`;
    navigator.clipboard.writeText(urlToCopy);
    Swal.fire({
      title: "Success!",
      text: "Share Url has been copied to your clipboard!",
      showCloseButton: true,
      focusConfirm: true,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "OK",
    });
  };

  const checkThala = () => {
    const snippet = document.getElementById("snippet").value.trim();
    let sum = 0;

    function thalaFan() {
      setShowConfetti(true);
      Swal.fire({
        title: "Good job!",
        text: "Thala For A Reason!",
        width: 500,
        height: 300,
        html: `<video autoplay loop class="text-center"><source src="${Video}" type="video/mp4"></video>`,
        showCloseButton: true,
        focusConfirm: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "OK",
      });
    }

    function notTahalFan() {
      const audio = new Audio(AudioSample);
      audio.play();
      Swal.fire({
        title: "Wrong!",
        text: "Not Thala For A Reason!",
        imageUrl: Image,
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: "Not Thala",
        preConfirm: () => {
          audio.pause();
          audio.currentTime = 0;
        },
      });
    }

    if (is_numeric(snippet)) {
      for (let i = 0; i < snippet.length; i++) {
        const charVal = parseInt(snippet.charAt(i), 10);
        if (!isNaN(charVal)) sum += charVal;
      }
      if (sum % 7 === 0) {
        thalaFan();
      } else {
        notTahalFan();
      }
    } else {
      sum = snippet.length;
      if(snippet.toLowerCase()==='msd' || snippet.toLowerCase()==='mahindra singh dhoni'){
        thalaFan();
      }else if (sum === 7) {
        thalaFan();
      } else {
        notTahalFan();
      }
    }
  };

  const is_numeric = (str) => /^\d+$/.test(str);

  return (
    <div className="bg-teal-500 text-slate-100 mt-6 w-[40%] h-[60%] flex flex-col justify-center items-center border-2 border-teal-600 rounded-xl shadow shadow-black text-xl font-sans">
      <h1 className="text-2xl font-semibold sm:px-2">
        Let's check if you are a Thala fan
      </h1>
      <hr className="text-black" />
      <div className="gap-3 flex flex-row w-[90%] my-4">
        <input
          type="text"
          name="snippet"
          id="snippet"
          placeholder="Enter your snippet"
          value={inputVal}
          onChange={handleInputVal}
          className="w-[60%] text-slate-600 outline-none p-3 pl-5 pr-5 border rounded"
        />
        <button
          onClick={() => {
            checkThala();
          }}
          type="submit"
          className="p-3 text-lg md:text-lg w-[40%] pl-2 pr-2 text-white bg-blue-500 rounded shadow shadow-black"
        >
          Check Thalavity
        </button>
      </div>
      <button
        onClick={handleShare}
        className="gap-4 flex flex-row rounded bg-green-300 text-black p-3 pr-4 pl-4 my-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className="h-6"
          viewBox="0 0 24 24"
        >
          <path d="M16.707031 2.2929688 L 15.292969 3.7070312 L 17.585938 6 L 17 6 C 10.936593 6 6 10.936593 6 17 L 6 18 L 8 18 L 8 17 C 8 12.017407 12.017407 8 17 8 L 17.585938 8 L 15.292969 10.292969 L 16.707031 11.707031 L 21.414062 7 L 16.707031 2.2929688 z M 2 8 L 2 9 L 2 22 L 22 22 L 22 18 L 22 17 L 20 17 L 20 18 L 20 20 L 4 20 L 4 9 L 4 8 L 2 8 z"></path>
        </svg>
        Share Snippet
      </button>
      <div className="mb-2 text-center">
        <a
          href="https://github.com/krishanu7/ThalaForAReason"
          className="gap-2 items-center justify-center flex flex-col-reverse"
          aria-label="Homepage"
          title="GitHub"
        >
          Made by Krishanu Saha
          <svg
            aria-hidden="true"
            className="octicon octicon-mark-github"
            height="24"
            version="1.1"
            viewBox="0 0 16 16"
            width="24"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </div>
      {showConfetti && (
        <ReactConfetti
          numberOfPieces={1000}
          recycle={false}
          width={window.innerWidth}
          height={window.innerHeight}
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.8 + 1.5 * angle) * Math.cos(angle);
              const y = (0.8 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
        />
      )}
    </div>
  );
};

export default HeroSection;
