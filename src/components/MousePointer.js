// MousePointer.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../index.css";

const MousePointer = () => {
  const pointerRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const pointer = pointerRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(pointer, {
        x: e.clientX,
        y: e.clientY,
        ease: "power3.out",
        duration: 0.2,
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        ease: "power3.out",
        duration: 0.7,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={pointerRef} className="mouse-pointer"></div>
      <div ref={followerRef} className="mouse-follower"></div>
    </>
  );
};

export default MousePointer;
