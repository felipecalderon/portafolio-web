import { Source_Code_Pro } from "next/font/google"
const font = Source_Code_Pro({ weight: "400", subsets: ["latin"] })

export default function Precode({ code }: { code: string }) {
    return <pre className={`whitespace-pre-wrap text-black dark:text-[#dcdcdc] text-sm ${font}`} dangerouslySetInnerHTML={{ __html: code }} />
}
