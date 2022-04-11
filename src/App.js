import React, {useState} from 'react';
import DataPoint from './Data/DataPoint';
import NewData from './Data/NewData';

const sampleData = [];

function App() {
  const [updated, setUpdated] = useState(sampleData);
  const onNewInput = (dict) =>{
    return(
      setUpdated(prevState =>{
        return [...prevState, dict];
      })
    );
  };

  return (
    <div>
      <NewData newDataInput = {onNewInput}/>
      <DataPoint data = {updated} />
    </div>
  );
}

export default App;
