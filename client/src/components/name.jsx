import React, { useState, useEffect, useRef } from "react";

function Name() {
  const [text, setText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const isTypingRef = useRef(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const textsToType = ["Developer", "Designer", "Dreamer"];
    let textIndex = 0;
    let charIndex = 0;

    const typeNextCharacter = () => {
      if (textIndex < textsToType.length) {
        const currentText = textsToType[textIndex];

        if (charIndex < currentText.length) {
          const nextCharacter = currentText.charAt(charIndex);
          setText((prevText) => prevText + nextCharacter);
          charIndex++;
          setShowCursor(false);
          setTimeout(() => {
            setShowCursor(true);
          }, 1500); // Toggle the cursor visibility every 500 milliseconds
          setTimeout(typeNextCharacter, 250);
        } else {
          textIndex++;
          charIndex = 0;
          setText("");
          setTimeout(typeNextCharacter, 500);
        }
      } else {
        setTypingComplete(true);
        isTypingRef.current = false;
        textIndex = 0;
        setText("");
        setTimeout(() => {
          setTypingComplete(false);
        }, 1000);
      }
    };

    if (!isTypingRef.current) {
      isTypingRef.current = true;
      typeNextCharacter();
    }
  }, [typingComplete]);

  return (
    <div>
      <p className="text-5xl font-semib text-white">Hi, I'm Sunny Virgo<span className="text-6xl text-green-600">.</span></p>
      <p className="text-4xl font-semib text-white"><span>A</span> {" "}
        <span className="text-green-600 text-5xl">{text}</span>
        {showCursor && <span className="cursor text-green-600">|</span>}
      </p>
    </div>
  );
}

export default Name;
