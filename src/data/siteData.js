export const siteImages = {
  hero: '/images/hero.png',
  intro: '/images/suite-one.jpg',
  logo: '/images/tuer-logo.png',

  suites: {
    upperUnit: '/images/upper-unit-1.jpg',
    lowerUnit: '/images/lower-unit-1.jpg',
    entireDuplex: '/images/Entire-Duplex.png',
  },

  amenities: {
    bathroomMain: '/images/gallery-1.jpg',
    bathroomDetailOne: '/images/gallery-2.jpg',
    bathroomDetailTwo: '/images/gallery-3.jpg',
    kitchenDetailOne: '/images/gallery-4.png',
    kitchenDetailTwo: '/images/gallery-5.png',
    kitchenDetailThree: '/images/gallery-6.png',
  },

  littleExtras: {
    patio: '/images/extras-1.png',
    outdoor: '/images/extras-2.png',
  },

  gallery: {
    upperKitchen: [
      '/images/kitchen-1.png',
      '/images/kitchen-2.png',
      '/images/kitchen-3.png',
    ],
    upperBathroom: [
      '/images/bathroom-1.png',
      '/images/bathroom-2.png',
      '/images/bathroom-3.png',
      '/images/bathroom-4.png',
    ],
    upperBedrooms: [
      '/images/bedroom-1.png',
      '/images/bedroom-2.png',
      '/images/bedroom-3.png',
    ],
    lowerKitchen: [
      '/images/LKitchen-1.png',
      '/images/LKitchen-2.png',
      '/images/LKitchen-3.png',
    ],
    lowerBathroom: [
      '/images/LBathroom-1.png',
      '/images/LBathroom-2.png',
      '/images/LBathroom-3.png',
    ],
    lowerBedrooms: [
      '/images/LBedroom-1.png',
      '/images/LBedroom-2.png',
      '/images/LBedroom-3.png',
    ],
    livingSpaces: [
      '/images/living-1.png',
      '/images/living-2.png',
      '/images/living-3.png',
    ],
  },

  backgrounds: {
    availability: '/images/calendarbackground.jpg',
    reviews: '/images/footer.png',
    footer: '/images/footer.png',
  },
};



export const availabilityCalendars = [
  {
    id: 'upper-unit',
    title: 'UPPER UNIT',
    url: 'https://calendar.google.com/calendar/embed?src=0ailcm5vdmgvmfugt7hfamlp66t6a60j%40import.calendar.google.com&ctz=America%2FToronto',
  },
  {
    id: 'lower-unit',
    title: 'LOWER UNIT',
    url: 'https://calendar.google.com/calendar/embed?src=2k5bp9li74njnr6npdscobg53umelrqf%40import.calendar.google.com&ctz=America%2FToronto',
  },
  {
    id: 'entire-duplex',
    title: 'ENTIRE DUPLEX',
    url: 'https://calendar.google.com/calendar/embed?src=vvlp7did8u8cjnetsn2ag8ddef8c131h%40import.calendar.google.com&ctz=America%2FToronto',
  },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Availability', href: '#availability' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Rules & Safety', href: '#rules-safety' },
  { label: 'Reviews', href: '#reviews' },
];

export const suites = [
  {
    id: 'upper-unit',
    title: 'Upper Unit',
    details: '6 guests · 3 bedrooms · 3 beds · 1 bath',
    image: siteImages.suites.upperUnit,
  },
  {
    id: 'lower-unit',
    title: 'Lower Unit',
    details: '6 guests · 2 bedrooms · 3 beds · 1 bath',
    image: siteImages.suites.lowerUnit,
  },
  {
    id: 'entire-duplex',
    title: 'Entire Duplex',
    details: '12 guests · 5 bedrooms · 6 beds · 2 baths',
    image: siteImages.suites.entireDuplex,
  },
];

export const bathroomAmenities = [
  'Bathtub',
  'Hair dryer',
  'Cleaning products',
  'Shampoo',
  'Conditioner',
  'Body soap',
  'Hot water',
];

export const kitchenAmenities = [
  'Refrigerator',
  'Microwave',
  'Cooking basics',
  'Dishes',
  'Freezer',
  'Dishwasher',
  'Stove',
  'Stainless steel oven',
  'Hot water kettle',
  'Coffee machine',
  'Wine glasses',
  'Toaster',
  'Baking sheet',
  'Dining table',
  'Coffee',
];

export const amenityImages = siteImages.amenities;

export const littleExtras = [
  'Free parking on premises',
  'WIFI',
  'Assistance animals are always allowed',
  'Housekeeping available 4 hours a day, Saturday to Sunday - available at extra cost',
  'Exterior security cameras on property',
  'Smoke alarm',
  'Carbon monoxide alarm',
  'Fire extinguisher',
  'Private patio',
  'Outdoor furniture',
  'Outdoor dining area',
  'BBQ grill',
];

export const littleExtrasImages = siteImages.littleExtras;

export const unitGallerySections = [
  {
    id: 'upper-kitchen',
    unit: 'UPPER UNIT',
    subtitle: 'Kitchen',
    layout: 'three-column',
    images: siteImages.gallery.upperKitchen,
  },
  {
    id: 'upper-bathroom',
    unit: 'UPPER UNIT',
    subtitle: 'Bathroom',
    layout: 'four-column',
    images: siteImages.gallery.upperBathroom,
  },
  {
    id: 'upper-bedrooms',
    unit: 'UPPER UNIT',
    subtitle: 'Bedrooms',
    layout: 'bedroom-mosaic',
    images: siteImages.gallery.upperBedrooms,
  },
  {
    id: 'lower-kitchen',
    unit: 'LOWER UNIT',
    subtitle: 'Kitchen',
    layout: 'three-column',
    images: siteImages.gallery.lowerKitchen,
  },
  {
    id: 'lower-bathroom',
    unit: 'LOWER UNIT',
    subtitle: 'Bathroom',
    layout: 'three-column',
    images: siteImages.gallery.lowerBathroom,
  },
  {
    id: 'lower-bedrooms',
    unit: 'LOWER UNIT',
    subtitle: 'Bedrooms',
    layout: 'bedroom-mosaic-wide-right',
    images: siteImages.gallery.lowerBedrooms,
  },
  {
    id: 'upper-lower-living-spaces',
    unit: 'UPPER AND LOWER',
    subtitle: 'LIVING SPACES',
    layout: 'living-spaces-mosaic',
    images: siteImages.gallery.livingSpaces,
  },
];