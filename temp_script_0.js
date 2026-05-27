
    const resolveImagePath = (path, size = 'w500') => {
      if (!path) return 'assets/marvel_portal_poster.png';
      if (path.startsWith('assets/') || path.startsWith('./assets/') || path.startsWith('http')) {
        return path;
      }
      const trimmed = path.startsWith('/') ? path.slice(1) : path;
      if (trimmed.startsWith('assets/')) {
        return trimmed;
      }
      return `https://image.tmdb.org/t/p/${size}/${trimmed}`;
    };

    const handleImageError = (img) => {
      if (img.classList.contains('img-failed')) return;
      img.classList.add('img-failed');
      const fallbacks = [
        'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80', // Sci-Fi helmet mask
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', // Gothic spotlight city
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80', // Neon futuristic city
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', // Magical portal castle
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', // Bioluminescent ocean
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80'  // Atmospheric cinema curtains
      ];
      img.src = fallbacks[Math.floor(Math.random() * fallbacks.length)];
    };

    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            space: {
              950: '#030305',
              900: '#06060c',
              800: '#0c0c16',
              700: '#141424',
              600: '#1b1b2f',
            },
            cyber: {
              neon: '#a855f7',
              cyan: '#06b6d4',
              pink: '#ec4899',
            }
          },
          fontFamily: {
            sans: ['Outfit', 'sans-serif'],
            cinematic: ['Cinzel', 'serif'],
          },
          boxShadow: {
            'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            'neon-purple': '0 0 20px rgba(168, 85, 247, 0.6)',
            'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.6)',
          }
        }
      }
    }
  