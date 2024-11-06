export type TechniqueType = {
  img: string;
  title: string;
  description: {
    bucketVolume: number;
    maxDepth: number;
    weight: number;
    loadCapacityAuto: number;
    loadCapacityArrow: number;
    boomReach: number;
    sideLength: number;
  };
  price: number;
};

export type ServicesType = {
  icon: string;
  title: string;
  descreption: string;
};

export type FieldType = {
  teamMessage?: string;
  name: string;
  telephone: string;
};
