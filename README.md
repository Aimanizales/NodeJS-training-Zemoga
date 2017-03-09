# zTraining (NodeJS)
[ZEM-NodeJS training](https://bitbucket.org/zemoga/zem-nodejs-training/wiki/Home)

## Introducción
- [Github NodeJS](https://github.com/nodejs/node)
- Está escrito en C++.
- Incluye varias librerías Core (V8 y libuv entre las más importantes).
- Soporta librerías escritas en C++ y su incorporación se hace mediante 'bindings'.

## Conceptos base

### Librerías Core (V8 y libuv)
- [Github V8](https://github.com/v8/v8) | [docs.libuv.org](http://docs.libuv.org/en/v1.x/) | [Github Libuv](https://github.com/libuv/libuv) 
- Librerías encargadas de convertir JS a código de máquina (?).
- Usada también por Chrome (también desarrollado en C++) como librería 'engine' de JS.

### Investigar:
- 'Single thread': (se ejecuta línea por línea)
- 'Event loop': (la solución al single thread)

### Objeto `process`:
- [NodeJS process ref.](https://nodejs.org/api/process.html#process_process)
- Es un objeto global.
- Se puede utilizar en cualquier parte del programa (no depende de ningún contexto).
- provee información acerca del proceso actual y algunas características del sistema donde se está ejecutando.
- `node -p process` muestra todo el objeto process
- `node -p process.env` muestra información del entorno donde se está ejecutando el proceso actual de node
- También se puede almacenar información.
- Esas variables se pueden establecer en el sistema y no en el código fuente de la app. Ej:
```
node
var port = process.env.PORT || 3000;
console.log(port);
```


## REPL
- (Read Eval Print Loop)

Comandos:
 - `TAB`
 - `.break`
 - `.editor`
 - `.load [file-name]`
 - `.save [file-name]`
 - `.help`
