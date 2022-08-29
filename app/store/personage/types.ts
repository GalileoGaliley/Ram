type TemplateType = {
  name: string;
  url: string;
};

type Personage = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: TemplateType;
  location: TemplateType;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type PersonagesResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Personage[];
};

type PersonagesState = {
  info: {
    count: number;
    pages: number[];
    next: string;
    prev: string;
  };
  personagesIds: string[];
  personages: Record<string, Personage>;
  loading: boolean;
};

export type {Personage, PersonagesResponse, PersonagesState};
