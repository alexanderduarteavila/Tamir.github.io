// =========================================================
// TAMIR-DUARTE - JAVASCRIPT INTERACTIVO
// Autor: Daniel Duarte
// Evolución y Mantenimiento Autónomo: Manus AI
// =========================================================

// Cargar estado del sistema al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadSystemStatus();
    loadChecklist();
    initChart();
});

// Cargar el estado del sistema
async function loadSystemStatus() {
    try {
        const response = await fetch('/api/status');
        const data = await response.json();
        
        document.getElementById('estado-nucleo').textContent = data.estado_nucleo;
        document.getElementById('total-analisis').textContent = data.metricas.total_analisis;
        document.getElementById('eficiencia-promedio').textContent = 
            (data.metricas.eficiencia_promedio * 100).toFixed(1) + '%';
        document.getElementById('patrones-aprendidos').textContent = data.metricas.patrones_aprendidos;
    } catch (error) {
        console.error('Error al cargar el estado del sistema:', error);
    }
}

// Cargar el checklist AIPE
async function loadChecklist() {
    try {
        const response = await fetch('/api/checklist');
        const data = await response.json();
        
        const container = document.getElementById('checklist-container');
        container.innerHTML = '';
        
        for (const [anexo, info] of Object.entries(data)) {
            const item = document.createElement('div');
            item.className = 'checklist-item';
            
            const status = info.completado ? '✅' : '⏳';
            item.innerHTML = `
                <h4>${status} ${anexo}</h4>
                <ul>
                    ${info.tareas.map(tarea => `<li>• ${tarea}</li>`).join('')}
                </ul>
            `;
            
            container.appendChild(item);
        }
    } catch (error) {
        console.error('Error al cargar el checklist:', error);
    }
}

// Inicializar gráfico de eficiencia
function initChart() {
    const ctx = document.getElementById('eficiencia-chart').getContext('2d');
    
    // Datos simulados (en el futuro, esto se cargará desde la API)
    const data = {
        labels: ['Ciclo 1', 'Ciclo 2', 'Ciclo 3', 'Ciclo 4', 'Ciclo 5', 'Ciclo 6'],
        datasets: [{
            label: 'Eficiencia del Sistema (%)',
            data: [75, 78, 82, 85, 88, 92],
            borderColor: '#00d4ff',
            backgroundColor: 'rgba(0, 212, 255, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
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
                        color: '#e0e6ed'
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
                        color: 'rgba(176, 184, 200, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#b0b8c8'
                    },
                    grid: {
                        color: 'rgba(176, 184, 200, 0.1)'
                    }
                }
            }
        }
    });
}

// Probar conexión con Notion
async function testNotion() {
    try {
        const response = await fetch('/api/notion/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: 'test' })
        });
        const data = await response.json();
        alert('Conexión con Notion: ' + (data.error ? 'Error' : 'Exitosa'));
    } catch (error) {
        alert('Error al conectar con Notion: ' + error.message);
    }
}

// Probar conexión con Gemini
async function testGemini() {
    try {
        const response = await fetch('/api/gemini/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: 'Hola, ¿estás funcionando?' })
        });
        const data = await response.json();
        alert('Conexión con Gemini: ' + (data.error ? 'Error' : 'Exitosa'));
    } catch (error) {
        alert('Error al conectar con Gemini: ' + error.message);
    }
}

// Probar conexión con Google Colab
async function testColab() {
    try {
        const response = await fetch('/api/colab/status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ execution_id: 'test' })
        });
        const data = await response.json();
        alert('Conexión con Google Colab: ' + (data.error ? 'Error' : 'Exitosa (Simulado)'));
    } catch (error) {
        alert('Error al conectar con Google Colab: ' + error.message);
    }
}

// Ejecutar comando en la consola
async function executeCommand() {
    const input = document.getElementById('command-input');
    const command = input.value.trim();
    
    if (!command) return;
    
    const output = document.getElementById('console-output');
    output.innerHTML += `<div style="color: #00d4ff;">$ ${command}</div>`;
    
    // Aquí se implementaría la lógica para ejecutar comandos reales
    // Por ahora, solo mostramos un mensaje de confirmación
    output.innerHTML += `<div>Comando recibido. Implementación pendiente.</div>`;
    
    input.value = '';
    output.scrollTop = output.scrollHeight;
}

// Permitir ejecutar comandos con Enter
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                executeCommand();
            }
        });
    }
});
