const DEFAULT_VEHICLES = [
  {
    id: 1,
    brand: "BMW",
    model: "Serie 1 1.6 Tdci 115cv",
    year: 2015,
    km: 154088,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "1.6 Tdci 115cv",
    doors: 5,
    traction: "Tracción trasera",
    condition: "Turismo",
    price: 15980,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    featured: true,
    image: "images/coches/bmw-serie-1/P1070327.webp",
    images: [
      "images/coches/bmw-serie-1/P1070327.webp",
      "images/coches/bmw-serie-1/P1070328.webp",
      "images/coches/bmw-serie-1/P1070329.webp",
      "images/coches/bmw-serie-1/P1070330.webp",
      "images/coches/bmw-serie-1/P1070332.webp",
      "images/coches/bmw-serie-1/P1070333.webp",
      "images/coches/bmw-serie-1/P1070334.webp",
      "images/coches/bmw-serie-1/P1070335.webp",
      "images/coches/bmw-serie-1/P1070336.webp",
      "images/coches/bmw-serie-1/P1070343.webp",
      "images/coches/bmw-serie-1/P1070344.webp",
      "images/coches/bmw-serie-1/P1070345.webp",
      "images/coches/bmw-serie-1/P1070346.webp",
      "images/coches/bmw-serie-1/P1070347.webp",
      "images/coches/bmw-serie-1/P1070348.webp",
      "images/coches/bmw-serie-1/P1070349.webp"
    ]
  },
  {
    id: 2,
    brand: "Fiat",
    model: "500L 1.3 Diesel 85cv",
    year: 2012,
    km: 81852,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "1.3 Diesel 85cv",
    doors: 5,
    traction: "Tracción delantera",
    condition: "Monovolumen",
    price: 10300,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    featured: true,
    image: "images/coches/fiat-500l/P1070380.webp",
    images: [
      "images/coches/fiat-500l/P1070380.webp",
      "images/coches/fiat-500l/P1070381.webp",
      "images/coches/fiat-500l/P1070382.webp",
      "images/coches/fiat-500l/P1070383.webp",
      "images/coches/fiat-500l/P1070384.webp",
      "images/coches/fiat-500l/P1070385.webp",
      "images/coches/fiat-500l/P1070386.webp",
      "images/coches/fiat-500l/P1070387.webp"
    ]
  },
  {
    id: 3,
    brand: "Ford",
    model: "C-MAX 1.0 Ecoboost 125cv S&S",
    year: 2013,
    km: 90315,
    fuel: "Gasolina",
    transmission: "Manual",
    engine: "1.0 Ecoboost 125cv",
    doors: 5,
    traction: "Tracción delantera",
    condition: "Monovolumen",
    price: 11800,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    image: "images/coches/ford-c-max/P1070389.webp",
    images: [
      "images/coches/ford-c-max/P1070389.webp",
      "images/coches/ford-c-max/P1070390.webp",
      "images/coches/ford-c-max/P1070391.webp",
      "images/coches/ford-c-max/P1070392.webp",
      "images/coches/ford-c-max/P1070393.webp",
      "images/coches/ford-c-max/P1070394.webp",
      "images/coches/ford-c-max/P1070395.webp",
      "images/coches/ford-c-max/P1070396.webp",
      "images/coches/ford-c-max/P1070397.webp"
    ]
  },
  {
    id: 4,
    brand: "Ford",
    model: "Fiesta 1.1 TI-VCT 65cv",
    year: 2022,
    km: 52010,
    fuel: "Gasolina",
    transmission: "Manual",
    engine: "1.1 TI-VCT 65cv",
    doors: 5,
    traction: "Tracción delantera",
    condition: "Turismo",
    price: 13900,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    featured: true,
    image: "images/coches/ford-fiesta/P1070367.webp",
    images: [
      "images/coches/ford-fiesta/P1070367.webp",
      "images/coches/ford-fiesta/P1070368.webp",
      "images/coches/ford-fiesta/P1070369.webp",
      "images/coches/ford-fiesta/P1070370.webp",
      "images/coches/ford-fiesta/P1070371.webp",
      "images/coches/ford-fiesta/P1070372.webp",
      "images/coches/ford-fiesta/P1070373.webp",
      "images/coches/ford-fiesta/P1070374.webp",
      "images/coches/ford-fiesta/P1070375.webp",
      "images/coches/ford-fiesta/P1070376.webp",
      "images/coches/ford-fiesta/P1070377.webp",
      "images/coches/ford-fiesta/P1070378.webp"
    ]
  },
  {
    id: 5,
    brand: "Ford",
    model: "Focus 1.6 Tdci 90cv",
    year: 2008,
    km: 281421,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "1.6 Tdci 90cv",
    doors: 5,
    traction: "Tracción delantera",
    condition: "Turismo",
    price: 5800,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    image: "images/coches/ford-focus/P1070445.webp",
    images: [
      "images/coches/ford-focus/P1070445.webp",
      "images/coches/ford-focus/P1070446.webp",
      "images/coches/ford-focus/P1070447.webp",
      "images/coches/ford-focus/P1070448.webp",
      "images/coches/ford-focus/P1070449.webp",
      "images/coches/ford-focus/P1070450.webp",
      "images/coches/ford-focus/P1070451.webp",
      "images/coches/ford-focus/P1070452.webp",
      "images/coches/ford-focus/P1070453.webp",
      "images/coches/ford-focus/P1070454.webp"
    ]
  },
  {
    id: 6,
    brand: "Ford",
    model: "Kuga 2.0 Tdci 136cv",
    year: 2009,
    km: 245872,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "2.0 Tdci 136cv",
    doors: 5,
    traction: "Tracción total (4x4)",
    condition: "SUV",
    price: 10500,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    image: "images/coches/ford-kuga/P1070399.webp",
    images: [
      "images/coches/ford-kuga/P1070399.webp",
      "images/coches/ford-kuga/P1070400.webp",
      "images/coches/ford-kuga/P1070401.webp",
      "images/coches/ford-kuga/P1070402.webp",
      "images/coches/ford-kuga/P1070403.webp",
      "images/coches/ford-kuga/P1070404.webp",
      "images/coches/ford-kuga/P1070405.webp",
      "images/coches/ford-kuga/P1070406.webp",
      "images/coches/ford-kuga/P1070407.webp",
      "images/coches/ford-kuga/P1070408.webp"
    ]
  },
  {
    id: 7,
    brand: "Peugeot",
    model: "207 SW 1.6 Hdi 90cv",
    year: 2008,
    km: 185400,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "1.6 Hdi 90cv",
    doors: 5,
    traction: "Tracción delantera",
    condition: "Familiar",
    price: 6800,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    image: "images/coches/peugeot-207/P1070337.webp",
    images: [
      "images/coches/peugeot-207/P1070337.webp",
      "images/coches/peugeot-207/P1070338.webp",
      "images/coches/peugeot-207/P1070339.webp",
      "images/coches/peugeot-207/P1070340.webp",
      "images/coches/peugeot-207/P1070341.webp",
      "images/coches/peugeot-207/P1070342.webp",
      "images/coches/peugeot-207/P1070352.webp",
      "images/coches/peugeot-207/P1070353.webp",
      "images/coches/peugeot-207/P1070354.webp"
    ]
  },
  {
    id: 8,
    brand: "SEAT",
    model: "León Reference 1.6 Tdi 90cv",
    year: 2014,
    km: 65975,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "1.6 Tdi 90cv",
    doors: 5,
    traction: "Tracción delantera",
    condition: "Turismo",
    price: 14800,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    featured: true,
    image: "images/coches/seat-leon/P1070355.webp",
    images: [
      "images/coches/seat-leon/P1070355.webp",
      "images/coches/seat-leon/P1070356.webp",
      "images/coches/seat-leon/P1070357.webp",
      "images/coches/seat-leon/P1070358.webp",
      "images/coches/seat-leon/P1070359.webp",
      "images/coches/seat-leon/P1070361.webp",
      "images/coches/seat-leon/P1070362.webp",
      "images/coches/seat-leon/P1070363.webp",
      "images/coches/seat-leon/P1070364.webp",
      "images/coches/seat-leon/P1070365.webp"
    ]
  },
  {
    id: 9,
    brand: "Volkswagen",
    model: "Caddy 1.6 Tdi 102cv",
    year: 2013,
    km: 248075,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "1.6 Tdi 102cv",
    doors: 5,
    traction: "Tracción delantera",
    condition: "Furgoneta",
    price: 10800,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    image: "images/coches/vw-caddy/P1070410.webp",
    images: [
      "images/coches/vw-caddy/P1070410.webp",
      "images/coches/vw-caddy/P1070411.webp",
      "images/coches/vw-caddy/P1070412.webp",
      "images/coches/vw-caddy/P1070413.webp",
      "images/coches/vw-caddy/P1070414.webp",
      "images/coches/vw-caddy/P1070415.webp",
      "images/coches/vw-caddy/P1070416.webp",
      "images/coches/vw-caddy/P1070417.webp"
    ]
  },
  {
    id: 10,
    brand: "Volkswagen",
    model: "Golf 1.9 Tdi 105cv",
    year: 2006,
    km: 272789,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "1.9 Tdi 105cv",
    doors: 5,
    traction: "Tracción delantera",
    condition: "Turismo",
    price: 5800,
    iva: "Incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    image: "images/coches/vw-golf/P1070419.webp",
    images: [
      "images/coches/vw-golf/P1070419.webp",
      "images/coches/vw-golf/P1070420.webp",
      "images/coches/vw-golf/P1070421.webp",
      "images/coches/vw-golf/P1070422.webp",
      "images/coches/vw-golf/P1070423.webp",
      "images/coches/vw-golf/P1070424.webp",
      "images/coches/vw-golf/P1070425.webp",
      "images/coches/vw-golf/P1070426.webp",
      "images/coches/vw-golf/P1070427.webp"
    ]
  },
  {
    id: 11,
    brand: "Volkswagen",
    model: "Transporter 2.0 Tdi 110cv Ecoblue",
    year: 2020,
    km: 39820,
    fuel: "Diesel",
    transmission: "Manual",
    engine: "2.0 Tdi 110cv Ecoblue",
    doors: 5,
    traction: "Tracción trasera",
    condition: "Furgoneta",
    price: 29600,
    iva: "No incluido",
    highlight: "REVISADO Y CON 1 AÑO DE GARANTIA (TALLER PROPIO)",
    sold: false,
    featured: true,
    image: "images/coches/vw-transporter/P1070430.webp",
    images: [
      "images/coches/vw-transporter/P1070430.webp",
      "images/coches/vw-transporter/P1070429.webp",
      "images/coches/vw-transporter/P1070431.webp",
      "images/coches/vw-transporter/P1070432.webp",
      "images/coches/vw-transporter/P1070433.webp",
      "images/coches/vw-transporter/P1070434.webp",
      "images/coches/vw-transporter/P1070435.webp",
      "images/coches/vw-transporter/P1070436.webp",
      "images/coches/vw-transporter/P1070437.webp",
      "images/coches/vw-transporter/P1070438.webp",
      "images/coches/vw-transporter/P1070439.webp",
      "images/coches/vw-transporter/P1070440.webp",
      "images/coches/vw-transporter/P1070441.webp",
      "images/coches/vw-transporter/P1070442.webp",
      "images/coches/vw-transporter/P1070443.webp"
    ]
  }
];

const ADMIN_PASSWORD = "Autosucro2024!";
const STORAGE_KEY = "autosucro_vehicles_v4";
const SESSION_KEY = "autosucro_admin_session";

function getVehicles() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_VEHICLES));
  return DEFAULT_VEHICLES;
}

function saveVehicles(vehicles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
}

function getNextId() {
  const vehicles = getVehicles();
  return vehicles.length > 0 ? Math.max(...vehicles.map(v => v.id)) + 1 : 1;
}

function formatPrice(price) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
}

function formatKm(km) {
  return new Intl.NumberFormat('es-ES').format(km) + ' km';
}

function isLoggedIn() {
  return sessionStorage.getItem(SESSION_KEY) === "true";
}

function login(password) {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "true");
    return true;
  }
  return false;
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
}
