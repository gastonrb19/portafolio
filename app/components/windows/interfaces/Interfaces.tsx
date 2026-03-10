export interface Tecnology {
  id: number;
  name: string;
}

export interface Experience {
  id: number;
  start_date: string;
  finish_date?: string;
  company_name: string;
  description: string;
  isCurrent: boolean;
  tecnologies: Tecnology[];
}
