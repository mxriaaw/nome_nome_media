import { useState, useEffect } from "react";

function App() {
  const [notas, setNotas] = useState('');
    const[n1, SetN1] = useState('');
    const[n2, setN2] = useState('');
    const[n3, setN3] = useState('');
    const[n4, setN4] = useState('');
    const[n5, setN5] = useState('');
    const[n6, setN6] = useState('');
}
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const valores = Object.values(notas).map(Number);

    if (valores.every(v => !isNaN(v) && v !== "")) {
      const soma = valores.reduce((valorAtual, valorNota) => valorAtual + valorNota, 0);
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
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Média das 6 Notas</h1>

      {Object.keys(notas).map((key, i) => (
        <div key={i}>
          <input
            type="number"
            name={key}
            value={notas[key]}
            onChange={alterarNota}
            placeholder={`Nota ${i + 1}`}
            style={{ margin: "5px", padding: "8px" }}
          />
        </div>
      ))}

      <h2>
        Média: {media !== null ? media : "Digite todas as notas"}
      </h2>
    </div>
  );


export default App;
