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
                        src: "https://media.licdn.com/dms/image/v2/D5603AQEvM-ZZFtoJow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669322516183?e=1730937600&v=beta&t=F6r6pbWLw84pDZYiFaZCingf4w2_N4Om8UcHoB8lgR8",
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
                        src: "https://media.licdn.com/dms/image/v2/D4D03AQHigBNGVqRnOA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723639491706?e=1730937600&v=beta&t=y5Mq8eMcOWUfPzpB-12k_8TwCEzSchW_VsiSeIiATrM",
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
                        src: "https://media.licdn.com/dms/image/v2/C5603AQESM45V0cMFNA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1619015304774?e=1730937600&v=beta&t=01K-Laqp0MrcUqFvQqZCiX4ZXwcgup0mAN6UGpZj8lM",
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
                        src: "https://media.licdn.com/dms/image/v2/D4E03AQF_YkpjXs498A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711022864058?e=1730937600&v=beta&t=u7be8t8raJSbVJygMmj3eUW9hriq5MameFtPJwZCyE0",
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
                        src: "https://media.licdn.com/dms/image/v2/D4D03AQHP8iXoi2cWrA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684966463885?e=1730937600&v=beta&t=2M_RJzNYKTC5fRlamnarEIhTKEnFJKgPhz8JZ72_dWk",
                    }}
                />
            </div>
        </div>
    )
}
