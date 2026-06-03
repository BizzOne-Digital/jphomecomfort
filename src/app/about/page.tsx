import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    { icon: "M12 2L3 7V12C3 17.5 6.84 22.74 12 24C17.16 22.74 21 17.5 21 12V7L12 2Z", title: "Trust & Integrity", desc: "Honest pricing, transparent service. No hidden fees, no surprises." },
    { icon: "M12 8a7 7 0 100 14 7 7 0 000-14z M8.21 13.89L7 23L12 20L17 23L15.79 13.88", title: "Excellence", desc: "Every job done right the first time. We hold ourselves to the highest standards." },
    { icon: "M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21 M12 13a4 4 0 100-8 4 4 0 000 8z", title: "Customer First", desc: "Your comfort and satisfaction drive everything we do." },
    { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: "Fast Response", desc: "Same-day service and 24/7 emergency availability." },
  ];

  return (
    <>
      <PageHeader title="About" highlight="Us" subtitle="Learn about JP Home Comfort — your trusted HVAC partner since 2009." />

      {/* Story section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6">
                <span className="text-brand-red">Comfort</span> You Can Count On
              </h2>
              <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                <p>JP Home Comfort was founded with a simple mission: to provide homeowners across the Greater Toronto Area with reliable, professional, and affordable HVAC services.</p>
                <p>With over 15 years of experience, our team of licensed technicians has helped thousands of families stay comfortable through every season. From emergency furnace repairs on the coldest winter nights to AC installations that beat the summer heat, we are here when you need us.</p>
                <p>We believe in doing the job right the first time, with honest pricing and no hidden fees. That is why our customers keep coming back — and recommending us to their friends and family.</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "15+", label: "Years of Experience", color: "border-brand-red bg-red-50" },
                { num: "5,000+", label: "Happy Customers", color: "border-brand-cyan bg-cyan-50" },
                { num: "24/7", label: "Emergency Service", color: "border-brand-navy bg-slate-50" },
                { num: "100%", label: "Satisfaction Rate", color: "border-brand-red bg-red-50" },
              ].map((s, i) => (
                <div key={i} className={`border-l-4 ${s.color} rounded-xl p-6`}>
                  <div className="font-heading font-extrabold text-3xl text-brand-navy mb-1">{s.num}</div>
                  <div className="text-slate-500 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Our Values</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-7 border border-slate-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mx-auto mb-5">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={v.icon}/></svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">{v.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-heading font-bold text-xl text-slate-400 mb-8">Trusted Brands We Work With</h3>
          <div className="flex flex-wrap justify-center gap-8 text-slate-300 text-lg font-heading font-bold">
            {["Lennox", "Carrier", "Trane", "Goodman", "Daikin", "Rheem", "Navien", "Bradford White"].map(b => (
              <span key={b} className="px-4 py-2 bg-slate-50 rounded-lg text-slate-400 hover:text-brand-navy transition-colors">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">Join 5,000+ Happy Homeowners</h2>
          <p className="text-red-100 text-lg mb-8">Experience the JP Home Comfort difference.</p>
          <Link href="/contact" className="bg-white text-brand-red font-bold text-lg px-8 py-4 rounded-lg hover:bg-slate-50 transition-all inline-block shadow-xl">Get Free Quote</Link>
        </div>
      </section>
    </>
  );
}
