import React from 'react'
import pizza1 from '../../assets/img/pizza-s4.jpg';
import pizza4 from '../../assets/img/destaques/pizza-4.jpg';
import pizza6 from '../../assets/img/destaques/pizza-6.png';
import pizza7 from '../../assets/img/destaques/pizza-7.jpg';
import CarrinhoPage from '../../pages/CarrinhoPage';

export default function MenuPizza() {

    const data = [
        {id: 1, title: 'Calabresa', description: 'Calabresa com cebola', image: pizza6, price: "R$ 30,00" },
        {id: 2, title: 'Milho verde', description: 'Milho verde com catupiry', image: pizza6, price: "R$ 69,99" },
        {id: 3, title: 'Bacom', description: 'Mussarela e Bacom', image: pizza6, price: "R$ 69,99" },
        {id: 4, title: 'Napolitano', description: 'Nussarela, tomate e queijo ralado', image: pizza6, price: "R$ 70,99" },
        {id: 5, title: 'Calabresa especial', description: 'Calabresa e mussarela especial', image: pizza6, price: "R$ 79,99" },
        {id: 6, title: 'Carne seca', description: 'Carne seca e mussarela', image: pizza6, price: "R$ 59,49" },
        {id: 7, title: 'Portuguesa', description: 'Mussarela, ovo, tomate e cebola', image: pizza6, price: "R$ 39,59" },
        {id: 8, title: 'Farngo chedar', description: 'Frango e chedar especial', image: pizza6, price: "R$ 59,99" },
        {id: 9, title: 'Farngo chedar', description: 'Frango e chedar e queijo', image: pizza6, price: "R$ 29,99" },

    ]
    return (    

    <>         
    <div className="flex justify-center space-x-2 m-4 flex-wrap ">      
        

    { data.map((item) =>(
            <div className='bg-white divMenu'  >             
                    <a href="#" key={item.id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
                    <img className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.image} alt="" />
                    <div className="flex flex-col justify-center pr-2 pl-2 leading-normal">
                        <span className="mb-2 text-sm tracking-tight text-orange-700 dark:text-white">{item.title}</span>
                        <p className="mb-2 font-normal text-sm text-gray-950 dark:text-gray-400">{item.description}</p>
                        <br/>
                        <span className='text-start'>{item.price}</span> 
                        <CarrinhoPage/>
                        
                    </div>
                   </a>              
            </div> 
            ))}
    </div>
    </>
    )
}