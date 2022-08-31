/* This example requires Tailwind CSS v2.0+ */
import { MegaphoneIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <div className="bg-indigo-600">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2 hover:bg-indigo-700">
              
              <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" onClick={() => {
                location.href="/"
              }}  />
            </span>
            <p className="text-2xl ml-3 truncate font-medium text-white">
              <span className="md:hidden">Sistema de Controle de Pautas</span>
              <span className="hidden md:inline">Sistema de Controle de Pautas</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="/login"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-lg font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              Login
            </a>
          </div>
          
         
        </div>
      </div>
    </div>
  )
}