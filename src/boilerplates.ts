export type Framework = "mui" | "shadcn" | "antd";

export interface Boilerplate {
  name: string;
  repo: string;
  description: string;
  comingSoon?: boolean;
}

export const boilerplates: Record<Framework, Boilerplate> = {
  mui: {
    name: "MUI + Vite",
    repo: "https://github.com/PrathameshhW/mui-multitenant-boilerplate",
    description: "React + MUI + Vite setup",
  },
  shadcn: {
    name: "Shadcn + Vite",
    repo: "github:your-username/shadcn-boilerplate",
    description: "React + Shadcn + Tailwind",
    comingSoon: true,
  },
  antd: {
    name: "Ant Design",
    repo: "github:your-username/antd-boilerplate",
    description: "React + Antd + Vite",
    comingSoon: true,
  },
};
