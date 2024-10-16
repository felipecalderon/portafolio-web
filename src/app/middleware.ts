// src/middleware.js
import { NextRequest, NextResponse } from "next/server"

// Lista de dominios permitidos
const allowedOrigins = [
    "https://felipe.bio", // dominio 1 permitido
    "https://calderon.guru", // dominio 2 permitido
]

export function middleware(req: NextRequest) {
    // Obtiene el origen de la solicitud
    const origin = req.headers.get("origin")
    const res = NextResponse.next()

    // Verifica si el origen está en la lista de dominios permitidos
    if (origin) {
        if (allowedOrigins.includes(origin)) {
            res.headers.set("Access-Control-Allow-Origin", origin)
        }
    }

    // Siempre añadir las otras cabeceras necesarias
    res.headers.append("Access-Control-Allow-Credentials", "true")
    res.headers.append("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT")
    res.headers.append(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    )

    return res
}

// especifica el path regex para aplicar el middleware
export const config = {
    matcher: "/api/:path*",
}
