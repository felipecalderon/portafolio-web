import { partners } from "@/contants/partners"
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react"
import { TbMapPinFilled } from "react-icons/tb"

export default function Partners() {
    return (
        <div id='partners'>
            <h2 className='text-2xl font-semibold text-center mb-2'>Grandes experiencias: Partners</h2>
            <p className='text-center mb-4 px-6'>
                Porque siempre se necesitarán hábiles manos para hacer cosas grandes, no siempre basta con uno mismo, cada uno aporta una visión y expertiz muy
                particular en cada proyecto.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {partners.map((p) => (
                    <Card shadow='sm' className='dark:bg-sky-600' key={p.name}>
                        <CardHeader className='flex gap-3'>
                            <Image alt={`Foto perfil de ${p.name}`} width={40} height={40} radius='sm' src={p.image} className='object-cover' />
                            <div className='flex flex-col'>
                                <p className='text-md'>{p.name}</p>
                                <p className='text-small text-default-500 dark:text-amber-50 inline-flex items-center gap-1'>
                                    <TbMapPinFilled />
                                    {p.place}
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p className='text-xs'>{p.description}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <div className='flex flex-wrap gap-2'>
                                {p.social.map(({ Icon, name, url }) => (
                                    <Link
                                        key={name}
                                        href={url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='inline-flex gap-1 items-center py-1 px-2 bg-sky-700 dark:bg-slate-100 rounded-lg text-slate-50 dark:text-sky-800 text-xs md:text-sm'
                                    >
                                        <Icon /> {name}
                                    </Link>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <p className='text-center text-sm italic mt-4 px-6'>
                Dependiendo de las necesidades del cliente y el tamaño del proyecto se podría necesitar apoyo de partners.
            </p>
        </div>
    )
}
