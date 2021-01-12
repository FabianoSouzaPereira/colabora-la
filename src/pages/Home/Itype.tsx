export default interface Itype {
  id: string;
  title: string;
  picture: any;
  message: string;
  createdAt: string;
  updatedAt: string;
  comments?: {
    id: string;
    name: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
  };
}
