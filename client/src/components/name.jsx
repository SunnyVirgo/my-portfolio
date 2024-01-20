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
      <div className="flex flex-row justify-start items-center text-5xl font-semi-bold text-gray-300 lg:text-5xl flex-row md:text-3xl flex-col sm:text-2xl sm:flex sm:flex-row sm:items-center "><div>Hi,<span className="invisible text-sm">h</span></div><div> I'm Sunny Virgo<span className="text-6xl text-green-600">.</span></div></div>
      <div className="text-4xl font-semib text-gray-300 lg:text-5xl md:text-3xl sm:text-2xl"><span>A</span> {" "}
        <span className="text-green-600 text-5xl lg:text-5xl md:text-3xl sm:text-2xl">{text}</span>
        {showCursor && <span className="cursor text-green-600">|</span>}
      </div>
    </div>
  );
}

export default Name;
