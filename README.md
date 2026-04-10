
🔵 Nivel 1: "Pequeños Inventores" (10-12 años)
Enfoque: Variables, prompt, alert y lógica básica.
El Saludo Mágico: Pide el nombre del usuario y devuelve un saludo que diga "¡Bienvenido al reino de [nombre]!".
Tip: Usa template literals con la tilde invertida (`) para mezclar texto y variables fácilmente.
Calculadora de Edad Perruna: Pide la edad de un perro y conviértela a "años humanos" (multiplicando por 7).
Tip: Recuerda que los datos de un prompt entran como texto; usa Number() para convertirlos.
Semáforo Inteligente: Pregunta un color (rojo, amarillo, verde) y muestra un mensaje indicando si debe parar, esperar o pasar.
Tip: Un if...else if...else es perfecto para decisiones con tres opciones.
El Número Secreto (Versión Simple): El programa tiene un número guardado (ej. 7). El usuario debe adivinarlo en un intento.
Tip: Usa == o === para comparar el intento del usuario con tu número.
Repetidor de Deseos: Pide un deseo y cuántas veces quieres que se cumpla. Muéstralo en pantalla esa cantidad de veces.
Tip: El ciclo for es tu mejor amigo aquí: for(let i = 0; i < cantidad; i++).

🟢 Nivel 2: "Exploradores de Código" (Adolescentes)
Enfoque: Bucles, arrays y funciones simples.
Lista de Supermercado: Crea un array con 3 productos. Permite al usuario añadir uno nuevo mediante código.
Tip: Usa el método .push() para agregar elementos al final de la lista.
Tabla de Multiplicar: Crea una función que reciba un número y muestre su tabla del 1 al 10 en la consola.
Tip: Dentro de la función, usa un bucle que multiplique el parámetro por el índice i.
Contador de Vocales: Pide una palabra y cuenta cuántas letras "a" tiene.
Tip: Recorre el string con un for como si fuera un array y usa un contador let count = 0.
Filtro de Mayores de Edad: Dado un array de edades [12, 18, 25, 10, 30], crea uno nuevo que solo tenga las mayores de 18.
Tip: Investiga el método .filter(), hace que el código sea mucho más limpio.
Conversor de Temperatura: Crea una función que convierta Celsius a Fahrenheit.
Tip: La fórmula es $F = (C \times 1.8) + 32$.

🟡 Nivel 3: "Desarrolladores Junior" (Jóvenes/Adultos)
Enfoque: Objetos, lógica matemática y manipulación de datos.
El Objeto Coche: Crea un objeto coche con propiedades (marca, modelo, encendido). Añade un método arrancar() que cambie encendido a true.
Tip: Usa la palabra clave this para acceder a las propiedades dentro del objeto.
Generador de Nombres de Usuario: Toma un nombre y apellido (ej. "Elon Musk") y genera un usuario como "emusk_dev".
Tip: Usa .toLowerCase(), .split() y accede a la primera posición del nombre.
FizzBuzz Clásico: Imprime números del 1 al 50. Si es múltiplo de 3 di "Fizz", si es de 5 "Buzz", y si es de ambos "FizzBuzz".
Tip: El operador residuo % es clave para saber si un número es divisible por otro.
Suma de Carrito: Tienes un array de objetos productos con nombre y precio. Calcula el total de la compra.
Tip: Puedes usar un forEach o el método .reduce() para acumular el costo total.
Validación de Password: Crea una función que verifique si un string tiene más de 8 caracteres y contiene al menos una letra "A".
Tip: Usa .length para el tamaño y .includes() para buscar la letra.

🔴 Nivel 4: "Arquitectos de Software" (Adultos)
Enfoque: Clases (POO), algoritmos y lógica avanzada.
Sistema de Biblioteca (Clases): Crea una clase Libro y una clase Usuario. El usuario debe tener un método tomarPrestado(libro).
Tip: Define un estado disponible (booleano) en el libro para que no se preste dos veces.
Adivina el Número (Versión Pro): El sistema genera un número aleatorio entre 1 y 100. El usuario tiene 5 intentos y el programa da pistas: "Más alto" o "Más bajo".
Tip: Usa Math.random() y Math.floor() para generar el número. Controla los intentos con un while.
Buscador de Palíndromos: Crea una función que identifique si una frase se lee igual al derecho y al revés (ej. "Anita lava la tina").
Tip: Limpia los espacios y usa .split('').reverse().join('') para comparar la versión invertida.
Simulador de Cajero Automático: Crea una función que reciba un monto y devuelva cuántos billetes de 50, 20 y 10 debe entregar.
Tip: Usa divisiones enteras y el operador residuo para ir restando del total.
Ordenamiento por Calificaciones: Dado un array de estudiantes con nombre y nota, ordénalos de mayor a menor según su calificación.
Tip: El método .sort((a, b) => b.nota - a.nota) es la forma más eficiente de lograrlo.


