
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Prevent right click (context menu) to discourage inspection
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // Prevent common keyboard shortcuts for developer tools
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
      (e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
      (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
      (e.metaKey && (e.key === 'U' || e.key === 'u'))
    ) {
      e.preventDefault();
    }
  });

  createRoot(document.getElementById("root")!).render(<App />);
  