import "./App.css";

function App() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100vw",
            height: "110vh",
            objectFit: "cover",
            objectPosition: "center top",
          }}
          src="/pryamid.mp4"
        />
      </div>
      <div className="vision-overlay" />
      <h1 className="header-text">👁️ Do You See the Vision, ANON? 👁️</h1>
    </div>
  );
}

export default App;
