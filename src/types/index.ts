export type ParamData = string | number;

export interface ITasksData {
  level: number;
  task: string;
  baloons: Array<string>;
  status: Array<boolean>;
  descript: Array<string>;
  id: ParamData;
}
