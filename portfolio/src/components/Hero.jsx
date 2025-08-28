import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    // Particle animation setup
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = 'rgba(147, 197, 253, 0.3)'; // Soft blue to match primary theme
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000); // Adjust based on screen size
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'transparent' }}
      />

      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-6">
          <span
            className={`text-sm md:text-base font-medium opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.3s]' : ''
              }`}
          >
            👋 Hello, my name is
          </span>

          <h1
            className={`text-3xl md:text-5xl lg:text-6xl font-black opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.5s]' : ''
              }`}
          >
            <span className="text-primary">Janice Lavoga</span>
          </h1>

          <div
            className={`h-10 md:h-12 overflow-hidden opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.7s]' : ''
              }`}
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-muted-foreground">
              <span>Frontend Developer</span>
            </h2>
          </div>

          <p
            className={`text-muted-foreground max-w-lg text-base md:text-lg opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.9s]' : ''
              }`}
          >
            I build exceptional digital experiences that combine beautiful code with stunning design. Passionate about
            creating intuitive, responsive web applications.
          </p>

          <div
            className={`flex gap-4 mt-4 opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:1.1s]' : ''
              }`}
          >
            <Button asChild className="hover:opacity-90 rounded-full px-8 py-6">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-muted">
              <a href="https://wa.me/+254788663233" target="_blank" rel="noopener noreferrer">
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 hover:text-primary transition-colors ${isLoaded ? 'animate-fade-in [animation-delay:1.3s]' : ''
          }`}
      >
        <span className="text-sm">Scroll Down</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};