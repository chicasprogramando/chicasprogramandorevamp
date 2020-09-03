const Comunidad = () => {
    return (
        <div className="m-12">
        <h1 className="text-purple text-xl">
            Nuestra Comunidad
        </h1>
        <div className="flex flex-row">
        <input class=" mr-4 focus:outline-none border-b border-gray-300 py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Buscar por nombre"/>
        <input class="mr-4 focus:outline-none  border-b border-gray-300 py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Buscar por especialidad"/>
        <input class="mr-4 focus:outline-none  border-b border-gray-300 py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Buscar por skills"/>

        <button className="md:ml-4 w-2/6 bg-gradient-to-r from-purple to-lilac hover:bg-indigo-700 text-white py-2 px-4 rounded-full">
              Filtrar
            </button>
            <button className="md:ml-4 w-2/6 bg-transparent hover:bg-purple text-white-700 text-purple hover:text-white py-2 px-4 hover:border-transparent rounded-full">
              Borrar filtros
            </button>
        </div>
        <div className="m-20"> estamos ok en comunidad</div>
        </div>
    )

}

export default Comunidad