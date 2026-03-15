import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      <h1 className="title">🌾 AGROTECHX</h1>

      <div className="card-grid">

        <div className="home-card" onClick={() => navigate("/ask")}>
          <div className="icon-large">🎙️</div>
          <h3>Ask Question</h3>
        </div>

        <div className="home-card" onClick={() => navigate("/disease")}>
          <div className="icon-large">📷</div>
          <h3>Plant Health</h3>
        </div>

        <div className="home-card" onClick={() => navigate("/weather")}>
          <div className="icon-large">🌤️</div>
          <h3>Weather</h3>
        </div>

        <div className="home-card" onClick={() => navigate("/grow")}>
          <div className="icon-large">🌾</div>
          <h3>What To Grow</h3>
        </div>

      </div>

    </div>
  );
}