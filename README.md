# zTraining (NodeJS)
[ZEM-NodeJS training](https://bitbucket.org/zemoga/zem-nodejs-training/wiki/Home) | [Github NodeJS](https://github.com/nodejs/node)

## 0. JavaScript
- **Es el lenguaje nativo de Node**.
- Esto le permite implementar una arquitectura llamada _"aplicaciones universales"_ (re-usar la lógica de negocio del lado del servidor para que se ejecute de igual manera en el cliente) 
- Esto da ventajas de SEO, performance y experiencia de usuario (Se debe analizar muy bien esta arquitectura antes de implementar).

## 1. NodeJS:
- Escrito en C++, Soporta librerías escritas en éste y su incorporación se hace mediante 'bindings'.
- Incluye varias librerías Core ([Libuv](https://github.com/libuv/libuv) y [V8](https://github.com/v8/v8) entre las más importantes) que son las encargadas de convertir JS a código de máquina (_engine_ o motor de interpretación).
- Usada también por Chrome (también desarrollado en C++) como librería 'engine' de JS.

## 2. Ejecutar código nodeJS 
Dada la naturaleza _single thread_ de V8 -es decir que se ejecuta línea por línea-, en nivel más alto Node JS se comporta como _"single thread"_.

Siempre se inicia con el comando `node` con dos variaciones:

1. Nombre del archivo como parámetro:
`node app.js`
2. Expresión directa **REPL (Read Eval Print Loop)**:
`node 1+1`
3. Se puede usar ENTER:
```js
node //ENTER
var a = 0; //ENTER
if (a === 0) { //ENTER
 console.log("a == 0"); //ENTER
} //ENTER
```

## 3. El objeto [`process`](https://nodejs.org/api/process.html#process_process):
- Es un **objeto global que se puede utilizar en cualquier parte del programa (no depende de ningún contexto)**.
- **Provee información acerca del proceso actual y algunas características del sistema donde se está ejecutando** y también **puede almacenar información**.
- `node -p process` muestra todo el objeto process
- `node -p process.env` muestra información del entorno donde se está ejecutando el proceso actual de node.
- Esas variables se pueden establecer en el sistema y no en el código fuente de la app. Ej:
```js
var port = process.env.PORT || 3000;
console.log(port);
```

## 4. Módulos:
- Uno de los aspectos más poderosos de Node JS.
- Permite **organizar el código, separar la responsabilidad, reutilizar el código y ejecutar pruebas independientes**.
- Utiliza la nomenclatura 'CommonJS' (diferente a la nomenclatura ES6 pero con la misma función).

### 4.1 Exportar módulos: (`sum.js` o `math.js`)
```js
//Sintaxis 1 (sum.js):
function sum(x, y) {return x+y;}
module.exports = sum; // module.exports es un objeto:

//Sintaxis 2:
module.exports.sum = function (x, y) {return x + y;}

//Sintaxis 3 (math.js):
module.exports = {
  sum: sum,
  sub: subtraction,
  pi: pi
}; // Se puede exportar funciones y variables
```

### 4.2 Importar módulos: (`app.js`)
```js
var sum = require('sum'); // Almacenar en variable llamando el nombre del archivo que contiente los export. No es necesario especificar la extensión '.js'

var sum = require('./sum'); // Módulo local. El archivo no se buscará en node_modules. Las rutas especificadas en el require son relativas; 

//Si el módulo requerido está en un nivel superior y dentro de otro directorio llamado utils ser escribiría de la siguiente manera:
var mathFunctions = require("./../utils/math");


var sum = require('./utils'); // Si no existe 'utils.js', entonces se buscará 'utils/index.js'
```
### 4.3 Usar módulos: (`app.js`)
```js
//Sintaxis 1: 
console.log(sum(1,2));

//Sintaxis 3:
console.log(mathFunctions.sum(40, 3));
```

## 5. Objects Globales y [`global`](https://nodejs.org/api/globals.html):
Existen varios **objetos y funciones globales que están disponibles en toda la aplicación de Node JS sin necesidad de incluir ningún módulo**: `process`, `console`, `exports`, `module`, `require` y `global`, que se encuentra en el nivel superior del "scope" en la aplicación de Node JS -similar a `window` en el browser-.


## 6. Blocking vs Non Blocking Code:
**Conceptos para entender:**
- V8 por ser "single thread" (línea por línea) no tiene ninguna opción para implementar operaciones asincrónicas como esperar una respuesta de la lectura de un archivo grande o una operación de red.
- "Event Loop" soluciona esto.
- La interacción del navegador es a base de eventos, pues los navegadores también implementan su propio "Event Loop".
- Chrome también utiliza V8 como "engine"
- Al existir el event loop, se crean dos conceptos:
  1. "Blocking code": se ejecuta línea por línea; tiene que esperar a que termine.
  2. "Non-Blocking code": este no.


## 7. Event Loop
- Permite a NodeJS realizar operaciones asíncronas (non-blocking) a pesar ser _single thread_, delegando operaciones al kernel del sistema -siempre que sea posible-.
- Cola de eventos (Queue) suscritos que NodeJS revisa constantemente para saber cuál de ellos terminó e invocar el código asociado a éste.
- [Understanding the Node.js Event Loop](https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/)
- [Understanding the Node.js Event Loop - Nodesource](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)


## 8. Eventos concurrentes y non-blocking
- La implementación de eventos asíncronos IO (input/output) permite manipular peticiones concurrentes (chats, aplicaciones basadas en microservicios, streaming de video, entre otros).
- Varios procesos pueden ejecutarse en paralelo sin que exista la necesidad de que en cada transmisión el proceso termine para que el siguiente se ejecute (non blocking).
- Esta arquitectura de eventos puede resultar natural para desarrolladores front-end que están acostumbrados a la naturaleza asíncrona de Javascript del lado de navegador (eventos de mouse, ajax, etc). 
- Pero para back-ends de Java o .NET esto puede parecer no tan natural ya que la naturaleza de **JS expone funciones de _primer orden_ que pueden manipularse como variables** permitiendo que **funciones puedan ser pasadas como argumentos en otras funciones**. Esto se conoce en inglés como _first-class citizens functions_.
- Ejemplo:
```js
const numbers = [2,4,1,5,4];
function isBiggerThanTwo (num) {  
  return num > 2;
}
numbers.filter(isBiggerThanTwo);
```


## Node y ES2015

NodeJS no puede estar al día con cada nuevo set de adiciones a JavaScript, lo que llevó a que se crearan herramientas como Babel que permiten convertir el código de una versión nueva a versiones anteriores que soporte Node o el navegador (transpilación). Este proceso sucede justo antes de correr la aplicación (Building).

### Estandarización EcmaScript (ES):

| Name | Date Release | Features |
|-:|-|-|
| ES4 | Never released | 
| ES5 | Dic-2009 | 'strict mode', JSON support
| ES5.1 | Jun-2011 | Editorial changes
| ES2015 (ES6) | Jun-2015 | Classes and Modules
| ES2016 (ES7) | 2016 | exponential operator (**), Array.prototypes.includes

Leer: 
- [https://en.wikipedia.org/wiki/ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)
- [https://en.wikipedia.org/wiki/Comparison_of_layout_engines_(ECMAScript)](https://en.wikipedia.org/wiki/Comparison_of_layout_engines_(ECMAScript))
- [https://nodejs.org/en/docs/es6/](https://nodejs.org/en/docs/es6/)

#### Babel:  Permite convertir el código de una versión nueva a versiones anteriores que soporte NodeJS o el navegador (transpilación). Este proceso sucede justo antes de correr la aplicación (Building).


## Pendiente:
- Comandos `TAB, .break, .editor, .load [file-name], .save [file-name], .help`