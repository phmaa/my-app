import Section from './Sections';

const sections = [
  {
      title:'Web Development',
      id:'webdev',
      cards:[{image:'/images/food_guru-350.jpg',
              title:'CSS Grid',
              para:'A responsive website handled by CSS Grid and media queries.',
              link: 'project-grid/index.html'},
              {image:'/images/flex-350.jpg',
              title:'Flexbox',
              para:'A CSS Flexbox model that automatically arranges elements based on the viewport sizes.',
              link: 'project-grid/index.html'},
              {image:'/images/sihouet-350.jpg',
              title:'HD Images',
              para:'Provide the optimal image file to the browser based on device pixel ratio and image size.',
              link: 'https://phmaa.github.io/projectHD/'},
              {image:'/images/salong-350.jpg',
              title:'Responsive Design',
              para:'Using pure CSS code to create responsive navigation, flexible images and dynamic text.',
              link: 'https://phmaa.github.io/Brand_Salon/'}]
},
  {
      title:'Databases',
      id:'database',
      cards:[{image:'/images/mysql-350.jpg',
      title:'Production Databases',
      para:'A responsive website handled by CSS Grid and media queries.',
      link: 'project-grid/index.html'},
      {image:'/images/diagram-350.jpg',
      title:'Data Warehouse',
      para:'A CSS Flexbox model that automatically arranges elements based on the viewport sizes.',
      link: 'project-grid/index.html'},
      {image:'/images/package-350.jpg',
      title:'Data Integration',
      para:'Provide the optimal image file to the browser based on device pixel ratio and image size.',
      link: 'https://phmaa.github.io/projectHD/'},
      {image:'/images/salong-350.jpg',
      title:'Data Reporting',
      para:'Using pure CSS code to create responsive navigation, flexible images and dynamic text.',
      link: 'https://phmaa.github.io/Brand_Salon/'}]
  }];

function Project() {
  return (
    <section id='projects'>
      { sections.map(element=> <Section title={element.title} 
        id={element.id}
        carddata={element.cards}></Section>)}
    </section>
  );
}

export default Project;
