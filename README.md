# 🍔 ComandaYaPoo

Aplicativo sencillo para aprender **Programación Orientada a Objetos (POO) en JavaScript**, construido como un menú y sistema de comandas para un restaurante.

## Estado actual

El proyecto está en desarrollo inicial. Actualmente incluye:

- Formulario para registrar un nuevo plato (tipo, nombre y precio).
- Sección "Menú" (`#carta`) donde se mostrarán los platos registrados.
- Notificaciones tipo *toast* mediante la función `avisar(tipo, texto)`.
- Al enviar el formulario se muestra el aviso "Formulario enviado correctamente".

> Pendiente: crear las clases (POO) para los platos y renderizar el menú en la carta.

## Tecnologías

- HTML5
- CSS3
- JavaScript (vanilla, sin dependencias)

## Estructura del proyecto

```
ComandaYaPoo/
├── index.html        # Estructura de la página (formulario y menú)
├── css/
│   └── estilos.css   # Estilos de la aplicación
├── js/
│   └── 0-base.js     # Lógica base: formulario y avisos (toast)
├── LICENSE
└── README.md
```

## Cómo ejecutarlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jaquimbayoc7/ComandaYaPoo.git
   ```
2. Abre `index.html` en tu navegador (o usa la extensión *Live Server* de VS Code).

No requiere instalación ni compilación.

## Uso

1. Selecciona el **tipo** de plato: Hamburguesa, Pizza o Bebida.
2. Escribe el **nombre** del plato.
3. Ingresa el **precio** (incrementos de 100).
4. Pulsa **Agregar al Menú**.

## Objetivos de aprendizaje

- Clases, constructores y métodos.
- Herencia (por ejemplo, `Plato` → `Hamburguesa`, `Pizza`, `Bebida`).
- Encapsulamiento y polimorfismo.
- Manipulación del DOM y manejo de eventos.

## Licencia

Consulta el archivo [LICENSE](LICENSE).
