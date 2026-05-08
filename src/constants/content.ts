export const CONTENT = {
  profile: {
    name: "Vasu Bhatia",
    title: "Backend Software Engineer",
    location: "Rishikesh, Uttarakhand",
    email: "vasubhatia991@gmail.com",
    github: "github.com/vasu991",
    linkedin: "linkedin.com/in/vasu-bhatia-470511194",
    summary: "Expert Backend Software Engineer with production experience building scalable, cloud-deployed payment infrastructure and multi-tenant SaaS systems. Specialized in event-driven architecture and high-availability systems.",
    about: "I am a Senior Backend Engineer driven by the philosophy of subtraction. I believe that true performance and luxury in software are found by filtering out the noise and focusing on the essential structures that shape human experience. With expertise in financial systems and high-load architectures, I build systems that are as silent as they are powerful."
  },
  navigation: [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ],
  hero: {
    title: "Designing Scalable Digital Systems.",
    subtitle: "Architecting high-availability infrastructure with precision and restraint.",
    primaryCTA: "View Work",
    secondaryCTA: "Get in Touch"
  },
  experience: [
    {
      company: "Creditor Academy",
      role: "Backend Developer (Node.js)",
      period: "Nov 2025 – Present",
      description: "Architected a multi-tenant payment gateway microservice across 8 SaaS products. Built an event-driven webhook pipeline handling 6 event types with HMAC-SHA256 signature verification."
    },
    {
      company: "Digital Ludhiana",
      role: "Full Stack Developer Intern",
      period: "Dec 2024 – June 2025",
      description: "Built an AI-powered chat application integrating DeepSeek model via Ollama. Developed RESTful APIs for chat management and real-time streaming."
    }
  ],
  projects: [
    {
      title: "Full Stack Real-Time Chat Application",
      category: "Full Stack / WebSockets",
      year: "2024",
      description: "Bidirectional real-time messaging with Socket.io achieving sub-100ms delivery. JWT auth with protected routes.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Stock Price Prediction Application",
      category: "AI / Data Science",
      year: "2024",
      description: "Flask REST API with a TensorFlow/Keras LSTM model forecasting stock prices from yFinance historical data.",
      tech: ["Python", "Flask", "TensorFlow", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Payment Gateway Microservice",
      category: "Backend / Infrastructure",
      year: "2025 - Ongoing",
      description: "Multi-tenant gateway with per-key rate limiting and automated retry logic.",
      tech: ["Node.js", "PostgreSQL", "Prisma", "Docker"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "SQL", "C++"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "Event-Driven Architecture"],
    databases: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
    devops: ["Docker", "Jenkins", "AWS EC2", "CI/CD", "Linux"],
    frontend: ["React.js", "Zustand", "Tailwind CSS", "Framer Motion"]
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Graphic Era Hill University",
      period: "2023 – 2025",
      cgpa: "7.94"
    },
    {
      degree: "Bachelor of Science (Mathematics)",
      school: "Graphic Era Hill University",
      period: "2018 – 2021",
      cgpa: "8.69"
    }
  ]
};
