"use client"
import { Accordion, AccordionItem } from "@nextui-org/react"
import { RiExpandLeftRightFill } from "react-icons/ri"

export default function FAQs() {
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center mb-2'>Preguntas frecuentes</h2>
            <p className='text-center mb-4 px-6'>
                Aclara todas tus dudas antes de contratar, puedes usar la caja de mensajería de arriba para consultas más particulares y enviar tus datos.
            </p>
            <Accordion variant='shadow' className='dark:bg-sky-600'>
                <AccordionItem indicator={<RiExpandLeftRightFill className='dark:text-white' />} key='1' aria-label='p1' title='¿Cuánto cuesta?'>
                    <div className='space-y-2 pb-3'>
                        <p>No es posible fijar una tarifa exacta porque cada desarrollo es único según las necesidades del cliente.</p>
                        <p>Para esto debemos fijar rangos según posibles escenarios comunes y sentar algunas bases, como por ejemplo:</p>
                        <p className='text-sm'>Cliente que ya posee hosting y dominio, necesita:</p>
                        <ul className='list-disc pl-6 text-sm'>
                            <li>
                                Sitio web sencillo (landing page) para mostrar un banner, cuadros informativos y un formulario de contacto: Entre 200 y 400 USD
                            </li>
                            <li>
                                Sitio web avanzado (tienda) wordpress con woocommerce, catálogo, carro de compra, pasarela de pago, opciones para despacho:
                                Entre 400 y 800 USD
                            </li>
                            <li>
                                Sitio web avanzado (tienda) hecha a mano con código, catálogo, carro de compra, pasarela de pago, opciones para despacho: Entre
                                600 y 1200 USD
                            </li>
                            <li>Aplicación web (producto mínimo viable): Entre 500 y 1000 USD</li>
                            <li>Aplicación web modularizada (sistema): A partir de 1000 USD</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem indicator={<RiExpandLeftRightFill className='dark:text-white' />} key='2' aria-label='p2' title='¿Trabajo solo o acompañado?'>
                    <div className='space-y-2 pb-3'>
                        <p>
                            Por lo general trabajo de forma individual, cuando los proyectos de desarrollo web no son complejos o cuando se requiere un
                            desarrollo sencillo en poco tiempo (menos de 1 mes).
                        </p>
                        <p>En caso contrario recomendaré a algún (o algunos) partner para que ayuden con el desarrollo, por supuesto que pagado igualmente.</p>
                        <p className='text-sm'>Ejemplos de desarrollos sencillos que pueden hacerse de forma individual:</p>
                        <ul className='list-disc pl-6 text-sm'>
                            <li>Landing Page (sitio web simple una hoja).</li>
                            <li>Tienda online (hecho en wordpress con carro de compra, cupones, valoraciones y similares.)</li>
                            <li>Sitio personalizado (hecho en wordpress con formularios, blog, comentarios y similares.)</li>
                            <li>App web sencilla (producto mínimo viable)</li>
                        </ul>
                        <p className='text-sm'>Ejemplos de desarrollos complejos que pueden hacerse con ayuda de partners:</p>
                        <ul className='list-disc pl-6 text-sm'>
                            <li>Tienda online con funcionalidades personalizadas.</li>
                            <li>App web completa y modularizada.</li>
                            <li>Aplicación móvil.</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem indicator={<RiExpandLeftRightFill className='dark:text-white' />} key='3' aria-label='p3' title='¿Formas de pago?'>
                    <div className='space-y-2 pb-3'>
                        <p>Acepto pagos por MercadoPago, PayPal, Binance, si eres de Chile recibo transferencias bancarias.</p>
                        <p>Las formas de pago que suelo trabajar son 50% al inicio del proyecto y el 50% restante al terminarlo.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
