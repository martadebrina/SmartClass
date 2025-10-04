import { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  useEffect(() => {
    async function testConnection() {
      const querySnapshot = await getDocs(collection(db, "test"));
      console.log("Firestore connected! Docs:", querySnapshot.size);
    }
    testConnection();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30vh" }}>
      <h1>SmartClass</h1>
    </div>
  );
}

export default App;
