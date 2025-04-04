import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleInput = (e) => setMessage(e.target.value);

  const handleSend = () => {
    setResponse("Obrigado! A Clara está aprendendo a responder em breve.");
    setMessage('');
  };

  return (
    <div style={{
      fontFamily: 'Arial',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f4f4f4',
      minHeight: '100vh'
    }}>
      <img
        src="/clara.png"
        alt="Clara Assistente"
        style={{ width: '150px', borderRadius: '50%', marginBottom: '1rem' }}
      />

      <h1>Olá, eu sou a Clara 🩺</h1>
      <p>Estou aqui para ajudar você com uma consulta rápida e inteligente.</p>

      <div style={{ marginTop: '2rem' }}>
        <input
          type="text"
          value={message}
          onChange={handleInput}
          placeholder="Digite sua dúvida"
          style={{
            padding: '12px',
            width: '60%',
            maxWidth: '400px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: '10px',
            padding: '12px 16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Enviar
        </button>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <button
          onClick={() => alert('Função de voz em breve!')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#34d399',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          🎤 Falar com a Clara
        </button>
      </div>

      {response && (
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
          {response}
        </p>
      )}
    </div>
  );
}
