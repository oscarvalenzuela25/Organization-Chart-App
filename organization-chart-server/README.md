# Organization Chart Server

## Proyecto propuesto como prueba técnica

**BD:** SQLite

## Pasos para levantar

1. Crea un archivo `.env` o copia el `.env.example` que ya existe y cámbiale el nombre a `.env`.
2. Llena el contenido del `.env`, por ejemplo:

   ```
   PORT=3001
   ```

   Esto nos dará como resultado `http://localhost:3001`, es importante llenar el .env o sino el proyecto lanzara error, los .env son obligatorios.

3. Después, en la consola, situado dentro de la raíz de nuestro back, debemos correr las migraciones. Para eso usaremos el comando:

   ```
   npm run db:migrate
   ```

4. Si todo sale bien, ahora correremos los seeders para llenar con un poco de información la BD. Para mandar los seeders, el comando es:

   ```
   npm run db:seed:all
   ```

5. Si todo sale bien, estamos listos para levantar nuestro proyecto. Para levantar el proyecto, hay que correr el comando:
   ```
   npm run devel
   ```
   ¡Y listo!
