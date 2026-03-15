import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Weather(){

  const navigate = useNavigate();

  const [city,setCity] = useState("");
  const [weather,setWeather] = useState(null);

  const getWeather = () => {

    if(!city){
      alert("Enter city or village name");
      return;
    }

    const conditions = [
      "Clear Sky",
      "Partly Cloudy",
      "Light Rain",
      "Hot Sunny Weather",
      "Cool Weather"
    ];

    const randomTemp = Math.floor(Math.random() * 20) + 20;

    const randomCondition =
      conditions[Math.floor(Math.random()*conditions.length)];

    setWeather({
      temp: randomTemp,
      condition: randomCondition
    });

  };

  return(

    <div style={styles.page}>

      <button onClick={()=>navigate("/")}>⬅ Back</button>

      <h1>🌤 Today's Weather</h1>

      <p>Enter your village or city name</p>

      <input
        type="text"
        placeholder="Enter location"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        style={styles.input}
      />

      <button
        onClick={getWeather}
        style={styles.button}
      >
        Check Weather
      </button>

      {weather && (

        <div style={styles.resultBox}>

          <h2>📍 {city}</h2>

          <h1>🌡 {weather.temp}°C</h1>

          <h3>🌥 {weather.condition}</h3>

        </div>

      )}

    </div>
  );
}

const styles = {

  page:{
    minHeight:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",

    backgroundImage:
    "url(https://images.unsplash.com/photo-1502082553048-f009c37129b9)",

    backgroundSize:"cover",
    backgroundPosition:"center"
  },

  input:{
    padding:"15px",
    width:"300px",
    borderRadius:"10px",
    marginTop:"10px"
  },

  button:{
    marginTop:"20px",
    padding:"12px 30px",
    fontSize:"18px"
  },

  resultBox:{
    marginTop:"30px",
    background:"rgba(255,255,255,0.9)",
    padding:"30px",
    borderRadius:"20px",
    width:"300px",
    boxShadow:"0 8px 20px rgba(0,0,0,0.2)"
  }

};