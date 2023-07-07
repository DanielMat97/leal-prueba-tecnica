export interface DetailInterface {
  type: string;
  value: number;
}

export interface RulesEntity {
  id_campaing: string;
  type: string;
  start_date: Date;
  end_date: Date;
  detail: DetailInterface;
}
