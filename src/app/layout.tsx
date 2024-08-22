import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NextUIProvider } from "@nextui-org/react"
import { Toaster } from "sonner"
const inter = Inter({ subsets: ["latin"] })
import { GoogleAnalytics } from "@next/third-parties/google"
export const metadata: Metadata = {
    title: "Felipe Calderón | Webmaster",
    description: "Desarrollador FullStack Typescript / React / Astro / Node",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='es'>
            <body className={`bg-indigo-50 dark:bg-sky-800 fondo-puntos ${inter.className}`}>
                <NextUIProvider>{children}</NextUIProvider>
            </body>
            <GoogleAnalytics gaId='AW-328593452' />
            <Toaster position='top-center' />
        </html>
    )
}
