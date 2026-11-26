@echo off
setlocal
cd /d "%~dp0"

powershell -NoProfile -Command "try { (Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:4173/' -TimeoutSec 1) | Out-Null; exit 0 } catch { exit 1 }"
if %errorlevel%==0 (
  start "" "http://127.0.0.1:4173/"
  exit /b 0
)

py -3 -c "import sys; assert sys.version_info[0]>=3" >nul 2>&1
if %errorlevel%==0 (
  start "Todo Workbench Server" /min py -3 todo_server.py
) else (
  python -c "import sys; assert sys.version_info[0]>=3" >nul 2>&1
  if %errorlevel%==0 (
    start "Todo Workbench Server" /min python todo_server.py
  ) else (
    echo [ERROR] Python 3 not found in PATH. Please install Python 3 first.
    pause
    exit /b 1
  )
)

powershell -NoProfile -Command "for ($i=0; $i -lt 25; $i++) { try { (Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:4173/' -TimeoutSec 1) | Out-Null; exit 0 } catch { Start-Sleep -Milliseconds 200 } }; exit 1"
if %errorlevel% neq 0 (
  echo [ERROR] Local server did not respond on http://127.0.0.1:4173/ within 5 seconds.
  pause
  exit /b 1
)
start "" "http://127.0.0.1:4173/"
endlocal
