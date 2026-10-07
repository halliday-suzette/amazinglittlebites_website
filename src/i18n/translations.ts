export type Lang = "en" | "es";

const en = {
  meta: {
    title: "Amazing Little Bites | Dessert & Snack Cart Catering",
    description:
      "We know your sweet spot. Mobile dessert and snack cart catering for quinceañeras, sweet 16s, weddings, and birthdays across Orange County, Los Angeles, San Bernardino, and Riverside.",
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
    ctaSeeReviews: "See Our Reviews on Google",
    ctaReview: "Leave Us a Review on Google",
  },
  about: {
    heading: "A Mobile Cart Full of Fun",
    body: "Amazing Little Bites is a mobile dessert and snack cart bringing fun, customizable treats to events across Southern California. Whether it's an intimate backyard birthday or a full-scale quinceañera, we roll our cart in, set up in minutes, and let your guests enjoy treats made for the occasion.",
  },
  services: {
    heading: "Our Services",
    learnMore: "Learn more →",
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
  carousel: {
    heading: "See Us in Action",
    prevAria: "Previous image",
    nextAria: "Next image",
    goToSlideAria: (n: number) => `Go to image ${n}`,
    altFallback: (n: number) => `Amazing Little Bites event photo ${n}`,
    altByFile: {
      "ALB 15 Birthday Party Set up Evening lighting.jpg":
        "Amazing Little Bites snack cart set up outdoors at night with string lights for a 15th birthday celebration",
      "ALB Cup Noodle Soup NIght time pics.png":
        "Rows of cup noodles arranged on the snack cart for a nighttime event",
      "ALB Cup Noodle with Sauces.png":
        "Cup noodle bar with assorted hot sauces and toppings at an indoor event",
      "ALB MARUCHAN CUPS.png": "Maruchan instant lunch cups topped with chamoy, chips, and lime at an event",
      "Cinnamoroll Cart.png": "Snack cart decorated with a Cinnamoroll theme, set up outdoors at dusk",
    },
  },
  menu: {
    heading: "Our Menu",
    snackCartsTitle: "Snack Carts",
    hydrationBarTitle: "Hydration Bar",
    bartendingCrossRef: "see La Familia Bartending →",
    customAguaRequest: "Make Your Own Aguas Request (subject to approval)",
    note: "Menu items are customizable — mix and match for your event!",
    seeDessertCartPage: "Explore our Dessert Cart Catering page →",
    seeQuinceaneraPage: "Explore our Quinceañera Snack Cart page →",
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
      eventAddress: "Event Address",
      eventAddressPlaceholder: "Street address, city",
      locationType: "Is the event at a home or a venue?",
      selectLocationType: "Select one",
      guestCount: "Estimated Guest Count",
      message: "Describe Your Event",
      selectEventType: "Select an event type",
      snackCartItems: "Snack Cart Items",
      snackCartItemsHelp: "Choose up to 3",
    },
    locationTypes: [
      { value: "Home", label: "Home" },
      { value: "Venue", label: "Venue" },
    ],
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
    servingArea: "Orange County, CA (primary) · Los Angeles, San Bernardino & Riverside communities",
    office: "Office:",
    copyright: (year: number) => `© ${year} Amazing Little Bites. All rights reserved.`,
    websiteBy: "Website by",
    instagramAria: "Amazing Little Bites on Instagram",
    facebookAria: "Amazing Little Bites on Facebook",
    tiktokAria: "Amazing Little Bites on TikTok",
    googleBusinessAria: "Amazing Little Bites on Google Business Profile",
    dessertCartLinkLabel: "Dessert Cart Catering",
    quinceaneraLinkLabel: "Quinceañera Snack Cart",
    licensedInsured: "Licensed & Insured",
  },
  langToggle: {
    switchAria: "View this site in Spanish",
  },
  trustBadges: {
    ratingLabel: "5.0 ★ Rating · 10 Google Reviews",
    womenOwned: "Women-Owned",
    latinoOwned: "Latino-Owned",
    lgbtqFriendly: "LGBTQ+ Friendly",
    bilingual: "Bilingual Service (English/Spanish)",
    reviewsLinkLabel: "Read our reviews on Google",
  },
  dessertCartLanding: {
    meta: {
      title: "Dessert Cart Catering Orange County | Mobile Snack Cart for Events",
      description:
        "Mobile dessert and snack cart catering for weddings, birthdays, and celebrations across Orange County, Los Angeles, San Bernardino, and Riverside. Customizable menu, easy booking, 5.0-star rated.",
    },
    breadcrumbLabel: "Dessert Cart Catering",
    hero: {
      heading: "Dessert Cart Catering in Orange County",
      subheading:
        "A fully mobile, customizable dessert and snack cart built to fit any celebration in Orange County — and we also bring the cart to events across Los Angeles, San Bernardino, and Riverside.",
    },
    whatsIncluded: {
      heading: "What's Included",
      intro:
        "Every booking includes the cart itself, full setup and breakdown, friendly on-site service staff, and a menu you customize to fit your event.",
      bullets: [
        "Mobile setup that's ready to serve in minutes",
        "A fully customizable menu of sweet and savory bites",
        "Serving Orange County and surrounding Southern California communities",
        "Bilingual service in English and Spanish",
      ],
    },
    ocCitiesIntro: "Proudly based in Anaheim and serving cities across Orange County, including:",
    gallery: { heading: "See the Cart in Action" },
    menuPreview: {
      heading: "A Taste of Our Menu",
      seeFullMenu: "See the full menu →",
    },
    whyUs: { heading: "Why Amazing Little Bites" },
    finalCta: {
      heading: "Ready to Book Your Dessert Cart?",
      seeServices: "See our full services →",
    },
  },
  quinceaneraLanding: {
    meta: {
      title: "Quinceañera Snack Cart Orange County | Dessert Cart for Quinceañeras",
      description:
        "Make your quinceañera unforgettable with a customizable dessert and snack cart. Serving quinceañeras across Orange County, Los Angeles, San Bernardino, and Riverside with mini pancakes, esquites, mangonada, and more.",
    },
    breadcrumbLabel: "Quinceañera Snack Cart",
    hero: {
      heading: "Quinceañera Snack Cart in Orange County",
      subheading:
        "Give your quinceañera guests a sweet and savory experience they'll remember — our cart also travels to quinceañeras across Los Angeles, San Bernardino, and Riverside.",
    },
    whySnackCart: {
      heading: "Why a Snack Cart for Your Quinceañera",
      intro:
        "A quinceañera is a celebration of tradition and community, and our cart brings guests together around food they know and love — styled and served fresh right at your venue.",
      bullets: [
        "Bilingual service in English and Spanish",
        "A culturally relevant menu — esquites, mangonada, and aguas frescas",
        "Fits any venue size, from backyard parties to full event halls",
      ],
    },
    popularPicks: {
      heading: "Popular Quinceañera Menu Picks",
      seeFullMenu: "See the full menu →",
    },
    gallery: { heading: "See the Cart in Action" },
    howItWorks: {
      heading: "How It Works for Your Quinceañera",
      steps: [
        { title: "Tell Us About Your Quinceañera", description: "Share your date, guest count, and vision for the celebration." },
        { title: "Choose Your Treats", description: "Pick your favorite bites from our customizable menu." },
        { title: "We Bring the Cart, You Celebrate", description: "We handle setup and serving so you can enjoy every moment." },
      ],
    },
    whyUs: { heading: "Why Families Trust Us" },
    finalCta: {
      heading: "Ready to Book Your Quinceañera Snack Cart?",
      seeServices: "See our full services →",
    },
  },
};

