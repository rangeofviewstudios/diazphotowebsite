export type CategoryId = 'combat' | 'music' | 'events' | 'training' | 'couples' | 'graduation'

export interface Photo {
  src: string
  alt: string
  category: CategoryId
  highlight?: boolean
}

export interface Category {
  id: CategoryId | 'all'
  label: string
  sub?: string
}

export const categories: Category[] = [
  { id: 'all',        label: 'All Work' },
  { id: 'combat',     label: 'Combat',      sub: 'Boxing & The Ring' },
  { id: 'music',      label: 'Music',       sub: 'Portraits & Sessions' },
  { id: 'events',     label: 'Events',      sub: 'Live Performance' },
  { id: 'training',   label: 'Training',    sub: 'Fitness & Athletics' },
  { id: 'couples',    label: 'Couples',     sub: 'Portraits' },
  { id: 'graduation', label: 'Graduation',  sub: 'Milestones' },
]

export const photos: Photo[] = [
  // ─── Combat ────────────────────────────────────────────────────────────────
  { src: '/images/boxing1/dsc00312.webp', alt: 'Two boxers clash inside the ring', category: 'combat', highlight: true },
  { src: '/images/boxing2/dsc02238.webp', alt: 'Fighter wearing a Mexican flag bandana, B&W portrait', category: 'combat', highlight: true },
  { src: '/images/boxing1/dsc00332.webp', alt: 'Boxing match action', category: 'combat' },
  { src: '/images/boxing2/dsc02265.webp', alt: 'Boxer pre-fight focus', category: 'combat' },
  { src: '/images/boxing1/dsc00378.webp', alt: 'Fighters in the ring', category: 'combat' },
  { src: '/images/boxing2/dsc02372.webp', alt: 'Boxing portrait', category: 'combat' },
  { src: '/images/boxing1/dsc00170.webp', alt: 'Boxing match', category: 'combat' },
  { src: '/images/boxing2/dsc02653.webp', alt: 'Boxer in corner', category: 'combat' },
  { src: '/images/boxing1/dsc00135.webp', alt: 'Ring action', category: 'combat' },
  { src: '/images/boxing2/dsc02684.webp', alt: 'Fighter portrait', category: 'combat' },
  { src: '/images/boxing2/dsc02754.webp', alt: 'Boxer in the ring', category: 'combat' },

  // ─── Music ─────────────────────────────────────────────────────────────────
  { src: '/images/muisc1/dsc01326.webp', alt: 'Artist portrait, chain mask, B&W', category: 'music', highlight: true },
  { src: '/images/muisc1/dsc01492.webp', alt: 'Music session portrait', category: 'music' },
  { src: '/images/muisc1/dsc01540.webp', alt: 'Artist in session', category: 'music' },
  { src: '/images/muisc1/dsc01595.webp', alt: 'Music artist portrait', category: 'music' },
  { src: '/images/muisc1/dsc01611.webp', alt: 'Session portrait', category: 'music' },

  // ─── Events ────────────────────────────────────────────────────────────────
  { src: '/images/event1/dsc01641.webp', alt: 'Young musician on stage with accordion', category: 'events' },
  { src: '/images/event1/dsc01764.webp', alt: 'Live event coverage', category: 'events' },
  { src: '/images/event1/dsc01725.webp', alt: 'Event performance', category: 'events' },
  { src: '/images/event1/dsc01708.webp', alt: 'Live event moment', category: 'events' },
  { src: '/images/event1/dsc01319.webp', alt: 'Event photography', category: 'events' },

  // ─── Training ──────────────────────────────────────────────────────────────
  { src: '/images/fitness/dsc03314.webp', alt: 'Two athletes running on a road', category: 'training' },
  { src: '/images/fitness/dsc03415.webp', alt: 'Athlete training', category: 'training' },
  { src: '/images/fitness/dsc03478.webp', alt: 'Fitness session', category: 'training' },
  { src: '/images/fitness/dsc03752.webp', alt: 'Athlete portrait', category: 'training' },
  { src: '/images/fitness/dsc04348.webp', alt: 'Training session', category: 'training' },

  // ─── Couples ───────────────────────────────────────────────────────────────
  { src: '/images/couple/dsc00022.webp', alt: 'Couple sharing a kiss on a forest bridge', category: 'couples', highlight: true },
  { src: '/images/couple/dsc00118.webp', alt: 'Couple portrait', category: 'couples' },
  { src: '/images/couple/dsc09954.webp', alt: 'Couple outdoor session', category: 'couples' },
  { src: '/images/couple/dsc09999.webp', alt: 'Couple portrait', category: 'couples' },

  // ─── Graduation ────────────────────────────────────────────────────────────
  { src: '/images/grad/dsc08259.webp', alt: 'Graduate portrait', category: 'graduation' },
  { src: '/images/grad/dsc08263.webp', alt: 'Graduation day', category: 'graduation' },
  { src: '/images/grad/dsc08317.webp', alt: 'Graduate celebration', category: 'graduation' },
  { src: '/images/grad/dsc08359.webp', alt: 'Graduation milestone', category: 'graduation' },
  { src: '/images/grad/dsc08393.webp', alt: 'Graduate portrait', category: 'graduation' },
]

export const highlights = photos.filter(p => p.highlight)
