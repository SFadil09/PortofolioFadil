export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
  /** Path to certificate image (place in /public/certificates/) */
  image?: string;
  /** Optional external credential URL */
  credentialUrl?: string;
  icon?: string;
}

export const certificates: Certificate[] = [
  {
    id: "iot-certification",
    title: "IoT Certification",
    issuer: "Example Platform",
    year: "2024",
    description:
      "Completed a comprehensive IoT fundamentals and application course.",
    icon: "📡",
    // image: '/certificates/iot-certification.jpg',
    // credentialUrl: 'https://example.com/verify/abc123',
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems Fundamentals",
    issuer: "Coursera",
    year: "2023",
    description:
      "Learned microcontroller programming, RTOS, and real-time control systems.",
    icon: "🔧",
    // image: '/certificates/embedded-systems.jpg',
    // credentialUrl: 'https://coursera.org/verify/...',
  },
  {
    id: "python-automation",
    title: "Python for Automation",
    issuer: "Udemy",
    year: "2023",
    description:
      "Scripting and automation with Python including data processing and API integration.",
    icon: "🐍",
    // image: '/certificates/python-automation.jpg',
  },
];
