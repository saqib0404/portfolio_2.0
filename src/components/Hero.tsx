"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import Navigation from "./Navigation";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pixel-text-anim",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", stagger: 0.1 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <h1 className="text-[12vw] font-pixel font-black tracking-tighter uppercase leading-none text-muted-gray/10 dark:text-primary/10">
          DEVELOPER
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-20">
        <h1 ref={textRef} className="text-[12vw] font-pixel font-black tracking-tighter uppercase leading-none pixel-text pixel-text-anim">
          DEVELOPER
        </h1>
      </div>
      
      <motion.div style={{ y }} className="relative z-10 w-full max-w-4xl px-4 flex justify-center items-end h-[716px]">
        <img 
          alt="Portrait of David Smith" 
          className="h-full object-contain filter grayscale-[20%] drop-shadow-2xl translate-y-4" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfncUC_NJDJ3vB3C3qm5q8Sd6AxFiswEjsxnejVmnAvZqhOwI1bhqjhrbQx7KfGKmKQ2fSBiezCOLP2x6kChbsdon-qXMV6Xrs3ANqXFWI2hvaQmQOvz0XCyGVwRvmR7GDPCJGwIEWbFIDdRccZH_a9-EHIYRIWQpJ33gm1DTMhcJAyg9-_FxEqGOQZcUEvMPjH4a7DMCmgyV9uu_Eq9cT4FO_3MonIjl0lOjxxsJUQ_haxPuWfzR9rh3ugalHKI4bh3dOWlg61uY"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-10 md:left-[10%] top-[60%] z-30 hidden sm:block"
      >
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-muted-gray">100+ Completed Projects</p>
          </div>
          <div className="relative">
            <div className="w-12 h-[1px] bg-primary"></div>
            <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-10 md:right-[10%] top-[55%] z-30 hidden sm:block"
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-[1px] bg-primary"></div>
            <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
          </div>
          <div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 rounded-xl border border-primary/20 max-w-[200px]">
            <p className="text-lg font-bold text-primary">3 Years of Experience</p>
            <p className="text-xs text-muted-gray mt-1 leading-relaxed">
              With a strong foundation in full-stack development, I bring innovative solutions to every project.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-10 z-30 flex gap-4 text-muted-gray"
      >
        <a className="hover:text-primary transition-colors" href="#"><img alt="Facebook" className="w-5 h-5 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK_pmE8HenNveCP5NE2Z_R7LOOS8K_Gdv8tiPHvj8nazlcUu2dTrgf0MLPaJjJR67mptv0jwpVYcb3SCgQw1Aa124UqOiFEGech3Du9Lp3gN2HpWpgsLmdRnBBU4_F841Yc2zHtTHH-3hgfoIWpnfa85sGdIAYr-P1q89bdPQbGSS3sAoZGlECBAkrfZSmD-AEFQvGcvKJPJtBpmuZqXHiiCai58NaucEngsRd2RdJPa3wqQ6f8nxpGtSE70zubxeFcdI8Ab6Bmag"/></a>
        <a className="hover:text-primary transition-colors" href="#"><img alt="YouTube" className="w-5 h-5 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfdqQZS04B8-FYenz6BXP4mduTHyHxz-Zc61VXDlaXksMlfZYlebwruJRodONdEBg8wdyG-t2xbeX2L7KFxZGwW8aYu7vS8tj16ew3YvElSlzeJZxhLYvOgy_hDEQXsbWUWBx-G_d4vrQn0P9HJ3IkU_OnRfILIV8ZNFHPrbwOqBQ5LSibAmhZND34y7A50FXpwKobbKmnJ99mZcsi6q4Gv81_8-W2_47wBhuytbwEq4ZrR119N0hBm-acSsYrbXqgjMRPFKmDtrk"/></a>
        <a className="hover:text-primary transition-colors" href="#"><img alt="LinkedIn" className="w-5 h-5 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC67tddrs6Cp3TeKEesDSURKv-OU9qvwwXpNlbTWAKSAzYA36dfg8nJiR5d0gIxcBFhFBu34e-_Fl_BOziCIULL34CmEGs_5lgM3RwWRBTOw7V27i7AzTcunL6fr4llOlTH8_eplZaqH1dr8I4LBOlr2QWOeOuJ1Hxd_tMsr_VsRmA_kkR0tbJ0TvvYaaOrdU4UcJPQjsfiHz0DQ-m3g8vXuaMCZLSPzyDNC2YQg1U8dMjJg_GHWQ3AnLzu-v2LphaIj_gxVT1q5yY"/></a>
        <a className="hover:text-primary transition-colors" href="#"><img alt="Instagram" className="w-5 h-5 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0s1fuAh5nmgDVaQMWyNdvKozQzNHjM9eDfkbwbO_HuErRCviEhRjheHxtaEkP_f954dEIEtGCRJ9HQjlB3XZOiHXAGV9Sd0GZIthSaKeLlbcjMwlCH2SxEDjww8PlFcWU_0dmxIb50NWX30cl939BZxzaPCg58Iiw2vmJ1u3itFg8tjGLcgFVyvRJzKxM_m6X-lSoa2XJtIBzwSa8HetUBXHbFAAmdUxL5LILuUFMqGu7vqSVnAuYUPPQXX2BSL9eJP8FPCU8VxA"/></a>
      </motion.div>

      <Navigation />
    </section>
  );
}
