const base = import.meta.env.BASE_URL

export const img = (name: string) => `${base}media/${name}`

export const BRAND = 'RCCSWebComp-NC'

export const NAV = [
  { label: 'HOME', href: '/' },
  { label: 'EVENTS', href: '/events' },
  { label: 'SPORTS', href: '/sports' },
  { label: 'CALENDAR', href: '/calendar' },
  { label: 'ANNOUNCEMENTS', href: '/announcements' },
  { label: 'CONTACT', href: '/contact' },
]

export const CTA_LABEL = 'SCHOOL CALENDAR'
export const CTA_HREF = '/calendar'

export const NEXT_EVENT = {
  label: 'NEXT EVENT',
  title: 'Annual Sports Day',
  date: '23 OCT 2026',
  time: '08:00 AM',
  location: 'School Sports Ground',
  button: 'VIEW CALENDAR',
}

export const PHILOSOPHY = {
  eyebrow: 'OUR SCHOOL',
  title: 'A PLACE WHERE EVERY STUDENT CAN DISCOVER THEIR INTERESTS AND TALENTS.',
  bg: img('martialarts-home-section-bg2.svg'),
}

export const PHILOSOPHY_2 = {
  eyebrow: 'OUR COMMUNITY',
  title: 'BUILT FOR THE WHOLE SCHOOL — STUDENTS, STAFF AND FAMILIES.',
  bg: img('martialarts-home-section-bg3.svg'),
}

export const TOP_TABS = [
  {
    id: 'events',
    label: 'EVENTS',
    icon: img('martialarts-home-icon1.svg'),
    heading: 'STAY AHEAD OF THE CALENDAR',
    lead: 'From assemblies to competitions — register in seconds and keep your QR ticket in your pocket.',
    button: 'BROWSE EVENTS',
    href: '/events',
    image: img('martialarts-home-pic1.webp'),
  },
  {
    id: 'sports',
    label: 'SPORTS',
    icon: img('martialarts-home-icon2.svg'),
    heading: 'COMPETE, TRAIN, CELEBRATE',
    lead: 'Inter-house tournaments, club meets and gala days. Something for every athlete, every term.',
    button: 'SEE SPORTS',
    href: '/sports',
    image: img('martialarts-home-pic2.webp'),
  },
  {
    id: 'clubs',
    label: 'CLUBS',
    icon: img('martialarts-home-icon3.svg'),
    heading: 'CLUBS FOR EVERY PASSION',
    lead: 'Music, tech, drama, debate and more. Find your group, sign up and start creating.',
    button: 'EXPLORE CLUBS',
    href: '/announcements',
    image: img('martialarts-home-pic3.webp'),
  },
]

export const BANNERS = [
  {
    id: 'junior',
    title: 'JUNIOR SCHOOL',
    excerpt: 'Age-appropriate events, house competitions and discovery clubs for younger students.',
    image: img('martialarts-home-pic4.webp'),
    href: '/events',
  },
  {
    id: 'senior',
    title: 'SENIOR SCHOOL',
    excerpt: 'Leadership opportunities, competitive sport, performances and academic showcases.',
    image: img('martialarts-home-pic5.webp'),
    href: '/events',
  },
  {
    id: 'staff',
    title: 'STAFF',
    excerpt: 'Organise, communicate and celebrate achievements across the whole campus.',
    image: img('martialarts-home-pic6.webp'),
    href: '/contact',
  },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'EVENTS' },
  { value: 20, suffix: '+', label: 'SPORTS' },
  { value: 8, suffix: '', label: 'HOUSES' },
  { value: 1200, suffix: '+', label: 'STUDENTS' },
]

export const ACTIVITIES = [
  {
    id: 'athletics',
    label: 'ATHLETICS',
    heading: 'TRACK & FIELD',
    description: 'Sprints, relays, jumps and throws — the highlight of the inter-house calendar.',
    image: img('martialarts-offer-pic1.webp'),
    bars: [
      { label: 'Participation', value: 92 },
      { label: 'Popularity', value: 88 },
    ],
  },
  {
    id: 'swimming',
    label: 'SWIMMING',
    heading: 'SWIM GALA',
    description: 'Fifty metres, four strokes, eight houses — records are made to be broken.',
    image: img('martialarts-offer-pic2.webp'),
    bars: [
      { label: 'Participation', value: 76 },
      { label: 'Popularity', value: 85 },
    ],
  },
  {
    id: 'football',
    label: 'FOOTBALL',
    heading: 'INTER-HOUSE FOOTBALL',
    description: 'Knockout rounds, house against house, played with energy and pride.',
    image: img('martialarts-offer-pic3.webp'),
    bars: [
      { label: 'Participation', value: 84 },
      { label: 'Popularity', value: 94 },
    ],
  },
  {
    id: 'cricket',
    label: 'CRICKET',
    heading: 'CRICKET MATCH',
    description: 'Eight houses, one trophy — bat first, defend the total and finish strong.',
    image: img('martialarts-offer-pic4.webp'),
    bars: [
      { label: 'Participation', value: 68 },
      { label: 'Popularity', value: 79 },
    ],
  },
  {
    id: 'netball',
    label: 'NETBALL',
    heading: 'NETBALL TOURNAMENT',
    description: 'Round-robin first, then the finals — sharp passes and faster turnovers.',
    image: img('martialarts-offer-pic5.webp'),
    bars: [
      { label: 'Participation', value: 81 },
      { label: 'Popularity', value: 87 },
    ],
  },
]

export const TEAM = [
  {
    role: 'HEAD OF SPORT',
    name: 'MIKE TAYLOR',
    bio: 'Former national athlete, now leading inter-house sport and PE across all year groups.',
    image: img('martialarts-about-pic1.webp'),
  },
  {
    role: 'HEAD OF ARTS',
    name: 'SUZANE WHITE',
    bio: 'Directs music, drama and visual arts events that bring the whole school together.',
    image: img('martialarts-about-pic2.webp'),
  },
  {
    role: 'HEAD OF ACADEMICS',
    name: 'TAYLOR BLACK',
    bio: 'Coordinates academic competitions, science fairs and subject showcase evenings.',
    image: img('martialarts-about-pic3.webp'),
  },
  {
    role: 'HEAD OF CLUBS',
    name: 'RICK BRICK',
    bio: 'Supports student-led clubs from robotics to debate, helping every group thrive.',
    image: img('martialarts-about-pic4.webp'),
  },
]

export const FOOTER_CTA = {
  title: 'DO NOT MISS WHAT\'S HAPPENING. BE PART OF YOUR SCHOOL.',
  goldWord: 'YOUR SCHOOL',
}

export const CONTACT = {
  address: 'LEVEL 13, 2 ELIZABETH VICTORIA 3000, AUSTRALIA',
  phone: '+61 (0) 3 8376 6284',
  emails: ['INFO@RCCS.SCHOOL.EDU', 'SUPPORT@RCCS.SCHOOL.EDU'],
}

export const FOOTER_NAV = [
  { label: 'TERMS', href: '#' },
  { label: 'PRIVACY', href: '#' },
  { label: 'COOKIES', href: '#' },
  { label: 'LICENSES', href: '#' },
  { label: 'SETTINGS', href: '#' },
  { label: 'REFUND', href: '#' },
]

export const POPUP = {
  title: 'NEXT EVENTS',
  rows: [
    { label: 'MONDAY – FRIDAY', items: 'Assemblies, Club Meetings, Sport Training' },
    { label: 'WEEKEND', items: 'Inter-House Matches, Gala Days, Performances' },
  ],
}
