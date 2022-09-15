import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"

function App() {

  const [patients, setPatients] = useState([]);
  const [patientItem, setPatientItem] = useState({});

  useEffect(() => {
    const obtainLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS);
      console.log('patientsLS', patientsLS);
    }
    obtainLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])
  

  const deleteItem = id => {
    const updatedList = patients.filter(patient => patient.id !== id);
    setPatients(updatedList);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
          patientItem={patientItem}
          setPatientItem={setPatientItem}
        />
        <List
          patients={patients}
          setPatientItem={setPatientItem}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  )
}

export default App
