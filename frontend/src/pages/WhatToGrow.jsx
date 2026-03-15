import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WhatToGrow(){

  const navigate = useNavigate();

  const [soil,setSoil] = useState("");
  const [water,setWater] = useState("");
  const [result,setResult] = useState("");

  const suggestCrop = () => {

    if(!soil || !water){
      alert("Select soil and water availability");
      return;
    }

    let cropSuggestion = "";

    if(soil === "clay" && water === "plenty"){
      cropSuggestion = "🌾 Rice, Sugarcane";
    }
    else if(soil === "sandy" && water === "little"){
      cropSuggestion = "🌽 Millets, Groundnut";
    }
    else if(soil === "loamy" && water === "some"){
      cropSuggestion = "🥬 Vegetables, Wheat";
    }
    else if(soil === "rocky"){
      cropSuggestion = "🌳 Fruit Trees, Mango";
    }
    else{
      cropSuggestion = "🌾 Maize, Pulses";
    }

    setResult(cropSuggestion);
  };

  return(

    <div style={styles.page}>

      <div style={styles.card}>

        <button style={styles.back} onClick={()=>navigate("/")}>
          ⬅ Back
        </button>

        <h1>🌍 What To Grow?</h1>

        <p>Select soil and water availability</p>

        {/* Soil Selection */}
        <h3>🌍 Soil Type</h3>

        <select
          onChange={(e)=>setSoil(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Soil</option>
          <option value="clay">Clay (Sticky)</option>
          <option value="sandy">Sandy (Dry)</option>
          <option value="loamy">Loamy (Rich Dark Soil)</option>
          <option value="rocky">Rocky Soil</option>
        </select>

        {/* Water Selection */}
        <h3 style={{marginTop:"20px"}}>💧 Water Availability</h3>

        <select
          onChange={(e)=>setWater(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Water Level</option>
          <option value="plenty">Plenty (Irrigation)</option>
          <option value="some">Some (Seasonal Rain)</option>
          <option value="little">Very Little (Dry Area)</option>
        </select>

        <button
          onClick={suggestCrop}
          style={styles.button}
        >
          🌱 Show Me What To Grow
        </button>

        {result && (
          <div style={styles.resultBox}>
            <h2>Recommended Crops</h2>
            <h3>{result}</h3>
          </div>
        )}

      </div>

    </div>
  );
}

const styles = {

  page:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",

    backgroundImage:
"url(https://images.unsplash.com/photo-1461354464878-ad92f492a5a0)",

    backgroundSize:"cover",
    backgroundPosition:"center"
  },

  card:{
    background:"rgba(255,255,255,0.9)",
    padding:"40px",
    borderRadius:"20px",
    width:"380px",
    textAlign:"center",
    boxShadow:"0 10px 25px rgba(0,0,0,0.2)"
  },

  back:{
    marginBottom:"10px"
  },

  select:{
  padding:"12px",
  width:"300px",
  borderRadius:"10px",
  marginTop:"5px",
  display:"block",
  marginLeft:"auto",
  marginRight:"auto"
  },
  button:{
    marginTop:"30px",
    padding:"15px 40px",
    fontSize:"18px",
    cursor:"pointer"
  },

  resultBox:{
    marginTop:"25px",
    background:"#e8f5e9",
    padding:"20px",
    borderRadius:"15px"
  }

};