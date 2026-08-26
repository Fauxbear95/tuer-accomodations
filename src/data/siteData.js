export const siteImages = {
  hero: '/images/hero.svg',
  intro: '/images/suite-one.jpg',

  suites: {
    upperUnit: '/images/upper-unit-1.jpg',
    lowerUnit: '/images/suite-two.svg',
    entireDuplex: '/images/gallery-1.svg',
  },

  amenities: {
    bathroomMain: '/images/gallery-1.svg',
    bathroomDetailOne: '/images/gallery-2.svg',
    bathroomDetailTwo: '/images/gallery-3.svg',
    kitchenDetailOne: '/images/gallery-4.svg',
    kitchenDetailTwo: '/images/gallery-5.svg',
    kitchenDetailThree: '/images/gallery-6.svg',
  },

  littleExtras: {
    patio: '/images/gallery-1.svg',
    outdoor: '/images/gallery-2.svg',
  },

  gallery: {
    upperKitchen: [
      '/images/gallery-1.svg',
      '/images/gallery-2.svg',
      '/images/gallery-3.svg',
    ],
    upperBathroom: [
      '/images/gallery-1.svg',
      '/images/gallery-2.svg',
      '/images/gallery-3.svg',
      '/images/gallery-4.svg',
    ],
    upperBedrooms: [
      '/images/gallery-1.svg',
      '/images/gallery-2.svg',
      '/images/gallery-3.svg',
    ],
    lowerKitchen: [
      '/images/gallery-4.svg',
      '/images/gallery-5.svg',
      '/images/gallery-6.svg',
    ],
    lowerBathroom: [
      '/images/gallery-1.svg',
      '/images/gallery-2.svg',
      '/images/gallery-3.svg',
    ],
    lowerBedrooms: [
      '/images/gallery-4.svg',
      '/images/gallery-5.svg',
      '/images/gallery-6.svg',
    ],
    livingSpaces: [
      '/images/gallery-1.svg',
      '/images/gallery-2.svg',
      '/images/gallery-3.svg',
    ],
  },

  backgrounds: {
    availability: '/images/gallery-2.svg',
    reviews: '/images/gallery-2.svg',
    footer: '/images/gallery-2.svg',
  },
};

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