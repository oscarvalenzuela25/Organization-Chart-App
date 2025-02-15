# Organization Chart Client

## Proyecto propuesto como prueba técnica

### Pasos para levantar

1. Crear un archivo `.env`:

   - Copia el archivo `.env.example` y cámbiale el nombre a `.env`.

2. Configurar el archivo `.env`:

   - Dentro del archivo `.env`, debes setear la variable `VITE_API_URL` con el path que tienes en el backend. Por ejemplo, si estás levantando el backend localmente, podrías usar:
     ```
     VITE_API_URL=http://localhost:3001
     ```

3. Por ultimo, digital
   ```
     npm run devel
   ```
   ¡Y listo! Con esto tienes el proyecto levantado para probar.

### Deuda tecnica

- Falto agregar las lineas que unen a los card padres con los hijos, se tiene pensado utilizar la libreria `React Flow` que trabaja con nodos
