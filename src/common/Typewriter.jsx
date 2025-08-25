import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Typewriter({ words, className }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Handle empty words array
  useEffect(() => {
    if (!words || words.length === 0) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  if (!words || words.length === 0) {
    return <span className={className}>Developer</span>;
  }

  return (
    <span className={className}>
      {`${words[index].substring(0, subIndex)}`}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

export default Typewriter;
