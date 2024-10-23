// src/middleware.js
import { NextRequest, NextResponse } from "next/server"

const allowedOrigins = ["https://felipe.bio", "https://calderon.guru"]

export function middleware(req: NextRequest) {
    const origin = req.headers.get("origin")
    const res = NextResponse.next()

    if (origin) {
        if (allowedOrigins.includes(origin)) {
            res.headers.set("Access-Control-Allow-Origin", origin)
        }
    }

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
