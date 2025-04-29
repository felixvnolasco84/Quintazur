import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const form = useForm({
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      residencia: "para_mis_papas", // Opción por defecto
      mensaje: "",
    },
  });

  // const onSubmit = (data) => {
  //   console.log(data);
  //   // Aquí puedes implementar la lógica para enviar los datos a tu servidor
  // };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      {/* Encabezado y Título */}
      <div className="mb-12 text-center md:mb-16">
        <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-gray-600">
          Contacto
        </h3>
        <h2 className="mb-4 text-3xl font-medium text-blue-800 md:text-4xl lg:text-5xl">
          Vivir plenamente
          <br />
          es saber que nunca estás solo.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          Si estás interesado en formar parte de nuestra comunidad, déjanos tus
          datos y en breve nos pondremos en contacto contigo.
        </p>
      </div>

      {/* Formulario */}
      <div className="mx-auto max-w-5xl">
        <Form {...form}>
          <form
            onSubmit={()=> console.log("hola")}
            // onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2"
          >
            {/* Columna izquierda */}
            <div className="space-y-6">
              {/* Nombre */}
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium uppercase tracking-wider text-gray-600">
                      Nombre
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-none border-b border-gray-300 px-0 focus-visible:border-blue-800 focus-visible:ring-0"
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
                    <FormLabel className="text-sm font-medium uppercase tracking-wider text-gray-600">
                      Apellidos
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-none border-b border-gray-300 px-0 focus-visible:border-blue-800 focus-visible:ring-0"
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
                    <FormLabel className="text-sm font-medium uppercase tracking-wider text-gray-600">
                      Correo Electrónico
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="rounded-none border-b border-gray-300 px-0 focus-visible:border-blue-800 focus-visible:ring-0"
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
                    <FormLabel className="text-sm font-medium uppercase tracking-wider text-gray-600">
                      Teléfono
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        className="rounded-none border-b border-gray-300 px-0 focus-visible:border-blue-800 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Columna derecha */}
            <div className="space-y-6">
              {/* Opciones de Residencia */}
              <div>
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-600">
                  Residencia
                </h4>
                <FormField
                  control={form.control}
                  name="residencia"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1 sm:flex-row sm:space-x-6 sm:space-y-0"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="para_mi"
                                id="para_mi"
                                className="border-2 text-blue-800"
                              />
                            </FormControl>
                            <Label htmlFor="para_mi" className="font-normal">
                              Para mí
                            </Label>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="para_mis_papas"
                                id="para_mis_papas"
                                className="border-2 text-blue-800"
                              />
                            </FormControl>
                            <Label
                              htmlFor="para_mis_papas"
                              className="font-normal"
                            >
                              Para mis papás
                            </Label>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="otros"
                                id="otros"
                                className="border-2 text-blue-800"
                              />
                            </FormControl>
                            <Label htmlFor="otros" className="font-normal">
                              Otros
                            </Label>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Mensaje */}
              <FormField
                control={form.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium uppercase tracking-wider text-gray-600">
                      Mensaje
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={8}
                        className="resize-none rounded-md border focus-visible:border-blue-800 focus-visible:ring-0"
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
                className="rounded-full bg-blue-800 px-12 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-900"
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

export default ContactSection;
