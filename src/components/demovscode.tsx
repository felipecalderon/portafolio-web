import { Source_Code_Pro } from "next/font/google"
import style from "./styles.module.css"

const font = Source_Code_Pro({ weight: "400", subsets: ["latin"] })

export default function VSCodeDemostracion() {
    const lines = preCode.split("\n").length
    return (
        <div className='overflow-hidden hidden sm:block absolute w-full'>
            <div className='flex flex-col bg-slate-50 dark:bg-slate-900 dark:text-[#d4d4d4] text-black font-mono cursor-default difuminado transform'>
                <div className='flex items-center h-10 bg-gray-200 dark:bg-gray-800 px-2 text-sm shadow-xl'>
                    <span className='menu-item mr-4 hover:font-black'>File</span>
                    <span className='menu-item mr-4 hover:font-black'>Edit</span>
                    <span className='menu-item mr-4 hover:font-black'>View</span>
                    <span className='menu-item mr-4 hover:font-black'>Go</span>
                    <span className='menu-item mr-4 hover:font-black'>Run</span>
                    <span className='menu-item mr-4 hover:font-black'>Terminal</span>
                    <span className='menu-item mr-4 hover:font-black'>Help</span>
                </div>

                <div className='flex flex-grow'>
                    <div className='w-1/6 bg-gray-100 dark:bg-slate-950 p-4 text-sm'>
                        <h3 className='font-semibold text-black dark:text-[#dcdcdc]'>Explorer</h3>
                        <ul className='mt-4 space-y-2'>
                            <li className='hover:font-black p-1'>public/</li>
                            <li className='hover:font-black p-1'>src/</li>
                            <li className='hover:font-black p-1'>components/</li>
                            <li className='hover:font-black p-1'>README.md</li>
                        </ul>
                    </div>

                    <div className='flex-1 bg-white dark:bg-slate-900 p-4'>
                        <div className='bg-gray-200 dark:bg-gray-800 w-fit hover:font-black h-8 p-2 flex items-center text-sm text-black dark:text-[#dcdcdc] border-b dark:border-[#3a3d41]'>
                            <span>app.ts</span>
                        </div>

                        <div className='mt-4 bg-gray-100 dark:bg-slate-900 px-4 h-full rounded-md overflow-auto border dark:border-[#3a3d41] flex'>
                            {/* Columna de números de línea */}
                            <div className='pr-4 text-right text-gray-500 dark:text-[#6A6A6A]'>
                                {Array.from({ length: lines }).map((_, i) => (
                                    <div key={i} className='leading-6'>
                                        {i + 1}
                                    </div>
                                ))}
                            </div>

                            <pre
                                className={`whitespace-pre-wrap text-black dark:text-[#dcdcdc] text-sm ${font}`}
                                dangerouslySetInnerHTML={{ __html: preCode }}
                            />
                        </div>
                    </div>
                </div>

                <div className='bg-gray-100 dark:bg-slate-950 h-40 p-4'>
                    <div className='bg-gray-200 dark:bg-gray-800 h-8 p-2 flex items-center text-sm text-black dark:text-[#dcdcdc] border-b dark:border-[#3a3d41]'>
                        <span>Terminal</span>
                    </div>
                    <div className='bg-white dark:bg-slate-900 p-2 h-full text-sm'>
                        <pre className={`whitespace-pre-wrap text-blue-600 dark:text-[#9cdcfe] ${font}`}>felipe@localhost:~$ npm start</pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

const preCode = `<span class=${style.keyword}>&lt;></span>
    <span class=${style.keyword}>&lt;section&gt;</span>
        <span class=${style.tag}>&lt;Header&gt;</span>
                <span class=${style.tag}>&lt;DetallePersonal /&gt;</span>
                <span class=${style.tag}>&lt;SobreMi /&gt;</span>
        <span class=${style.tag}>&lt;/Header&gt;</span>
    <span class=${style.keyword}>&lt;/section&gt;</span>
    <span class=${style.keyword}>&lt;main&gt;</span>
        <span class=${style.tag}>&lt;Experiencias /&gt;</span>
        <span class=${style.tag}>&lt;Habilidades /&gt;</span>
        <span class=${style.tag}>&lt;RedesSociales /&gt;</span>
    <span class=${style.keyword}>&lt;/main&gt;</span>
    <span class=${style.keyword}>&lt;footer&gt;</span>
        <span class=${style.tag}>&lt;p&gt;</span> 2024 - Felipe Calderón <span class=${style.tag}>&lt;/p&gt;</span>
    <span class=${style.keyword}>&lt;/footer&gt;</span>
<span class=${style.keyword}>&lt;/&gt;</span>
`
