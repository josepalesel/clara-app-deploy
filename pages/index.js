export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '2rem' }}>
      <h1>Olá, eu sou a Clara 🩺</h1>
      <p>
        Estou aqui para ajudar você com uma consulta rápida e inteligente.
        Use sua voz ou texto para conversar comigo.
      </p>
      <button
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Começar Consulta
      </button>
    </div>
  );
}
