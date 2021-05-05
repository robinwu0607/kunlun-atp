start /b .\redis-server\redis-server .\redis-server\redis.conf
start /b .\venv\Scripts\python .\libs\workers\worker.py
.\venv\Scripts\python.exe kunlun.py
