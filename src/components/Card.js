function Card(props) {
  return (
    <div>
      <img src={props.image}  width="590" height="350"/>
      <h3>{props.title}</h3>
      <p>{props.para}</p>
      <a href={props.link} class="button" target='_blank'>Check It Out</a>
    </div>
  );
}

export default Card;
