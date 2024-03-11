export interface MenuItem {
  name: string;
  route: string;
  children?: MenuItem[];
}
