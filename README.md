# 🧠 Arquitectura DDD con NestJS

Este proyecto implementa una arquitectura basada en **Domain Driven Design (DDD)** utilizando **NestJS**. La estructura propuesta permite separar responsabilidades, logrando un código **modular**, **mantenible** y **escalable**.

## 📁 Estructura del Proyecto

El código se organiza en las siguientes capas:

```
src/
├── domain/           # Lógica de negocio, entidades, objetos de valor y servicios de dominio
├── application/      # Casos de uso y DTOs que orquestan la ejecución de la lógica de negocio
├── infrastructure/   # Persistencia, repositorios y servicios externos
└── presentation/     # Controladores y rutas que exponen la API
```

## 🧱 Capas de la Arquitectura

- **Dominio:**  
  Contiene la lógica central del negocio, con entidades, objetos de valor y servicios que definen las reglas y comportamientos.

- **Aplicación:**  
  Coordina los casos de uso y actúa como puente entre el dominio y la infraestructura, gestionando la orquestación de procesos de negocio.

- **Infraestructura:**  
  Implementa detalles técnicos como la persistencia de datos, repositorios y la comunicación con servicios externos.

- **Presentación:**  
  Expone la API a través de controladores de NestJS, transformando las solicitudes HTTP en acciones concretas sobre la lógica de negocio.

## 🚀 Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run start:dev
   ```

3. **Construir la aplicación:**
   ```bash
   npm run build
   ```

4. **Ejecutar en producción:**
   ```bash
   npm run start:prod
   ```

## ✅ Pruebas

Para ejecutar los tests unitarios y de integración:
```bash
npm run test
```

## 📝 Conclusión

Esta arquitectura basada en **DDD** con **NestJS** facilita la separación de responsabilidades, permitiendo que la lógica de negocio se mantenga centralizada y desacoplada de aspectos técnicos como la persistencia o la exposición de la API.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
5. Sube tu rama (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la Licencia MIT. Consulta `LICENSE` para más información.

## 👥 Autores

- **Jorge Suriol** - *Desarrollo inicial* - [carlessuriol](https://medium.com/@carlessuriol)

📖 Para más información y detalles sobre la implementación, consulta el artículo original en [Medium](https://medium.com/@carlessuriol/domain-driven-design-en-nestjs-8ab23c542c72).

¡Happy coding! 💻🚀