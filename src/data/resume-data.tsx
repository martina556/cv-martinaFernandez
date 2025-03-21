import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, } from "@/components/icons";

export const RESUME_DATA = {
  name: "Martina Fernández Santana",
  initials: "MFS",
  location: "CABA, Argentina",
  locationLink: "https://maps.app.goo.gl/GKGq6euUG3r1biMFA",
  about:
    "Full Stack Engineer",
  summary: (
    <>
      Soy una desarrolladora web en busca de mi primera experiencia laboral en el area del desarrollo de software. Recientemente finalicé un bootcamp de Full Stack Engineer el cual me permitió consolidar habilidades fundamentales en el desarrollo de software.

Me considero una persona comprometida, con una gran capacidad de aprendizaje y una actitud adaptativa frente a los desafíos. Estoy entusiasmada por seguir creciendo profesionalmente, aprender junto a un equipo y contribuir al éxito de proyectos innovadores.

    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/147435041?s=96&v=4",
  contact: {
    email: "contacto@martinafernadez.com",
    tel: "2235903726",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/martina556",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/martina-fernandez-683374336/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Educación IT",
      degree: "Full Stack Engineer",
      start: "Febrero 2024",
      end: "Octubre 2024",
    },
    {
      school: "Universidad de Buenos Aires",
      degree: "Licenciatura en Ciencias de la Computación",
      start: "2025",
      end: "2030",
    },
  ],
  work: [
    {
      company: "GML",
      badges: ["Remote", "CRM", "Database Systems",],
      title: "Portability Advisor",
      start: "Junio 2024",
      end: "Diciembre 2024",
      description: (
        <>
          Gestionando la portabilidad de clientes en un call center mediante llamadas telefónicas.
          <ul className="list-inside list-disc">
            <li>
            Realizando tareas administrativas utilizando sistemas de bases de datos de clientes y CRM para registrar ventas.
            </li>
            <li>
            Asegurando precisión y eficiencia en la carga de datos y seguimiento de clientes.
            </li>
            <li>
            Desarrollé comunicación asertiva y habilidades en cierres de ventas, demostrando capacidad para construir relaciones sólidas con los clientes y maximizar los resultados comerciales.
            </li>
          </ul>
        </>
      ),
    },
    
  ],
  skills: [
    "HTML",
    "JavaScript",
    "CSS",
    "Sass",
    "React",
    "Node.js",
    "MongoDB",
    "Git",
    "Docker",
    "Design Systems",
    "System Architecture",
    "CI/CD",
    "k8s",
    "SQL",

  ],
  projects: [
    {
      title: "Rita Cosmetica Natural",
      techStack: ["JavaScript",
        "HTML",
        "Sass",
        "React",
        "Vite",
        "MongoDB",
        "Github Actions",],
      description:
        "En un proyecto reciente, desarrollé un e-commerce enfocado en cosmética natural. Implementé funcionalidades interactivas como un carrito de compras dinámico y filtros de productos. Además, cree componentes reutilizables y para mejorar la experiencia del usuario, optimizando la carga de las páginas mediante el renderizado condicional.",
      link: {
        label: "rita-cosmeticos.com",
        href: "https://rita.martinafernandez.com/",
      },
    },
    
  ],
} as const;
