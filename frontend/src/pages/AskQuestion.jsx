import { useState } from "react";

export default function AskQuestion() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = async (event) => {

      const text = event.results[0][0].transcript;
      setQuestion(text);

      try {

        const res = await fetch("http://127.0.0.1:8000/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ question: text })
        });

        const data = await res.json();
        setAnswer(data.answer);

        const speech = new SpeechSynthesisUtterance(data.answer);
        speech.lang = "en-US";
        window.speechSynthesis.speak(speech);

      } catch (error) {
        console.error("AI connection error:", error);
      }

    };
  };

  return (

    <div style={styles.page}>

      <div style={styles.card}>

        <h1 style={styles.title}>🎙 Ask a Question</h1>
        <p style={styles.subtitle}>
          Tap the microphone and ask your farming question
        </p>

        <button onClick={startListening} style={styles.micButton}>
          🎤
        </button>

        <div style={styles.section}>
          <h3>👨‍🌾 Your Question</h3>
          <p>{question}</p>
        </div>

        <div style={styles.section}>
          <h3>➕ AI Response</h3>
          <p>{answer}</p>
        </div>

      </div>

    </div>
  );
}

const styles = {

  page: {
    height: "100vh",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1592982537447-7440770cbfc9)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    width: "420px",
    background: "#ffffffee",
    padding: "35px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
  },

  title: {
    color: "#2e7d32",
    fontSize: "32px",
    marginBottom: "5px"
  },

  subtitle: {
    color: "#555",
    marginBottom: "25px"
  },

  micButton: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    border: "none",
    fontSize: "45px",
    backgroundColor: "#2e7d32",
    color: "white",
    cursor: "pointer",
    marginBottom: "25px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
  },

  section: {
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "12px",
    textAlign: "left"
  }

};