# GESTOR DE FINANZAS COMPARTIDAS

## PREAMBULO

Este proyecto es una aplicación web que permite a un grupo de personas llevar un control de sus finanzas compartidas. El proyecto se realizará en Node.js y se utilizará una base de datos MongoDB para almacenar la información.

---

## DESCRIPCIÓN DE LA EMPRESA

### SOBRE LA EMPRESA

Digital Webdise es una destacada agencia de desarrollo web con un enfoque especializado en la creación de soluciones de software a medida. Su compromiso principal es facilitar a las empresas la automatización de procesos clave, mejorando significativamente los tiempos y costos operativos. La empresa se destaca por su capacidad para ofrecer soluciones tecnológicas personalizadas que benefician el profit business de sus clientes a mediano y largo plazo.

Además de su experiencia en el desarrollo de software, Digital Webdise va más allá al ofrecer capacitaciones empresariales y asesorías de negocios. Esta faceta adicional de sus servicios no solo proporciona herramientas tecnológicas avanzadas, sino también conocimiento y orientación esenciales para que los clientes maximicen el valor de sus soluciones digitales.

### MISIÓN

La misión de Digital Webdise no se limita únicamente al desarrollo de software; la empresa se compromete a ofrecer un servicio integral al cliente, incluyendo mantenimientos proactivos y brindando una experiencia completa en tecnología de la información y software.

### VISIÓN

Digital Webdise se proyecta como una empresa líder en el ámbito de la gestión empresarial y el desarrollo de software en Latinoamérica. Busca posicionarnse como referentes en la industria, siendo reconocidos por nuestra excelencia en soluciones digitales personalizadas. Aspiran a ser la opción preferida de las empresas de la región, ofreciendo innovación, eficiencia y un impacto positivo en los procesos empresariales. La visión es trascender fronteras, consolidándose como un socio estratégico confiable y contribuyendo al crecimiento sostenible de las empresas latinoamericanas a través de nuestras soluciones tecnológicas avanzadas.

### UBICACIÓN

Digital Webdise se encuentra en Sicuani, en el Distrito de Ate, Lima, Perú.

---

## PROCESO DE SISTEMATIZACIÓN

### MODULO DE SEGURIDAD

- El usuario se registra en el sistema. Teniendo los siguientes campos:
  - Nombre Completo
  - Correo
  - Contraseña
  - El usuario inicia sesión en el sistema.
- El usuario podrá iniciar sesión en el sistema por medio de su correo y contraseña.
- El usuario podrá recuperar su contraseña por medio de su correo.
- El usuario podrá editar su información personal.
- El usuario podrá eliminar su cuenta.

### MÓDULO DE CUENTAS

- El usuario podrá crear una cuenta. Para crear una cuenta tendrá los siguientes campos:
  - Nombre de la cuenta
  - Tipo de cuenta (Personal o Compartida)
  - Saldo inicial
  - Moneda
  - Descripción
- El usuario podrá editar una cuenta si es propia, dado el caso de cuentas compartidas, sólo el administrador podrá editar la cuenta.
- El usuario podrá eliminar una cuenta.
- Si el usuario es nuevo, se le pedirá que cree una cuenta.
- Si el usuario crea una cuenta compartida, podrá agregar a otros usuarios a la cuenta.
- El usuario podrá ver el listado de sus cuentas.
- El usuario podrá ver el listado de las cuentas compartidas en las que participa.
- El usuario podrá exportar el balance de su cuenta en formato PDF.
- El usuario podrá compartir una cuenta con otros usuarios.
- El usuario podrá ver el balance de una cuenta compartida.

### MÓDULO DE MOVIMIENTOS

- El usuario ingresará movimientos de ingresos y egresos.
- El usuario podrá editar un movimiento.
- El usuario podrá eliminar un movimiento.
- El usuario podrá ver el listado de movimientos de una cuenta.
- El usuario podrá exportar el listado de movimientos de una cuenta en formato PDF.
