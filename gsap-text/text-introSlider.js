import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";


const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      }).to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      }).from("#welcome", {
        opacity: 0,
        duration: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
      <div className="relative">
        <div ref={comp} id="intro-slider" className="absolute top-0 left-0 z-10 flex flex-col w-full h-screen gap-10 p-10 tracking-tight bg-gray-50 font-KodeMono">
          <h1 id='title-1' className="text-8xl">Frontend</h1>
          <h1 id='title-2' className="text-8xl">React Js</h1>
          <h1 id='title-3' className="text-8xl">React Native</h1>
        </div>
        <div className="flex justify-center h-screen bg-gray-950 place-items-center">
          <h1 id='welcome' className="font-semibold text-gray-200 text-8xl font-KodeMono">Seja bem vindo!</h1>
        </div>
      </div>
  );
}

export default App;