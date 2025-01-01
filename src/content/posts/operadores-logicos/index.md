---
title: Operadores lógicos de Python
published: 2025-01-01
description: "Comprende los operadores lógicos de Python"
image: "./blue.webp"
tags: ["Python", "Principiante", "Lógica"]
category: Tutorial
draft: false
---

> Imagen de <a href="https://pixabay.com/es/users/rostislavuzunov-8621397/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5457731">Rostislav Uzunov</a> en <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5457731">Pixabay</a>

Los operadores lógicos en **Python** son herramientas esenciales para tomar decisiones. Son
especialmente útiles cuando se necesita evaluar múltiples expresiones lógicas para determinar si
algo es verdadero o falso. Estos operadores funcionan con valores **booleanos** (verdadero o falso)
y suelen ser utilizados con mucha frecuencia en estructuras de control como los **if**, **while** o
**for**. Entenderlos es fundamental para saber escribir programas dinámicos y flexibles, pero hay
que tener cuidado porque un mal uso de estos puede hacer que el código sea muy difícil de mantener
y leer.

|Operador|Descripción|Ejemplo|
|--------|-----------|-------|
|and|Devuelve Tue si ambos son True|True and True = True|
|or|Devuelve True si al menos un elemento es True|True or False = True|
|not|Devuelve el booleano opuesto|not True = False|

## Operador and

El operador **and** evalúa si ambos valores son verdaderos (*True*) y si ese es el caso este
devolverá *True* ya si uno de los valores evaluados es falso (*False*), el resultado será *False*.

### EJemplo

En este ejemplo, primero evaluamos si **3 es mayor que 2**, lo cual es *True*. Luego evaluamos si
**2 es mayor que 3**, lo que resulta en *False*. Dado que una de las condiciones es *False*, el
operador lógico devolverá *False*, ya que requiere que ambas condiciones sean verdaderas. Sin
embargo, si cambiamos la segunda evaluación a: **2 es menor que 3**, el resultado sería *True*, ya
que ambas comparaciones son correctas.

```python
n1 = 3
n2 = 2

print(3 > 2 and 2 > 3) # False
print(3 > 2 and 2 < 3) # True
```

## Operador or

En este ejemplo, primero evaluamos si **3 es mayor que 2**, lo cual es *True*. Luego verificamos si
**2 es mayor que 3**, lo que resulta en *False*. Con el operador lógico or, basta con que una de
las condiciones sea verdadera para que el resultado sea *True*. Por lo tanto, aunque una comparación
sea falsa, el operador devolverá *True*.

```python
n1 = 3
n2 = 2

print(3 > 2 and 2 > 3) # True
print(3 > 2 and 2 < 3) # True
```

## Operador not

Aquí volvemos a usar el mismo ejemplo que con los operadores **and** y **or**, pero ahora
introducimos el operador not. Este operador invierte el resultado de una condición: si es *True*,
la convierte en *False*, y viceversa. Por lo tanto, le recomiendo comparar los resultados con el
ejemplo del operador and para observar cómo el operador not altera los resultados esperados.

```python
n1 = 3
n2 = 2

print(3 > 2 not 2 > 3) # True
print(3 > 2 not 2 < 3) # False
```

## Prioridad de los operadores

Para poder continuar con un ejemplo de cómo se pueden combinar, me gustaría aclarar que estos
operadores lógicos tienen una precedencia por defecto, aunque esta puede ser modificada.

|Operador|Prioridad|
|--------|---------|
|not|Mayor|
|and| |
|or|Menor|

> [!TIP]
> Puedes leer más en la documentación de Python. [Prioridad de operador](https://docs.python.org/es/3.13/reference/expressions.html#operator-precedence)

## Combinaciones

### and

```python
x = 5
y = 10

resultado = (x > 3) and (y < 15)
print(resultado)  # True
```

**Explicación:** Ambas condiciones deben ser *True* para que el resultado sea *True*. Aquí, 5 es
mayor que 3 y 10 es menor que 15, por lo que el resultado es *True*.

### or

```python
x = 5
y = 10

resultado = (x > 8) or (y < 15)
print(resultado)  # True
```

**Explicación:** Con or, basta con que una condición sea *True* para que el resultado sea *True*.
Aunque 5 no es mayor que 8 (*False*), 10 es menor que 15 (*True*), así que el resultado es *True*.

### not

```python
x = 5

resultado = not (x > 3)
print(resultado)  # False
```

**Explicación:** El operador not invierte el resultado lógico. Como 5 es mayor que 3 es *True*,
el not lo convierte en *False*.

## Conclusión

Los operadores lógicos en Python son esenciales para la toma de decisiones y el manejo de condiciones.
Dominar **and**, **or** y **not** permite crear programas más dinámicos, pero abusar de ellos o
darles un mal uso puede hacer que el código a la larga sea más difícil de mantener y se pueden
obtener errores inesperados. Practica diferentes combinaciones de estos operadores para poder
comprenderlos mejor, ya que estos son fundamentales en Python.
