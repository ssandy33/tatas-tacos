export const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Catering", href: "#catering" },
  { label: "Events", href: "#events" },
  { label: "Reservations", href: "#location" },
] as const;

export const MENU_ITEMS = [
  {
    name: "Birria Tacos",
    description:
      "Slow-braised beef in a rich chili consommé, topped with cilantro, onion, and melted Oaxaca cheese. Served with consommé for dipping.",
    price: "$4.50",
    image:
      "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&h=400&fit=crop",
  },
  {
    name: "Al Pastor",
    description:
      "Marinated pork shoulder with achiote and pineapple, shaved fresh off the trompo. Topped with pineapple salsa and micro cilantro.",
    price: "$3.75",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop",
  },
  {
    name: "Carnitas",
    description:
      "Crispy-tender braised pork with salsa verde, pickled red onion, and a squeeze of fresh lime. A family recipe since 1987.",
    price: "$3.75",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
  },
  {
    name: "Elote Street Corn",
    description:
      "Grilled Mexican street corn slathered with chipotle mayo, cotija cheese, tajín, and a squeeze of lime. A perfect side.",
    price: "$5.00",
    image:
      "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=600&h=400&fit=crop",
  },
] as const;

export const REVIEWS = [
  {
    name: "Maria G.",
    rating: 5,
    text: "The birria tacos are absolutely incredible — the consommé is rich and flavorful, and the meat just falls apart. This place is a hidden gem in Six Corners!",
  },
  {
    name: "Jake T.",
    rating: 5,
    text: "Best al pastor in Chicago, hands down. The pineapple salsa is the perfect touch. We order from Tata's at least twice a week. Our whole family loves it.",
  },
  {
    name: "Samantha R.",
    rating: 4.5,
    text: "We had Tata's cater our office party and it was a huge hit. Fresh, authentic, and the team was so professional. Already booking them for our next event!",
  },
] as const;

export const RESTAURANT_INFO = {
  name: "Tata's Tacos",
  tagline: "Authentic Mexican Flavors, Made with Love",
  phone: "(773) 555-8226",
  phoneHref: "tel:+17735558226",
  email: "catering@tatastacos.com",
  address: "4100 N Milwaukee Ave",
  city: "Chicago, IL 60641",
  neighborhood: "Six Corners",
  googleMapsUrl:
    "https://www.google.com/maps/place/4100+N+Milwaukee+Ave,+Chicago,+IL+60641",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.5!2d-87.754!3d41.955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU3JzE4LjAiTiA4N8KwNDUnMTQuNCJX!5e0!3m2!1sen!2sus!4v1",
  orderUrl: "https://tatastacos.com/order",
  yelpUrl: "https://www.yelp.com/biz/tatas-tacos-chicago",
  yelpRating: 4.5,
  yelpReviewCount: "500+",
  hours: [
    { day: "Monday", time: "11:00 AM – 9:00 PM" },
    { day: "Tuesday", time: "11:00 AM – 9:00 PM" },
    { day: "Wednesday", time: "11:00 AM – 9:00 PM" },
    { day: "Thursday", time: "11:00 AM – 10:00 PM" },
    { day: "Friday", time: "11:00 AM – 11:00 PM" },
    { day: "Saturday", time: "10:00 AM – 11:00 PM" },
    { day: "Sunday", time: "10:00 AM – 8:00 PM" },
  ],
  socials: {
    tiktok: "https://www.tiktok.com/@tatastacos",
    facebook: "https://www.facebook.com/tatastacos",
    instagram: "https://www.instagram.com/tatastacos",
  },
} as const;
