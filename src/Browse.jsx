import React from 'react';
import { Link } from 'react-router-dom';
 
function Browse() {
  return (
    <section className="browse-range-section">
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <div className="categories-grid">
            <article className="category-item">
                <img src="./src/assets/category-dining.png" alt="Dining Room"/>
                <h3>Dining</h3>
            </article>
            <article className="category-item">
                <img src="./src/assets/category-living.png" alt="Living Room"/>
                <h3>Living</h3>
            </article>
            <article className="category-item">
                <img src="./src/assets/category-bedroom.png" alt="Bedroom"/>
                <h3>Bedroom</h3>
            </article>
        </div>
    </section>
  )
}
 
 
export default Browse;