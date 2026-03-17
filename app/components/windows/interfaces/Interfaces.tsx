export interface Tecnology {
  id: number;
  name: string;
}

export interface WrapFolderProps {
  id: number;
  name: string;
  isFile: boolean;
  isDisplay: boolean;
  url_image: string;
  isOpen: boolean;
  experiences: Experience[];
}

export interface Experience {
  id: number;
  start_date?: string;
  finish_date?: string;
  company_name?: string;
  name?: string;
  description: string;
  isCurrent: boolean;
  tecnologies: Tecnology[];
}

export interface Tecnology {
  id: number;
  name: string;
  expertise?: string;
}
