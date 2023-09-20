import React, { useState } from 'react'; // Import React
import CategoryButton from './CategoryButton';

function ProjectsCategories({ categories, onFilterProjects }) {
  const [activeCategory, setActiveCategory] = useState('all');

  function changeCategoryHandler(activeCat) {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  }

  return (
    <div className='portfolio__categories'>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'}`}
        />
      ))}
    </div>
  );
}

export default ProjectsCategories;
