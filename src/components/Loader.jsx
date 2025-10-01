import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const Loader = ({ onComplete }) => {
  const numberRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    let customEase =
      "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";

    let counter = { value: 0 };
    let loaderDuration = 3;

    // detect first visit in tab
    if (sessionStorage.getItem("visited") !== null) {
      loaderDuration = 3;
      counter = { value: 0 };
    }
    sessionStorage.setItem("visited", "true");

    // GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete(); // notify parent (App.jsx)
      },
    });

    tl.to(counter, {
      value: 100,
      duration: loaderDuration,
      ease: CustomEase.create("custom", customEase),
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.innerText = Math.round(counter.value);
        }
      },
    });

    tl.to(
      progressRef.current,
      {
        width: "100%",
        duration: loaderDuration,
        ease: CustomEase.create("custom", customEase),
      },
      0
    );
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "#2c1a0d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      {/* Number */}
      <div
        ref={numberRef}
        className="loader_number"
        style={{
          fontSize: "4rem",
          color: "#F5E6D3",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        0
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "300px",
          height: "8px",
          backgroundColor: "rgba(245,230,211,0.3)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          ref={progressRef}
          className="loader_progress"
          style={{
            width: "0%",
            height: "100%",
            backgroundColor: "#F5E6D3",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
