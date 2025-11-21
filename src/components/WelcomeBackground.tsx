
'use client';

import Image from 'next/image';

const studyElements = [
  {
    id: 'notebook',
    src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Open notebook with a pen',
    className: 'absolute top-[15%] left-[10%] w-48 h-auto -rotate-12 animate-[pulse_10s_ease-in-out_infinite]',
    width: 400,
    height: 267,
  },
  {
    id: 'coffee',
    src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'A cup of coffee with latte art',
    className: 'absolute top-[25%] right-[10%] w-32 h-auto rotate-6 animate-[pulse_9s_ease-in-out_infinite]',
    width: 400,
    height: 600,
  },
  {
    id: 'pencil-cup',
    src: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'A cup holding pens and pencils',
    className: 'absolute bottom-[20%] left-[15%] w-36 h-auto -rotate-6 animate-[pulse_11s_ease-in-out_infinite]',
    width: 400,
    height: 267,
  },
  {
    id: 'books',
    src: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'A stack of vintage books',
    className: 'absolute bottom-[15%] right-[15%] w-40 h-auto rotate-12 animate-[pulse_12s_ease-in-out_infinite]',
    width: 400,
    height: 286,
  },
];


export function WelcomeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-100 via-purple-100 to-fuchsia-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-fuchsia-900/30 overflow-hidden">
        <div
            className="absolute inset-0 z-0 bg-pan"
            style={{
            backgroundImage:
                'radial-gradient(circle at 25% 30%, hsl(260 80% 95% / 0.05), transparent 40%), radial-gradient(circle at 75% 70%, hsl(300 80% 95% / 0.05), transparent 40%)',
            }}
        ></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
            {studyElements.map((item) => (
            <div key={item.id} className={item.className}>
                <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="object-cover rounded-lg shadow-xl"
                />
            </div>
            ))}
      </div>
    </div>
  );
}
