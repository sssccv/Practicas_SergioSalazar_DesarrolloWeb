#  Patrones de Arquitectura: MVC, API REST y Microservicios

- ## ¿Qué es un patrón de Arquitectura?

Un patrón de arquitectura es la conceptualización de una solución genérica y reutilizable, aplicable a un problema de diseño de software en un contexto determinado, satisfaciendo las necesidades del negocio.

Los patrones arquitectónicos son la representación de las buenas prácticas y estructuras de diseño probadas, de modo que puedan reutilizarse.

> **"Un patrón arquitectónico es un conjunto de decisiones de diseño que se repiten en la práctica, que tienen características bien definidas y que pueden reutilizarse, describiendo así características de una arquitectura bien diferenciada."**

- ## Tipos de patrones de arquitectura de software

existen varios tipos de patrones de arquitectura de software, pero algunos de los más usados son:

1.  **Patrón de capas**

 Este patrón se puede utilizar para estructurar programas que se pueden descomponer en grupos de subtareas, cada una de las cuales se encuentra en un nivel particular de abstracción. Cada capa proporciona servicios a la siguiente capa superior.

 ![capas](/Fotos/capas.jpg)
 
---
2. **Patrón cliente-servidor (API)**

Este patrón consiste en dos partes; un servidor y múltiples clientes . El componente del servidor proporcionará servicios a múltiples componentes del cliente. Los clientes solicitan servicios del servidor y el servidor proporciona servicios relevantes a esos clientes. Además, el servidor sigue escuchando las solicitudes de los clientes.

![clienteservidor](fotos/cliente-servidor.jpg)

---
3. **Patrón maestro-esclavo**

Este patrón consiste en dos partes; maestro y esclavos . El componente maestro distribuye el trabajo entre componentes esclavos idénticos y calcula el resultado final de los resultados que devuelven los esclavos.

![maestro-esclavo](fotos/maestro-esclavo.jpg)

---
4. **Patrón de filtro de tubería**

Este patrón se puede usar para estructurar sistemas que producen y procesan una secuencia de datos. Cada paso de procesamiento se incluye dentro de un componente de filtro . Los datos que se procesarán se pasan a través de las tuberías . Estas tuberías se pueden utilizar para el almacenamiento en búfer o con fines de sincronización.

![filtro de tubería](fotos/filtro-rubería.jpg)

---
5. **Patrón del agente**

Este patrón se usa para estructurar sistemas distribuidos con componentes desacoplados. Estos componentes pueden interactuar entre sí mediante invocaciones de servicios remotos. Un componente de intermediario es responsable de la coordinación de la comunicación entre los componentes.

![agente](fotos/agente.jpg)

---

6. **Patrón de igual a igual**

En este patrón, los componentes individuales se conocen como pares . Los pares pueden funcionar tanto como un cliente , solicitando servicios de otros pares, y como un servidor , proporcionando servicios a otros pares. Un par puede actuar como un cliente o como un servidor o como ambos, y puede cambiar su rol dinámicamente con el tiempo.

![igual-igual](fotos/igual-igual.jpg)

---

7. **Patrón de modelo-vista-controlador**

Este patrón, también conocido como patrón MVC, divide una aplicación interactiva en 3 partes, como

- modelo — contiene la funcionalidad y los datos básicos
- vista : muestra la información al usuario (se puede definir más de una vista)
- controlador : maneja la entrada del usuario

Esto se hace para separar las representaciones internas de información de las formas en que se presenta y acepta la información del usuario. Desacopla los componentes y permite la reutilización eficiente del código.

![mvc](fotos/mvc.jpg)

---

8. **Patrón API REST**

Una API REST es una interfaz de programación de aplicaciones que sigue los principios de la arquitectura REST. Utiliza métodos HTTP estándar para realizar operaciones sobre los recursos disponibles, que pueden ser cualquier dato o contenido administrado por el servidor.

La idea central detrás de las API REST es proporcionar una interfaz uniforme para que los clientes interactúen con los recursos, garantizando la simplicidad y la escalabilidad de los servicios web.

![rest](fotos/rest.jpg)

---

9. **Patrón de microservicios**

Los microservicios son módulos ligeros con acople suelto que pueden servir como componentes básicos de las aplicaciones complejas basadas en la nube. Aunque los microservicios individuales pueden operar de forma independiente, tienen un acople suelto en una interfaz unificada.

La arquitectura de microservicios se considera un reemplazo moderno y flexible del modelo de desarrollo más tradicional de la arquitectura monolítica.

![foto](fotos/micro.jpg)


### Fuentes
- [Linkedin Patrones en la Arquitectura de Software](https://es.linkedin.com/pulse/patrones-en-la-arquitectura-de-software-elmo-renato-castro-ramirez)

- [patrones-comunes-de-arquitectura-de-software](https://medium.com/@maniakhitoccori/los-10-patrones-comunes-de-arquitectura-de-software-d8b9047edf0b)

- [Microservicios](https://www.atlassian.com/es/microservices/microservices-architecture)

- [API](https://www-browserstack-com.translate.goog/guide/rest-api?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=rq#:~:text=La%20arquitectura%20REST%20Representational%20State,servicios%20web%20escalables%20y%20flexibles.)
