// ============================================
// TAMIR SUPREMO - JAVASCRIPT INTERACTIVO
// ============================================

// Scroll suave para navegación
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Manejo del formulario de contacto
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Aquí puedes enviar los datos a un servidor
    console.log('Formulario enviado:', {
        nombre: form.elements[0].value,
        email: form.elements[1].value,
        mensaje: form.elements[2].value
    });
    
    // Mostrar mensaje de éxito
    alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.');
    form.reset();
}

// Gráfico de Resonancia Adaptativa
function initRAChart() {
    const ctx = document.getElementById('raChart');
    if (!ctx) return;
    
    const data = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8'],
        datasets: [
            {
                label: 'Resonancia Adaptativa (RA)',
                data: [7.2, 7.8, 8.1, 8.5, 8.8, 9.0, 9.1, 9.1],
                borderColor: '#0066ff',
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#00d4ff',
                pointBorderColor: '#0066ff',
                pointBorderWidth: 2
            },
            {
                label: 'Precisión Sybil (%)',
                data: [92, 93.5, 94.2, 95.1, 96.0, 96.8, 97.2, 97.2],
                borderColor: '#00d4ff',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#0066ff',
                pointBorderColor: '#00d4ff',
                pointBorderWidth: 2
            }
        ]
    };
    
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#b0b8c8',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#b0b8c8'
                    },
                    grid: {
                        color: 'rgba(26, 31, 58, 0.5)'
                    }
                },
                x: {
                    ticks: {
                        color: '#b0b8c8'
                    },
                    grid: {
                        color: 'rgba(26, 31, 58, 0.5)'
                    }
                }
            }
        }
    });
}

// Gráficos de patrones Sybil
function initPatternCharts() {
    // Wallet Farm
    const chartWalletFarm = document.getElementById('chart-walletfarm');
    if (chartWalletFarm) {
        new Chart(chartWalletFarm, {
            type: 'bar',
            data: {
                labels: ['Txns', 'Intervalo (min)', 'Risk Score'],
                datasets: [{
                    label: 'Indicadores',
                    data: [150, 15, 85],
                    backgroundColor: ['#ff3333', '#ff6666', '#ff9999'],
                    borderRadius: 5
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        ticks: { color: '#b0b8c8' },
                        grid: { color: 'rgba(26, 31, 58, 0.5)' }
                    },
                    y: {
                        ticks: { color: '#b0b8c8' },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Airdrop Hunter
    const chartAirdrop = document.getElementById('chart-airdrop');
    if (chartAirdrop) {
        new Chart(chartAirdrop, {
            type: 'doughnut',
            data: {
                labels: ['ERC20 Txns', 'Otros'],
                datasets: [{
                    data: [80, 20],
                    backgroundColor: ['#ffa500', 'rgba(255, 165, 0, 0.2)'],
                    borderColor: '#1a1f3a'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        labels: { color: '#b0b8c8' }
                    }
                }
            }
        });
    }

    // Wash Trading
    const chartWash = document.getElementById('chart-wash');
    if (chartWash) {
        new Chart(chartWash, {
            type: 'radar',
            data: {
                labels: ['Ratio', 'Frecuencia', 'Direcciones', 'Volumen', 'Patrón'],
                datasets: [{
                    label: 'Wash Trading Score',
                    data: [95, 88, 92, 85, 90],
                    borderColor: '#ff6666',
                    backgroundColor: 'rgba(255, 102, 102, 0.2)',
                    pointBackgroundColor: '#ff6666'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        ticks: { color: '#b0b8c8' },
                        grid: { color: 'rgba(26, 31, 58, 0.5)' }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: '#b0b8c8' }
                    }
                }
            }
        });
    }

    // Contract Spam
    const chartSpam = document.getElementById('chart-spam');
    if (chartSpam) {
        new Chart(chartSpam, {
            type: 'bar',
            data: {
                labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5'],
                datasets: [{
                    label: 'Contratos Interactuados',
                    data: [5, 12, 18, 15, 22],
                    backgroundColor: '#ffc107',
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        ticks: { color: '#b0b8c8' },
                        grid: { color: 'rgba(26, 31, 58, 0.5)' }
                    },
                    y: {
                        ticks: { color: '#b0b8c8' },
                        grid: { color: 'rgba(26, 31, 58, 0.5)' }
                    }
                }
            }
        });
    }

    // Temporal Clustering
    const chartTemporal = document.getElementById('chart-temporal');
    if (chartTemporal) {
        new Chart(chartTemporal, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                datasets: [{
                    label: 'Transacciones por Hora',
                    data: [2, 8, 15, 45, 38, 12, 3],
                    borderColor: '#ffc107',
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#ffc107'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        ticks: { color: '#b0b8c8' },
                        grid: { color: 'rgba(26, 31, 58, 0.5)' }
                    },
                    y: {
                        ticks: { color: '#b0b8c8' },
                        grid: { color: 'rgba(26, 31, 58, 0.5)' }
                    }
                }
            }
        });
    }
}

// Animación de números
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-value');
    
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseFloat(finalValue);
        
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 50;
            
            const interval = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    stat.textContent = finalValue;
                    clearInterval(interval);
                } else {
                    if (finalValue.includes('%')) {
                        stat.textContent = currentValue.toFixed(1) + '%';
                    } else if (finalValue.includes('/')) {
                        stat.textContent = currentValue.toFixed(1) + '/10';
                    } else if (finalValue.includes('ms')) {
                        stat.textContent = Math.round(currentValue) + 'ms';
                    } else {
                        stat.textContent = currentValue.toFixed(1);
                    }
                }
            }, 30);
        }
    });
}

// Efecto parallax
function handleParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (hero) {
            hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
        }
    });
}

// Menú hamburguesa responsivo
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// Cerrar menú al hacer clic en un enlace
function closeMenuOnLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.style.display = 'none';
            }
        });
    });
}

// Efecto de scroll suave en la navegación
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌌 TAMIR SUPREMO iniciado');
    
    // Inicializar gráficos
    initRAChart();
    initPatternCharts();
    
    // Inicializar animaciones
    animateNumbers();
    
    // Inicializar efectos
    handleParallax();
    
    // Inicializar menú móvil
    initMobileMenu();
    closeMenuOnLink();
    
    // Scroll suave
    smoothScroll();
    
    // Agregar clase activa al navegar
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Manejo de errores global
window.addEventListener('error', (event) => {
    console.error('Error global:', event.error);
});

// Log de rendimiento
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('⚡ Tiempo de carga: ' + pageLoadTime + 'ms');
});

