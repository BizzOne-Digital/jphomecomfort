import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const areas = [
  { city: "Toronto", areas: "Downtown, North York, Scarborough, Etobicoke, East York" },
  { city: "Mississauga", areas: "Port Credit, Streetsville, Meadowvale, Erin Mills" },
  { city: "Brampton", areas: "Bramalea, Heart Lake, Springdale, Castlemore" },
  { city: "Markham", areas: "Unionville, Thornhill, Cornell, Milliken" },
  { city: "Vaughan", areas: "Woodbridge, Maple, Kleinburg, Concord" },
  { city: "Richmond Hill", areas: "Oak Ridges, Jefferson, Mill Pond, Bayview" },
  { city: "Oakville", areas: "Downtown, Bronte, Glen Abbey, Palermo" },
  { city: "Burlington", areas: "Downtown, Aldershot, Tyandaga, Orchard" },
  { city: "Hamilton", areas: "Downtown, Ancaster, Dundas, Stoney Creek" },
  { city: "Ajax", areas: "Downtown, Pickering Village, Westney Heights" },
  { city: "Pickering", areas: "Bay Ridges, Liverpool, Dunbarton, Rouge" },
  { city: "Oshawa", areas: "Downtown, North, South, Kedron, Taunton" },
  { city: "Whitby", areas: "Downtown, Brooklin, Blue Grass Meadows" },
  { city: "Milton", areas: "Downtown, Bronte Meadows, Harrison, Scott" },
  { city: "Newmarket", areas: "Downtown, Upper Canada, Stonehaven" },
  { city: "Aurora", areas: "Downtown, Bayview, St Andrews, Highland Gate" },
];

export default function AreasPage() {
  return (
    <>
      <PageHeader title="Service" highlight="Areas" subtitle="Professional HVAC services across the Greater Toronto Area." />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Coverage</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
              Serving <span className="text-brand-red">16+ Cities</span> Across the GTA
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Fast response times. No travel surcharge. Same-day service available in all areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map(a => (
              <div key={a.city} className="bg-white rounded-xl border border-slate-200 p-5 hover:border-brand-cyan hover:shadow-md transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" className="flex-shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"/><circle cx="12" cy="9" r="3"/></svg>
                  <h3 className="font-heading font-bold text-brand-navy group-hover:text-brand-red transition-colors">{a.city}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{a.areas}</p>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {["30-Minute Average Response","No Travel Surcharge","Same-Day Service","Licensed & Insured Technicians"].map(b => (
              <div key={b} className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 12L11 15L16 9"/></svg>
                <span className="text-slate-600 font-semibold text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">Not sure if we service your area?</h2>
          <p className="text-slate-300 text-lg mb-8">Give us a call. We are always expanding our coverage.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-red text-lg px-8 py-4">Contact Us</Link>
            <a href="tel:+16479485859" className="btn-outline-white text-lg px-8 py-4 text-center">+1 647-948-5859</a>
          </div>
        </div>
      </section>
    </>
  );
}
