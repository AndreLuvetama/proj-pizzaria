import React from 'react'
import pizza1 from '../../assets/img/pizza-s4.jpg';
import pizza4 from '../../assets/img/destaques/pizza-4.jpg';
import pizza6 from '../../assets/img/destaques/pizza-6.png';
import pizza7 from '../../assets/img/destaques/pizza-7.jpg';



export default function MenuPizza() {
  return (
            <>         

             <div className="flex justify-center space-x-2 m-4 ">
                    <div className='bg-white'>
                        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
                            <img class="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={pizza7} alt="" />
                            <div class="flex flex-col justify-center pr-2 pl-2 leading-normal">
                                <span class="mb-2 text-sm tracking-tight text-orange-700 dark:text-white">Pizza Broto Meio a Meio(25cm) </span>
                                <p class="mb-2 font-normal text-sm text-gray-950 dark:text-gray-400">Pizza grande, serve 8 pessoas</p>
                                <br/>
                                <span className='text-start'>R$ 79,99</span> 
                                <button type="button" className="text-orange-600 hover:text-white border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Pedir agora</button>

                            </div>
                        </a>
                    </div>
                    <div className='bg-white'>
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
    <img class="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={pizza6} alt="" />
    <div class="flex flex-col justify-center pr-2 pl-2 leading-normal">
        <span class="mb-2 text-sm tracking-tight text-orange-700 dark:text-white">Pizza Broto Meio a Meio(25cm) </span>
        <p class="mb-2 font-normal text-sm text-gray-950 dark:text-gray-400">Pizza grande, serve 8 pessoas</p>
        <br/>
            <span className='text-start'>R$ 30,00</span> 
             
            <button type="button" className="text-orange-600 hover:text-white border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Pedir agora</button>

    </div>
</a>
                    </div>
                    <div className='bg-white'><a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
    <img class="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={pizza4} alt="" />
    <div class="flex flex-col justify-center pr-2 pl-2 leading-normal">
        <span class="mb-2 text-sm tracking-tight text-orange-700 dark:text-white">Pizza Broto Meio a Meio(25cm) </span>
        <p class="mb-2 font-normal text-sm text-gray-950 dark:text-gray-400">Pizza grande, serve 8 pessoas</p>
        <br/>
        <span className='text-start'>R$ 70,99</span> 
        <button type="button" className="text-orange-600 hover:text-white border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Pedir agora</button>

    </div>
</a></div>
                    </div>
            </>

    
  )
}
