export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
  image?: string;
  credentialUrl?: string;
  icon?: string;
}

export const certificates: Certificate[] = [
  {
    id: "krti-2024",
    title: "KRTI (Kontes Robot Terbang Indonesia)",
    issuer:
      "Ministry of Education, Culture, Research, and Technology – Indonesia",
    year: "2024",
    description:
      "Participated in the Indonesian Flying Robot Contest (KRTI), focusing on UAV system design, control systems, and mechanical integration.",
    image: "/krti-certificate.jpg",
    credentialUrl: "/krti-certificate.pdf",
  },
];
