export const WA = 'https://wa.me/523349421060';

export const NAV_ITEMS = [
    { label: 'Inicio',     href: '/#inicio' },
    { label: 'Sobre Mí',   href: '/#sobre-mi' },
    { label: 'Servicios',  href: '/#servicios' },
    { label: 'Artículos',  href: '/#articulos-de-interes' },
    { label: 'Costos',     href: '/#costos' },
    { label: 'Contacto',   href: '/#contacto' },
];

// Estrellas con coordenadas determinísticas (sin Math.random en render)
export const STARS = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top:   `${(i * 137.5) % 100}%`,
    left:  `${(i * 97.3)  % 100}%`,
    size:  i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
    dur:   `${2 + (i % 5)}s`,
    delay: `-${(i % 5) * 0.8}s`,
}));

export const SERVICES = [
    {
        icon: '👨‍🚀',
        title: 'Bebés Prematuros',
        desc: 'Cuidados intensivos y seguimiento de neurodesarrollo para los pequeños que llegaron antes.',
    },
    {
        icon: '🌙',
        title: 'Asesoría en Lactancia',
        desc: 'Acompañamiento técnico y emocional para un agarre perfecto y una lactancia exitosa.',
    },
    {
        icon: '⭐',
        title: 'Control de Niño Sano',
        desc: 'Monitoreo de crecimiento, hitos del desarrollo y calendario de vacunación.',
    },
];

export const ARTICLES = [
    { icon: '🍼', title: '¿Cómo saber si mi bebé toma suficiente leche?',  readTime: '3 min', slug: 'lactancia-materna' },
    { icon: '💤', title: 'El sueño del recién nacido: Mitos y realidades', readTime: '5 min', slug: 'sueno-recien-nacido' },
    { icon: '🤒', title: 'Fiebre en los primeros 3 meses: ¿Qué hacer?',    readTime: '4 min', slug: 'fiebre-primeros-meses' },
];

export const CREDENTIALS = [
    { icon: '🎓', text: 'Especialidad en Pediatría' },
    { icon: '🏥', text: 'Sub-especialidad Neonatología' },
    { icon: '📜', text: 'Certificada CNP' },
];

export const TRUST_ITEMS = [
    { num: '+10',         label: 'Años de Experiencia' },
    { num: 'Certificada', label: 'Consejo Mexicano de Pediatría' },
    { num: '🏥',           label: 'Atención en los mejores hospitales' },
];
