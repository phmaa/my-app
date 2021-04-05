function Card(props) {
  return (
    <div>
      <img src={props.image}  width="590" height="350"/>
      <h3>{props.title}</h3>
      <p>{props.para}</p>
      {props.link && <a href={props.link} style='font-size:24px; color:#b2becc' class='fas'>&#xf35d;</a>}
    </div>
  );
}

export default Card;
