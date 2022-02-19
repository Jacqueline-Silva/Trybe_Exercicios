import React from 'react';
import series from './data';


class SeriesMap extends React.Component {
  render() {
    return (
      <div className='cardPai'>
        <p className='subTitle'>{this.props.subtitle}</p>
        <div className='card'>
          {series.map((e) => 
            <div key={e.id} className='cardInterno'>
              <p className='titleSerie'>{e.name}</p>
              <p>{`(${e.genre})`}</p>
              <img src={e.image} alt={e.name} width="200px"></img>
            </div> )}
        </div> 
      </div>
      
    )
  }
}
 
export default SeriesMap;