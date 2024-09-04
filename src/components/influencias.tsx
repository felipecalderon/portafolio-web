import { Link, User } from "@nextui-org/react"

export default function Influencias() {
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center mb-2'>Influencias en mi desarrollo profesional</h2>
            <p className='text-center mb-4 px-6 text-pretty'>
                No podría haber llegado hasta aquí sin las tutorías obtenidas por aquellos que se esmeran con dedicación en la enseñanza, aunque soy un completo
                desconocido para ellos, debo agradecer porque han aportado más valor que cualquier bootcamp, instituto o grupo de estudio.
            </p>
            <div className='flex flex-wrap gap-2 justify-center'>
                <User
                    name='Nicolás Schürmann'
                    className='bg-white dark:bg-sky-600 rounded-xl px-1 py-2 shadow-sm'
                    description={
                        <Link
                            href='https://www.linkedin.com/in/nicolasschurmann/'
                            target='_blank'
                            size='sm'
                            isExternal
                            className='text-sky-900 dark:text-amber-400'
                        >
                            /in/nicolasschurmann
                        </Link>
                    }
                    avatarProps={{
                        src: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/refs/frekkfshfybremfzgqym",
                    }}
                />
                <User
                    name='Miguel Durán García'
                    className='bg-white dark:bg-sky-600 rounded-xl px-1 py-2 shadow-sm'
                    description={
                        <Link href='https://www.linkedin.com/in/midudev/' target='_blank' size='sm' isExternal className='text-sky-900 dark:text-amber-400'>
                            /in/midudev
                        </Link>
                    }
                    avatarProps={{
                        src: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/refs/xdxt3zuoxo86bqwbvjif",
                    }}
                />
                <User
                    name='Luisina de Paula'
                    className='bg-white dark:bg-sky-600 rounded-xl px-1 py-2 shadow-sm'
                    description={
                        <Link href='https://www.linkedin.com/in/luisinaadp/' target='_blank' size='sm' isExternal className='text-sky-900 dark:text-amber-400'>
                            /in/luisinaadp
                        </Link>
                    }
                    avatarProps={{
                        src: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/refs/f09hf6xxpkidh7cn4gac",
                    }}
                />
                <User
                    name='Brais Moure'
                    className='bg-white dark:bg-sky-600 rounded-xl px-1 py-2 shadow-sm'
                    description={
                        <Link href='https://www.linkedin.com/in/braismoure/' target='_blank' size='sm' isExternal className='text-sky-900 dark:text-amber-400'>
                            /in/braismoure
                        </Link>
                    }
                    avatarProps={{
                        src: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/refs/povjhzcupsbjihrleftr",
                    }}
                />
                <User
                    name='José Román Hernández'
                    className='bg-white dark:bg-sky-600 rounded-xl px-1 py-2 shadow-sm'
                    description={
                        <Link
                            href='https://www.linkedin.com/in/joseromanhdez/'
                            target='_blank'
                            size='sm'
                            isExternal
                            className='text-sky-900 dark:text-amber-400'
                        >
                            /in/joseromanhdez
                        </Link>
                    }
                    avatarProps={{
                        src: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/refs/z82rdjqmkxfdeavvvxtg",
                    }}
                />
            </div>
        </div>
    )
}
