import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const BolsaTrabajoContactSection = () => {
  const form = useForm({
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      departamento_de_aplicacion: "administracion", // Opción por defecto
      curriculum_vitae: null,
    },
  });  
  
const onSubmit = async (dataValues: {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  departamento_de_aplicacion: string;
  curriculum_vitae: File | null;
}) => {
  const formData = new FormData();
  formData.append('nombre', dataValues.nombre);
  formData.append('apellidos', dataValues.apellidos);
  formData.append('email', dataValues.email);
  formData.append('telefono', dataValues.telefono);
  formData.append('departamento_de_aplicacion', dataValues.departamento_de_aplicacion);
  if (dataValues.curriculum_vitae) {
    formData.append('curriculum_vitae', dataValues.curriculum_vitae);
  }

  const response = await fetch(
    "https://quintazur-mail-service-typescript.vercel.app/send-bolsa-de-trabajo",
    {
      method: "POST",
      body: formData,
    }
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  alert(data.message);
};
  return (
    <section
      id="contacto"
      className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-14"
    >
      {/* Encabezado y Título */}
      <div className="mb-12 text-center md:mb-16">
        <h2 className="mb-4 text-3xl font-light text-blue-800 md:text-4xl lg:text-6xl">
        Bolsa de Trabajo
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-lg text-[#6D6D6D] lg:mt-4">
          Déjanos tus datos y en breve nos pondremos en contacto contigo.
        </p>
      </div>

      {/* Formulario */}
      <div className="mx-auto max-w-7xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2"
          >
            {/* Columna izquierda */}
            <div className="space-y-6 text-left p-4 border rounded-lg border-gray-300">
              {/* Nombre */}
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="poppins text-sm font-semibold uppercase tracking-wider text-[#6D6D6D]">
                      Nombre
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-none border-b border-l-0 border-r-0 border-t-0 border-gray-300 px-0 focus-visible:border-blue-800 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Apellidos */}
              <FormField
                control={form.control}
                name="apellidos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="poppins text-sm font-semibold uppercase tracking-wider text-[#6D6D6D]">
                      Apellidos
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-none border-b border-l-0 border-r-0 border-t-0 border-gray-300 px-0 focus-visible:border-blue-800 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Correo Electrónico */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="poppins text-sm font-semibold uppercase tracking-wider text-[#6D6D6D]">
                      Correo Electrónico
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="rounded-none border-b border-l-0 border-r-0 border-t-0 border-gray-300 px-0 focus-visible:border-blue-800 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Teléfono */}
              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="poppins text-sm font-semibold uppercase tracking-wider text-[#6D6D6D]">
                      Teléfono
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        className="rounded-none border-b border-l-0 border-r-0 border-t-0 border-gray-300 px-0 shadow-none focus-visible:border-blue-800 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Columna derecha */}
            <div className="space-y-6 text-left">
              {/* Opciones de Residencia */}
              <div>
                <h4 className="poppins mb-4 text-sm font-semibold uppercase tracking-wider text-[#6D6D6D]">
                  Departamento de Aplicación
                </h4>
                
                <FormField
                  control={form.control}
                  name="departamento_de_aplicacion"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={(value) => {
                            field.onChange(value);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={field.value || "Seleccione un departamento"} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="administracion">Administración</SelectItem>
                            <SelectItem value="comercial">Comercial</SelectItem>
                            <SelectItem value="asistencia">Asistencia y cuidados</SelectItem>
                            <SelectItem value="limpieza">Limpieza y lavandería</SelectItem>
                            <SelectItem value="cocina">Cocina</SelectItem>
                            <SelectItem value="mantenimiento">Mantenimiento y jardinería</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
              </div>

              {/* Curriculum Vitae */}
              <FormField
                control={form.control}
                name="curriculum_vitae"
                render={({ field: {  onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel className="poppins text-sm font-semibold uppercase tracking-wider text-[#6D6D6D]">
                      Curriculum Vitae
                    </FormLabel>
                    <FormDescription>
                      Solo se aceptan archivos PDF, DOC y DOCX. Tamaño máximo 5MB.
                    </FormDescription>
                    <FormControl className="cursor-pointer">
                      <Input                        
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => onChange(e.target.files?.[0] || null)}
                        className="cursor-pointer file:cursor-pointer file:border-0 file:bg-blue-800 file:text-white file:hover:bg-blue-900 file:rounded-sm h-fit py-4"
                        name={field.name}
                        onBlur={field.onBlur}
                        ref={field.ref}
                      />
                      
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Botón Enviar - Span en ambas columnas en móvil */}
            <div className="mt-4 flex justify-center md:col-span-2">
              <Button
                type="submit"
                className="w-full rounded-full bg-blue-800 px-12 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-900 lg:w-fit"
              >
                Enviar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default BolsaTrabajoContactSection;
