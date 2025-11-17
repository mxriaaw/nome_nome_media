import styles from './App.module.css';
import { useState, useEffect } from "react";

function App() {

  const [notas, setNotas] = useState({
    n1: "",
    n2: "",
    n3: "",
    n4: "",
    n5: "",
    n6: ""
  });

  const [media, setMedia] = useState(null);

  useEffect(() => {
    const valores = Object.values(notas).map(Number);

    if (valores.every(v => !isNaN(v) && v !== "")) {
      const soma = valores.reduce((total, n) => total + n, 0);
      setMedia((soma / 6).toFixed(2));
    } else {
      setMedia(null);
    }
  }, [notas]);

  function alterarNota(e) {
    const { name, value } = e.target;
    setNotas(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Média das 6 Notas</h1>

      {Object.keys(notas).map((key, i) => (
        <div className={styles.inputGroup} key={i}>
          <input
            className={styles.input}
            type="number"
            name={key}
            value={notas[key]}
            onChange={alterarNota}
            placeholder={`Nota ${i + 1}`}
          />
        </div>
      ))}

      <h2 className={styles.result}>
        Média: {media !== null ? media : "Digite todas as notas"}
      </h2>
    </div>
  );
}

export default App;
