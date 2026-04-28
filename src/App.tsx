import { useState } from "react";
const App = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText("hello@crystalcoraldsouza.com");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };
  return (
    <div className="container">
      <img
        src="https://readme-typing-svg.demolab.com/?lines=Frontend-leaning+Full-Stack+Engineer;Building+thoughtful+digital+experiences;Creating+interfaces+with+personality;Adaptive+systems+%2B+creative+engineering;Probably+overengineering+microinteractions;Turning+ideas+into+interactive+experiences&center=true&width=700&height=50"
        alt="Typing SVG"
      />
      <img src="/Banner.png" width="100%" alt="Banner" />
      <footer className="footer">
        <a href="mailto:hello@crystalcoraldsouza.com" onClick={copyEmail}>
          hello@crystalcoraldsouza.com
        </a>
        {copied && <span className="tooltip">copied ✨</span>}
      </footer>
    </div>
  );
};

export default App;
