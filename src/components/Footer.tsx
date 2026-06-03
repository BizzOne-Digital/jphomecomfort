"use client";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      {/* CTA strip */}
      <div className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
              Need Emergency HVAC Service?
            </h3>
            <p className="text-red-100 text-lg mt-1">Available 24/7 — We are just one call away.</p>
          </div>
          <a href="tel:+16479485859" className="bg-white text-brand-red font-bold text-lg px-8 py-4 rounded-lg hover:bg-slate-50 transition-all shadow-xl flex items-center gap-3 whitespace-nowrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
            +1 647-948-5859
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-brand-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Logo className="mb-6 [&_span]:!text-white [&_div]:!text-slate-400" />
              <p className="text-slate-400 leading-relaxed text-[15px] mt-4 mb-6">
                Comfort You Can Count On. Professional heating, cooling, and water system services for the Greater Toronto Area.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: "M18 2h-3c-1.33 0-2.6.53-3.54 1.46C10.53 4.4 10 5.67 10 7v3H7v4h3v8h4v-8h3l1-4h-4V7c0-.27.11-.52.29-.71.18-.18.44-.29.71-.29h3V2Z", href: "#" },
                  { icon: "M2 2h20v20H2z M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01", href: "#", isRect: true },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="w-10 h-10 rounded-lg bg-white/5 hover:bg-brand-red flex items-center justify-center text-slate-400 hover:text-white transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={s.isRect ? "none" : "currentColor"} stroke={s.isRect ? "currentColor" : "none"} strokeWidth="2">
                      {s.isRect ? <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></> : <path d={s.icon}/>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3 text-slate-400 text-[15px]">
                {["Furnace Repair & Install","AC Repair & Install","Water Heaters","Heat Pumps","Duct Cleaning","Maintenance Plans"].map(s=>(
                  <li key={s}><Link href="/services" className="hover:text-brand-cyan transition-colors">{s}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-slate-400 text-[15px]">
                {[{l:"Home",h:"/"},{l:"Services",h:"/services"},{l:"About Us",h:"/about"},{l:"Service Areas",h:"/areas"},{l:"Contact",h:"/contact"}].map(i=>(
                  <li key={i.l}><Link href={i.h} className="hover:text-brand-cyan transition-colors">{i.l}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Contact Info</h4>
              <div className="space-y-4 text-slate-400 text-[15px]">
                <a href="tel:+16479485859" className="flex items-center gap-3 hover:text-brand-cyan transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
                  +1 647-948-5859
                </a>
                <a href="mailto:info@jphomecomfort.ca" className="flex items-center gap-3 hover:text-brand-cyan transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7L12 13L22 7"/></svg>
                  info@jphomecomfort.ca
                </a>
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"/><circle cx="12" cy="9" r="3"/></svg>
                  Greater Toronto Area, ON
                </div>
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6V12L16 14"/></svg>
                  Mon–Sat 8AM–8PM
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} JP Home Comfort. All rights reserved.</p>
            <p className="text-slate-500 text-sm italic">Comfort You Can Count On</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
