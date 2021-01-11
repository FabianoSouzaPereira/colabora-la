export default interface Itype {
  id: string;
  title: string;
  picture: string;
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
