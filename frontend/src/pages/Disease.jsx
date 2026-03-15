import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Disease() {

  const navigate = useNavigate();

  const [file,setFile] = useState(null);
  const [image,setImage] = useState(null);

  const [disease,setDisease] = useState("");
  const [severity,setSeverity] = useState("");
  const [treatment,setTreatment] = useState("");
  const [confidence,setConfidence] = useState("");

  const handleFile = (selected) => {

    setFile(selected);
    setImage(URL.createObjectURL(selected));

  };

  const detectDisease = async () => {

    if(!file){
      alert("Upload plant image first");
      return;
    }

    const formData = new FormData();
    formData.append("file",file);

    const res = await fetch("http://127.0.0.1:8000/predict",{
      method:"POST",
      body:formData
    });

    const data = await res.json();

    setDisease(data.disease);
    setSeverity(data.severity);
    setTreatment(data.treatment);
    setConfidence(data.confidence);

  };

  return(

    <div style={styles.page}>

      <button style={styles.back} onClick={()=>navigate("/")}>
        ⬅ Back
      </button>

      <h1 style={styles.title}>🌿 Check Plant Health</h1>

      <p style={styles.subtitle}>
        Take a photo of your plant to detect disease
      </p>

      <div style={styles.cards}>

        {/* Camera */}

        <label style={styles.card}>

          <div style={styles.icon}>📷</div>

          <h3>Take Photo</h3>

          <p>Use Camera</p>

          <input
            type="file"
            accept="image/*"
            capture="camera"
            hidden
            onChange={(e)=>handleFile(e.target.files[0])}
          />

        </label>


        {/* Gallery */}

        <label style={styles.card}>

          <div style={styles.icon}>🖼</div>

          <h3>Choose from Gallery</h3>

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e)=>handleFile(e.target.files[0])}
          />

        </label>

      </div>


      {image && (

        <img
          src={image}
          alt="preview"
          style={styles.preview}
        />

      )}


      <button
        style={styles.detect}
        onClick={detectDisease}
      >
        🔍 Detect Disease
      </button>


      {disease && (

        <div style={styles.result}>

          <h2>🌿 Disease Report</h2>

          <p><b>Disease:</b> {disease}</p>

          <p><b>Severity:</b> {severity}</p>

          <p><b>Treatment:</b> {treatment}</p>

          <p><b>Confidence:</b> {confidence}</p>

        </div>

      )}


      <div style={styles.tips}>

        <h3>📌 Tips for Best Results</h3>

        <ul>
          <li>Take photo in good light</li>
          <li>Focus on sick leaf</li>
          <li>Avoid blurry images</li>
        </ul>

      </div>

    </div>

  );

}

const styles = {

  page:{
    minHeight:"100vh",
    textAlign:"center",
    padding:"40px",

    backgroundImage:
    "url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449)",

    backgroundSize:"cover",
    backgroundPosition:"center"
  },

  back:{
    marginBottom:"10px"
  },

  title:{
    fontSize:"40px",
    marginBottom:"10px",
    color:"white"
  },

  subtitle:{
    marginBottom:"40px",
    fontSize:"18px",
    color:"white"
  },

  cards:{
    display:"flex",
    justifyContent:"center",
    gap:"40px",
    marginBottom:"30px"
  },

  card:{
    width:"260px",
    padding:"40px",
    background:"white",
    borderRadius:"20px",
    cursor:"pointer",
    boxShadow:"0 8px 20px rgba(0,0,0,0.2)"
  },

  icon:{
    fontSize:"55px",
    marginBottom:"10px"
  },

  preview:{
    width:"320px",
    marginTop:"20px",
    borderRadius:"15px",
    boxShadow:"0 6px 20px rgba(0,0,0,0.3)"
  },

  detect:{
    marginTop:"20px",
    padding:"15px 35px",
    fontSize:"18px",
    background:"#2e7d32",
    color:"white",
    border:"none",
    borderRadius:"10px",
    cursor:"pointer"
  },

  result:{
    marginTop:"25px",
    fontSize:"18px",
    background:"#e8f5e9",
    padding:"20px",
    borderRadius:"15px",
    width:"350px",
    marginLeft:"auto",
    marginRight:"auto",
    boxShadow:"0 6px 20px rgba(0,0,0,0.2)"
  },

  tips:{
    marginTop:"40px",
    background:"#c8e6c9",
    padding:"25px",
    borderRadius:"20px",
    width:"320px",
    marginLeft:"auto",
    marginRight:"auto",
    textAlign:"left"
  }

};