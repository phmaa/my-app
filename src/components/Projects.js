import Section from './Sections';

const sections = [
  {
      title:'Web Development',
      id:'webdev',
      cards:[{image:'images/tea-350.jpg',
              title:'Bootstrap 5',
              para:'A fully responsive proof of concept page built with Bootstrap 5.',
              link: 'https://phmaa.github.io/bootstrap5/'},
              {image:'images/flex-350.jpg',
              title:'Flexbox',
              para:'A CSS Flexbox model that automatically arranges elements based on the viewport sizes.',
              link: 'https://phmaa.github.io/project-flexbox/'},
              {image:'images/silhouet-350.jpg',
              title:'HD Images',
              para:'Provide the optimal image file to the browser based on device pixel ratio and image size.',
              link: 'https://phmaa.github.io/projectHD/'},
              {image:'images/animation-350.jpg',
              title:'Animations',
              para:'Static webpage with a focus on tranforms, transitions, and animations.',
              link: 'https://phmaa.github.io/animations/'}]
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
    cards:[{image:'images/python-350.jpg',
    title:'Python',
    para:'Classical cipher decryption using frequency analysis as well as other techinques like Kasiski test and the index of coincidence.',
    link: 'https://phmaa.github.io/crypto'},
    {image:'images/vampire-350.jpg',
    title:'JavaScript',
    para:'A team project that interacts with users and applies Google Visualziation API to render results.',
    link: 'https://phmaa.github.io/vampire'},
    {image:'images/java-350.jpg',
    title:'Java',
    para:'Dijkstra\'s shortest pahts alogrithm and Kosaraju\'s algorithm for finding strongly connected compoents of a directed graph.',
    link: 'https://phmaa.github.io/project-java'},
    {image:'images/android-350.jpg',
    title:'Android',
    para:'A collection of Android apps featuring various components including activities, services, and content providers.'}]
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
