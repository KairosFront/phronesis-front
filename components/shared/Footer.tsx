import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className={`  bg-black text-white md:px-8 md:py-4 p-2 `}>
            <div className="container mx-auto text-sm">
                <div className="flex flex-col md:flex-row justify-between  ">
                    <div className="mb-4 md:mb-0">
                        <h2 className="font-bold text-lg">Kairos Research</h2>
                        <p>&copy;2023 Kairos Research. All rights reserved</p>
                        <p>Terminos de uso</p>
                        <p>Politica de privacidad</p>
                    </div>
                    <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-4 ">
                        <div>
                            <h3 className="font-bold">Análisis</h3>
                            <ul>
                                <li>
                                    <Link href='#'>
                                        Todos los analisis
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        A profundidad
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Fundamental
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Reporte mensual
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Servicios</h3>
                            <ul>
                                <li>
                                    <Link href='#'>
                                        Asesoría Web3
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Token Engineering
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Nosotros</h3>
                            <ul>
                                <li>
                                    <Link href='#'>
                                        Alianzas
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Roadmap
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Equipo
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Contacto</h3>
                            <ul>
                                <li>
                                    <Link href='#'>
                                        X
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        LinkedIn
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Telegram
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer