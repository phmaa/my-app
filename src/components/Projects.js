import Section from './Sections';

const sections = [
  {
      title:'Web Development',
      id:'webdev',
      cards:[{image:'images/food_guru-350.jpg',
              title:'CSS Grid',
              para:'A responsive website handled by CSS Grid and media queries.',
              link: 'https://phmaa.github.io/project-grid/'},
              {image:'images/flex-350.jpg',
              title:'Flexbox',
              para:'A CSS Flexbox model that automatically arranges elements based on the viewport sizes.',
              link: 'https://phmaa.github.io/project-flexbox/'},
              {image:'images/silhouet-350.jpg',
              title:'HD Images',
              para:'Provide the optimal image file to the browser based on device pixel ratio and image size.',
              link: 'https://phmaa.github.io/projectHD/'},
              {image:'images/salon-350.jpg',
              title:'Responsive Design',
              para:'Using pure CSS code to create responsive navigation, flexible images and dynamic text.',
              link: 'https://phmaa.github.io/Brand_Salon/'}]
},
  {
      title:'Databases',
      id:'database',
      cards:[{image:'images/mysql-350.jpg',
      title:'Transactional Databases',
      para:'Querying and manipulating data from various RDBMS, including Microsoft SQL Server, Oracle, SQLite, MariaDB, PostgreSQL and MySQL.',
      link: 'https://phmaa.github.io/scripts'},
      {image:'images/report-350.jpg',
      title:'Data Reporting',
      para:'Created enhanced reports and dynamic KPIs that allow users to access actionable data on the go or to make informed business decisions.',
      link: 'https://phmaa.github.io/reporting/'},
      {image:'images/diagram-350.jpg',
      title:'OLAP',
      para:'Consolidated a number of data sources into a single data warehouse and reorganized columnstore indexes to optimize query performance.'},
      {image:'images/package-350.jpg',
      title:'Data Integration',
      para:'Built packages of automated workflows through ETL process and piped data off to a wide range of file types and destinations.'}]
  },
  {
    title:'Programming',
    id:'programming',
    cards:[{image:'images/mysql-350.jpg',
    title:'Python',
    para:'Classical cipher decryption using frequency analysis as well as other techinques like Kasiski test and the index of coincidence.',
    link: 'https://phmaa.github.io/crypto'},
    {image:'',
    title:'',
    para:'',
    link: '#'},
    {image:'',
    title:'',
    para:'',
    link: '#'},
    {image:'',
    title:'',
    para:'',
    link: '#'}]
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
