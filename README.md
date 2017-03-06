# zTraining (NodeJS)
[ZEM-NodeJS training](https://bitbucket.org/zemoga/zem-nodejs-training/wiki/Home)

## Introducción
- [Github NodeJS](https://github.com/nodejs/node)
- Está escrito en C++.
- Incluye varias librerías Core (V8 y libuv entre las más importantes).
- Soporta librerías escritas en C++ y su incorporación se hace mediante 'bindings'.

## Librerías Core (V8 y libuv)
### V8
- [Github V8](https://github.com/v8/v8)
- Librería encargada de convertir JS a código de máquina (?).
- Usada también por Chrome (también desarrollado en C++) como librería 'engine' de JS.
- 'Single thread': (se ejecuta línea por línea)
- 'Event loop': (la solución al single thread)

### Libuv 
- [docs.libuv.org](http://docs.libuv.org/en/v1.x/) | [Github Libuv](https://github.com/libuv/libuv) 
- Otra librería similar a V8 



## Objeto Process
- Es un objeto global (se puede utilizar en cualquier parte del programa, pues no depende de ningún contexto).



## REPL
- (Read Eval Print Loop)

Comandos:
 - `TAB`
 - `.break`
 - `.editor`
 - `.load [file-name]`
 - `.save [file-name]`
 - `.help`
