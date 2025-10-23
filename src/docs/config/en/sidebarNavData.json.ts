import type { DocsSidebarNavData } from "../types/configDataTypes";

const sidebarNavData: DocsSidebarNavData = {
  tabs: [
    {
      id: "overview",
      title: "Overview",
      description: "Introduction to Supra EVM",
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
      title: "Build on SupraEVM Beta",
      description: "Start developing on Supra EVM",
      icon: "tabler/stack-2",
      sections: [
        {
          id: "build-on-supraev",
          title: "Build on SupraEVM Beta",
        },
      ],
    },
    {
      id: "network",
      title: "Network Information",
      description: "RPC endpoints and network details",
      icon: "tabler/api-app",
      sections: [
        {
          id: "network-info",
          title: "Network Information",
        },
      ],
    },
    {
      id: "deploy",
      title: "Deploy Your First Contract",
      description: "Step-by-step deployment guide",
      icon: "tabler/bulb",
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
