
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import RotatingText from './RotatingText';

// Configuration for the walking animation
const config = {
  src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png',
  rows: 15,
  cols: 7
};

// Utils
const randomRange = (min: number, max: number) => min + Math.random() * (max - min);
const randomIndex = (array: any[]) => randomRange(0, array.length) | 0;
const removeFromArray = (array: any[], i: number) => array.splice(i, 1)[0];
const removeItemFromArray = (array: any[], item: any) => removeFromArray(array, array.indexOf(item));
const removeRandomFromArray = (array: any[]) => removeFromArray(array, randomIndex(array));
const getRandomFromArray = (array: any[]) => array[randomIndex(array) | 0];

// Peep Class
class Peep {
  image: HTMLImageElement;
  rect: number[];
  x: number = 0;
  y: number = 0;
  anchorY: number = 0;
  scaleX: number = 1;
  width: number = 0;
  height: number = 0;
  drawArgs: any[] = [];
  walk: gsap.core.Timeline | null = null;

  constructor({ image, rect }: { image: HTMLImageElement; rect: number[] }) {
    this.image = image;
    this.setRect(rect);
  }

  setRect(rect: number[]) {
    this.rect = rect;
    this.width = rect[2];
    this.height = rect[3];
    this.drawArgs = [
      this.image,
      ...rect,
      0, 0, this.width, this.height
    ];
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scaleX, 1);
    ctx.drawImage(
      this.drawArgs[0], // image
      this.drawArgs[1], // sx
      this.drawArgs[2], // sy
      this.drawArgs[3], // sWidth
      this.drawArgs[4], // sHeight
      this.drawArgs[5], // dx
      this.drawArgs[6], // dy
      this.drawArgs[7], // dWidth
      this.drawArgs[8]  // dHeight
    );
    ctx.restore();
  }
}

const StandOutCrowdCTA: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = document.createElement('img');
    const allPeeps: Peep[] = [];
    const availablePeeps: Peep[] = [];
    const crowd: Peep[] = [];

    const stage = {
      width: 0,
      height: 0,
    };

    // Tween Factories
    const resetPeep = ({ stage, peep }: { stage: any, peep: Peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      // using an ease function to skew random to lower values to help hide that peeps have no legs
      const offsetY = 100 - 250 * gsap.parseEase('power2.in')(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX;
      let endX;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY; // Store anchor for Z-sorting

      return {
        startX,
        startY,
        endX
      };
    };

    const normalWalk = ({ peep, props }: { peep: Peep, props: any }) => {
      const {
        startY,
        endX
      } = props;

      const xDuration = 10;
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, {
        duration: xDuration,
        x: endX,
        ease: 'none'
      }, 0);
      tl.to(peep, {
        duration: yDuration,
        repeat: xDuration / yDuration,
        yoyo: true,
        y: startY - 10
      }, 0);

      return tl;
    };

    const walks = [
      normalWalk,
    ];

    const render = () => {
      // Clear canvas
      canvas.width = canvas.width;
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);

      crowd.forEach((peep) => {
        peep.render(ctx);
      });

      ctx.restore();
    };

    const init = () => {
      createPeeps();
      resize();
      gsap.ticker.add(render);
      window.addEventListener('resize', resize);
    };

    const createPeeps = () => {
      const {
        rows,
        cols
      } = config;
      const {
        naturalWidth: width,
        naturalHeight: height
      } = img;
      const total = rows * cols;
      const rectWidth = width / rows;
      const rectHeight = height / cols;

      for (let i = 0; i < total; i++) {
        allPeeps.push(new Peep({
          image: img,
          rect: [
            (i % rows) * rectWidth,
            (i / rows | 0) * rectHeight,
            rectWidth,
            rectHeight,
          ]
        }));
      }
    };

    const resize = () => {
      if (canvasContainerRef.current) {
        stage.width = canvasContainerRef.current.clientWidth;
        stage.height = canvasContainerRef.current.clientHeight;
      }
      // Handle high DPI displays
      canvas.width = stage.width * devicePixelRatio;
      canvas.height = stage.height * devicePixelRatio;
      canvas.style.width = `${stage.width}px`;
      canvas.style.height = `${stage.height}px`;

      crowd.forEach((peep) => {
        peep.walk?.kill();
      });

      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);

      initCrowd();
    };

    const initCrowd = () => {
      while (availablePeeps.length) {
        // setting random tween progress spreads the peeps out
        const peep = addPeepToCrowd();
        if (peep && peep.walk) {
          peep.walk.progress(Math.random());
        }
      }
    };

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({
          peep,
          stage,
        })
      }).eventCallback('onComplete', () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });

      peep.walk = walk;

      crowd.push(peep);
      // Sort by anchorY for depth effect
      crowd.sort((a, b) => a.anchorY - b.anchorY);

      return peep;
    };

    const removePeepFromCrowd = (peep: Peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };



    img.onload = init;
    img.src = config.src;

    // Cleanup
    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener('resize', resize);
      crowd.forEach(peep => peep.walk?.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white flex flex-col items-center justify-center pt-20">

      {/* Content Section (Stacked on top) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mb-8">
        <h2 className="flex flex-col items-center gap-4 text-4xl md:text-6xl font-bold mb-6 text-neutral-900 tracking-tight">
          <p> Stand out from crowd</p>
          <RotatingText
            texts={['using', 'whatsapp']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-red-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

        </h2>

        <p className="text-xl md:text-2xl text-neutral-800 mb-8 max-w-2xl mx-auto font-medium">
          Marichi helps businesses sell, collect, onboard and support customers on WhatsApp with automation, routing, and CRM-grade visibility.

        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-neutral-800 transition-all hover:scale-105 shadow-lg">
            Get Started Free
          </button>
          <button className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-neutral-100 border border-neutral-200 transition-all hover:scale-105 shadow-lg">
            View Live Demo
          </button>
        </div>
      </div>

      {/* Canvas Layer (Stacked below) */}
      <div ref={canvasContainerRef} className="relative w-full h-[500px] overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full block"
          style={{ pointerEvents: 'none' }}
        />
        {/* Gradient fade at bottom to blend with footer if needed */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
      </div>

    </div>
  );
};

export default StandOutCrowdCTA;
