import React, { useEffect } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  // Define o tema escuro
  const setDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
  };

  // Define o tema claro
  const setLightMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
  };

  // Alterna o tema manualmente
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
      localStorage.setItem("theme", "dark");
    } else {
      setLightMode();
      localStorage.setItem("theme", "light");
    }
  };

  // Detecta o tema salvo ou o padrão do sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const toggle = document.getElementById("darkmode-toggle");

    // Evita o "piscar" trocando o tema antes de renderizar
    document.body.style.visibility = "hidden";

    // Aplica o tema correto
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode();
      if (toggle) toggle.checked = true;
    } else {
      setLightMode();
      if (toggle) toggle.checked = false;
    }

    // Mostra a página suavemente após aplicar o tema
    setTimeout(() => {
      document.body.style.visibility = "visible";
      document.body.style.transition = "background-color 0.3s, color 0.3s";
    }, 50);
  }, []);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="Sun" className="sun" />
        <img src={Moon} alt="Moon" className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
