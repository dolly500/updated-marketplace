import React, { useState } from 'react';
import styles from './File.module.css'; // Import the CSS file

const Form = () => {
  const [formData, setFormData] = useState({ name: '', price: '', image: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (files) => {
    setFormData({ ...formData, image: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, price, image } = formData;

    console.log('Form Data:', { name, price, image });
  };

  return (
    <form className={styles.formcontainer} onSubmit={handleSubmit}>
      <div className={styles.formgroup}>
        <label className={styles.formlabel}>
          Name:
        </label>
        <input
          className={styles.forminput}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formgroup}>
        <label className={styles.formlabel}>
          Price:
        </label>
        <input
          className={styles.forminput}
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formgroup}>
        <label className={styles.formlabel}>Image:</label>
        <input
          
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files)}
        />
      </div>
      <button className={styles.formbutton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
