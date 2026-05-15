$ErrorActionPreference = "Continue"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Set-Location "d:\work\test\ymx\ID-generator"

Write-Host "=== Node version ===" -ForegroundColor Cyan
node --version

Write-Host "=== NPM version ===" -ForegroundColor Cyan
npm --version

Write-Host "=== Installing vite ===" -ForegroundColor Cyan
npm install vite @vitejs/plugin-vue vue vue-router

Write-Host "=== Checking node_modules ===" -ForegroundColor Cyan
if (Test-Path "node_modules") {
    Write-Host "node_modules exists" -ForegroundColor Green
    Get-ChildItem "node_modules" | Select-Object -First 10
} else {
    Write-Host "node_modules NOT found!" -ForegroundColor Red
}

Write-Host "=== Done ===" -ForegroundColor Cyan