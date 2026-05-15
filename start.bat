@echo off
echo Testing terminal...
cd /d d:\work\test\ymx\ID-generator
echo Current directory:
dir
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting dev server...
call npm run dev