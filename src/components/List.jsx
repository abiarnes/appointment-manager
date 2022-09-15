import Patient from "./Patient";

const List = ({patients, setPatientItem, deleteItem}) => {
  
  return (
    <div className='md:w-1/2 lg:w-3/5'>

      {patients && patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Patient List</h2>
          <p className='text-lg mt-5 mb-10 text-center'>
            Manage your {''}
          <span className='text-indigo-600 font-bold'>patients and appointments
          </span>
          </p>
          <div className="md:h-screen overflow-y-scroll">
            {patients.map(patientItem => (
              <Patient
                patientItem={patientItem}
                key={patientItem.id}
                setPatientItem={setPatientItem}
                deleteItem={deleteItem}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl  text-center'>There is no patients</h2><p className='text-lg mt-5 mb-10 text-center'>
            Start adding patients {''}
            <span className='text-indigo-600 font-bold'>they will appear below</span>
          </p>
        </>
      ) }
    </div>
  );
}
 
export default List;