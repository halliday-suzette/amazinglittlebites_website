export type Lang = "en" | "es";

const en = {
  meta: {
    title: "Amazing Little Bites | Dessert & Snack Cart Catering",
    description:
      "We know your sweet spot. Mobile dessert and snack cart catering for quinceañeras, sweet 16s, weddings, and birthdays across Orange County, San Bernardino, and Riverside.",
  },
  nav: {
    home: "Home",
    services: "Services",
    menu: "Menu",
    serviceArea: "Service Area",
    quote: "Get a Quote",
    contact: "Contact",
    logoAlt: "Amazing Little Bites logo",
    toggleMenuAria: "Toggle navigation menu",
    callAria: (name: string, display: string) => `Call ${name} at ${display}`,
  },
  hero: {
    logoAlt: "Amazing Little Bites logo — a pink dessert cart with an umbrella",
    tagline: '"We know your sweet spot"',
    headline: "Sweet Treats & Fun Bites for Your Next Celebration",
    subheadline:
      "From quinceañeras and sweet 16s to weddings and birthday parties, Amazing Little Bites brings a fun, customizable dessert & snack cart straight to your celebration.",
    ctaQuote: "Get a Free Quote",
    ctaCall: (name: string, display: string) => `Call ${name}: ${display}`,
  },
  about: {
    heading: "A Mobile Cart Full of Fun",
    body: "Amazing Little Bites is a mobile dessert and snack cart bringing fun, customizable treats to events across Southern California. Whether it's an intimate backyard birthday or a full-scale quinceañera, we roll our cart in, set up in minutes, and let your guests enjoy treats made for the occasion.",
  },
  services: {
    heading: "Our Services",
    eventCatering: {
      title: "Event Catering",
      description:
        "Quinceañeras, sweet 16s, weddings, birthday parties, and every celebration in between — we tailor our cart to fit your event.",
    },
    dessertCart: {
      title: "Dessert & Snack Cart",
      description:
        "A fully customizable menu of sweet and savory bites, styled and served fresh from our signature cart at your venue.",
    },
    bartending: {
      badge: "Featured Partner",
      title: "La Familia Bartending Services",
      description:
        "Pair your dessert cart with our trusted bartending partner for a complete celebration experience. Ask us about bundling La Familia Bartending Services with your quote.",
    },
  },
  menu: {
    heading: "Our Menu",
    snackCartsTitle: "Snack Carts",
    hydrationBarTitle: "Hydration Bar",
    bartendingCrossRef: "see La Familia Bartending →",
    customAguaRequest: "Make Your Own Aguas Request (subject to approval)",
    note: "Menu items are customizable — mix and match for your event!",
  },
  howItWorks: {
    heading: "How It Works",
    steps: [
      { title: "Tell Us About Your Event", description: "Share your event date, type, and guest count." },
      { title: "Choose Your Treats", description: "Pick your favorite bites from our customizable menu." },
      { title: "We Bring the Cart, You Enjoy the Party", description: "We handle setup and serving so you can celebrate." },
    ],
  },
  serviceArea: {
    heading: "Where We Serve",
    primary: "Orange County, CA",
    primaryNote: "Primary service area",
    alsoServing: "Also serving",
    surrounding: "Surrounding communities",
  },
  quoteForm: {
    heading: "Get a Free Quote",
    subheading: "Tell us about your event and we'll get back to you with a custom quote.",
    preferToCall: "Prefer to call?",
    fields: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      eventDate: "Event Date",
      eventType: "Event Type",
      guestCount: "Estimated Guest Count",
      message: "Describe Your Event",
      selectEventType: "Select an event type",
    },
    eventTypes: [
      { value: "Quinceañera", label: "Quinceañera" },
      { value: "Sweet 16", label: "Sweet 16" },
      { value: "Wedding", label: "Wedding" },
      { value: "Birthday", label: "Birthday" },
      { value: "Other", label: "Other" },
    ],
    submit: "Submit Quote Request",
    messages: {
      required: "This field is required.",
      invalidEmail: "Please enter a valid email address.",
      invalidPhone: "Please enter a valid phone number.",
      fixErrors: "Please fix the errors above and try again.",
      sending: "Sending...",
      success: "Thanks! We'll be in touch soon.",
      error: "Something went wrong. Please try again or call us directly.",
    },
  },
  footer: {
    logoAlt: "Amazing Little Bites logo",
    serving: "Serving:",
    servingArea: "Orange County, CA (primary) · San Bernardino & Riverside communities",
    office: "Office:",
    copyright: (year: number) => `© ${year} Amazing Little Bites. All rights reserved.`,
    websiteBy: "Website by",
    instagramAria: "Amazing Little Bites on Instagram",
    facebookAria: "Amazing Little Bites on Facebook",
  },
  langToggle: {
    switchAria: "View this site in Spanish",
  },
};

