export interface NavNode {
  id: string;
  name: string;
  checked?: boolean;
  expand?: boolean;
  children?: NavNode[];

    /** runtime only to detect when nested menu may overflow to the right */
  openLeft?: boolean;
}