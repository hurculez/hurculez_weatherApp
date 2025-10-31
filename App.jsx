import Weather from "./Weather";

function App() {
  return (
    <div
      style={{
        fontFamily: "Poppins, Arial, sans-serif",
        background: "linear-gradient(120deg, #a1c4fd, #c2e9fb)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",  
      }}
    >
      <Weather />

      <footer
        style={{
          textAlign: "center",
          padding: "10px 20px",
          fontSize: "0.9rem",
          color: "#333",
          background: "rgba(255, 255, 255, 0.6)",
          borderRadius: "12px",
          marginTop: "30px",      
          backdropFilter: "blur(5px)",
        }}
      >
        <p>
          Created by <strong>hurculez</strong> •{" "}
          <a
            href="https://github.com/hurculez"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#005eff", textDecoration: "none" }}
          >
            GitHub: hurculez
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
