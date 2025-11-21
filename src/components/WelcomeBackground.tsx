
export function WelcomeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-100 via-purple-100 to-fuchsia-100 dark:from-[#1a1625] dark:via-[#151220] dark:to-[#1a1625] overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 30%, hsl(260 80% 95% / 0.5), transparent 40%), radial-gradient(circle at 75% 70%, hsl(300 80% 95% / 0.5), transparent 40%)',
        }}
      ></div>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="absolute top-[20%] left-[20%] animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]">
          {/* Spectacles */}
          <svg width="150" height="50" viewBox="0 0 150 50" className="opacity-40 dark:opacity-20 -rotate-12">
            <circle cx="25" cy="25" r="20" stroke="hsl(240 30% 70% / 0.8)" strokeWidth="2.5" fill="none" />
            <circle cx="125" cy="25" r="20" stroke="hsl(240 30% 70% / 0.8)" strokeWidth="2.5" fill="none" />
            <path d="M45 25 H 105" stroke="hsl(240 30% 70% / 0.8)" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="absolute bottom-[15%] right-[15%] animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite]">
          {/* Coffee Mug */}
          <svg width="120" height="140" viewBox="0 0 120 140" className="opacity-50 dark:opacity-30">
            <g transform="translate(10, 10)">
              <path d="M10 20 H 90 V 100 C 90 111 81 120 70 120 H 30 C 19 120 10 111 10 100 V 20 Z" fill="hsl(0 0% 98% / 0.8)" stroke="hsl(240 10% 80%)" strokeWidth="2" />
              <path d="M90 40 H 105 C 115 40 115 80 105 80 H 90" stroke="hsl(240 10% 80%)" strokeWidth="2" fill="none"/>
              {/* Vapours */}
              <path d="M30 15 Q 35 5 40 15 T 50 15" stroke="hsl(240 10% 80% / 0.7)" strokeWidth="2" fill="none" className="animate-[pulse_4s_ease-in-out_infinite]"/>
              <path d="M55 12 Q 60 2 65 12 T 75 12" stroke="hsl(240 10% 80% / 0.7)" strokeWidth="2" fill="none" className="animate-[pulse_4s_ease-in-out_1s_infinite]"/>
            </g>
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px]">
          {/* Notebook */}
          <svg width="200" height="150" viewBox="0 0 200 150" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 dark:opacity-40">
            <g transform="rotate(-10 100 75)">
              <path d="M10 140 Q100 -10 190 140" fill="hsl(0 0% 98% / 0.8)" stroke="hsl(240 10% 80%)" strokeWidth="2"/>
              <path d="M100 10 V 135" stroke="hsl(240 10% 80%)" strokeWidth="1.5" />
            </g>
          </svg>
          {/* Pencil */}
           <svg width="180" height="20" viewBox="0 0 180 20" className="absolute top-[30%] right-[-10%] -rotate-[30deg] opacity-40 dark:opacity-20">
             <path d="M10 10 H 170" stroke="hsl(50 80% 70% / 0.9)" strokeWidth="8" strokeLinecap="round"/>
             <path d="M170 10 L 175 6 L 175 14 Z" fill="hsl(30 20% 80%)"/>
             <path d="M10 10 L 5 6 L 5 14 Z" fill="hsl(0 60% 80%)"/>
          </svg>
        </div>

        {/* Flying Pages */}
        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
            <div className="absolute top-[40%] left-[35%] w-10 h-8 bg-white/80 rounded-sm -rotate-12 opacity-60 animate-[pulse_6s_ease-in-out_infinite]"></div>
            <div className="absolute top-[35%] left-[60%] w-12 h-10 bg-white/80 rounded -rotate-45 opacity-50 animate-[pulse_8s_ease-in-out_1s_infinite]"></div>
            <div className="absolute top-[60%] left-[40%] w-8 h-6 bg-white/80 rounded-sm rotate-20 opacity-70 animate-[pulse_7s_ease-in-out_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
