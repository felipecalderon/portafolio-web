import { Link } from "@nextui-org/react"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6"

export default function SocialPages() {
    return (
        <div className='space-y-2'>
            <p className='text-center'>También me podrás encontrar en:</p>
            <div className='flex gap-2 justify-center'>
                <Link
                    href='https://github.com/felipecalderon'
                    target='_blank'
                    className='inline-flex gap-1 items-center py-1 px-2 bg-sky-700 text-slate-50 dark:text-sky-800 dark:bg-slate-100 rounded-lg'
                >
                    <FaGithub className='text-xl' /> GitHub
                </Link>
                <Link
                    href='https://www.facebook.com/felipecalderon321/'
                    target='_blank'
                    className='inline-flex gap-1 items-center py-1 px-2 bg-sky-700 text-slate-50 dark:text-sky-800 dark:bg-slate-100 rounded-lg'
                >
                    <FaFacebookF className='text-xl' /> Facebook
                </Link>
                <Link
                    href='https://www.linkedin.com/in/felipecalderone/'
                    target='_blank'
                    className='inline-flex gap-1 items-center py-1 px-2 bg-sky-700 text-slate-50 dark:text-sky-800 dark:bg-slate-100 rounded-lg'
                >
                    <FaLinkedin className='text-xl' /> LinkedIn
                </Link>
            </div>
        </div>
    )
}
