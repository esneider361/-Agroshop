@echo off
REM Agroshop - Abrir aplicación en navegador
setlocal enabledelayedexpansion

REM Obtener la ruta del directorio actual
set "SCRIPT_DIR=%~dp0"
set "INDEX_PATH=%SCRIPT_DIR%public\index.html"

REM Convertir ruta relativa a ruta absoluta
for /f %%A in ('cd') do set "ABS_PATH=%%A"

REM Crear URL file://
set "FILE_URL=file:///%INDEX_PATH:\=/%"

echo.
echo ============================================
echo   🌾 AGROSHOP - Tienda de Productos 
echo ============================================
echo.
echo Abriendo la aplicación en tu navegador...
echo.

REM Abrir en navegador predeterminado
start "" "!FILE_URL!"

echo ✓ La aplicación se abrió en tu navegador
echo.
echo Nota: Algunas funciones pueden limitarse sin un servidor.
echo Para funcionalidad completa, instala Node.js o Python.
echo.
pause
