export const brand = {
  name: 'Microagencia',
  tagline: 'Transformación cotidiana',
  frase: '"No ayudamos solamente a que los negocios crezcan. Ayudamos a que funcionen mejor para las personas que los sostienen."',

  archetypes: [
    {
      name: 'El Mago',
      role: 'Arquetipo primario',
      icon: '🪄',
      description: 'Transformación alquímica. Convierte el caos en orden, lo pesado en liviano, lo complejo en simple. Detecta puntos de expansión donde pequeños cambios generan grandes resultados.',
      tags: ['Transformación', 'Visión', 'Fluidez'],
      color: '#D4A853',
    },
    {
      name: 'El Cuidador',
      role: 'Arquetipo secundario',
      icon: '❤️',
      description: 'Calidez humana y servicio genuino. Valida el cansancio sin culpar, ofrece alivio y contención. La tecnología al servicio del bienestar de las personas.',
      tags: ['Compasión', 'Cuidado', 'Cercanía'],
      color: '#C97B5D',
    },
    {
      name: 'El Sabio',
      role: 'Arquetipo terciario',
      icon: '📘',
      description: 'Rigor conceptual y profundidad estratégica. Ilumina lo que no se veía, revela el potencial latente y transforma la información dispersa en conocimiento estructurado.',
      tags: ['Claridad', 'Sabiduría', 'Estructura'],
      color: '#1A5C5E',
    },
  ],

  palette: [
    { name: 'Teal profundo', hex: '#1A5C5E', role: 'Color principal · Sabio, profundidad, confianza' },
    { name: 'Terracota', hex: '#C97B5D', role: 'Secundario · Cuidador, calidez, cercanía' },
    { name: 'Oro cálido', hex: '#D4A853', role: 'Acento · Mago, transformación, alquimia' },
    { name: 'Sage', hex: '#8BA88E', role: 'Acento secundario · Regeneración, sostenibilidad' },
    { name: 'Navy', hex: '#1A3C5E', role: 'Tono profundo · Bases, fondos, header' },
    { name: 'Crema', hex: '#F5F0EB', role: 'Fondo principal · Calidez, textura, natural' },
    { name: 'Pizarra', hex: '#5A6577', role: 'Texto secundario · Metadatos, etiquetas' },
    { name: 'Carbón', hex: '#2D2D2D', role: 'Texto principal · Legibilidad, contraste' },
  ],

  typography: [
    {
      name: 'Playfair Display',
      type: 'Titulares · Display',
      weights: 'Regular 400, Medium 500, SemiBold 600, Bold 700 · Itálicas 400, 500',
      usage: 'Títulos principales, encabezados destacados, citas visuales',
      preview: 'Elegancia con carácter',
    },
    {
      name: 'Inter',
      type: 'Cuerpo · UI',
      weights: 'Light 300, Regular 400, Medium 500, SemiBold 600, Bold 700',
      usage: 'Cuerpo de texto, párrafos, interfaces, navegación, botones',
      preview: 'Donde la claridad se encuentra con la calidez',
    },
    {
      name: 'JetBrains Mono',
      type: 'Monospace · Datos',
      weights: 'Regular 400, Medium 500 · Itálica 400',
      usage: 'Código, datos, métricas, números, snippets técnicos',
      preview: '/* claridad operativa */',
    },
  ],

  concepts: [
    { name: 'Puntos de Expansión', description: 'Pequeñas mejoras que generan grandes cambios. Evolución, no corrección.' },
    { name: 'Fricciones Invisibles', description: 'Trabas cotidianas que consumen energía sin que el negocio lo registre.' },
    { name: 'Zonas de Desgaste', description: 'Áreas que consumen tiempo, energía y claridad sin ser grandes problemas.' },
    { name: 'Potencial Operativo', description: 'Capacidad latente transformada en herramientas concretas.' },
    { name: 'Procesos Regenerativos', description: 'Sistemas sostenibles que acompañan sin agotar.' },
    { name: 'Claridad de Gestión', description: 'Herramientas para entender realmente cómo está el negocio.' },
    { name: 'Inteligencia Cotidiana', description: 'Tecnología cálida que simplifica el trabajo diario.' },
    { name: 'Negocios Más Livianos', description: 'Sistemas que reducen saturación, desorden y carga mental.' },
  ],

  manifesto: {
    mago: 'Sabemos que el caos no es un problema. Es energía desordenada. Y donde otros ven desorden, vemos puntos de expansión. Pequeños cambios que, bien ubicados, transforman el funcionamiento entero de un negocio. No venimos a corregir. Venimos a convertir: lo pesado en liviano, lo opaco en claro, lo disperso en fluido.',
    cuidador: 'Pero no transformamos por transformar. No optimizamos por optimizar. Detrás de cada sistema hay una persona que carga el peso del día a día. Y esa persona importa. Las fricciones invisibles no son ineficiencias: son desgaste humano. Y el desgaste humano no se resuelve con más tecnología fría. Se resuelve con diseño que cuida.',
    sabio: 'Creemos en la claridad como herramienta de liberación. Que la información dispersa se vuelva orden estratégico. Que el potencial operativo se vuelva resultados concretos. Que la inteligencia cotidiana —la que simplifica— sea más importante que la inteligencia artificial que impresiona. No prometemos soluciones mágicas. Prometemos funcionamiento. Prometemos claridad. Prometemos que tu negocio trabaje para vos, y no al revés.',
  },
} as const;
