export default function HeaderTop({ children }: { children?: React.ReactNode }) {
    return <div className='text-white pt-32 md:pt-64 text-center'>{children && children}</div>
}
