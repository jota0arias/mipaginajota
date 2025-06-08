document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('botonMostrarCiervo');
  if (boton) {
    boton.addEventListener('click', () => {
      window.open('ingeniera.html', '_blank');
    });
  }

  // Partículas
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particlesArray = [];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 100;
      this.size = Math.random() * 2 + 1;
      this.speedY = Math.random() * 1 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.y -= this.speedY;
      if (this.y < 0) {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
    }
    draw() {
      ctx.fillStyle = `rgba(0,255,255,${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    particlesArray = [];
    for (let i = 0; i < 100; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', init);
  init();
  animate();
});
