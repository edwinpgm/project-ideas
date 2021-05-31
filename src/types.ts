export interface IPost {
  meta: IMeta;
  slug: string;
  source?: any;
}

export interface IMeta {
  title: string;
  summary: string;
  level: string;
}

export enum Level {
  BASIC = 'Basic',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}
