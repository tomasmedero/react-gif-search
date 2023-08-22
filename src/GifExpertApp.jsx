import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategorie = (newCategory) => {
    if (categories.includes(newCategory)) {
      return
    }
    setCategories([newCategory])
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory newCategory={(value) => onAddCategorie(value)} />

      {categories.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  )
}
