import Section from './Sections';
const sections = [
  {
      title:'Web Development',
      id:'webdev',
      cards:[{image:'/images/mysql-350.jpg',
              title:'CSS Grid',
              para:'A responsive website handled by CSS Grid and media queries.',
              link: 'project-grid/index.html'},
              {image:'image goes there',
              title:'CSS Grid',
              para:'A responsive website handled by CSS Grid and media queries.',
              link: 'project-grid/index.html'},
              {image:'image goes there',
              title:'CSS Grid',
              para:'A responsive website handled by CSS Grid and media queries.',
              link: 'project-grid/index.html'},
              {image:'image goes there',
              title:'CSS Grid',
              para:'A responsive website handled by CSS Grid and media queries.',
              link: 'project-grid/index.html'}]
},
  {
      title:'Databases',
      id:'database',
      cards:[]
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
