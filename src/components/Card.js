import { Icon, InLineIcon } from '@iconify/react'
import externalLinkAlt from '@iconify-icons/fa-solid/external-link-alt'

function Card(props) {
  return (
    <div>
      <img src={props.image}  width="590" height="350"/>
      <h3>{props.title}</h3>
      <p>{props.para}</p>
      {props.link && <a href={props.link} > <Icon icon={externalLinkAlt} /></a>}
    </div>
  );
}

export default Card;
