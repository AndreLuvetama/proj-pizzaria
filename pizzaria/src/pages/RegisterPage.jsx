import React from 'react'
import imgfundo from '../assets/img/fundo.jpg';

export const RegisterPage = () => {
  return (
    <div className=' bg-white-100 bg-blue-700' style={{background: `url(${imgfundo})`,
    backgroundSize: 'cover'}}>

    
        <div className='row space-y-12 flex items-center h-screen w-screen justify-center '>
            <div className="card bg-orange-50 shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                <card className="card-header">
                  <h1 className="text-start font-bold text-lg" >Faça o seu cadastro</h1>
                  <card className="card-body">
                     <form className=''>
                     <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 sm:grid-cols-12">
                      <div className="col-span-full">
                        <label htmlFor="nomeusuario" className="block text-sm font-medium leading-6 text-gray-900">
                          Nome de usuário
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="nomeusuario"
                            id="nomeusuario"
                            placeholder="Nome do usuário"
                            className="block w-full p-2 rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="col-span-full">
                        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="block w-full p-2 rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Password
                        </label>
                        <div className="mt-1">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            className="block w-full p-2 rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                  </div>                 

                      <div className='row pt-4  text-wrap-500 hover:text-blue-900'><p><a href='#'>Fazer login</a></p> 
                     <br/>    
                     </div>

                     <div class="mt-4 flex items-center justify-center gap-x-6">                                    
                      <button type="submit" class="w-full rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-red-950 focus-visible:outline focus-visible:outline-2 border-b-4 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button>
                    </div>                      
                    </form>
                  </card>
                </card>                
            </div>
          
        </div>
    </div>
  )
}
