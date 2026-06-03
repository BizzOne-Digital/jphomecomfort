"use client";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Furnace Services",
    desc: "Installation, repair & maintenance for all furnace brands. Keep your home warm all winter.",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    title: "Air Conditioning",
    desc: "AC repair, installation & tune-ups. Energy-efficient cooling for year-round comfort.",
    img: "https://images.unsplash.com/photo-1718203862467-c33159fdc504?q=80&w=800&auto=format&fit=crop",
    icon: "M3 8h18v10H3z M8 18v3 M16 18v3 M6 5h12",
  },
  {
    title: "Water Heaters",
    desc: "Tankless & traditional water heater services. Never run out of hot water again.",
    img: "https://images.unsplash.com/photo-1618840626133-54463084a141?q=80&w=800&auto=format&fit=crop",
    icon: "M12 2v6 M12 22v-6 M4.93 4.93l4.24 4.24 M14.83 14.83l4.24 4.24 M2 12h6 M16 12h6",
  },
  {
    title: "Heat Pumps",
    desc: "Year-round heating & cooling in one system. Energy-efficient and rebate-eligible.",
    img: "https://images.unsplash.com/photo-1679303777007-c6c4522beb02?q=80&w=800&auto=format&fit=crop",
    icon: "M12 3a9 9 0 019 9 M12 3a9 9 0 00-9 9 M12 3v18 M3 12h18",
  },
  {
    title: "Duct Cleaning",
    desc: "Professional duct cleaning for cleaner, healthier indoor air quality.",
    img: "https://images.unsplash.com/photo-1737012197886-7d5a52ded45b?q=80&w=800&auto=format&fit=crop",
    icon: "M12 12v9 M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2 M7 7h10",
  },
  {
    title: "Maintenance Plans",
    desc: "Preventive care plans to extend equipment life and avoid costly breakdowns.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-label justify-center">Our Services</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy mb-4">
            Professional HVAC <span className="text-brand-red">Solutions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Complete heating, cooling, and water system services for homes across the Greater Toronto Area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-brand-navy/8 transition-all duration-400 hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon} />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-2 group-hover:text-brand-red transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-4">{s.desc}</p>
                <Link href="/services" className="text-brand-cyan font-semibold text-sm inline-flex items-center gap-1 group-hover:text-brand-red group-hover:gap-2 transition-all">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-red text-[15px]">
            View All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}