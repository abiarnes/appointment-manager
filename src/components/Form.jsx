import { useState, useEffect } from "react";
import ErrorMsg from "./ErrorMsg";

const Form = ({ patients, setPatients, patientItem, setPatientItem }) => {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(patientItem).length > 0) {
      setName(patientItem.name);
      setOwner(patientItem.owner);
      setEmail(patientItem.email);
      setDate(patientItem.date);
      setSymptoms(patientItem.symptoms);
    }
  }, [patientItem]); 

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if([name, owner, email, date, symptoms].includes('')) {
      setError(true)
      return;
    }
    setError(false);

    const patientObject = {
      name,
      owner,
      email,
      date,
      symptoms
    }

    if(patientItem.id) {
      // Edit entry
      patientObject.id = patientItem.id;
      const updatedPatients = patients.map(patientState => 
        patientState.id === patientItem.id ? patientObject : patientState)

      setPatients(updatedPatients);
      setPatientItem({});

      
    } else {
      // New entry
      console.log('new');
      patientObject.id = generateId();
      setPatients([...patients, patientObject]);
    }


    // Reset form
    setName('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptoms('');
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 m-3'>
      <h2 className='font-black text-3xl text-center'>Patient Monitoring</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Add patients and {''}
        <span className='text-indigo-600 font-bold'>manage them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      >
        {error && <ErrorMsg><h2>All fields are mandatory</h2></ErrorMsg>}
        <div  className="mb-5">
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="petName"
          >
            Pet's name
          </label>
          <input
            id="petName"
            type="text"
            placeholder="Pet's name"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={name}
            onChange={ (e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="ownerName"
          >
            Owners's name
          </label>
          <input
            id="ownerName"
            type="text"
            placeholder="Owner's name"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={owner}
            onChange={ (e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="discharge"
          >
            Date of discharge
          </label>
          <input
            id="discharge"
            type="date"
            placeholder="Date of discharge"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={date}
            onChange={ (e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="symptoms"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            placeholder="Description of the symptoms"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={symptoms}
            onChange={ (e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={ patientItem.id ? 'Edit Patient' : 'Add Patient'}
        />
      </form>
    </div>
  );
}
 
export default Form;