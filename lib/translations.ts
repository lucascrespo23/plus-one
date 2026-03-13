export interface Translations {
  // Navigation
  signIn: string;
  subscribe: string;
  
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  
  // Opportunity section
  opportunityTitle: string;
  opportunitySubtitle: string;
  opportunityDescription: string;
  opportunityCTA: string;
  
  // How it works
  howToTitle: string;
  step1Title: string;
  step2Title: string;
  step3Title: string;
  
  // Features
  featuresTitle: string;
  featuresSubtitle: string;
  
  // Apps descriptions
  proofDescription: string;
  commonsDescription: string;
  coraDescription: string;
  spiralDescription: string;
  sparkleDescription: string;
  googleAppsDescription: string;
  slackDescription: string;
  secretManagerDescription: string;
  messagingDescription: string;
  modelManagementDescription: string;
  
  // Passport section
  passportTitle: string;
  
  // Plus ones are smart
  smartTitle: string;
  smartSubtitle: string;
  
  // Roles section
  rolesSectionTitle: string;
  
  // Security
  securityTitle: string;
  securityDescription: string;
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaCTA: string;
  
  // FAQ
  faqTitle: string;
  faq1Question: string;
  faq1Answer: string;
  faq2Question: string;
  faq2Answer: string;
  faq3Question: string;
  faq3Answer: string;
  faq4Question: string;
  faq4Answer: string;
  faq5Question: string;
  faq5Answer: string;
  faq6Question: string;
  faq6Answer: string;
  faq7Question: string;
  faq7Answer: string;
  faq8Question: string;
  faq8Answer: string;
  
  // Footer CTA
  footerTitle: string;
  footerDescription: string;
  footerCTA: string;
}

