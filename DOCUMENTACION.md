# 🌳 Documentación del Sistema TAMIR-DUARTE

**Versión:** 13.1 (Evolución Autónoma)
**Autor:** Daniel Duarte
**Mantenimiento:** Manus AI

---

## 1. Arquitectura General

El sistema TAMIR-DUARTE está compuesto por un backend robusto construido con **Flask** y una interfaz de usuario web moderna. La lógica central reside en el `VidaCoreEvolucionado`, un motor de pensamiento cuádruple que ha sido expandido para soportar nuevas capacidades.

- **Backend:** `app.py` (servidor Flask), `tamir_core.py` (lógica principal), y módulos de integración.
- **Frontend:** `templates/index.html`, `static/css/styles.css`, `static/js/main.js`.
- **Dependencias:** `requirements.txt`.

## 2. API Endpoints

A continuación se detallan los endpoints disponibles en el servidor.

### 2.1. Endpoints del Núcleo

| Método | Ruta                  | Descripción                                       |
|--------|-----------------------|---------------------------------------------------|
| GET    | `/api/status`         | Devuelve el estado actual y métricas del sistema. |
| GET    | `/api/health`         | Endpoint de verificación de salud.                |
| GET    | `/api/checklist`      | Obtiene el estado actual del checklist AIPE.      |
| POST   | `/api/task/update`    | Actualiza el estado de una tarea del checklist.   |
| POST   | `/api/reinicia-ciclo` | Reinicia el ciclo de evolución del motor.         |

### 2.2. Comandos de Orquestación

| Método | Ruta                   | Descripción                                       |
|--------|------------------------|---------------------------------------------------|
| POST   | `/api/objective`       | Establece un nuevo objetivo estratégico.          |
| GET    | `/api/history/export`  | Exporta el historial de análisis.                 |
| GET    | `/api/integrity`       | Realiza un chequeo de integridad del sistema.     |
| POST   | `/api/memory/purge`    | Purga la memoria de corto plazo del motor.        |

### 2.3. Procesamiento de Archivos

| Método | Ruta                | Descripción                                                                 |
|--------|---------------------|-----------------------------------------------------------------------------|
| POST   | `/api/process_file` | Procesa archivos (`.txt`, `.md`, `.py`, `.csv`) para extraer conocimiento. |

### 2.4. Integraciones Externas

| Método | Ruta                    | Descripción                                      |
|--------|-------------------------|--------------------------------------------------|
| POST   | `/api/notion/search`    | Realiza una búsqueda en Notion.                  |
| POST   | `/api/notion/fetch`     | Obtiene detalles de una página de Notion.        |
| POST   | `/api/notion/create`    | Crea una nueva página en Notion.                 |
| POST   | `/api/notion/update`    | Actualiza una página de Notion.                  |
| POST   | `/api/gemini/ask`       | Realiza una consulta a la API de Gemini.         |
| POST   | `/api/gemini/narrative` | Genera una narrativa con Gemini.                 |
| POST   | `/api/colab/execute`    | Ejecuta un notebook de Google Colab (simulado).  |
| POST   | `/api/colab/status`     | Verifica el estado de una ejecución de Colab.    |

## 3. Interfaz de Usuario

La nueva interfaz web, accesible en la URL principal, proporciona un dashboard interactivo para monitorear y controlar el sistema. Incluye:

- **Dashboard:** Métricas en tiempo real y gráficos históricos.
- **Checklist AIPE:** Visualización del progreso.
- **Integraciones:** Pruebas de conexión con servicios externos.
- **Consola de Comandos:** Interfaz para ejecutar comandos (en desarrollo).

En el pie de página de la interfaz se muestra permanentemente el reconocimiento de autoría a **Daniel Duarte**.
