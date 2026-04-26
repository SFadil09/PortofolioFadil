export interface ProjectImages {
  blockDiagram?: string;
  wiring?: string;
  design3D?: string;
  commsDiagram?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface ProjectCertificate {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  preview?: string;
  file?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  icon: string;
  highlights: string[];
  /** Optional cover image shown on the project card */
  image?: string;
  /** Optional structured diagram/design images shown on the detail page */
  projectImages?: ProjectImages;
  /** Optional HKI / intellectual property certificate */
  certificate?: ProjectCertificate;
}

export const projects: Project[] = [
  {
    slug: "uav-launcher",
    title: "UAV Fixed-Wing Launcher with PID Control",
    description:
      "Pneumatic-based fixed-wing UAV launcher prototype featuring a PID control system for precise launch speed and trajectory regulation.",
    longDescription: `This project was developed as the final project for my Bachelor's degree in Electrical Engineering at Universitas Ahmad Dahlan. The system uses a pneumatic mechanism to launch a fixed-wing UAV with precise control over launch parameters.

The PID control system was implemented to ensure consistent launch speed and minimize trajectory deviation. Multiple tuning iterations were performed in MATLAB/Simulink before physical validation on the prototype.

The mechanical structure was fully designed using SolidWorks and manufactured in-house, while the control firmware was written in C/C++ for a microcontroller-based embedded system.`,
    technologies: [
      "C/C++",
      "PID Control",
      "Pneumatics",
      "SolidWorks",
      "MATLAB/Simulink",
      "Microcontroller",
    ],
    category: "Robotics & Control",
    icon: "🚀",
    image: "/uav-block-diagram.png",
    highlights: [
      "Designed and fabricated the full pneumatic launcher mechanism",
      "Implemented and tuned PID control algorithm for precise speed regulation",
      "Simulated and validated control system in MATLAB/Simulink before hardware deployment",
      "3D modeled launcher structure using SolidWorks with manufacturing tolerances",
      "Achieved consistent launch performance within target velocity parameters",
    ],
    projectImages: {
      blockDiagram: "/uav-block-diagram.png",
      wiring: "/uav-wiring.jpg",
      design3D: "/uav-3d-design.png",
    },
    certificate: {
      title: "Industrial Design Certificate - UAV Launcher",
      issuer: "Directorate General of Intellectual Property (DGIP), Indonesia",
      year: "2024",
      description:
        "This project has been officially registered as an industrial design under Intellectual Property Rights (HKI), proving originality and ownership of the UAV launcher system.",
      file: "/hki-uav-launcher.pdf",
    },
  },
  {
    slug: "iot-smart-building",
    title: "IoT Smart Building System (LoRaWAN + BACnet)",
    description:
      "Enterprise-grade IoT infrastructure for intelligent building management, integrating LoRaWAN sensor networks with BACnet server for IBMS integration at government facilities.",
    longDescription: `Developed and commissioned as part of a government infrastructure project at Ibu Kota Nusantara (IKN). The system integrates multiple sensor types via LoRaWAN protocol and exposes data through BACnet for integration with the Intelligent Building Management System (IBMS).

The solution uses Milesight WS202 (PIR + Temperature/Humidity) and EM400 series sensors connected to the UG65 LoRaWAN Gateway. A BACnet server was configured to provide standardized building automation data access for downstream IBMS platforms.

Network architecture, IP addressing, and firmware configuration were handled end-to-end to ensure reliable 24/7 operation in a live government facility.`,
    technologies: [
      "LoRaWAN",
      "BACnet",
      "IoT",
      "Milesight UG65",
      "Python",
      "IBMS",
      "Networking",
    ],
    category: "IoT & Automation",
    icon: "🏢",
    highlights: [
      "Commissioned Milesight WS202 & EM400 sensors with UG65 LoRaWAN Gateway",
      "Configured BACnet server for seamless IBMS integration",
      "Integrated real-time multi-sensor data into centralized monitoring dashboard",
      "Designed and implemented full network architecture for sensor communication",
      "Successfully deployed in live government infrastructure at IKN",
    ],
    projectImages: {
      commsDiagram: {
        src: "/lorawan-bacnet-diagram.png",
        alt: "LoRaWAN to BACnet communication architecture using Milesight UG65, WS202, EM400 integrated with Niagara IBMS",
        caption:
          "Communication flow from field devices to IBMS Niagara platform.",
      },
    },
  },
  {
    slug: "water-quality-monitoring",
    title: "Water Quality Monitoring System",
    description:
      "Real-time water quality monitoring with pH, TDS, and turbidity sensors using Modbus RTU/TCP communication protocol for industrial-grade reliability.",
    longDescription: `A comprehensive water quality monitoring solution developed as part of the IoT infrastructure project at Ibu Kota Nusantara. The system utilizes multiple water quality sensors connected via Modbus RTU/TCP protocol, providing reliable real-time data acquisition for centralized monitoring.

The system processes and transmits pH, Total Dissolved Solids (TDS), and turbidity measurements, enabling operators to monitor water quality parameters and trigger alerts when values exceed acceptable thresholds.

Emphasis was placed on stable long-term data acquisition, proper sensor calibration procedures, and integration with the building's central monitoring infrastructure.`,
    technologies: [
      "IoT",
      "Modbus RTU/TCP",
      "Python",
      "MicroPython",
      "Sensor Calibration",
      "Data Acquisition",
    ],
    category: "IoT & Monitoring",
    icon: "💧",
    highlights: [
      "Installed, calibrated, and tested pH, TDS, and turbidity sensors",
      "Implemented Modbus RTU/TCP communication protocol with error handling",
      "Developed robust data acquisition pipeline for continuous real-time monitoring",
      "Integrated sensor data into centralized monitoring system",
      "Validated measurement accuracy against reference instruments",
    ],
    projectImages: {
      commsDiagram: {
        src: "/modbus-water-quality-diagram.png",
        alt: "Modbus RTU to TCP communication using USR-N520 with Supmea pH, TDS, and Turbidity sensors integrated to Niagara IBMS",
        caption:
          "Communication flow from field devices to IBMS Niagara platform.",
      },
    },
  },
];
