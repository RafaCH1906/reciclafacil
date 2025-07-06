/*
============================================
RECICLAFÁCIL - FUNCIONALIDAD PRINCIPAL
============================================
*/

// ============================================
// BASE DE DATOS DE ELEMENTOS RECICLABLES
// ============================================

const recyclingGuideItems = [
    // Plásticos
    {
        category: 'plastic',
        name: 'Botellas de Plástico',
        icon: '🍼',
        container: 'Contenedor Amarillo',
        containerColor: 'bg-yellow-100 text-yellow-800',
        tips: 'Enjuagar antes de depositar. Quitar tapas si son de diferente material.',
        recyclable: true,
        fact: 'Una botella puede tardar 450 años en descomponerse.'
    },
    {
        category: 'plastic',
        name: 'Envases de Yogur',
        icon: '🥛',
        container: 'Contenedor Amarillo',
        containerColor: 'bg-yellow-100 text-yellow-800',
        tips: 'Limpiar completamente antes de reciclar. No necesitas quitar etiquetas.',
        recyclable: true,
        fact: 'Se pueden convertir en nuevos envases alimentarios.'
    },
    {
        category: 'plastic',
        name: 'Bolsas de Plástico',
        icon: '🛍️',
        container: 'Punto Específico',
        containerColor: 'bg-orange-100 text-orange-800',
        tips: 'NO van al contenedor amarillo. Llévalas a supermercados con punto de recogida.',
        recyclable: true,
        fact: 'Tardan entre 400-1000 años en degradarse.'
    },
    {
        category: 'plastic',
        name: 'Juguetes de Plástico',
        icon: '🧸',
        container: 'Punto Limpio',
        containerColor: 'bg-purple-100 text-purple-800',
        tips: 'Si están rotos y no se pueden donar, llévalos a un punto limpio.',
        recyclable: true,
        fact: 'Los juguetes en buen estado mejor dónalos.'
    },

    // Vidrio
    {
        category: 'glass',
        name: 'Botellas de Vidrio',
        icon: '🍷',
        container: 'Contenedor Verde',
        containerColor: 'bg-green-100 text-green-800',
        tips: 'Quitar tapas metálicas. No es necesario quitar etiquetas.',
        recyclable: true,
        fact: 'El vidrio se puede reciclar infinitas veces sin perder calidad.'
    },
    {
        category: 'glass',
        name: 'Frascos de Conservas',
        icon: '🫙',
        container: 'Contenedor Verde',
        containerColor: 'bg-green-100 text-green-800',
        tips: 'Enjuagar y quitar tapas metálicas. Puedes dejar etiquetas.',
        recyclable: true,
        fact: 'Un frasco reciclado ahorra energía equivalente a 3 horas de TV.'
    },
    {
        category: 'glass',
        name: 'Cristal de Ventana',
        icon: '🪟',
        container: 'Punto Limpio',
        containerColor: 'bg-purple-100 text-purple-800',
        tips: 'NO va al contenedor verde. Llévalo a un punto limpio especializado.',
        recyclable: true,
        fact: 'Tiene diferente composición que el vidrio de envases.'
    },

    // Papel y Cartón
    {
        category: 'paper',
        name: 'Periódicos',
        icon: '📰',
        container: 'Contenedor Azul',
        containerColor: 'bg-blue-100 text-blue-800',
        tips: 'Perfectos para reciclar. No necesitas quitar grapas pequeñas.',
        recyclable: true,
        fact: 'El papel se puede reciclar hasta 7 veces.'
    },
    {
        category: 'paper',
        name: 'Cajas de Cartón',
        icon: '📦',
        container: 'Contenedor Azul',
        containerColor: 'bg-blue-100 text-blue-800',
        tips: 'Desmontar y plegar. Quitar cintas adhesivas y grapas grandes.',
        recyclable: true,
        fact: 'Una tonelada de cartón reciclado salva 17 árboles.'
    },
    {
        category: 'paper',
        name: 'Papel Encerado',
        icon: '🧻',
        container: 'Basura General',
        containerColor: 'bg-gray-100 text-gray-800',
        tips: 'NO es reciclable. Va a la basura general.',
        recyclable: false,
        fact: 'El recubrimiento de cera impide su reciclaje.'
    },

    // Metales
    {
        category: 'metal',
        name: 'Latas de Refresco',
        icon: '🥤',
        container: 'Contenedor Amarillo',
        containerColor: 'bg-yellow-100 text-yellow-800',
        tips: 'Enjuagar antes de depositar. No es necesario quitar etiquetas.',
        recyclable: true,
        fact: 'Una lata reciclada ahorra energía para 3 horas de TV.'
    },
    {
        category: 'metal',
        name: 'Latas de Conserva',
        icon: '🥫',
        container: 'Contenedor Amarillo',
        containerColor: 'bg-yellow-100 text-yellow-800',
        tips: 'Limpiar completamente. Puedes dejar la etiqueta de papel.',
        recyclable: true,
        fact: 'El acero se puede reciclar infinitas veces.'
    },
    {
        category: 'metal',
        name: 'Papel de Aluminio',
        icon: '📄',
        container: 'Contenedor Amarillo',
        containerColor: 'bg-yellow-100 text-yellow-800',
        tips: 'Limpiar restos de comida. Se puede hacer una bola con varios trozos.',
        recyclable: true,
        fact: 'Reciclar aluminio usa 95% menos energía que producirlo nuevo.'
    },

    // Orgánicos
    {
        category: 'organic',
        name: 'Restos de Frutas',
        icon: '🍌',
        container: 'Contenedor Marrón',
        containerColor: 'bg-amber-100 text-amber-800',
        tips: 'Perfectos para compost. También puedes hacerlo en casa.',
        recyclable: true,
        fact: 'Se convierten en abono natural en 3-6 meses.'
    },
    {
        category: 'organic',
        name: 'Restos de Verduras',
        icon: '🥕',
        container: 'Contenedor Marrón',
        containerColor: 'bg-amber-100 text-amber-800',
        tips: 'Incluye cáscaras, hojas y tallos. No incluyas aceites.',
        recyclable: true,
        fact: 'Los orgánicos representan el 40% de nuestros residuos.'
    },
    {
        category: 'organic',
        name: 'Aceite de Cocina',
        icon: '🫗',
        container: 'Punto Específico',
        containerColor: 'bg-orange-100 text-orange-800',
        tips: 'NUNCA por el desagüe. Llévalos a puntos de recogida específicos.',
        recyclable: true,
        fact: '1 litro de aceite contamina 1000 litros de agua.'
    },

    // Electrónicos
    {
        category: 'electronics',
        name: 'Teléfonos Móviles',
        icon: '📱',
        container: 'Punto Limpio',
        containerColor: 'bg-purple-100 text-purple-800',
        tips: 'Borra todos tus datos antes. Contienen metales valiosos.',
        recyclable: true,
        fact: 'Contienen oro, plata y otros metales preciosos.'
    },
    {
        category: 'electronics',
        name: 'Pilas y Baterías',
        icon: '🔋',
        container: 'Punto Específico',
        containerColor: 'bg-red-100 text-red-800',
        tips: 'NUNCA a la basura general. Muy contaminantes.',
        recyclable: true,
        fact: 'Una pila contamina 3,000 litros de agua.'
    },
    {
        category: 'electronics',
        name: 'Bombillas LED',
        icon: '💡',
        container: 'Punto Limpio',
        containerColor: 'bg-purple-100 text-purple-800',
        tips: 'Contienen componentes electrónicos. No van al vidrio.',
        recyclable: true,
        fact: 'Las LED duran 25 veces más que las incandescentes.'
    }
];

