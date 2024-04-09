import React, { useState } from 'react'
import imgfundo from '../assets/img/fundo.jpg';
import { useNavigate } from 'react-router-dom';
import { loginAPICall, saveLoggedInUser, storeToken } from '../service/AuthService';
export const LoginPage = () => {
  const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigator = useNavigate()
 

  async function handelLoginForm(e){
        e.preventDefault();

     await loginAPICall(username, password).then((response) => {
            console.log(response.data);
         
            const token = 'Bearer ' + response.data.accessToken;
            const role = response.data.role;
           
            storeToken(token);
            saveLoggedInUser(username, role)
            navigator("/")
            window.location.reload(false);
            }).catch(error => {
                console.error(error)
            })
    }


  return (
    <div className=' bg-white-100 bg-blue-700' style={{background: `url(${imgfundo})`,
    backgroundSize: 'cover'}}>

    
        <div className='row space-y-12 flex items-center h-screen w-screen justify-center '>
            <div className="card bg-orange-50 shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                <card className="card-header">
                  <h1 className="text-start font-bold text-lg" >Faça login</h1>
                  <card className="card-body">
                     <form >
                     <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 sm:grid-cols-12">
                      <div className="col-span-full">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                          Nome de usuário
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder="Nome do usuário"
                            className="block w-full p-2 rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Password
                        </label>
                        <div className="mt-2">
                          <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            name="password"
                            id="password"
                            placeholder="password"
                            className="block w-full p-2 rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                  </div>                 

                      <div className='row pt-4  text-wrap-500 hover:text-blue-900'><p><a href='#'>Esqueci minha senha</a></p> 
                     <br/>    
                     </div>

                     <div class="mt-4 flex items-center justify-center gap-x-6">                                    
                      <button onClick={(e) => handelLoginForm(e)} type="submit" class="w-full rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-red-950 focus-visible:outline focus-visible:outline-2 border-b-4 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Acessar</button>
                    </div>                      
                    </form>
                  </card>
                </card>                
            </div>
          
        </div>
    </div>
  )
}
