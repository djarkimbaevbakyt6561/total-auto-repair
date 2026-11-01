type ContactHours = {
  weekday: string;
  saturday: string;
  sunday: string;
};

type ContactConfig = {
  phone: string;
  phoneUnformatted: string;
  address: string;
  hours: ContactHours;
  facebook: string;
  googleMapsUrl: string;
};

type StatConfig = {
  label: string;
  value: string;
};

type ServiceIcon = "Oil" | "Engine" | "Brake" | "Gear" | "Snowflake" | "Tire";

type ServiceConfig = {
  id: string;
  title: string;
  summary: string;
  icon: ServiceIcon;
};

type GalleryItemConfig = {
  title: string;
  image: string;
  tag: string;
};

type TestimonialConfig = {
  name: string;
  rating: number;
  content: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  contact: ContactConfig;
  stats: StatConfig[];
  services: ServiceConfig[];
  gallery: GalleryItemConfig[];
  testimonials: TestimonialConfig[];
};

export const siteConfig: SiteConfig = {
  name: "Total Auto Repair",
  tagline: "Get the best service in the area",
  description: "No hassles, fair pricing, right in your neighborhood.",

  // Single-point contact configuration
  contact: {
    phone: "(414) 546-3705",
    phoneUnformatted: "4145463705",
    address: "7905 W Lincoln Ave, West Allis, WI 53219",
    facebook: "https://www.facebook.com/totalautorepairllc",
    hours: {
      weekday: "Mon - Fri: 8:00 AM - 5:00 PM",
      saturday: "Sat - Sun: Closed",
      sunday: "Sun: Closed",
    },
    googleMapsUrl: "https://maps.app.goo.gl/5LH1STdKPH8MwgRF7",
  },

  // Trust Metrics Ribbon
  stats: [],

  // Numbered Services (Style from Image 1)
  services: [
    {
      id: "01",
      title: "OIL & FILTER CHANGE",
      summary:
        "Full synthetic oil change, filter replacement, and multi-point vehicle inspection.",
      icon: "Oil",
    },
    {
      id: "02",
      title: "ENGINE DIAGNOSTICS",
      summary:
        "Check engine light scanning, sensor troubleshooting, and computer diagnostics.",
      icon: "Engine",
    },
    {
      id: "03",
      title: "BRAKE & SUSPENSION",
      summary:
        "Pads, rotors, caliper servicing, fluid flush, shocks, and strut replacement.",
      icon: "Brake",
    },
    {
      id: "04",
      title: "TRANSMISSION REPAIR",
      summary:
        "Fluid replacement, clutch adjustment, rebuilding, and complete unit replacement.",
      icon: "Gear",
    },
    {
      id: "05",
      title: "AC & HEATING SYSTEM",
      summary:
        "Refrigerant recharge, leak detection, compressor service, and heater core flush.",
      icon: "Snowflake",
    },
    {
      id: "06",
      title: "TIRE & ALIGNMENT",
      summary:
        "Computerized wheel alignment, tire mounting, balancing, and tread rotation.",
      icon: "Tire",
    },
  ],

  // Recent Work Gallery
  gallery: [
    {
      title: "Engine Rebuild & Swap",
      image: "/images/work-1.jpg",
      tag: "Engine Repair",
    },
    {
      title: "Brake System Overhaul",
      image: "/images/work-2.jpg",
      tag: "Brakes",
    },
  ],

  // Reviews
  testimonials: [
    {
      name: "Firstname Lastname",
      rating: 5,
      content:
        "I’ve had two cars serviced at Total Auto Repair over the years, and I’m getting ready to bring my newest one in because these guys have earned my trust every single time. Tom and Adam have that rare mix of honesty, friendliness, and quality service.",
    },
    {
      name: "Micah Leavitt",
      rating: 5,
      content:
        "Great price, friendly owners/staff & super quick! I called 10 other locals & they were the best quoted price I got. Very informative, let me know what was happening, got my spark plugs changed, misfire is gone & runs smooth as butter!",
    },
    {
      name: "S",
      rating: 5,
      content:
        "These guys are great! Prices are fair, communication is great, service is professional, and repairs are completed quickly. Today was the second time I had my car serviced there. Both times I was pleased with the service. I wish I had known about Total Auto Repair sooner. Thanks guys!",
    },
    {
      name: "Pam Cook",
      rating: 5,
      content:
        "Just had some work done on my car! Tom and Adam are GREAT! This is my new place to go for my car needs! Excellent job, guys! Car is running great!",
    },
    {
      name: "West Allis",
      rating: 5,
      content:
        "I highly recommend this auto repair shop. I had called looking to get a quote, he was able to fit me in right away the next day. After he got done looking over my car, he actually explained to me what was going on with my car.",
    },
    {
      name: "SUNNY B",
      rating: 5,
      content:
        "Finally writing this review after 8 yrs of service from them. What can i say, they are the best. These guys are honest and highly skilled. I take all my cars to them. All my friends too. I suggest them to everybdy all the time like i work there.",
    },
    {
      name: "Miriam Balinsky",
      rating: 5,
      content:
        "Tom got my old license plates off my car after everyone else struggled. He was very nice and professional.",
    },
    {
      name: "Kristine Loosen",
      rating: 5,
      content:
        "I am a very big fan of this place and will not take my car anywhere else. I've taken two cars here in the last two years and the guys are always super polite and are able to get me in quickly. They call within 30 minutes with what they find.",
    },
    {
      name: "Barry",
      rating: 5,
      content:
        "I got some repairs roughly 6 months ago. The prices were very good and affordable, and so far the repairs have held up great. Definitely where I'm going next time.",
    },
  ],
};

export type {
  ServiceIcon,
  ServiceConfig,
  StatConfig,
  ContactConfig,
  ContactHours,
  GalleryItemConfig,
  TestimonialConfig,
};
