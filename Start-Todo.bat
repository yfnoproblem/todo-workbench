@echo off
setlocal
cd /d "%~dp0"

powershell -NoProfile -Command "try { (Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:4173/' -TimeoutSec 1) | Out-Null; exit 0 } catch { exit 1 }"
if %errorlevel%==0 (
  start "" "http://127.0.0.1:4173/"
  exit /b 0
)

where py >nul 2>&1
if %errorlevel%==0 (
  start "Todo Workbench Server" /min py -3 todo_server.py
) else (
  where python >nul 2>&1
  if %errorlevel%==0 (
    start "Todo Workbench Server" /min python todo_server.py
  ) else (
    echo [ERROR] Python 3 not found in PATH. Please install Python 3 first.
    pause
    exit /b 1
  )
)

powershell -NoProfile -Command "for ($i=0; $i -lt 25; $i++) { try { (Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:4173/' -TimeoutSec 1) | Out-Null; exit 0 } catch { Start-Sleep -Milliseconds 200 } }; exit 1"
start "" "http://127.0.0.1:4173/"
endlocal
