import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#F4F0F9', fontFamily: 'system-ui, sans-serif', color: '#2E2430' }}>
      
      {/* 1. HERO SECTION (Fondo Blanco para limpieza médica) */}
      <header style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '10vh 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ flex: '1', minWidth: '300px', padding: '20px' }}>
          <h1 style={{ color: '#4A235A', fontSize: '3.5rem', margin: '0 0 15px 0', lineHeight: '1.1' }}>
            Protegiendo el <span style={{ color: '#A569BD' }}>despegue</span> de tu bebé
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>
            Dra. Cristina Pacheo, Pediatra Neonatóloga. Cuidado especializado, cálido y experto para recién nacidos y bebés prematuros.
          </p>
          <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" style={btnStyle}>
             Agendar Cita en WhatsApp 🚀
          </a>
        </div>
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
          {/* Aquí irá una foto tuya profesional o una ilustración temática */}
          <div style={{ width: '350px', height: '350px', backgroundColor: '#E8DAEF', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
            👩‍⚕️✨
          </div>
        </div>
      </header>

      {/* 2. BARRA DE CONFIANZA */}
      <div style={{ backgroundColor: '#4A235A', color: 'white', display: 'flex', justifyContent: 'space-around', padding: '30px 10px', flexWrap: 'wrap', textAlign: 'center' }}>
        <div><h3 style={{margin:0}}>+10</h3><p style={{margin:0}}>Años de Experiencia</p></div>
        <div><h3 style={{margin:0}}>Certificada</h3><p style={{margin:0}}>Consejo Mexicano</p></div>
        <div><h3 style={{margin:0}}>Hospitales</h3><p style={{margin:0}}>Atención en los mejores</p></div>
      </div>

      {/* 3. SOBRE MÍ */}
      <section style={{ padding: '80px 5%', textAlign: 'center' }}>
        <h2 style={{ color: '#4A235A', fontSize: '2.5rem' }}>Conoce a la Dra. Cristina Pacheco</h2>
        <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Soy una apasionada por el inicio de la vida. Mi misión es ser el "centro de control" que asegure que cada pequeño astronauta tenga las mejores herramientas para crecer sano y fuerte. Te acompaño a ti y a tu bebé con empatía, ciencia y mucho corazón.
        </p>
      </section>

      {/* 4. SERVICIOS (Tarjetas) */}
      <section style={{ padding: '40px 5%', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '40px' }}>¿Cómo puedo ayudarte?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {[
            { icon: '👨‍🚀', title: 'Bebés Prematuros', desc: 'Cuidados intensivos y seguimiento de neurodesarrollo.' },
            { icon: '🌙', title: 'Asesoría en Lactancia', desc: 'Acompañamiento técnico y emocional para un agarre perfecto.' },
            { icon: '⭐', title: 'Control de Niño Sano', desc: 'Monitoreo de crecimiento, hitos del desarrollo y vacunas.' }
          ].map((srv, idx) => (
            <div key={idx} style={{ width: '300px', padding: '30px', borderRadius: '15px', backgroundColor: '#F4F0F9', borderTop: '5px solid #A569BD', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{srv.icon}</div>
              <h3 style={{ color: '#2E2430' }}>{srv.title}</h3>
              <p style={{ color: '#666' }}>{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', color: 'white', padding: '15px 25px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', zIndex: 1000 }}>
        💬 Escríbeme
      </a>

    </div>
  );
}

const btnStyle = {
  backgroundColor: '#A569BD',
  color: 'white',
  padding: '15px 35px',
  fontSize: '1.2rem',
  textDecoration: 'none',
  borderRadius: '30px',
  display: 'inline-block',
  fontWeight: 'bold',
  boxShadow: '0 4px 15px rgba(165, 105, 189, 0.4)'
};

export default App;