const es: typeof en = {
  meta: {
    title: "Amazing Little Bites | Carrito de Postres y Antojitos",
    description:
      "Conocemos tu antojo. Carrito móvil de postres y antojitos para quinceañeras, dulces 16, bodas y cumpleaños en el Condado de Orange, Los Ángeles, San Bernardino y Riverside.",
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
    ctaSeeReviews: "Mira Nuestras Reseñas en Google",
    ctaReview: "Déjanos una Reseña en Google",
  },
  about: {
    heading: "Un Carrito Móvil Lleno de Diversión",
    body: "Amazing Little Bites es un carrito móvil de postres y antojitos que lleva diversión y sabores personalizables a eventos por todo el sur de California. Ya sea un cumpleaños íntimo en el patio de tu casa o una quinceañera a lo grande, llevamos nuestro carrito, lo montamos en minutos, y dejamos que tus invitados disfruten de antojitos hechos para la ocasión.",
  },
  services: {
    heading: "Nuestros Servicios",
    learnMore: "Saber más →",
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
  carousel: {
    heading: "Míranos en Acción",
    prevAria: "Imagen anterior",
    nextAria: "Siguiente imagen",
    goToSlideAria: (n: number) => `Ir a la imagen ${n}`,
    altFallback: (n: number) => `Foto de un evento de Amazing Little Bites ${n}`,
    altByFile: {
      "ALB 15 Birthday Party Set up Evening lighting.jpg":
        "Carrito de antojitos de Amazing Little Bites instalado al aire libre por la noche con luces festivas para una celebración de 15 años",
      "ALB Cup Noodle Soup NIght time pics.png":
        "Hileras de vasos de sopa instantánea acomodados en el carrito para un evento nocturno",
      "ALB Cup Noodle with Sauces.png":
        "Barra de sopa instantánea con salsas variadas y aderezos en un evento bajo techo",
      "ALB MARUCHAN CUPS.png": "Vasos de Maruchan Instant Lunch preparados con chamoy, frituras y limón en un evento",
      "Cinnamoroll Cart.png": "Carrito de antojitos decorado con temática de Cinnamoroll, instalado al aire libre al atardecer",
    },
  },
  menu: {
    heading: "Nuestro Menú",
    snackCartsTitle: "Carritos de Antojitos",
    hydrationBarTitle: "Barra de Aguas Frescas",
    bartendingCrossRef: "ver La Familia Bartending →",
    customAguaRequest: "Solicitud de Aguas Personalizadas (sujeto a aprobación)",
    note: "¡Los antojitos del menú son personalizables — combínalos como quieras para tu evento!",
    seeDessertCartPage: "Explora nuestra página de Carrito de Postres →",
    seeQuinceaneraPage: "Explora nuestra página de Carrito para Quinceañera →",
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
      eventAddress: "Dirección del Evento",
      eventAddressPlaceholder: "Dirección, ciudad",
      locationType: "¿El evento es en una casa o en un salón?",
      selectLocationType: "Seleccione una opción",
      guestCount: "Número Estimado de Invitados",
      message: "Cuéntanos sobre tu Evento",
      selectEventType: "Selecciona un tipo de evento",
      snackCartItems: "Artículos del Carrito de Antojitos",
      snackCartItemsHelp: "Elige hasta 3",
    },
    locationTypes: [
      { value: "Home", label: "Casa" },
      { value: "Venue", label: "Salón" },
    ],
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
    servingArea: "Condado de Orange, CA (principal) · Comunidades de Los Ángeles, San Bernardino y Riverside",
    office: "Oficina:",
    copyright: (year: number) => `© ${year} Amazing Little Bites. Todos los derechos reservados.`,
    websiteBy: "Sitio web por",
    instagramAria: "Amazing Little Bites en Instagram",
    facebookAria: "Amazing Little Bites en Facebook",
    tiktokAria: "Amazing Little Bites en TikTok",
    googleBusinessAria: "Amazing Little Bites en el Perfil de Negocio de Google",
    dessertCartLinkLabel: "Carrito de Postres y Antojitos",
    quinceaneraLinkLabel: "Carrito de Antojitos para Quinceañera",
    licensedInsured: "Con Licencia y Asegurados",
  },
  langToggle: {
    switchAria: "Ver este sitio en inglés",
  },
  trustBadges: {
    ratingLabel: "Calificación 5.0 ★ · 10 Reseñas en Google",
    womenOwned: "Negocio Dirigido por Mujeres",
    latinoOwned: "Negocio Latino",
    lgbtqFriendly: "Amigable con la Comunidad LGBTQ+",
    bilingual: "Servicio Bilingüe (Inglés/Español)",
    reviewsLinkLabel: "Lee nuestras reseñas en Google",
  },
  dessertCartLanding: {
    meta: {
      title: "Carrito de Postres en el Condado de Orange | Carrito Móvil de Antojitos para Eventos",
      description:
        "Carrito móvil de postres y antojitos para bodas, cumpleaños y celebraciones en el Condado de Orange, Los Ángeles, San Bernardino y Riverside. Menú personalizable, reservación fácil, calificación de 5.0 estrellas.",
    },
    breadcrumbLabel: "Carrito de Postres y Antojitos",
    hero: {
      heading: "Carrito de Postres en el Condado de Orange",
      subheading:
        "Un carrito de postres y antojitos totalmente móvil y personalizable, ideal para cualquier celebración en el Condado de Orange — también llevamos el carrito a eventos en Los Ángeles, San Bernardino y Riverside.",
    },
    whatsIncluded: {
      heading: "Qué Incluye",
      intro:
        "Cada reservación incluye el carrito, montaje y desmontaje completos, personal de servicio amable en el lugar, y un menú que personalizas para tu evento.",
      bullets: [
        "Montaje móvil listo para servir en minutos",
        "Un menú totalmente personalizable de antojitos dulces y salados",
        "Servicio en el Condado de Orange y comunidades cercanas del sur de California",
        "Servicio bilingüe en inglés y español",
      ],
    },
    ocCitiesIntro: "Con base en Anaheim y con orgullo servimos a ciudades por todo el Condado de Orange, incluyendo:",
    gallery: { heading: "Mira el Carrito en Acción" },
    menuPreview: {
      heading: "Una Probada de Nuestro Menú",
      seeFullMenu: "Ver el menú completo →",
    },
    whyUs: { heading: "Por Qué Elegir Amazing Little Bites" },
    finalCta: {
      heading: "¿Listo para Reservar tu Carrito de Postres?",
      seeServices: "Ve todos nuestros servicios →",
    },
  },
  quinceaneraLanding: {
    meta: {
      title: "Carrito de Antojitos para Quinceañera en el Condado de Orange | Carrito de Postres para Quinceañeras",
      description:
        "Haz que tu quinceañera sea inolvidable con un carrito de postres y antojitos personalizable. Servimos quinceañeras en el Condado de Orange, Los Ángeles, San Bernardino y Riverside con mini pancakes, esquites, mangonada y más.",
    },
    breadcrumbLabel: "Carrito de Antojitos para Quinceañera",
    hero: {
      heading: "Carrito de Antojitos para Quinceañera en el Condado de Orange",
      subheading:
        "Dale a los invitados de tu quinceañera una experiencia dulce y salada que recordarán — nuestro carrito también viaja a quinceañeras en Los Ángeles, San Bernardino y Riverside.",
    },
    whySnackCart: {
      heading: "Por Qué un Carrito de Antojitos para tu Quinceañera",
      intro:
        "Una quinceañera es una celebración de tradición y comunidad, y nuestro carrito reúne a los invitados alrededor de antojitos que conocen y aman — preparados y servidos frescos en tu evento.",
      bullets: [
        "Servicio bilingüe en inglés y español",
        "Un menú culturalmente relevante — esquites, mangonada y aguas frescas",
        "Se adapta a cualquier tamaño de evento, desde fiestas en casa hasta salones completos",
      ],
    },
    popularPicks: {
      heading: "Antojitos Favoritos para Quinceañeras",
      seeFullMenu: "Ver el menú completo →",
    },
    gallery: { heading: "Mira el Carrito en Acción" },
    howItWorks: {
      heading: "Cómo Funciona para tu Quinceañera",
      steps: [
        { title: "Cuéntanos de tu Quinceañera", description: "Comparte la fecha, el número de invitados y tu visión para la celebración." },
        { title: "Elige tus Antojitos", description: "Escoge tus favoritos de nuestro menú personalizable." },
        { title: "Llevamos el Carrito, Tú Celebras", description: "Nosotros nos encargamos de montar y servir para que disfrutes cada momento." },
      ],
    },
    whyUs: { heading: "Por Qué las Familias Confían en Nosotros" },
    finalCta: {
      heading: "¿Lista para Reservar tu Carrito para Quinceañera?",
      seeServices: "Ve todos nuestros servicios →",
    },
  },
};

export const translations = { en, es };

export function getDictionary(lang: Lang) {
  return translations[lang];
}
