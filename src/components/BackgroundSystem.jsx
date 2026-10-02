export function BackgroundSystem() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-bg-dark">
       
       {/* Subtle radial tonal variation (Cool tone, reduced opacity and area) */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_10%,rgba(12,18,25,0.4),rgba(8,8,8,0)_30%)]"></div>
       
       {/* Fine editorial grid lines */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[4rem_4rem] md:bg-size-[6rem_6rem]"></div>
       
       {/* Occasional structural lines */}
       <div className="hidden lg:block absolute left-[10%] xl:left-[15%] top-0 bottom-0 w-px bg-white/3"></div>
       <div className="hidden lg:block absolute right-[10%] xl:right-[15%] top-0 bottom-0 w-px bg-white/3"></div>
       
       <div className="absolute top-[30%] left-0 right-0 h-px bg-white/2"></div>

       {/* Faint technical coordinate markings */}
       <div className="hidden lg:block absolute top-[30%] left-[10%] xl:left-[15%] -translate-x-full pr-4 text-[10px] font-mono text-white/10 -translate-y-1/2 tracking-widest">
         LAT. 40.7128 //
       </div>
       <div className="hidden lg:block absolute top-[70%] right-[10%] xl:right-[15%] translate-x-full pl-4 text-[10px] font-mono text-white/10 translate-y-1/2 tracking-widest">
         // SYS.ACTIVE
       </div>

       {/* Sparse red accent lines */}
       <div className="absolute left-[5%] lg:left-[10%] xl:left-[15%] top-[10%] w-px h-32 bg-accent-red/20"></div>
       <div className="absolute right-[5%] lg:right-[10%] xl:right-[15%] bottom-[20%] w-px h-48 bg-accent-red/10"></div>
       
       {/* Vignette fade out to base dark at the edges */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#080808_100%)]"></div>
    </div>
  );
}
