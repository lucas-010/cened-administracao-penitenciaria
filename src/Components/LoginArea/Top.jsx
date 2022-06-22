import React from 'react'
import brasilFlag from '../../Images/brasilFlag.jpg'

export default function Top() {
  return (
    <div className='bg-gray-200 border-t-2 border-black p-6'>
       <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center'>
          <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center'>
          <img className='w-32' src={brasilFlag} alt="" />
          <div className='ml-5 text-center lg:text-left md:text-left'>
          <h2 className='text-2xl font-bold text-[#0303B5]'>Programa de Qualificação Profissional às Pessoas Privadas de Liberdade</h2>
          <p className='text-lg font-semibold text-[#315DAD]'>Legislação aplicada: <i>Art. 126 da Lei de Execução Penal e Resolução nº 391/2021-CNJ</i></p>
          </div>
          <div className='mt-10 lg:mt-0 lg:ml-20 text-[#315DAD] text-base font-semibold'>
            <p>Acesso às Secretarias Penitenciárias Conveniadas com a Escola CENED!</p>
            <p>Inscrições abertas para Convênio (Cooperação Educacional)</p>
            <p>Escreva para o e-mail: cenedqualificando@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
