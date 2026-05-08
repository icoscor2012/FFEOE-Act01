import { z } from 'zod';
import { useState } from 'react';

const schema = z.object({
  nombre: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  email: z.email(),
  curso: z.enum(["1 DAM", "2 DAM"]),
})

export default function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    curso: '',
  })

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        {/* Cabecera */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Sistema de gestión</p>
          <h1 className="text-4xl font-bold text-white">Formulario de inscripción</h1>
          <div className="mt-3 h-px bg-linear-to-r from-blue-500 to-transparent"></div>
        </div>

        {/* Tarjeta del formulario */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const result = schema.safeParse(formData)
              if (result.success) {
                alert("Datos válidos guardados con éxito:\n" + JSON.stringify(result.data, null, 2))
              } else {
                alert("Error: " + result.error.issues[0].message)
              }
            }}
            className="flex flex-col gap-5"
          >

            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest text-zinc-400">Nombre</label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="Ej: Juan García"
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest text-zinc-400">Email</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Ej: juan@correo.com"
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest text-zinc-400">Curso</label>
              <input
                type="text"
                value={formData.curso}
                onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                placeholder="1 DAM ó 2 DAM"
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer"
            >
              Validar y guardar
            </button>

          </form>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-6">Validación con Zod · React + TypeScript</p>
      </div>
    </div>
  )
}