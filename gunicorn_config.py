# Configuración de Gunicorn para TAMIR-DUARTE
# Autor: Daniel Duarte

bind = "0.0.0.0:5000"
workers = 4
worker_class = "sync"
timeout = 120
keepalive = 5
errorlog = "/home/ubuntu/gunicorn_error.log"
accesslog = "/home/ubuntu/gunicorn_access.log"
loglevel = "info"
