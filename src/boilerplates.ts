export type Framework = "mui" | "shadcn" | "antd";

export interface Boilerplate {
  name: string;
  repo: string;
  description: string;
}

export const boilerplates: Record<Framework, Boilerplate> = {
  mui: {
    name: "MUI + Vite",
    repo: "github:your-username/mui-boilerplate",
    description: "React + MUI + Vite setup",
  },
  shadcn: {
    name: "Shadcn + Vite",
    repo: "github:your-username/shadcn-boilerplate",
    description: "React + Shadcn + Tailwind",
  },
  antd: {
    name: "Ant Design",
    repo: "github:your-username/antd-boilerplate",
    description: "React + Antd + Vite",
  },
};
