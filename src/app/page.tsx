import Hero from "@/components/Hero";
import QuickBooking from "@/components/QuickBooking";
import HomeServices from "@/components/HomeServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickBooking />
      <div className="pt-8" />

      <HomeServices />

      {/* Brands strip */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">Trusted Brands We Install & Service</p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-slate-300">
            {["Lennox", "Carrier", "Trane", "Goodman", "Daikin", "Rheem", "Navien", "Bradford White"].map(b => (
              <span key={b} className="font-heading font-bold text-lg lg:text-xl text-slate-300 hover:text-brand-navy transition-colors cursor-default">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />

      {/* Service Areas with image */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image side */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop"
                alt="Greater Toronto Area skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { num: "16+", label: "Cities" },
                    { num: "30 min", label: "Avg Response" },
                    { num: "$0", label: "Travel Fee" },
                  ].map(s => (
                    <div key={s.label} className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-center border border-white/10">
                      <div className="font-heading font-extrabold text-xl text-white">{s.num}</div>
                      <div className="text-white/70 text-xs font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <div className="section-label">Coverage Area</div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6">
                Serving the <span className="text-brand-red">Greater Toronto Area</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                From downtown Toronto to surrounding suburbs, our team of HVAC professionals is ready to serve you. Fast response times, no travel surcharge.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Toronto","Mississauga","Brampton","Markham","Vaughan","Richmond Hill","Oakville","Burlington","Hamilton","Ajax","Pickering","Whitby"].map(c => (
                  <span key={c} className="bg-slate-100 text-slate-600 text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-brand-red/10 hover:text-brand-red transition-colors cursor-default">{c}</span>
                ))}
                <span className="text-brand-cyan font-semibold text-sm px-3 py-1.5">+4 more</span>
              </div>

              <Link href="/areas" className="btn-red text-[15px]">
                View All Service Areas
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with bg image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop"
            alt="Home comfort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy-dark/85" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Ready for <span className="text-brand-red">Perfect</span> Home Comfort?
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. Our team is standing by to help with all your HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-red text-lg px-10 py-5 shadow-2xl shadow-brand-red/30">
              Get Free Quote
            </Link>
            <a href="tel:+16479485859" className="btn-outline-white text-lg px-10 py-5 flex items-center justify-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
              +1 647-948-5859
            </a>
          </div>
        </div>
      </section>
    </>
  );
}