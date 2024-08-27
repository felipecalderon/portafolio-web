import mongoose from "mongoose"
import { MONGODB } from "@/contants/envs"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"

// Definir el esquema para los chats
const ChatSchema = new mongoose.Schema({
    role: { type: String, required: true },
    content: { type: String, required: true },
    name: { type: String }, // Opcional
})

// Esquema para la colección que contiene un array de chats
const DynamicSchema = new mongoose.Schema(
    {
        data: [ChatSchema],
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { strict: true }
)

// Interfaz para el modelo
interface ChatDocument extends mongoose.Document {
    data: ChatCompletionMessageParam[]
    createdAt: Date
    updatedAt: Date
}

// Definir el tipo del modelo
type DynamicModelType = mongoose.Model<ChatDocument>

export const saveDB = async (collectionName: string, newChats: ChatCompletionMessageParam[]) => {
    try {
        await mongoose.connect(MONGODB as string, { bufferCommands: false, dbName: "calderon" })

        let DynamicModel: DynamicModelType
        if (mongoose.models[collectionName]) {
            DynamicModel = mongoose.models[collectionName] as DynamicModelType
        } else {
            if (collectionName.includes("::1")) {
                DynamicModel = mongoose.model<ChatDocument>("localhost", DynamicSchema, "localhost")
            } else {
                DynamicModel = mongoose.model<ChatDocument>(collectionName, DynamicSchema, collectionName)
            }
        }

        const existingDocument = await DynamicModel.findOne({}).exec()

        if (existingDocument) {
            // Filtrar los nuevos chats para evitar duplicados
            const uniqueNewChats = newChats.filter(
                (newChat) => !existingDocument.data.some((existingChat) => existingChat.role === newChat.role && existingChat.content === newChat.content)
            )

            // Agregar solo los chats únicos
            existingDocument.data.push(...uniqueNewChats)
            existingDocument.updatedAt = new Date() // Actualizar la fecha de última modificación
            await existingDocument.save()
        } else {
            // Si no existe, crear un nuevo documento con los chats
            const newDocument = new DynamicModel({
                data: newChats,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            await newDocument.save()
        }
    } catch (error) {
        console.error("Error saving data:", error)
    } finally {
        await mongoose.connection.close()
    }
}
