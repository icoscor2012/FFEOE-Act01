# 📋 Formulario de Inscripción

Aplicación web desarrollada con React y TypeScript que permite registrar alumnos mediante un formulario con validación estricta de datos usando la librería Zod.

## 🛠️ Tecnologías

- React
- TypeScript
- Zod
- Tailwind CSS

## 🚀 Despliegue

```bash
# Clonar el repositorio
git clone https://github.com/icoscor2012/FFEOE-Act01

# Entrar en la carpeta del proyecto
cd FFEOE-Act01

# Instalar las dependencias
npm install

# Arrancar el servidor de desarrollo
npm run dev
```

## 📦 Diccionario de datos

| Nombre del Campo | Tipo de Dato | Reglas de Validación |
|------------------|--------------|----------------------|
| nombre | string | Obligatorio, mínimo 3 caracteres |
| email | string | Obligatorio, formato de email válido |
| curso | string | Obligatorio, valor exacto "1 DAM" o "2 DAM" |

---

Desarrollado por [**Iván**](https://github.com/icoscor2012)