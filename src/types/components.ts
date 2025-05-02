export interface Component {
  id: string;
  name: string;
  description: string;
  code: string;
  category: string;
  component: React.ComponentType;
}