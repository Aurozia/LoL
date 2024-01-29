// import types from '../../types';
import { Champion, Role, Type } from "./types/types";

export const typeData: Type[] = [
  { id: 1, name: "Assassin", slug: '/role/assasin'},
  { id: 2, name: "Combattant", slug: '/role/combattant'},
  { id: 3, name: "Mage", slug: '/role/mage'},
  { id: 4, name: "Support", slug: '/role/support'},
  { id: 5, name: "Tank", slug: '/role/tank'},
  { id: 6, name: "Tireur", slug: '/role/tireur'},
];

export const roleData: Role[] = [
  { id: 1, name: "Top", slug: '/type/top'},
  { id: 2, name: "Jungle", slug: '/type/jungle'},
  { id: 3, name: "Mid", slug: '/type/mid'},
  { id: 4, name: "ADC", slug: '/type/adc'},
  { id: 5, name: "Support", slug: '/type/support'},
];

function findRoleByName(name: string): Role | undefined {
  return roleData.find(role => role.name === name);
}

function findTypeByName(name: string): Type | undefined {
  return typeData.find(type => type.name === name);
}

export const championData: Champion[] = [
  {
    id: 37,
    name: "Garen",
    alias: "Force de Demacia",
    slug: "/champion/garen",
    description:
      "Garen est un guerrier fier et noble qui fait partie du Détachement hardi. Héritier des Crownguard, la famille chargée de défendre Demacia et ses idéaux, il est apprécié par ses compatriotes et respecté par ses ennemis. Équipé d'une armure résistante à la magie et d'une épée large, Garen affronte sans faillir les mages et les sorciers dans un véritable tourbillon d'acier.",
    picture: "../assets/champions/garen.jpg",
    release_date: "2010-04-27",
    role: findRoleByName("Top"),
    type: findTypeByName("Combattant"),
  },
  {
    id: 75,
    name: "Lux",
    alias: "Dame de lumière",
    slug: "/champion/lux",
    description:
      "Luxanna Crownguard est originaire de Demacia, un royaume isolationniste où la magie inspire la peur et la méfiance. Capable de plier la lumière à sa volonté, elle a grandi dans la crainte d'être un jour exilée et a été contrainte de dissimuler son pouvoir pour préserver l'honneur de sa famille. Cependant, l'optimisme et la ténacité de Lux l'ont conduite à accepter ses talents uniques, et elle les emploie désormais secrètement pour le bénéfice de sa patrie.",
    picture: "../assets/champions/lux.jpg",
    release_date: "2010-10-19",
    role: findRoleByName("Support"),
    type: findTypeByName("Mage"),
  },
  {
    id: 81,
    name: "Miss Fortune",
    alias: "Chasseuse de primes",
    slug: "/champion/missfortune",
    description:
      "Capitaine de Bilgewater réputée pour sa beauté et crainte pour sa cruauté, Sarah Fortune est une personnalité qui détonne au milieu des criminels endurcis qui arpentent la cité portuaire. Enfant, elle assista au massacre de sa famille par Gangplank, le roi des pillards, et elle prit sa revanche des années plus tard, faisant exploser son navire alors qu'il se trouvait à bord. Ceux qui la sous-estiment découvrent un adversaire imprévisible et séduisant... avant de prendre une ou deux balles dans les entrailles.",
    picture: "../assets/champions/missfortune.jpg",
    release_date: "2010-09-08",
    role: findRoleByName("ADC"),
    type: findTypeByName("Tireur"),
  },
];
