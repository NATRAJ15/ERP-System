import React, { useEffect, useState } from 'react'
import css from './Product.module.css'
import CardUi from './CardUi'
import mainData from '../mock_data/productData.json'

function Product() {
  const [data, setData] = useState([...mainData]);
  const [formState, setFormState] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: ["Grocery","Vegetables","Fruits"],
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(false);
    setData([...data, formData]);
    console.log(formData);
  };
  const handleAddProducts = () => {
    setFormData({
      name: '',
      category: ["Grocery","Vegetables","Fruits"],
      price: '',
      quantity: ''
    })
    setFormState(true)
  }
  const handleDelete = (name) => {
    setData(data.filter(item => item.name !== name));
    console.log("deleted");
  }

  return (
    <div className={css.main}>
        <h1 className={css.titleCtn}>Products
          <button className={css.addBtn} onClick={handleAddProducts}>+ Add Products</button>
        </h1>
        { formState &&
          <form className={css.formMain} onSubmit={handleSubmit}>
            <div>
              <label>Name:</label><br/>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label>Price:</label><br/>
              <input type="number" name="price" value={formData.price} onChange={handleChange} />
            </div>
            <div>
              <label>Quantity:</label><br/>
              <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        }
        <div className={css.cardCtn}>
          {data.map((mock)=><CardUi key={mock.name} mock={mock} onDelete={handleDelete}/>)}
        </div>
    </div>
  )
}

export default Product