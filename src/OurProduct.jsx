import React from 'react';
import { Link } from 'react-router-dom';
 
function OurProduct() {
  return (
    <section class="product-section">
      <h2>Our Products</h2>
        <div class="product-grid">
          <article class="category-item">
              <img src="./src/assets/category-dining.png" alt="Dining Room"/>
              <h3>Dining</h3>
          </article>
          <article class="category-item">
              <img src="./src/assets/category-living.png" alt="Living Room"/>
              <h3>Living</h3>
          </article>
          <article class="category-item">
              <img src="./src/assets/category-bedroom.png" alt="Bedroom"/>
              <h3>Bedroom</h3>
          </article>
        </div>
    </section>
  )
}
 
 
export default OurProduct;