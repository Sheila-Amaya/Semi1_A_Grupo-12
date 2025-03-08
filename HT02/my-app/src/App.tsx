import { useEffect, useRef } from "react";

const WebcamComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const name = "Sheila ";
  const carnet = "202000558";

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("Tu navegador no soporta getUserMedia o necesitas HTTPS.");
      return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => console.error("Error al acceder a la webcam:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{name} - {carnet}</h1>
      <video ref={videoRef} autoPlay style={{ width: "60%", border: "2px solid black" }}></video>
    </div>
  );
};

const generateUUID = () => {
  return typeof crypto?.randomUUID === "function" 
    ? crypto.randomUUID() 
    : `uuid-${Date.now()}`;
};

const App: React.FC = () => {
  console.log("Generated UUID:", generateUUID());
  return (
    <div>
      <WebcamComponent />
    </div>
  );
};

export default App;
