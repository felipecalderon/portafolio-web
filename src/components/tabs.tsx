"use client"

import { Tab, Tabs } from "@nextui-org/react"
import ChatBot from "./chatbot"
import Contacto from "./contacto"

export default function ContactTabs() {
    return (
        <>
            <h2 className='text-2xl font-semibold text-center mb-2'>¿Qué esperas para transformar tus ideas en realidad?</h2>
            <div className='flex flex-col items-center'>
                <Tabs size='sm' aria-label='Tabs sizes' color='primary'>
                    <Tab key='Chatbot' title='Chatbot'>
                        <ChatBot />
                    </Tab>
                    <Tab key='Formulario' title='Formulario'>
                        <Contacto />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
