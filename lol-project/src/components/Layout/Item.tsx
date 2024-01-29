import { Link } from "react-router-dom";

// import types from '../../types';
import { Champion, Role, Type } from '../../types/types';

interface Props {
  champion?: Champion;
  role?: Role;
  type?: Type;
}

export default function Item({champion, role, type}: Props) {
  let data;

  if (champion) {
    data = champion;
  } else if (role) {
    data = role;
  } else if (type) {
    data = type;
  }
  else {
    return false;
  }

  return (
    <Link to={data.slug}><li className="menu-champion-item">{data.name}</li></Link>
  )
}
