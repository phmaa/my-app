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
      title:'Data Analytics',
      id:'database',
      cards:[      {image:'images/package-350.jpg',
      title:'Data Processing',
      para:'Set data transformation and processing standards, automated task flows through ETL process and piped data off to a wide range of file types and destinations.'},
      {image:'images/diagram-350.jpg',
      title:'Data Model',
      para:'Translated business requirements into optimized data structure and high-performance data models using BI tools including Power Query, Power BI and Qlik Sense.'},
      {image:'images/mysql-350.jpg',
      title:'Databases',
      para:'Developed a wide range of systems from standalone RDBMS to cloud-based NoSQL and graph databases, built enhanced UI featuring streamlined querying process.',
      link: 'https://phmaa.github.io/scripts'},
      {image:'images/report-350.jpg',
      title:'Reporting & Visualization',
      para:'Created enhanced reports and dynamic KPIs to provide users with actionable insights seving as the basis of data-driven business decisions.',
      link: 'https://phmaa.github.io/reporting/'}]
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
    para:'Dijkstra\'s shortest paths alogrithm and Kosaraju\'s algorithm for finding strongly connected compoents of a directed graph.',
    link: 'https://phmaa.github.io/project-java'},
    {image:'images/android-350.jpg',
    title:'Android',
    para:'Applied OOP techniques to build and unit-test apps featuring various components including activities, services, and content providers.'}]
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
