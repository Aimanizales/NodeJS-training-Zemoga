# zTraining (NodeJS)
[ZEM-NodeJS training](https://bitbucket.org/zemoga/zem-nodejs-training/wiki/Home)

## Introducción

### 1. NodeJS
- [Código fuente](https://github.com/nodejs/node)
- Está escrito en C++.
- Incluye varias librerías Core (V8 y libuv enntre las más importantes).
- Soporta librerías escritas en C++ y su incorporación se hace mediante 'bindings'.

### 2. V8
- [Código fuente](https://github.com/v8/v8)
- Librería encargada de convertir JS a código de máquina (?).
- Usada también por Chrome (también desarrollado en C++) como librería 'engine' de JS.
- 'Single thread': (se ejecuta línea por línea)
- 'Event loop': (la solución al single thread)

### 3. Libuv 
- [libuv.org](http://docs.libuv.org/en/v1.x/) | [github](https://github.com/libuv/libuv) 
- Otra librería similar a V8 


## REPL
- (Read Eval Print Loop)

Comandos:
 - `TAB`
 - `.break`
 - `.editor`
 - `.load [file-name]`
 - `.save [file-name]`
 - `.help`

## Librerias Core y objeto Process

