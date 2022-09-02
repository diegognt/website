type ComponentName = 'Hero';
type UILayout = 'Card' | 'Center' | 'Default';
export type AssetSource = {
  path: string;
  width: number;
  aspectRatio?: '1:1' | '3:4' | '4:3';
  breakpoint?: 'small' | 'medium' | 'large';
};

export type ImageAsset = {
  sources: AssetSource[];
  alternativeText?: string;
};

export type Asset = {
  type: 'Image' | 'Icon';
  sources: AssetSource[];
  alternativeText?: string;
};

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
  asset: Asset;
};

type Link = {
  path: string;
};

type NavigationTypes = 'Primary' | 'Secondary';

export type Navigation = {
  type: NavigationTypes;
  navigationItems: NavigationItem[];
};

export type NavigationItem = {
  link: Link;
  label: string;
  type: NavigationTypes;
};

export type Footer = {
  navigationItems: NavigationItem[];
};

export interface Page {
  head: {
    metadata: Object;
    links: Object;
  };
  footer: Footer;
  sections: Section[];
}
