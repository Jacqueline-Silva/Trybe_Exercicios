import React from 'react';

class States extends React.Component {
  render() { 
    const arrUf = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
    return (
      <>
        {arrUf.map((state) => 
          <option key={state}>{state}</option>)}
      </>
    );
  }
}
 
export default States;