// Base de datos de objetos reciclables para búsqueda
const recyclingDatabase = {
    // Plásticos
    'botella': 'Las botellas de plástico van al contenedor amarillo. Enjuágalas antes y quita las tapas si son de diferente material. Se pueden reciclar para hacer nuevas botellas, ropa o alfombras.',
    'botellas': 'Las botellas de plástico van al contenedor amarillo. Enjuágalas antes y quita las tapas si son de diferente material. Se pueden reciclar para hacer nuevas botellas, ropa o alfombras.',
    'botella de plastico': 'Las botellas de plástico van al contenedor amarillo. Enjuágalas antes y quita las tapas si son de diferente material. Se pueden reciclar para hacer nuevas botellas, ropa o alfombras.',
    'plastico': 'Los plásticos van al contenedor amarillo. Busca el símbolo de reciclaje y el número. Los tipos 1, 2, 4 y 5 son los más fáciles de reciclar.',
    'bolsa': 'Las bolsas de plástico NO van al contenedor amarillo. Llévalas a puntos específicos en supermercados. Mejor usa bolsas reutilizables.',
    'bolsas': 'Las bolsas de plástico NO van al contenedor amarillo. Llévalas a puntos específicos en supermercados. Mejor usa bolsas reutilizables.',
    
    // Vidrio
    'vidrio': 'El vidrio va al contenedor verde. Quita tapas y etiquetas. Se puede reciclar infinitas veces sin perder calidad.',
    'botella de vidrio': 'Las botellas de vidrio van al contenedor verde. Quita las tapas metálicas y etiquetas. El vidrio se recicla al 100%.',
    'frasco': 'Los frascos de vidrio van al contenedor verde. Enjuágalos y quita las tapas metálicas.',
    'cristal': 'El cristal común va al contenedor verde, pero el cristal de ventanas o espejos necesita gestión especial.',
    
    // Papel y cartón
    'papel': 'El papel va al contenedor azul. Evita papel sucio, encerado o con grapas. Se puede reciclar hasta 7 veces.',
    'carton': 'El cartón va al contenedor azul. Dóblalo para ocupar menos espacio. Quita cintas adhesivas y grapas.',
    'periodico': 'Los periódicos van al contenedor azul. Son perfectos para reciclar y hacer papel nuevo.',
    'revista': 'Las revistas van al contenedor azul. Quita las partes plastificadas si las tiene.',
    'caja': 'Las cajas de cartón van al contenedor azul. Desmóntalas y quita cintas adhesivas.',
    
    // Metales
    'lata': 'Las latas van al contenedor amarillo. Enjuágalas antes. Se pueden reciclar infinitas veces.',
    'latas': 'Las latas van al contenedor amarillo. Enjuágalas antes. Se pueden reciclar infinitas veces.',
    'aluminio': 'El aluminio va al contenedor amarillo. Es 100% reciclable y ahorra mucha energía.',
    'metal': 'Los metales van al contenedor amarillo. Son muy valiosos para el reciclaje.',
    
    // Orgánicos
    'comida': 'Los restos de comida van al contenedor marrón para compostaje, o puedes hacer compost en casa.',
    'organico': 'Los residuos orgánicos van al contenedor marrón. Se convierten en compost para fertilizar plantas.',
    'cascara': 'Las cáscaras van al contenedor marrón o compost casero. Son perfectas para hacer abono natural.',
    
    // Electrónicos
    'celular': 'Los celulares van a puntos limpios o tiendas especializadas. Contienen metales valiosos y sustancias tóxicas.',
    'telefono': 'Los teléfonos van a puntos limpios o tiendas especializadas. Contienen metales valiosos y sustancias tóxicas.',
    'computadora': 'Las computadoras van a puntos limpios. Borra tus datos antes. Contienen materiales valiosos.',
    'bateria': 'Las baterías van a puntos específicos, nunca al contenedor común. Son muy contaminantes.',
    'pila': 'Las pilas van a contenedores especiales en tiendas o puntos limpios. Una pila contamina 3,000 litros de agua.',
    'pilas': 'Las pilas van a contenedores especiales en tiendas o puntos limpios. Una pila contamina 3,000 litros de agua.',
    
    // Aceites
    'aceite': 'El aceite usado va a puntos específicos. Nunca por el desagüe. Se puede convertir en biodiesel.',
    
    // Ropa y textiles
    'ropa': 'La ropa en buen estado va a contenedores textiles o donaciones. La ropa deteriorada también se puede reciclar.',
    'tela': 'Las telas van a contenedores textiles especiales. Se pueden convertir en nuevos productos.',
    
    // Medicamentos
    'medicamento': 'Los medicamentos van a farmacias con punto SIGRE. Nunca al contenedor común ni al váter.',
    'medicina': 'Las medicinas van a farmacias con punto SIGRE. Nunca al contenedor común ni al váter.'
};

