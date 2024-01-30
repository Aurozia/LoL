// import types from '../../types';
import { Champion, Role, Type } from "./types/types";

export const typeData: Type[] = [
  {
    id: 1,
    name: "Assassin",
    slug: "/type/assasin",
    picture: "/src/assets/types/assassin.png",
  },
  {
    id: 2,
    name: "Combattant",
    slug: "/type/combattant",
    picture: "/src/assets/types/combattant.png",
  },
  {
    id: 3,
    name: "Mage",
    slug: "/type/mage",
    picture: "/src/assets/types/mage.png",
  },
  {
    id: 4,
    name: "Support",
    slug: "/type/support",
    picture: "/src/assets/types/support.png",
  },
  {
    id: 5,
    name: "Tank",
    slug: "/type/tank",
    picture: "/src/assets/types/tank.png",
  },
  {
    id: 6,
    name: "Tireur",
    slug: "/type/tireur",
    picture: "/src/assets/types/tireur.png",
  },
];

export const roleData: Role[] = [
  {
    id: 1,
    name: "Top",
    slug: "/role/top",
    picture: "/src/assets/roles/top.png",
  },
  {
    id: 2,
    name: "Jungle",
    slug: "/role/jungle",
    picture: "/src/assets/roles/jungle.png",
  },
  {
    id: 3,
    name: "Mid",
    slug: "/role/mid",
    picture: "/src/assets/roles/mid.png",
  },
  {
    id: 4,
    name: "ADC",
    slug: "/role/adc",
    picture: "/src/assets/roles/adc.png",
  },
  {
    id: 5,
    name: "Support",
    slug: "/role/support",
    picture: "/src/assets/roles/support.png",
  },
];

function findRoleByName(name: string): Role | undefined {
  return roleData.find((role) => role.name === name);
}

function findTypeByName(name: string): Type | undefined {
  return typeData.find((type) => type.name === name);
}

export const championData: Champion[] = [
  {
    id: 37,
    name: "Garen",
    alias: "Force de Demacia",
    slug: "/champion/garen",
    description:
      "Garen est un guerrier fier et noble qui fait partie du Détachement hardi. Héritier des Crownguard, la famille chargée de défendre Demacia et ses idéaux, il est apprécié par ses compatriotes et respecté par ses ennemis. Équipé d'une armure résistante à la magie et d'une épée large, Garen affronte sans faillir les mages et les sorciers dans un véritable tourbillon d'acier.",
    picture: "src/assets/champions/garen.jpg",
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
    picture: "src/assets/champions/lux.jpg",
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
    picture: "src/assets/champions/missfortune.jpg",
    release_date: "2010-09-08",
    role: findRoleByName("ADC"),
    type: findTypeByName("Tireur"),
  },
  {
    id: 1,
    name: "Garen",
    alias: "Force de Demacia",
    slug: "/champion/garen",
    description:
      "Garen est un guerrier fier et noble qui fait partie du Détachement hardi. Héritier des Crownguard, la famille chargée de défendre Demacia et ses idéaux, il est apprécié par ses compatriotes et respecté par ses ennemis. Équipé d'une armure résistante à la magie et d'une épée large, Garen affronte sans faillir les mages et les sorciers dans un véritable tourbillon d'acier.",
    picture: "src/assets/champions/garen.jpg",
    release_date: "2010-04-27",
    role: findRoleByName("Top"),
    type: findTypeByName("Combattant"),
  },
  {
    id: 2,
    name: "Lux",
    alias: "Dame de lumière",
    slug: "/champion/lux",
    description:
      "Luxanna Crownguard est originaire de Demacia, un royaume isolationniste où la magie inspire la peur et la méfiance. Capable de plier la lumière à sa volonté, elle a grandi dans la crainte d'être un jour exilée et a été contrainte de dissimuler son pouvoir pour préserver l'honneur de sa famille. Cependant, l'optimisme et la ténacité de Lux l'ont conduite à accepter ses talents uniques, et elle les emploie désormais secrètement pour le bénéfice de sa patrie.",
    picture: "src/assets/champions/lux.jpg",
    release_date: "2010-10-19",
    role: findRoleByName("Support"),
    type: findTypeByName("Mage"),
  },
  {
    id: 3,
    name: "Miss Fortune",
    alias: "Chasseuse de primes",
    slug: "/champion/missfortune",
    description:
      "Capitaine de Bilgewater réputée pour sa beauté et crainte pour sa cruauté, Sarah Fortune est une personnalité qui détonne au milieu des criminels endurcis qui arpentent la cité portuaire. Enfant, elle assista au massacre de sa famille par Gangplank, le roi des pillards, et elle prit sa revanche des années plus tard, faisant exploser son navire alors qu'il se trouvait à bord. Ceux qui la sous-estiment découvrent un adversaire imprévisible et séduisant... avant de prendre une ou deux balles dans les entrailles.",
    picture: "src/assets/champions/missfortune.jpg",
    release_date: "2010-09-08",
    role: findRoleByName("ADC"),
    type: findTypeByName("Tireur"),
  },
];
