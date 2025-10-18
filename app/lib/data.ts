export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  features: string[];
  techStack: string;
  githubUrl?: string;
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
    techStack: "React, Next.js (14.2.33), Node.js, recharts.js ,Tailwind CSS, PostgreSQL",
    githubUrl: "https://github.com/EliNiperd/medical-inventory",
    liveDemoUrl: "https://medical-inventory.eliconacento.com/",
  },
  {
    title: "F1 Race Center",
    imageUrl: "/project-f1.png", // Usaremos un placeholder por ahora
    description: "Un dashboard web que permite mostrar una carrera de Fórmula 1 en tiempo real, ofreciendo una experiencia inmersiva para los aficionados.",
    features: [
      "Visualización de datos de carrera en tiempo real (posiciones, vueltas, etc.).",
      "Estadísticas detalladas por piloto y escudería.",
      "Calendario interactivo de la temporada con resultados.",
    ],
    techStack: "Next.js (15.3.1), TypeScript, WebSockets, Chart.js, Tailwind CSS",
    githubUrl: "https://github.com/EliNiperd/f1-gp-david",
    liveDemoUrl: "https://demo-race.eliconacento.com",
  },
  {
    title: "Aplicación Web para Certificación ISO/Medio Ambiente - iCalidad",
    imageUrl: "/project-icalidad.png", // Placeholder
    description: "Plataforma para la gestión y certificación de sistemas de calidad ISO y medio ambiente, optimizando procesos y documentación.",
    features: [
      "Gestión documental y de procesos para certificaciones ISO.",
      "Seguimiento de auditorías y no conformidades.",
      "Generación de informes personalizados.",
    ],
    techStack: "Next.js, Node.js, SQL Server, Oracle SQL, TailwindCSS",
    // githubUrl: "", // Si tienes un repo, añádelo aquí
    // liveDemoUrl: "", // Si tienes un demo, añádelo aquí
  },
  {
    title: "Módulos de Logística & Transporte",
    imageUrl: "/project-logistica.png", // Placeholder
    description: "Conjunto de módulos para la optimización de operaciones logísticas y de transporte, incluyendo gestión de rutas y seguimiento de envíos.",
    features: [
      "Optimización de rutas de entrega.",
      "Seguimiento en tiempo real de flotas y envíos.",
      "Gestión de inventario en tránsito.",
    ],
    techStack: "ASP.NET, SQL Server",
    // githubUrl: "", // Si tienes un repo, añádelo aquí
    // liveDemoUrl: "", // Si tienes un demo, añádelo aquí
  },
];

export const skills = {
  languages: ["Javascript", "TypeScript", "C#.NET", "Python"],
  frontend: ["React", "Next.js", "HTML5", "TailwindCSS", "Bootstrap", "UX/UI"],
  backend: ["Node.js", "Express.js", ".NET Core", "C#"],
  database: ["SQL Server", "Oracle", "Oracle SQL", "PostgreSQL"],
  tools_devops: ["Gestión de Proyectos", "CI/CD", "Git", "GitHub", "Visual Studio", "Visual Studio Code", "SQL Server Management Studio", "Oracle SQL Developer", "Postman"],
};

export const aboutMe = {
  name: "Elí Rodríguez Salas",
  tagline: "Full Stack Developer y líder de proyectos",
  bio: "Apasionado por la tecnología, he dedicado mi carrera a transformar problemas complejos en software robusto, eficiente y escalable. Me motiva aprender constantemente, optimizar procesos y trabajar en equipos multidisciplinarios para lograr resultados sobresalientes. Mi objetivo es seguir impulsando la innovación en proyectos que marcan la diferencia.",
  photoUrl: "/profile-photo.jpg",
  linkedinUrl: "https://www.linkedin.com/in/el%C3%AD-rodr%C3%ADguez-2818b71a/",
  githubUrl: "https://github.com/EliNiperd",
};