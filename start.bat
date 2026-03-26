@echo off
echo Starting DSLD Training Module...
echo.
echo Open your browser to: http://localhost:3000
echo Press Ctrl+C to stop
echo.
cd /d "%~dp0"
npx serve out -l 3000