// Array de tips de reciclaje aleatorios
const recyclingTips = [
    "Una sola pila puede contaminar hasta 3,000 litros de agua. ¡Llévalas a un punto de acopio especial!",
    "El papel reciclado usa 60% menos energía que fabricar papel nuevo desde cero.",
    "Una botella de plástico puede tardar hasta 450 años en descomponerse en la naturaleza.",
    "Reciclar una lata de aluminio ahorra suficiente energía para que funcione un televisor durante 3 horas.",
    "El vidrio puede reciclarse infinitas veces sin perder calidad ni pureza.",
    "Separar correctamente los residuos puede reducir hasta un 70% la basura que va a los rellenos sanitarios.",
    "Una tonelada de papel reciclado salva aproximadamente 17 árboles adultos.",
    "Las bolsas de plástico tardan entre 400 y 1,000 años en degradarse completamente.",
    "Reciclar 6 botellas de plástico PET genera suficiente fibra para hacer una camiseta.",
    "El cartón corrugado es uno de los materiales más reciclados del mundo, con una tasa del 90%.",
    "Los teléfonos móviles contienen metales preciosos como oro, plata y platino que pueden recuperarse.",
    "Compostar los residuos orgánicos reduce las emisiones de metano en los vertederos.",
    "Una familia promedio genera 4.5 kilos de basura al día, pero podría reducirlo a la mitad reciclando.",
    "Las pilas recargables pueden usarse hasta 1,000 veces antes de necesitar ser recicladas.",
    "Reciclar aceite de cocina usado puede convertirse en biodiesel para vehículos."
];

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Función mejorada para buscar información de reciclaje
function buscarInformacionReciclaje(query) {
    const queryLower = query.toLowerCase().trim();
    
    // Buscar coincidencia exacta
    if (recyclingDatabase[queryLower]) {
        return recyclingDatabase[queryLower];
    }
    
    // Buscar coincidencias parciales
    for (let key in recyclingDatabase) {
        if (queryLower.includes(key) || key.includes(queryLower)) {
            return recyclingDatabase[key];
        }
    }
    
    // Si no encuentra coincidencia, dar consejos generales
    return `No encontré información específica sobre "${query}", pero aquí tienes algunos consejos generales:\n\n🔵 Contenedor azul: papel y cartón\n🟡 Contenedor amarillo: plásticos, latas y briks\n🟢 Contenedor verde: vidrio\n🟤 Contenedor marrón: orgánicos\n\n¿Podrías ser más específico? Por ejemplo: "botella", "papel", "lata", etc.`;
}

