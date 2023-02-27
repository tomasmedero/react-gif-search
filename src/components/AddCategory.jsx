import { useState } from "react"



export const AddCategory = ({newCategory}) => {
    
    const [initialValue, setInitialValue] = useState('')
 
    const onChangeInput = ({target}) =>
    {
       
        setInitialValue(target.value);
    }


    const onSubmit = (event) =>
    {
        event.preventDefault();
        if (initialValue.trim().length<= 1) {
            return;
        }
        newCategory(initialValue.trim());
        setInitialValue(' ');
        
    }
    return (
    
    <>  

    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Buscar Gif"
        value={initialValue}
        onChange={onChangeInput}
        />     

    </form>
    
    
    </>
    
  )
}
