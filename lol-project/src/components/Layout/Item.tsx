import { Link } from "react-router-dom";

// import types from '../../types';
import { Champion, Role, Type } from "../../types/types";

interface Props {
  champion?: Champion;
  role?: Role;
  type?: Type;
}

export default function Item({ champion, role, type }: Props) {
  let data;
  let category;

  if (champion) {
    data = champion;
  } else if (role) {
    data = role;
  } else if (type) {
    data = type;
  } else {
    return false;
  }

  if (data.picture.includes("champions")) {
    category = `champion/${data.slug}`;
  } else if (data.picture.includes("roles")) {
    category = `role/${data.slug}`;
  } else if (data.picture.includes("types")) {
    category = `type/${data.slug}`;
  } else {
    return false;
  }

  return (
    <Link to={`/${category}`}>
      <li className="menu-champion-item">{data.name}</li>
    </Link>
  );
}
