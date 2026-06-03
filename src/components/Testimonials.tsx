"use client";
import { useState } from "react";

const reviews = [
  { name: "Sarah M.", loc: "Toronto", text: "JP Home Comfort installed our new furnace and the service was exceptional. Professional, punctual, and our energy bills dropped!", svc: "Furnace Install", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
  { name: "David K.", loc: "Mississauga", text: "AC broke on the hottest day. Called JP, technician arrived in 2 hours. Fixed quickly at a fair price. Highly recommend!", svc: "AC Repair", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
  { name: "Priya P.", loc: "Brampton", text: "Been using JP for annual maintenance for 3 years. Always thorough, explain everything clearly. Best HVAC company in the GTA!", svc: "Maintenance", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { name: "Michael R.", loc: "Markham", text: "Tankless water heater installed in one day. Knowledgeable team, great options within budget. Hot water has never been better!", svc: "Water Heater", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
  { name: "Lisa T.", loc: "Vaughan", text: "Emergency furnace repair at 11 PM in January. Answered right away, heat restored by 1 AM. Incredible service!", svc: "Emergency", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
];

export default function Testimonials() {
  const [a, setA] = useState(0);
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <div className="section-label justify-center">Testimonials</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy mb-4">
            What Our <span className="text-brand-red">Customers</span> Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Join thousands of satisfied homeowners across the GTA.
          </p>
        </div>

        {/* Featured review */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100 relative">
            {/* Quote mark */}
            <div className="absolute top-6 right-8 text-brand-red/8">
              <svg width="64" height="64" viewBox="0 0 48 48" fill="currentColor">
                <path d="M14 28H6V20C6 13.37 11.37 8 18 8V14C14.69 14 12 16.69 12 20H14C16.21 20 18 21.79 18 24V28C18 30.21 16.21 32 14 32C11.79 32 10 30.21 10 28Z"/>
                <path d="M36 28H28V20C28 13.37 33.37 8 40 8V14C36.69 14 34 16.69 34 20H36C38.21 20 40 21.79 40 24V28C40 30.21 38.21 32 36 32C33.79 32 32 30.21 32 28Z"/>
              </svg>
            </div>

            <div className="relative">
              <div className="text-yellow-400 text-lg mb-4 tracking-wider">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="text-brand-navy text-lg lg:text-xl leading-relaxed mb-8 italic">
                &ldquo;{reviews[a].text}&rdquo;
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={reviews[a].img}
                    alt={reviews[a].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-red/20"
                  />
                  <div>
                    <div className="font-bold text-brand-navy text-lg">{reviews[a].name}</div>
                    <div className="text-slate-400 text-sm">{reviews[a].loc}, ON</div>
                  </div>
                </div>
                <span className="bg-brand-cyan/10 text-brand-cyan text-sm font-semibold px-4 py-1.5 rounded-full">{reviews[a].svc}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail nav */}
        <div className="flex justify-center gap-3">
          {reviews.map((r, i) => (
            <button key={i} onClick={() => setA(i)}
              className={`transition-all duration-300 rounded-full overflow-hidden border-2 ${
                i === a ? "border-brand-red w-14 h-14 scale-110 shadow-lg" : "border-transparent w-12 h-12 opacity-60 hover:opacity-100"
              }`}>
              <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}