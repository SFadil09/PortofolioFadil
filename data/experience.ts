export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "work" | "organization";
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "freelance-iot",
    role: "Freelance IoT & Automation Engineer",
    company: "Ibu Kota Nusantara (IKN) – Government Project",
    period: "2025 – Present",
    location: "Ibu Kota Nusantara, Indonesia",
    type: "work",
    description: [
      "Implemented IoT and automation systems in government infrastructure projects",
      "Commissioned LoRaWAN sensors (Milesight WS202 & EM400) with UG65 Gateway",
      "Configured BACnet server for IBMS integration in smart building systems",
      "Integrated real-time sensor data into centralized monitoring platforms",
      "Installed and tested water quality sensors (pH, TDS, Turbidity)",
      "Implemented Modbus RTU/TCP communication protocol for stable data acquisition",
    ],
  },
  {
    id: "internship-kai",
    role: "Engineering Intern",
    company: "PT Kereta Api Indonesia – Sintelis DAOP 6",
    period: "2023",
    location: "Yogyakarta, Indonesia",
    type: "work",
    description: [
      "Performed preventive maintenance on electrical and signaling systems",
      "Analyzed sensor data to ensure system accuracy and operational reliability",
      "Collaborated with senior engineers on maintenance scheduling and fault diagnosis",
    ],
  },
  {
    id: "lab-assistant",
    role: "Laboratory Assistant",
    company: "Electrical Engineering Lab – Universitas Ahmad Dahlan",
    period: "2021 – 2023",
    location: "Yogyakarta, Indonesia",
    type: "work",
    description: [
      "Assisted students in laboratory practices, experiments, and troubleshooting",
      "Created comprehensive lab modules and instructional materials",
      "Evaluated and graded practical assignments across multiple courses",
      "Maintained laboratory equipment and enforced safety compliance",
    ],
  },
  {
    id: "uav-team-head",
    role: "Head of UAV Team",
    company: "Robotic Development Community – Universitas Ahmad Dahlan",
    period: "2022 – 2024",
    location: "Yogyakarta, Indonesia",
    type: "organization",
    description: [
      "Led a competitive UAV robotics team in national-level competitions",
      "Managed project planning, task distribution, and milestone execution",
      "Solved complex technical problems under high-pressure competition environments",
      "Mentored and upskilled junior team members in UAV engineering concepts",
    ],
  },
  {
    id: "student-association-head",
    role: "Head of External Relations",
    company: "Electrical Engineering Student Association – UAD",
    period: "2022 – 2023",
    location: "Yogyakarta, Indonesia",
    type: "organization",
    description: [
      "Led external relations division managing industry partnerships and collaborations",
      "Organized company visits, workshops, and inter-university events",
      "Represented the association in cross-campus and industry activities",
    ],
  },
  {
    id: "student-association-staff",
    role: "Staff Member – External Relations",
    company: "Electrical Engineering Student Association – UAD",
    period: "2021 – 2022",
    location: "Yogyakarta, Indonesia",
    type: "organization",
    description: [
      "Supported planning and execution of external events and partnerships",
      "Assisted in coordinating communication with partner institutions",
    ],
  },
];
