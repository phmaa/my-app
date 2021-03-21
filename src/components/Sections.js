import Card from './Card';

function Section(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <section id={props.id}> { props.carddata.map(element=> <Card image= {element.image}
            title= {element.title} para={element.para} 
            link= {element.link}></Card> ) }</section>
    </section>
  );
}

export default Section;