export const translations: Record<'es' | 'en', Translations> = {
  es: {
    // Navigation
    signIn: "Iniciar sesión",
    subscribe: "Suscribirse",
    
    // Hero section
    heroTitle: "Promuévete con un +1",
    heroSubtitle: "Obtén tu propio OpenClaw con 1 clic, lanzado en un servidor seguro administrado por Every y potenciado con habilidades, preferencias y conexiones listas para usar a nuestras aplicaciones.",
    heroCTA: "Nombra tu Plus One →",
    
    // Opportunity section
    opportunityTitle: "Haz 10 veces más,\n10 veces más rápido, 10 veces más divertido",
    opportunitySubtitle: "Conoce a tu nuevo compañero de trabajo. Tienen un nombre, personalidad, memoria y un cinturón de herramientas infinito. Toman acción por ti de forma autónoma y pueden manejar cualquier tarea, sin importar cuán grande o pequeña, a través de toda tu organización. Adelante… promuévete.",
    opportunityDescription: "Los Plus One son el futuro del trabajo",
    opportunityCTA: "Obtén un +1",
    
    // How it works
    howToTitle: "Cómo multiplicar tu trabajo por 10",
    step1Title: "Agrégalo a tu espacio de trabajo de Slack y nombra tu +1",
    step2Title: "Comparte cómo trabajas",
    step3Title: "Promuévete",
    
    // Features
    featuresTitle: "Los +1 están optimizados para el trabajo",
    featuresSubtitle: "Vienen precargados con todo lo necesario para hacer trabajo pesado.",
    
    // Apps descriptions
    proofDescription: "Editor markdown nativo para agentes",
    commonsDescription: "Aloja cualquier cosa",
    coraDescription: "Optimiza, administra y busca tu email",
    spiralDescription: "Escribe contenido consistentemente excelente",
    sparkleDescription: "Conecta, busca y consulta tus archivos",
    googleAppsDescription: "Gmail, Calendario, Drive",
    slackDescription: "Canales, hilos, DMs, todos los alcances",
    secretManagerDescription: "Conecta cualquier API y MCP",
    messagingDescription: "Telegram, WhatsApp, Signal, Discord",
    modelManagementDescription: "Elige tus modelos de IA",
    
    // Passport section
    passportTitle: "Todo humano merece un Plus One",
    
    // Plus ones are smart
    smartTitle: "Los Plus One son inteligentes",
    smartSubtitle: "Toneladas de capacidades que hacen que tu Plus One sea indispensable.",
    
    // Roles section
    rolesSectionTitle: "Un +1 para cada estilo de trabajo",
    
    // Security
    securityTitle: "Cada +1 vive en su propio VPS seguro",
    securityDescription: "Cada +1 se ejecuta en su propio servidor dedicado y solo usa modelos con políticas de Retención de Datos Cero. Tus conversaciones se mantienen entre tú y tu +1.",
    
    // CTA
    ctaTitle: "Una suscripción.\nTodo lo que necesitas.",
    ctaDescription: "Plus One está incluido en el paquete de Every. Actualmente está en acceso beta solo por invitación. ¿Quieres un Plus One?",
    ctaCTA: "Únete a la lista de espera →",
    
    // FAQ
    faqTitle: "Preguntas frecuentes",
    faq1Question: "¿Qué es exactamente un Plus One?",
    faq1Answer: "Un Plus One es una instancia de OpenClaw superpotenciada, administrada y mejorada por Every. Es un agente de IA personal con nombre, memoria, personalidad y un cinturón de herramientas de integraciones, todo ejecutándose en tu propio servidor seguro.",
    faq2Question: "¿Qué puede hacer mi agente?",
    faq2Answer: "Leer mensajes, extraer datos, escribir documentos, analizar métricas, enviar emails, administrar tickets, actualizar CRMs, redactar contenido, programar reuniones y mucho más. Si existe una API para algo, tu +1 puede usarla.",
    faq3Question: "¿En qué se diferencia de ChatGPT/Claude/Copilot?",
    faq3Answer: "Esos responden prompts. Un Plus One trabaja junto a ti con memoria persistente, acceso a herramientas y la capacidad de tomar acciones reales a través de tus aplicaciones. No es un chatbot — es un compañero de trabajo.",
    faq4Question: "¿A qué herramientas se conecta?",
    faq4Answer: "Slack, email, GitHub, Notion, Stripe, Salesforce y más. Cualquier herramienta con una API o MCP puede conectarse a través del Administrador de Secretos.",
    faq5Question: "¿Están seguros mis datos?",
    faq5Answer: "Sí. Cada +1 se ejecuta en su propio servidor dedicado en un entorno aislado. Solo usamos modelos con políticas de Retención de Datos Cero.",
    faq6Question: "¿Necesito ser técnico?",
    faq6Answer: "No. Si puedes usar Slack o enviar un mensaje de texto, puedes usar un Plus One. Está diseñado para encontrarte donde trabajas.",
    faq7Question: "¿Qué está incluido en el paquete de Every?",
    faq7Answer: "Plus One, Cora, Sparkle, Spiral, Monologue, Proof y Para — todo lo que necesitas para potenciar tu trabajo.",
    faq8Question: "¿Puede todo mi equipo usar esto?",
    faq8Answer: "Sí. Cada persona obtiene su propio +1. Los agentes colaboran entre sí y con humanos a través de tu organización.",
    
    // Footer CTA
    footerTitle: "Promuévete\ncon un Plus One",
    footerDescription: "Obtén un Plus One que haga todo tu trabajo actual para que puedas enfocarte en lo que es importante.",
    footerCTA: "Promuévete",
  },
  
  en: {
    // Navigation
    signIn: "Sign In",
    subscribe: "Subscribe",
    
    // Hero section
    heroTitle: "Promote yourself with a +1",
    heroSubtitle: "Get your own OpenClaw with 1-click, launched on a secure server run by Every and powered with out-of-the-box skills, preferences, and connections to our apps.",
    heroCTA: "Name your Plus One →",
    
    // Opportunity section
    opportunityTitle: "Do 10x the work,\n10x as fast, 10x as fun",
    opportunitySubtitle: "Meet your new work friend. They have a name, personality, memory, and infinite toolbelt. They take action for you autonomously and can handle any task, no matter how big or small, across your entire organization. Go ahead… promote yourself.",
    opportunityDescription: "Plus One's are the future of work",
    opportunityCTA: "Get a +1",
    
    // How it works
    howToTitle: "How to 10x your work",
    step1Title: "Add it to your Slack workspace and name your +1",
    step2Title: "Share how you work",
    step3Title: "Promote yourself",
    
    // Features
    featuresTitle: "+1s are optimized for work",
    featuresSubtitle: "They come pre-loaded with everything needed to get heavy work done.",
    
    // Apps descriptions
    proofDescription: "Agent native markdown editor",
    commonsDescription: "Host anything",
    coraDescription: "Optimize, manage, and search your email",
    spiralDescription: "Write consistently great content",
    sparkleDescription: "Connect, search, and query your files",
    googleAppsDescription: "Gmail, Calendar, Drive",
    slackDescription: "Channels, threads, DMs, all scopes",
    secretManagerDescription: "Connect any API and MCP",
    messagingDescription: "Telegram, WhatsApp, Signal, Discord",
    modelManagementDescription: "Choose your AI models",
    
    // Passport section
    passportTitle: "Every human deserves a Plus One",
    
    // Plus ones are smart
    smartTitle: "Plus ones are smart",
    smartSubtitle: "Tons of capabilities that make your Plus One indispensable.",
    
    // Roles section
    rolesSectionTitle: "A +1 for every style of work",
    
    // Security
    securityTitle: "Every +1 lives in its own, secure VPS",
    securityDescription: "Every +1 runs on its own dedicated server and only uses models with Zero Data Retention policies. Your conversations stay between you and your +1.",
    
    // CTA
    ctaTitle: "One subscription.\nEverything you need.",
    ctaDescription: "Plus One is included in Every's bundle. It's currently in invite-only beta access. Want a Plus One?",
    ctaCTA: "Join the waitlist →",
    
    // FAQ
    faqTitle: "FAQ",
    faq1Question: "What is a Plus One, exactly?",
    faq1Answer: "A Plus One is a superpowered OpenClaw instance, managed and improved by Every. It's a personal AI agent with a name, memory, personality, and a toolbelt of integrations — all running on your own secure server.",
    faq2Question: "What can my agent do?",
    faq2Answer: "Read messages, pull data, write documents, analyze metrics, send emails, manage tickets, update CRMs, draft content, schedule meetings, and much more. If there's an API for it, your +1 can use it.",
    faq3Question: "How is this different from ChatGPT/Claude/Copilot?",
    faq3Answer: "Those answer prompts. A Plus One works alongside you with persistent memory, tool access, and the ability to take real actions across your apps. It's not a chatbot — it's a coworker.",
    faq4Question: "What tools does it connect to?",
    faq4Answer: "Slack, email, GitHub, Notion, Stripe, Salesforce, and more. Any tool with an API or MCP can be connected through the Secret Manager.",
    faq5Question: "Is my data safe?",
    faq5Answer: "Yes. Every +1 runs on its own dedicated server in an isolated environment. We only use models with Zero Data Retention policies.",
    faq6Question: "Do I need to be technical?",
    faq6Answer: "No. If you can use Slack or send a text message, you can use a Plus One. It's designed to meet you where you work.",
    faq7Question: "What's included in the Every bundle?",
    faq7Answer: "Plus One, Cora, Sparkle, Spiral, Monologue, Proof, and Para — everything you need to supercharge your work.",
    faq8Question: "Can my whole team use this?",
    faq8Answer: "Yes. Every person gets their own +1. Agents collaborate with each other and with humans across your organization.",
    
    // Footer CTA
    footerTitle: "Promote yourself\nwith a Plus One",
    footerDescription: "Get a Plus One that does all your current work so you can focus on what's important.",
    footerCTA: "Promote yourself",
  }
};

