"use strict";
// Exact Spanish source strings are the keys. Capture text nodes once to preserve
// semantic elements, links, focus and carousel state on every language change.
(() => {
  const english = {
  "Idioma": "Language",
  "NBTech | Cloud, DevOps e infraestructura para IA": "NBTech | Cloud, DevOps and AI infrastructure",
  "Saltar al contenido": "Skip to content",
  "Tech": "Tech",
  "Consultoría Cloud, DevOps e infraestructura para IA": "Cloud, DevOps and AI infrastructure consulting",
  "Menú": "Menu",
  "Soluciones": "Solutions",
  "Cómo trabajo": "How I work",
  "Perfil": "About",
  "Conversemos": "Let's talk",
  "Consultoría Cloud & DevOps": "Cloud & DevOps consulting",
  "De los desafíos de infraestructura a mejoras concretas.": "Turn infrastructure challenges into practical improvements.",
  "Experiencia técnica y acompañamiento directo para mejorar tu infraestructura, automatizar entregas y controlar costos y riesgos.": "Technical expertise and direct support to improve your infrastructure, automate delivery, and manage costs and risks.",
  "Uso IA para agilizar el trabajo y mejorar los entregables, con revisión técnica y responsabilidad sobre lo que se entrega.": "I use AI to work faster and improve deliverables, with technical review and accountability for the results.",
  "Conversemos sobre tu proyecto": "Let's discuss your project",
  "Una primera conversación para entender el contexto y evaluar el alcance.": "An initial conversation to understand your context and explore the scope.",
  "DEL CONTEXTO A LA OPERACIÓN": "FROM CONTEXT TO OPERATIONS",
  "01 / Entender": "01 / Understand",
  "Tu contexto": "Your context",
  "Negocio · costos · riesgos": "Business · costs · risks",
  "02 / Diseñar": "02 / Design",
  "Arquitectura": "Architecture",
  "Decisiones documentadas": "Documented decisions",
  "03 / Entregar": "03 / Deliver",
  "Automatización": "Automation",
  "Cambios reproducibles": "Reproducible changes",
  "04 / Sostener": "04 / Sustain",
  "Operación compartida": "Shared operations",
  "Visibilidad · documentación · seguimiento": "Visibility · documentation · follow-up",
  "La tecnología acompaña a tu equipo.": "Technology that supports your team.",
  "FinOps: entender el gasto": "FinOps: understand spending",
  "Relacionar consumo y costos para priorizar oportunidades con contexto.": "Connect usage and costs to prioritize opportunities in context.",
  "Seguridad: priorizar riesgos": "Security: prioritize risks",
  "Revisar conectividad, accesos y secretos para decidir qué atender primero.": "Review connectivity, access and secrets to decide what needs attention first.",
  "Implementar con criterio": "Sound judgment in delivery",
  "Llevar las decisiones a cambios revisables, con documentación para el equipo.": "Turn decisions into reviewable changes, with documentation for your team.",
  "01 / Soluciones de consultoría": "01 / Consulting solutions",
  "Soluciones concretas.": "Practical solutions.",
  "Alcance acordado.": "Agreed scope.",
  "Podés empezar por una revisión o por una implementación si ya tenés contexto. Definimos qué incluye el proyecto y cómo validar lo entregado.": "Start with a review, or move straight to implementation if you already have the context. We define what the project includes and how to validate the results.",
  "Infraestructura lista para IA": "AI-ready infrastructure",
  "¿Tu infraestructura acompaña el avance de la IA?": "Can your infrastructure keep pace with AI?",
  "Adoptar IA también implica decidir quién accede, cómo se controla el gasto y cómo se sostiene la operación.": "Adopting AI also means deciding who has access, how spending is controlled and how operations are sustained.",
  "de las organizaciones encuestadas por IBM reporta que la adopción de IA supera sus capacidades actuales de gobernanza.": "of organizations surveyed by IBM report that AI adoption outpaces their current governance capabilities.",
  "Encuesta a 2.000 ejecutivos tecnológicos en 33 geografías; enero–abril de 2026.": "Survey of 2,000 technology executives across 33 geographies; January–April 2026.",
  "IBM Institute for Business Value · junio de 2026": "IBM Institute for Business Value · June 2026",
  "1 de cada 5": "1 in 5",
  "aproximadamente, de las personas encuestadas indicó que los costos operativos limitaron el uso de IA en su organización.": "respondents, approximately, said operating costs limited AI use in their organization.",
  "Encuesta a 1.719 participantes de 97 países; mayo–junio de 2026.": "Survey of 1,719 participants across 97 countries; May–June 2026.",
  "McKinsey · The state of AI 2026 · agosto de 2026": "McKinsey · The state of AI 2026 · August 2026",
  "Arquitectura, accesos y visibilidad de costos para llevar tus iniciativas de IA a un entorno operable.": "Architecture, access and cost visibility to bring your AI initiatives into an environment you can operate.",
  "Revisar mi entorno para IA": "Review my AI environment",
  "01 / Entrega de software": "01 / Software delivery",
  "DevOps": "DevOps",
  "Del cambio de código a una entrega que el equipo pueda sostener.": "From code changes to delivery your team can sustain.",
  "Revisión del flujo DevOps": "DevOps workflow review",
  "Si los cambios dependen de pasos manuales o no está claro dónde se traba la entrega: mapa del recorrido, hallazgos priorizados y recomendaciones sobre CI/CD, aprobaciones, secretos y recuperación.": "When changes rely on manual steps or delivery bottlenecks are unclear: a workflow map, prioritized findings and recommendations on CI/CD, approvals, secrets and recovery.",
  "Despliegues GitOps": "GitOps deployments",
  "Para Kubernetes que necesita entregas declarativas y trazables: piloto con Argo CD, configuración versionada, reglas de acceso y promoción, validación, documentación y transferencia.": "For Kubernetes environments that need declarative, traceable delivery: an Argo CD pilot, versioned configuration, access and promotion rules, validation, documentation and handover.",
  "Complementos:": "Add-ons:",
  "charts Helm para ordenar despliegues; portal Backstage para catálogo, responsables y documentación. Alcance e integraciones acordados.": "Helm charts to organize deployments; a Backstage portal for a service catalog, ownership and documentation. Scope and integrations agreed together.",
  "Conversar sobre DevOps": "Discuss DevOps",
  "02 / Costos y decisiones": "02 / Costs and decisions",
  "FinOps": "FinOps",
  "Entender el gasto y darle responsables, decisiones y seguimiento.": "Understand spending and establish ownership, decisions and follow-up.",
  "Diagnóstico de costos": "Cost assessment",
  "Si cuesta explicar el gasto o priorizar recursos: análisis de uso y consumo del inventario acordado, oportunidades con evidencia e impactos, riesgos y acciones priorizadas.": "When spending is hard to explain or resources are hard to prioritize: usage analysis of the agreed inventory, evidence-backed opportunities and impacts, risks and prioritized actions.",
  "Bases de gobernanza FinOps": "FinOps governance foundations",
  "Si faltan responsables o los reportes no llevan a decisiones: asignación de gasto, dashboards, presupuestos y alertas, más una rutina de revisión y transferencia al equipo.": "When ownership is missing or reports do not lead to decisions: cost allocation, dashboards, budgets and alerts, plus a review routine and team handover.",
  "Conversar sobre FinOps": "Discuss FinOps",
  "03 / Seguridad de infraestructura": "03 / Infrastructure security",
  "SecOps": "SecOps",
  "Entender riesgos técnicos y llevar mejoras acordadas a la práctica.": "Understand technical risks and put agreed improvements into practice.",
  "Revisión de seguridad": "Security review",
  "Si hay dudas sobre conectividad o accesos: revisión de redes, identidades, permisos y secretos con hallazgos priorizados por contexto y riesgo.": "When connectivity or access raises questions: review networks, identities, permissions and secrets, with findings prioritized by context and risk.",
  "Implementación de mejoras": "Implementing improvements",
  "Para atender prioridades acordadas: cambios revisables de conectividad, accesos o manejo de secretos, validación en el entorno y documentación con transferencia al equipo.": "Address agreed priorities through reviewable changes to connectivity, access or secrets management, validation in your environment, documentation and team handover.",
  "Conversar sobre SecOps": "Discuss SecOps",
  "04 / Arquitectura e infraestructura": "04 / Architecture and infrastructure",
  "IA": "AI",
  "Preparar un entorno operable para las soluciones de IA de tu organización.": "Build an environment your organization can operate for its AI solutions.",
  "Arquitectura para soluciones de IA": "Architecture for AI solutions",
  "Para definir cómo llevar una iniciativa al entorno: decisiones documentadas de integración, conectividad, identidades, capacidad y costos.": "Define how to bring an initiative into your environment, with documented decisions on integration, connectivity, identities, capacity and costs.",
  "Implementación de infraestructura para IA": "AI infrastructure implementation",
  "Para operar la solución en un entorno acordado: configuración del entorno y accesos, observabilidad, validación y documentación para el equipo.": "Run your solution in an agreed environment: environment and access configuration, observability, validation and documentation for your team.",
  "Conversar sobre infraestructura para IA": "Discuss AI infrastructure",
  "La base técnica de cada proyecto": "The technical foundation of every project",
  "Arquitectura e infraestructura, automatización y observabilidad según el entorno. Cambios revisables, decisiones documentadas y conocimiento que queda en tu equipo.": "Architecture, infrastructure, automation and observability tailored to your environment. Reviewable changes, documented decisions and knowledge that stays with your team.",
  "Sostener las mejoras": "Sustaining improvements",
  "Acompañamiento para revisar acciones, desvíos y resultados. Frecuencia, dedicación y responsabilidades acordadas; puede partir de un diagnóstico, una implementación o una base existente.": "Ongoing support to review actions, deviations and results. Agreed frequency, time commitment and responsibilities, starting from an assessment, an implementation or an existing setup.",
  "02 / Forma de trabajo": "02 / How I work",
  "Entender primero.": "Understand first.",
  "Construir con vos.": "Build together.",
  "Partimos del contexto disponible: diagnóstico cuando hace falta, cambios acordados y transferencia al equipo.": "We start with the context available: assessment where needed, agreed changes and knowledge transfer to your team.",
  "Diagnóstico": "Assessment",
  "Escuchar el problema, relevar el entorno y reconocer restricciones y prioridades.": "Listen to the problem, review the environment and identify constraints and priorities.",
  "Propuesta": "Proposal",
  "Acordar objetivos, entregables, alcance, responsabilidades y criterios de aceptación.": "Agree on goals, deliverables, scope, responsibilities and acceptance criteria.",
  "Implementación": "Implementation",
  "Trabajar por cambios revisables, validar en el entorno acordado y documentar decisiones.": "Make reviewable changes, validate in the agreed environment and document decisions.",
  "Seguimiento": "Follow-up",
  "Revisar lo entregado, transferir conocimiento y definir los próximos pasos.": "Review deliverables, transfer knowledge and define next steps.",
  "03 / La persona detrás": "03 / The person behind the work",
  "Criterio técnico.": "Technical judgment.",
  "Compromiso con la operación.": "Commitment to operations.",
  "NB": "NB",
  "Nicolás Barceló": "Nicolás Barceló",
  "Trabajo de cerca con tu equipo para entender el contexto, evaluar alternativas y llevar las decisiones a la práctica.": "I work closely with your team to understand the context, evaluate alternatives and put decisions into practice.",
  "La IA forma parte de mis herramientas de trabajo. Mi aporte está en la experiencia para decidir qué conviene hacer, revisar los resultados y dejar conocimiento útil en tu equipo.": "AI is part of my toolkit. My contribution is the experience to decide what makes sense, review results and leave your team with useful knowledge.",
  "04 / Próximo paso": "04 / Next step",
  "Conversemos sobre": "Let's talk about",
  "lo que necesitás resolver.": "what you need to solve.",
  "No hace falta tener una solución elegida. Un poco de contexto, el principal problema y lo que querés lograr son un buen punto de partida.": "You do not need to have a solution in mind. Some context, the main problem and what you want to achieve are a good starting point.",
  "Contacto": "Contact",
  "contacto@nbtech.uy": "contacto@nbtech.uy",
  "Correo por confirmar": "Email address awaiting confirmation",
  "NBTech": "NBTech",
  "Volver al inicio": "Back to top",
  "NBTech, inicio": "NBTech, home",
  "Navegación principal": "Main navigation",
  "Enfoque de trabajo: conectar contexto, diseño, entrega y operación": "Approach: connect context, design, delivery and operations",
  "Para qué trabajar juntos": "Why work together",
  "Soluciones por área": "Solutions by area",
  "Solución anterior": "Previous solution",
  "Elegir solución": "Choose a solution",
  "Solución siguiente": "Next solution",
  "Base técnica y continuidad": "Technical foundation and ongoing support",
  "Servicios de DevOps, FinOps, seguridad e infraestructura para IA: diagnóstico, implementación y acompañamiento en entornos cloud, on-premise e híbridos.": "DevOps, FinOps, security and AI infrastructure services: assessment, implementation and ongoing support across cloud, on-premise and hybrid environments.",
  "Consultoría en DevOps, FinOps, seguridad e infraestructura para IA, desde el diagnóstico hasta la implementación.": "DevOps, FinOps, security and AI infrastructure consulting, from assessment to implementation."
};
  const textEntries = [];
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest("script, style, .language-switch")) continue;
    const source = node.textContent.trim();
    if (Object.hasOwn(english, source)) textEntries.push({ node, source, before: node.textContent.match(/^\s*/)[0], after: node.textContent.match(/\s*$/)[0] });
  }
  const attributes = [];
  document.querySelectorAll("[aria-label], meta[content]").forEach(node => {
    const attribute = node.hasAttribute("aria-label") ? "aria-label" : "content";
    const source = node.getAttribute(attribute);
    if (Object.hasOwn(english, source)) attributes.push({ node, attribute, source });
  });
  const valid = value => value === "es" || value === "en";
  function browserLanguage() {
    for (const language of navigator.languages || [navigator.language]) {
      const base = String(language).toLowerCase().split("-")[0];
      if (valid(base)) return base;
    }
    return "en";
  }
  let stored;
  try { stored = localStorage.getItem("nbtech-language"); } catch { /* Storage is optional. */ }
  const requested = new URL(location.href).searchParams.get("lang");
  function apply(language, manual = false) {
    document.documentElement.lang = language;
    textEntries.forEach(({node, source, before, after}) => { node.textContent = before + (language === "en" ? english[source] : source) + after; });
    attributes.forEach(({node, attribute, source}) => node.setAttribute(attribute, language === "en" ? english[source] : source));
    document.querySelector('meta[property="og:locale"]').content = language === "en" ? "en_US" : "es_UY";
    document.querySelectorAll("[data-language]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
    if (manual) { try { localStorage.setItem("nbtech-language", language); } catch { /* Keep working without persistence. */ } }
    const url = new URL(location.href);
    url.searchParams.set("lang", language);
    try { history.replaceState(history.state, "", url); } catch { /* Translation works even without history access. */ }
    document.dispatchEvent(new Event("languagechange"));
  }
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => apply(button.dataset.language, true)));
  apply(valid(requested) ? requested : valid(stored) ? stored : browserLanguage());
  document.querySelector(".language-switch").hidden = false;
})();
