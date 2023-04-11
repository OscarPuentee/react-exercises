import { useState } from 'react';
import Form from './Form';
import List from './List';
import '../styles/form.css';

export default function Refrigerator() {
  const defaultIngredient = {
    id: crypto.randomUUID(),
    name: "",
    qty: 0,
    unit: "onzas",
    category: "carbohidratos"
  }

  const [showForm, setShowForm] = useState(false);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredient, setIngredient] = useState(defaultIngredient);
  
  const toggleForm = () => {
    setShowForm(!showForm);
    resetForm();
  }

  const resetForm = () => {
    setIngredient(defaultIngredient);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const isFound = ingredientsList.some(item => item.id === ingredient.id)
    if (!isFound) {
      setIngredientsList([...ingredientsList, ingredient]);
    } else {
      const newList = ingredientsList.map((item) => {
        if (item.id === ingredient.id) {
          return ingredient;
        } else {
          return item;
        }
      });
      setIngredientsList(newList);
    }
    toggleForm();
  }

  const handleChange = (event) => {
    setIngredient({...ingredient, [event.target.name]: event.target.value});
  };

  const editIngredient = (item) => {
    toggleForm();
    setIngredient(item);
  }

  return (
    <div id="refrigerator">
      <h1>Mi Refrigerador <span className="icon-add" onClick={toggleForm}>+</span></h1>
      <div id="modal-overlay" className={!showForm ? 'd-none' : ''} onClick={toggleForm}></div>
      { showForm &&
        <Form ingredient={ingredient} handleChange={handleChange} handleCancel={toggleForm} handleSubmit={handleSubmit}/>
      }
      { ingredientsList.length > 0 &&
        <List items={ingredientsList} editIngredient={editIngredient}/>
      }
    </div>
  );
}