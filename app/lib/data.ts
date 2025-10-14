
export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  features: string[];
  techStack: string;
  githubUrl: string;
  liveDemoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "MediScan: Inventario Inteligente de Medicamentos",
    imageUrl: "/project-mediscan.png", // Usaremos un placeholder por ahora
    description: "Una aplicación móvil que simplifica la gestión de inventarios farmacéuticos utilizando inteligencia artificial para el reconocimiento de productos.",
    features: [
      "Búsqueda inteligente de medicamentos impulsada por IA.",
      "Reconocimiento y captura de productos vía cámara móvil.",
      "Gestión de stock en tiempo real y alertas de inventario bajo.",
    ],
    techStack: "React Native, Python, FastAPI, TensorFlow.js, PostgreSQL", // Ejemplo, puedes ajustarlo
    githubUrl: "https://github.com/EliNiperd/medical-inventory",
    liveDemoUrl: "https://medical-inventory.eliconacento.com/",
  },
  {
    title: "F1 Race Center 2025",
    imageUrl: "/project-f1.png", // Usaremos un placeholder por ahora
    description: "Un dashboard web que visualiza datos y estadísticas en tiempo real de la temporada 2025 de Fórmula 1, ofreciendo una experiencia inmersiva para los aficionados.",
    features: [
      "Visualización de datos de carrera en tiempo real (posiciones, vueltas, etc.).",
      "Estadísticas detalladas por piloto y escudería.",
      "Calendario interactivo de la temporada con resultados.",
    ],
    techStack: "Next.js, TypeScript, WebSockets, Chart.js, Tailwind CSS", // Ejemplo, puedes ajustarlo
    githubUrl: "https://github.com/EliNiperd/f1-gp-david",
    liveDemoUrl: "https://f1.eliconacento.com", // Placeholder sugerido
  },
];

export const skills = {
  frontend: ["TypeScript", "React", "Next.js", "HTML5", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Python", "Express", "FastAPI"],
  database: ["PostgreSQL", "MongoDB", "MySQL"],
  mobile: ["React Native", "Expo"],
  "ai/ml": ["TensorFlow.js", "Scikit-learn"],
  "devops/cloud": ["Docker", "GitHub Actions", "Vercel", "AWS"],
};

export const aboutMe = {
  name: "Elí Rodríguez",
  tagline: "Desarrollador Full-Stack",
  bio: "Soy un desarrollador de software apasionado por crear soluciones tecnológicas eficientes y elegantes. Con experiencia en todo el espectro del desarrollo web, backend, disfruto convirtiendo ideas complejas en aplicaciones funcionales y amigables para el usuario.",
  photoUrl: "/profile-photo.jpg", // Placeholder para tu foto
};

