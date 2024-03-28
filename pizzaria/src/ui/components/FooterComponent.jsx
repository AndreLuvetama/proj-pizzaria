import React from 'react'
import { NavLink } from 'react-router-dom'

export const FooterComponent = () => {
  return (
        <footer className="bg-higth rounded-lg shadow dark:bg-gray-900 bg-slate-200 mt-10">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:itens-center md:justify-between">
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <NavLink to="/" className="nav-link hover:underline me-4 md:me-6">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="nav-link hover:underline me-4 md:me-6">
                            Delivery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="nav-link hover:underline me-4 md:me-6">
                                Nosso Cardápio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="nav-link hover:underline me-4 md:me-6">
                                Quem Somos
                            </NavLink>
                        </li>

                    </ul>
                    <hr class="bg-orange-400 border-0 dark:bg-gray-700"></hr>
                    <span className="text-sm text-gray-950 sm:text-center dark:text-gray-400">@2024</span>
                </div>
        </footer>
  )
}
