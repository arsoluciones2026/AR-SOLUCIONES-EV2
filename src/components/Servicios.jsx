// Datos locales del negocio: NO provienen de la API REST.
const servicios = [
  { icon: '🛠️', title: 'Servicio técnico', desc: 'Reparación y mantención de computadores, celulares, tablets, consolas e impresoras.', tone: 'cyan' },
  { icon: '📹', title: 'Cámaras y alarmas', desc: 'Instalación, configuración y mantención de CCTV, alarmas y sistemas de acceso.', tone: 'pink' },
  { icon: '🎨', title: 'Gráfica publicitaria', desc: 'Diseño de letreros, pendones, estampados y soluciones gráficas.', tone: 'yellow' },
  { icon: '🖌️', title: 'Bazar Arte Abby Mar', desc: 'Arte, regalos y artículos personalizados.', tone: 'purple' },
  { icon: '♻️', title: 'Reciclaje tecnológico', desc: 'Promovemos una segunda vida para los equipos y un futuro más sustentable.', tone: 'green' },
];

export default function Servicios() {
  return (
    <section id="servicios" className="my-5">
      <div className="section-kicker">NUESTRAS ESPECIALIDADES</div>
      <h2 className="fw-bold mb-4">Soluciones para ti y tu empresa</h2>
      <div className="row g-3">
        {/* .map() crea una tarjeta por servicio; key debe ser única. */}
        {servicios.map(s => (
          <div className="col-md-6 col-xl" key={s.title}>
            <div className={`service-card service-${s.tone} h-100`}>
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="h5 mt-3">{s.title}</h3>
              <p className="mb-0">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