// Función para mostrar un tip aleatorio
function mostrarTipAleatorio() {
    const randomIndex = Math.floor(Math.random() * recyclingTips.length);
    const tipElement = document.getElementById('dailyTip');
    tipElement.textContent = recyclingTips[randomIndex];
}

// ============================================
// FUNCIONES PARA EL MODAL DE LA GUÍA
// ============================================

function openRecyclingGuide() {
    document.getElementById('recyclingGuideModal').classList.remove('hidden');
    renderRecyclingItems('all');
}

function closeRecyclingGuide() {
    document.getElementById('recyclingGuideModal').classList.add('hidden');
}

function renderRecyclingItems(category) {
    const container = document.getElementById('recyclingItems');
    const filteredItems = category === 'all' 
        ? recyclingGuideItems 
        : recyclingGuideItems.filter(item => item.category === category);

    container.innerHTML = filteredItems.map(item => `
        <div class="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div class="flex items-start space-x-4">
                <div class="text-3xl">${item.icon}</div>
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="font-bold text-gray-800">${item.name}</h3>
                        ${item.recyclable 
                            ? '<span class="text-green-600 text-sm">♻️ Reciclable</span>'
                            : '<span class="text-red-600 text-sm">❌ No reciclable</span>'
                        }
                    </div>
                    
                    <div class="mb-3">
                        <span class="inline-block ${item.containerColor} px-3 py-1 rounded-full text-sm font-medium">
                            📍 ${item.container}
                        </span>
                    </div>
                    
                    <div class="space-y-2 text-sm">
                        <div>
                            <span class="font-medium text-gray-700">💡 Consejo:</span>
                            <p class="text-gray-600 mt-1">${item.tips}</p>
                        </div>
                        
                        <div>
                            <span class="font-medium text-gray-700">📊 Dato curioso:</span>
                            <p class="text-gray-600 mt-1">${item.fact}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function setupCategoryButtons() {
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-green-500', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            
            // Agregar clase active al botón clickeado
            this.classList.add('active', 'bg-green-500', 'text-white');
            this.classList.remove('bg-gray-200', 'text-gray-700');
            
            // Renderizar items de la categoría seleccionada
            const category = this.getAttribute('data-category');
            renderRecyclingItems(category);
        });
    });
}

// Función para cambiar el nombre de usuario
function cambiarNombre() {
    const nuevoNombre = prompt('¿Cuál es tu nombre?', localStorage.getItem('userName') || '');
    if (nuevoNombre && nuevoNombre.trim() !== '') {
        localStorage.setItem('userName', nuevoNombre.trim());
        document.getElementById('userGreeting').textContent = `¡Hola, ${nuevoNombre.trim()}!`;
    }
}

// ============================================
// INICIALIZACIÓN Y EVENT LISTENERS
// ============================================

// Solicitar nombre del usuario al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    let userName = localStorage.getItem('userName');
    
    if (!userName) {
        userName = prompt('¡Bienvenido a ReciclaFácil! ¿Cuál es tu nombre?');
        if (userName && userName.trim() !== '') {
            localStorage.setItem('userName', userName.trim());
        } else {
            userName = 'Usuario';
        }
    }
    
    // Actualizar el saludo con el nombre del usuario
    document.getElementById('userGreeting').textContent = `¡Hola, ${userName}!`;
    
    // Mostrar tip aleatorio al cargar la página
    mostrarTipAleatorio();
    
    // Configurar botones de categoría para la guía
    setupCategoryButtons();
});

// ============================================
// EVENT LISTENERS PARA BOTONES Y FUNCIONALIDAD
// ============================================

// Funcionalidad del botón Gemini de búsqueda
document.getElementById('geminiSearchBtn').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        const resultado = buscarInformacionReciclaje(query);
        alert(`🔍 Información sobre: "${query}"\n\n${resultado}\n\n✨ Powered by ReciclaFácil`);
        
        // Limpiar el campo de búsqueda
        searchInput.value = '';
    } else {
        alert('Por favor, escribe algo para buscar. Por ejemplo: "botella", "papel", "lata", etc.');
    }
});

// Funcionalidad para los botones principales
document.getElementById('recyclingGuideBtn').addEventListener('click', function(e) {
    e.preventDefault();
    openRecyclingGuide();
});

// Event listener para cerrar el modal
document.getElementById('closeModal').addEventListener('click', function() {
    closeRecyclingGuide();
});

// Cerrar modal al hacer clic fuera de él
document.getElementById('recyclingGuideModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeRecyclingGuide();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeRecyclingGuide();
    }
});

document.getElementById('scannerBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('📸 Escáner de Objetos\n\n¡Próximamente podrás escanear objetos con tu cámara para saber cómo reciclarlos correctamente!');
});

document.getElementById('mapBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('🗺️ Mapa de Puntos de Acopio\n\n¡Próximamente tendrás un mapa interactivo con todos los puntos de reciclaje cercanos!');
});

document.getElementById('creativeIdeasBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('💡 Ideas Creativas\n\n¡Próximamente tendrás ideas innovadoras para reutilizar y dar nueva vida a tus materiales!');
});

// Funcionalidad para el preview del mapa
document.getElementById('mapPreview').addEventListener('click', function() {
    alert('🗺️ Abriendo mapa completo...\n\n¡Función en desarrollo! Pronto podrás ver todos los puntos de reciclaje en tu zona.');
});

// Funcionalidad para permitir buscar con Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('geminiSearchBtn').click();
    }
});

// Agregar funcionalidad al icono de perfil para cambiar nombre
document.querySelector('.fa-user').parentElement.addEventListener('click', function() {
    cambiarNombre();
});

// Exponer función global para el onclick del tip
window.mostrarTipAleatorio = mostrarTipAleatorio;