// Role translations
export interface RoleTranslation {
  label: string;
  title: string;
  bullets: string[];
}

export const roleTranslations: Record<'es' | 'en', Record<string, RoleTranslation>> = {
  es: {
    founders: {
      label: "Fundadores",
      title: "Fundadores y Operadores",
      bullets: ["Planificación y análisis estratégico", "Coordinación entre equipos", "Actualizaciones e informes para inversores", "Gestión de pipeline de contratación"]
    },
    editors: {
      label: "Editores y Contenido",
      title: "Editores y Contenido",
      bullets: ["Redactar y editar artículos", "Verificaciones de consistencia de estilo", "Flujos de trabajo de publicación", "Gestión de calendario de contenido"]
    },
    growth: {
      label: "Crecimiento y Marketing",
      title: "Crecimiento y Marketing",
      bullets: ["Gestión de campañas", "Análisis e informes", "Análisis de pruebas A/B", "Programación de redes sociales"]
    },
    support: {
      label: "Soporte al Cliente",
      title: "Soporte al Cliente",
      bullets: ["Triaje y respuesta de tickets", "Actualizaciones de base de conocimientos", "Gestión de escalaciones", "Monitoreo de salud del cliente"]
    },
    engineers: {
      label: "Ingenieros",
      title: "Ingenieros",
      bullets: ["Revisión de código y PRs", "Triaje y corrección de errores", "Documentación", "Construcción de prototipos y MVPs"]
    },
    sales: {
      label: "Ventas",
      title: "Ventas",
      bullets: ["Calificación de leads", "Gestión de CRM", "Secuencias de seguimiento", "Informes de pipeline"]
    },
    creators: {
      label: "Creadores de Contenido",
      title: "Creadores de Contenido",
      bullets: ["Escritura y edición de guiones", "Investigación y verificación de datos", "Flujos de trabajo de distribución", "Análisis de audiencia"]
    },
    finance: {
      label: "Finanzas",
      title: "Finanzas",
      bullets: ["Seguimiento de ingresos", "Categorización de gastos", "Informes financieros", "Previsión y modelado"]
    },
    design: {
      label: "Diseño",
      title: "Diseño",
      bullets: ["Iteración de diseño y retroalimentación", "Gestión de activos", "Prototipado", "Documentación del sistema de diseño"]
    },
    product: {
      label: "Gerentes de Producto",
      title: "Gerentes de Producto",
      bullets: ["Escritura de especificaciones de características", "Seguimiento de comentarios de usuarios", "Planificación de sprints", "Actualizaciones de roadmap"]
    },
    research: {
      label: "Investigación y Análisis",
      title: "Investigación y Análisis",
      bullets: ["Recolección y limpieza de datos", "Análisis de tendencias", "Generación de informes", "Investigación de mercado"]
    },
    operations: {
      label: "Operaciones",
      title: "Operaciones",
      bullets: ["Automatización de procesos", "Migraciones de herramientas", "Coordinación de proveedores", "Optimización de flujos de trabajo"]
    }
  },
  en: {
    founders: {
      label: "Founders",
      title: "Founders & Operators",
      bullets: ["Strategic planning & analysis", "Cross-team coordination", "Investor updates & reporting", "Hiring pipeline management"]
    },
    editors: {
      label: "Editors & Content",
      title: "Editors & Content",
      bullets: ["Draft and edit articles", "Style consistency checks", "Publishing workflows", "Content calendar management"]
    },
    growth: {
      label: "Growth & Marketing",
      title: "Growth & Marketing",
      bullets: ["Campaign management", "Analytics & reporting", "A/B test analysis", "Social media scheduling"]
    },
    support: {
      label: "Customer Support",
      title: "Customer Support",
      bullets: ["Ticket triage & response", "Knowledge base updates", "Escalation management", "Customer health monitoring"]
    },
    engineers: {
      label: "Engineers",
      title: "Engineers",
      bullets: ["Code review & PRs", "Bug triage & fixes", "Documentation", "Prototype & MVP builds"]
    },
    sales: {
      label: "Sales",
      title: "Sales",
      bullets: ["Lead qualification", "CRM management", "Follow-up sequences", "Pipeline reporting"]
    },
    creators: {
      label: "Content Creators",
      title: "Content Creators",
      bullets: ["Script writing & editing", "Research & fact-checking", "Distribution workflows", "Audience analytics"]
    },
    finance: {
      label: "Finance",
      title: "Finance",
      bullets: ["Revenue tracking", "Expense categorization", "Financial reporting", "Forecasting & modeling"]
    },
    design: {
      label: "Design",
      title: "Design",
      bullets: ["Design iteration & feedback", "Asset management", "Prototyping", "Design system docs"]
    },
    product: {
      label: "Product Managers",
      title: "Product Managers",
      bullets: ["Feature spec writing", "User feedback tracking", "Sprint planning", "Roadmap updates"]
    },
    research: {
      label: "Research & Analysis",
      title: "Research & Analysis",
      bullets: ["Data collection & cleaning", "Trend analysis", "Report generation", "Market research"]
    },
    operations: {
      label: "Operations",
      title: "Operations",
      bullets: ["Process automation", "Tool migrations", "Vendor coordination", "Workflow optimization"]
    }
  }
};