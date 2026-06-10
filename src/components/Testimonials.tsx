"use client";
import { useEffect, useRef } from "react";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any previously loaded trustindex scripts to avoid duplicates
    document.querySelectorAll('script[src*="trustindex"]').forEach(s => s.remove());

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://cdn.trustindex.io/loader.js?8aacadb7389c97121506440caa4";
      script.async = true;
      // Append near the widget container so Trustindex finds it
      if (containerRef.current) {
        containerRef.current.appendChild(script);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <div className="section-label justify-center">Testimonials</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy mb-4">
            What Our <span className="text-brand-red">Customers</span> Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real reviews from verified Google customers across Ontario.
          </p>
        </div>

        {/* Trustindex injects the widget as a sibling after this div */}
        <div ref={containerRef} id="trustindex-container" />
      </div>
    </section>
  );
}