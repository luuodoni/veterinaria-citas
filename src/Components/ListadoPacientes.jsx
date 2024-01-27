
import Pacientes from "./Paciente"


function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {


  

  return (
    <div className="mt-24 md:w-1/2 lg:w-3/5 md:mt-0 ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Pacientes
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {' '}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>

          <div className="md:h-screen overflow-y-scroll">
            
            {pacientes.map(function (paciente) {
              return (
                <Pacientes
                  paciente={paciente}
                  key={paciente.id}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div>
        <h2 className="font-black text-3xl text-center">
            No hay Pacientes
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agragando {' '}
            <span className="text-indigo-600 font-bold">
              Pacientes
            </span>
          </p>
        </div>
      )}
    </div>
  );
}


export default ListadoPacientes