const es: typeof en = {
  meta: {
    title: "Amazing Little Bites | Carrito de Postres y Antojitos",
    description:
      "Conocemos tu antojo. Carrito móvil de postres y antojitos para quinceañeras, dulces 16, bodas y cumpleaños en el Condado de Orange, San Bernardino y Riverside.",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    menu: "Menú",
    serviceArea: "Área de Servicio",
    quote: "Cotización",
    contact: "Contacto",
    logoAlt: "Logotipo de Amazing Little Bites",
    toggleMenuAria: "Abrir o cerrar el menú de navegación",
    callAria: (name: string, display: string) => `Llamar a ${name} al ${display}`,
  },
  hero: {
    logoAlt: "Logotipo de Amazing Little Bites — un carrito de postres rosa con sombrilla",
    tagline: '"Conocemos tu antojo"',
    headline: "Postres y Antojitos Divertidos para tu Próxima Celebración",
    subheadline:
      "Desde quinceañeras y dulces 16 hasta bodas y fiestas de cumpleaños, Amazing Little Bites lleva un carrito de postres y antojitos divertido y personalizable directo a tu celebración.",
    ctaQuote: "Pide tu Cotización Gratis",
    ctaCall: (name: string, display: string) => `Llama a ${name}: ${display}`,
  },
  about: {
    heading: "Un Carrito Móvil Lleno de Diversión",
    body: "Amazing Little Bites es un carrito móvil de postres y antojitos que lleva diversión y sabores personalizables a eventos por todo el sur de California. Ya sea un cumpleaños íntimo en el patio de tu casa o una quinceañera a lo grande, llevamos nuestro carrito, lo montamos en minutos, y dejamos que tus invitados disfruten de antojitos hechos para la ocasión.",
  },
  services: {
    heading: "Nuestros Servicios",
    eventCatering: {
      title: "Catering para Eventos",
      description:
        "Quinceañeras, dulces 16, bodas, fiestas de cumpleaños y toda celebración de por medio — adaptamos nuestro carrito a tu evento.",
    },
    dessertCart: {
      title: "Carrito de Postres y Antojitos",
      description:
        "Un menú totalmente personalizable de antojitos dulces y salados, preparados y servidos frescos desde nuestro carrito en tu evento.",
    },
    bartending: {
      badge: "Socio Destacado",
      title: "La Familia Bartending Services",
      description:
        "Combina tu carrito de postres con nuestro socio de confianza en bartending para una experiencia completa. Pregúntanos cómo incluir La Familia Bartending Services en tu cotización.",
    },
  },
  menu: {
    heading: "Nuestro Menú",
    snackCartsTitle: "Carritos de Antojitos",
    hydrationBarTitle: "Barra de Aguas Frescas",
    bartendingCrossRef: "ver La Familia Bartending →",
    customAguaRequest: "Solicitud de Aguas Personalizadas (sujeto a aprobación)",
    note: "¡Los antojitos del menú son personalizables — combínalos como quieras para tu evento!",
  },
  howItWorks: {
    heading: "Cómo Funciona",
    steps: [
      { title: "Cuéntanos de tu Evento", description: "Comparte la fecha, el tipo de evento y el número de invitados." },
      { title: "Elige tus Antojitos", description: "Escoge tus favoritos de nuestro menú personalizable." },
      { title: "Llevamos el Carrito, Tú Disfrutas la Fiesta", description: "Nosotros nos encargamos de montar y servir para que tú celebres." },
    ],
  },
  serviceArea: {
    heading: "Dónde Servimos",
    primary: "Condado de Orange, CA",
    primaryNote: "Zona principal de servicio",
    alsoServing: "También en",
    surrounding: "Comunidades cercanas",
  },
  quoteForm: {
    heading: "Pide tu Cotización Gratis",
    subheading: "Cuéntanos de tu evento y te contactaremos con una cotización personalizada.",
    preferToCall: "¿Prefieres llamar?",
    fields: {
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo Electrónico",
      eventDate: "Fecha del Evento",
      eventType: "Tipo de Evento",
      guestCount: "Número Estimado de Invitados",
      message: "Cuéntanos sobre tu Evento",
      selectEventType: "Selecciona un tipo de evento",
    },
    eventTypes: [
      { value: "Quinceañera", label: "Quinceañera" },
      { value: "Sweet 16", label: "Dulces 16" },
      { value: "Wedding", label: "Boda" },
      { value: "Birthday", label: "Cumpleaños" },
      { value: "Other", label: "Otro" },
    ],
    submit: "Enviar Solicitud de Cotización",
    messages: {
      required: "Este campo es obligatorio.",
      invalidEmail: "Por favor ingresa un correo electrónico válido.",
      invalidPhone: "Por favor ingresa un número de teléfono válido.",
      fixErrors: "Por favor corrige los errores arriba e intenta de nuevo.",
      sending: "Enviando...",
      success: "¡Gracias! Nos pondremos en contacto pronto.",
      error: "Algo salió mal. Por favor intenta de nuevo o llámanos directamente.",
    },
  },
  footer: {
    logoAlt: "Logotipo de Amazing Little Bites",
    serving: "Servimos:",
    servingArea: "Condado de Orange, CA (principal) · Comunidades de San Bernardino y Riverside",
    office: "Oficina:",
    copyright: (year: number) => `© ${year} Amazing Little Bites. Todos los derechos reservados.`,
    websiteBy: "Sitio web por",
    instagramAria: "Amazing Little Bites en Instagram",
    facebookAria: "Amazing Little Bites en Facebook",
  },
  langToggle: {
    switchAria: "Ver este sitio en inglés",
  },
};

export const translations = { en, es };

export function getDictionary(lang: Lang) {
  return translations[lang];
}
