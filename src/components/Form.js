import '../styles/form.css';

export default function Form({ingredient, handleChange, handleCancel, handleSubmit}) {
  return (
    <form id="form-add" onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input name="name" type="text" required value={ingredient.name} onChange={handleChange}></input>
      <label>Categoría</label>
      <select name="category" required value={ingredient.category} onChange={handleChange}>
        <option value="carbohidratos">Carbohidratos</option>
        <option value="proteina">Proteína</option>
        <option value="lacteos">Lácteos</option>
        <option value="dulces">Dulces</option>
        <option value="frutas y verduras">Frutas y verduras</option>
        <option value="bebidas">Bebidas</option>
      </select>
      <label>Cantidad</label>
      <input name="qty" type="number" value={ingredient.qty} onChange={handleChange}></input>
      <label>Unidad</label>
      <select name="unit" value={ingredient.unit} onChange={handleChange}>
        <option value="onzas">onzas</option>
        <option value="gramos">gramos</option>
        <option value="kilogramos">kilogramos</option>
        <option value="piezas">piezas</option>
        <option value="litros">litros</option>
        <option value="mililitros">mililitros</option>
      </select>
      <div className="actions-wrapper">
        <button onClick={handleCancel}>Cancelar</button>
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
}