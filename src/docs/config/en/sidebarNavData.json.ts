import type { DocsSidebarNavData } from "../types/configDataTypes";

const sidebarNavData: DocsSidebarNavData = {
  tabs: [
    {
      id: "overview",
      title: "Overview",
      description: "Introduction to Supra MultiVM",
      icon: "tabler/file-text",
      sections: [
        {
          id: "overview",
          title: "Overview",
        },
      ],
    },
    {
      id: "build",
      title: "Build on Supra MultiVM",
      description: "Start developing on Supra MultiVM",
      icon: "tabler/stack-2",
      sections: [
        {
          id: "build-on-supraev",
          title: "Start Building",
        },
      ],
    },
    {
      id: "network",
      title: "Network Information",
      description: "RPC endpoints and network details",
      icon: "tabler/link",
      sections: [
        {
          id: "network-info",
          title: "Network Information",
        },
      ],
    },
    {
      id: "deploy",
      title: "Learn & Deploy",
      description: "Step-by-step deployment guide",
      icon: "tabler/school",
      sections: [
        {
          id: "deploy-contract",
          title: "Deploy Your First Contract",
        },
      ],
    },
  ],
};

export default sidebarNavData;
