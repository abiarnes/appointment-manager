const Patient = ({ patientItem, setPatientItem, deleteItem }) => {
  const { name, owner, email, date, symptoms, id } = patientItem;

  const handleDelete = () => {
    const response = confirm('Do you want to delete this patient?');

    if (response) {
      deleteItem(id)
    }
  }
  
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700">
          Name: {''}
          <span className="font-normal normalcase">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Owner: {''}
          <span className="font-normal normalcase">{owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Email: {''}
          <span className="font-normal normalcase">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Date of discharge: {''}
          <span className="font-normal normalcase">{date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Symptoms: {''}
        </p>
          <span className="font-normal">{symptoms}</span>
        <div className="flex justify-between mt-10">
          <button
            type='button'
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md"
            onClick={() => setPatientItem(patientItem)}
          >
            Edit
          </button>
          <button
            type='button'
            className="py-2 px-10 bg-rose-400 hover:bg-rose-600 text-white font-bold rounded-md"
            //onClick={() => deleteItem(id)}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
  );
}
 
export default Patient;