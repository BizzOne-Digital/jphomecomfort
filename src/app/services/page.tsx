import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const services = [
  { id: "furnace", title: "Furnace Services", desc: "Keep your home warm all winter with our expert furnace services. We install, repair, and maintain all major brands and models.", features: ["High-efficiency furnace installation", "Emergency furnace repair (24/7)", "Annual furnace tune-up & inspection", "Filter replacement & cleaning", "Gas & electric furnace service", "Warranty-backed parts & labor"], icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  { id: "ac", title: "Air Conditioning", desc: "Stay cool with our AC installation and repair services. Energy-efficient systems that save you money.", features: ["Central AC installation", "AC repair & troubleshooting", "Seasonal AC tune-up", "Refrigerant recharge", "Ductless mini-split systems", "Smart thermostat integration"], icon: "M3 8h18v10H3z M8 18v3 M16 18v3 M6 5h12" },
  { id: "water", title: "Water Heaters", desc: "Never run out of hot water. Tankless and traditional water heater installation and repair.", features: ["Tankless water heater install", "Traditional tank water heaters", "Water heater repair", "Energy-efficient upgrades", "Same-day hot water solutions", "Annual maintenance plans"], icon: "M12 2v6 M12 22v-6 M4.93 4.93l4.24 4.24 M14.83 14.83l4.24 4.24 M2 12h6 M16 12h6" },
  { id: "heatpump", title: "Heat Pumps", desc: "Year-round comfort in one system. Heat pumps provide efficient heating and cooling.", features: ["Air-source heat pump install", "Geothermal systems", "Heat pump repair & service", "Government rebate assistance", "Energy audit & sizing", "Hybrid heating systems"], icon: "M12 3a9 9 0 019 9 M12 3a9 9 0 00-9 9 M12 3v18 M3 12h18" },
  { id: "duct", title: "Duct Cleaning", desc: "Improve indoor air quality with professional duct cleaning. Remove dust, allergens, and contaminants.", features: ["Complete duct system cleaning", "Dryer vent cleaning", "Duct sanitizing & deodorizing", "Camera inspection", "Air duct sealing", "HEPA filtration upgrade"], icon: "M12 12v9 M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2 M7 7h10" },
  { id: "maintenance", title: "Maintenance Plans", desc: "Preventive maintenance extends equipment life and prevents costly breakdowns.", features: ["Annual HVAC inspection", "Priority emergency service", "Discounted repair rates", "Filter & parts included", "Seasonal tune-ups", "Extended warranty coverage"], icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our" highlight="Services" subtitle="Complete HVAC solutions for heating, cooling, and water systems." />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:[direction:rtl] lg:[&>*]:![direction:ltr]" : ""}`}>
              <div>
                <div className="section-label">{s.title}</div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">{s.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2.5" className="flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M8 12L11 15L16 9"/></svg>
                      <span className="text-slate-600 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-red text-[15px]">Get a Quote <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg></Link>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-100">
                <div className="w-16 h-16 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[{l:"Response",v:"< 2 Hrs"},{l:"Warranty",v:"Up to 10 Yrs"},{l:"Pricing",v:"Free Quote"},{l:"Available",v:"24/7"}].map(m=>(
                    <div key={m.l} className="bg-white rounded-lg p-4 border border-slate-100">
                      <div className="text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1">{m.l}</div>
                      <div className="text-brand-navy font-bold">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-brand-navy"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-slate-300 text-lg mb-8">Contact us today for a free consultation and quote.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-red text-lg px-8 py-4">Get Free Quote</Link>
          <a href="tel:+16479485859" className="btn-outline-white text-lg px-8 py-4 text-center">+1 647-948-5859</a>
        </div>
      </div></section>
    </>
  );
}
