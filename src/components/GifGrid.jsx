import { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({categoria}) => {
  
  const {images, isLoading} = useFetchGifs(categoria);

  
    
    return (
    
      <>
        <h2>{categoria}</h2>
        
      {
        isLoading && (<h3>Cargando...</h3>) 
       

      }

        

      <div className="card-grid">
      { images.map( (imagenes) =>(
        
        <GifItem  
             key={imagenes.id} 
            {...imagenes}
        />
        

      )
          ) }
      </div>
        
    
        </>
  )
}
