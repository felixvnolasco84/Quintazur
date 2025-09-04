import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function BolsaDeTrabajo() {

    interface Empleos {
        id: number;
        titulo: string;
        descripcion: string;
        requisitos: string[];
    }

    const empleos: Empleos[] = [
        
    ];
  return (
    <div className="container mx-auto">
        <h1 className="mb-8 text-3xl font-light text-blue-800 md:text-4xl lg:text-6xl">Bolsa de Trabajo</h1>
        {
            empleos.length === 0 ? (
                <Card>
                    <CardHeader>
                        <h2>No hay empleos disponibles</h2>
                    </CardHeader>   
                </Card>
            ) : (
                empleos.map((empleo) => (
                <Card key={empleo.id}>
                    <CardHeader>
                        <h2>{empleo.titulo}</h2>
                    </CardHeader>
                    <CardContent>
                        <p>{empleo.descripcion}</p>
                        <ul>
                            {
                                empleo.requisitos.map((requisito) => (
                                    <li key={requisito}>{requisito}</li>
                            ))
                        }
                    </ul>
                        </CardContent>
                    
                </Card>
            ))
            )
        }
    </div>
  )
}
