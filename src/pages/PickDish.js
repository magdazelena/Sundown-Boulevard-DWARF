import React, { useEffect, useState } from 'react';
import GeneratorBox from '../components/action/GeneratorBox';
import NextStepBox from '../components/action/NextStepBox';
import { getCurrentOrder } from '../services/local';

function PickDish(props) {
  const [dish, setDish] = useState(null);
  const [data, setData] = useState({
    email: false,
    dish: null
  })
  let email = false;
  if (props.location.state) {
    email = props.location.state.email;
  }
  useEffect(() => {
    setData({
      email: email,
      dish: dish
    })
  }, [email, dish, setDish]);
  return (<div className="grid-0">
    <GeneratorBox findByEmail={email} onGenerate={setDish} />
    <NextStepBox name="Anything to drink?" disabled={!data.dish} pathname="/pick-drink" data={data} />
  </div>)
}
export default PickDish;