import style from "./styles.module.css"

export const pageCode = `// Estructura de la página de inicio
<span class=${style.keyword}>&lt;></span>
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
export const utilCode = `// Generación de texto automatizado
<span class=${style.keyword}>const</span> <span class=${style.tag}>generateCode</span> = <span class=${style.keyword}>(</span>codigo: <span class=${style.keyword}>string</span><span class=${style.keyword}>) => </span>{
    <span class=${style.keyword}>const</span> <span class=${style.tag}>writeCode</span> = <span class=${style.keyword}>(</span><span class=${style.keyword}>) => </span>{
        <span class=${style.keyword}>if</span> <span class=${style.keyword}>(</span>index <= codigo.length<span class=${style.keyword}>)</span> {
            setCodigo(codigo.slice(<span class=${style.keyword}>0</span>, index))
            index++
            setTimeout(<span class=${style.tag}>writeCode</span>, <span class=${style.keyword}>10</span>)
        } <span class=${style.keyword}>else</span> {
            setWriting(<span class=${style.keyword}>false</span>)
        }
    }

    <span class=${style.keyword}>if</span> <span class=${style.keyword}>(!</span>writing<span class=${style.keyword}>)</span> {
        <span class=${style.tag}>writeCode</span>()
    }
}`

export const chatCode = `// Envío de mensajes chatbot
<span class=${style.keyword}>const</span> <span class=${style.tag}>handleSendMessage</span> = <span class=${style.keyword}>async () =></span> {
    setLoading(<span class=${style.keyword}>true</span>)
    setInput(<span class=${style.keyword}>"</span><span class=${style.keyword}>"</span>)
    <span class=${style.keyword}>const</span> msgUser: ChatCompletionMessageParam = { role: <span class=${style.keyword}>"user"</span>, content: input }
    setMessages([<span class=${style.keyword}>...</span>messages, msgUser])
    <span class=${style.keyword}>const</span> res = <span class=${style.keyword}>await</span> fetch(<span class=${style.keyword}>\`\${URL}/chatbot\`</span>, {
        method: <span class=${style.keyword}>"POST"</span>,
        headers: { <span class=${style.keyword}>"Content-Type"</span>: <span class=${style.keyword}>"application/json"</span> },
        body: JSON.stringify({ chats: [<span class=${style.keyword}>...</span>messages, msgUser] }),
    })
    <span class=${style.keyword}>if</span> (res.ok) {
        <span class=${style.keyword}>const</span> msgResponse: ChatCompletionMessageParam = <span class=${style.keyword}>await</span> res.json()
        setMessages([<span class=${style.keyword}>...</span>messages, msgUser, msgResponse])
    }
}`

export const readmeCode = `<span class=${style.keyword}># Transformemos tus ideas en realidad 🚀</span>

<span class=${style.keyword}>¿Tienes una idea en mente?</span>
No dudes en escribir en la cajita de mensajería. 
Unamos fuerzas para construir algo verdaderamente increíble. 🤝

<span class=${style.keyword}>Porque cada desarrollo es una experiencia única y enriquecedora. 🌟</span>

<span class=${style.keyword}>## Tecnologías con las que trabajo habitualmente:</span>
- <span class=${style.tag}>Next.js</span>
- <span class=${style.tag}>React</span>
- <span class=${style.tag}>Zustand</span>
- <span class=${style.tag}>Prisma</span>
- <span class=${style.tag}>Sequelize</span>`
