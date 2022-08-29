type ComponentName = 'Hero';
type UILayout = 'Card' | 'Center' | 'Default';

export type Section = {
  components: Component[];
};

export type Component = {
  config: BaseConfig;
  data: BaseData;
  ui: UI;
};
export type BaseConfig = {
  component: ComponentName;
};

type UI = {
  layout: UILayout;
};

export type BaseData = {
  eyebrow?: string;
  bodies?: string[];
  heading: string;
};

export interface Page {
  head: {
    metadata: Object;
    links: Object;
  };
  sections: Section[];
}
