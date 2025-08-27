// Job data for HiTech Dot Com
const jobsData = [
  {
    id: "1",
    title: "Senior SAP Consultant",
    company: "HiTech Dot Com",
    department: "SAP Consulting",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    deadline: "2025-10-20T23:59:59",
    description:
      "Lead SAP implementation projects and provide technical expertise to clients across various modules including FICO, MM, and SD. Work with global clients on enterprise transformation initiatives.",
    requirements: [
      "4+ years experience in SAP consulting",
      "Strong knowledge of SAP FICO and MM modules",
      "Experience with S/4HANA implementations",
      "Excellent client communication skills",
    ],
    salary: "₹8-15 LPA",
    experience: "4-7 years",
    remote: true,
    skills: ["SAP FICO", "SAP MM", "S/4HANA", "Project Management"],
    applicants: 47,
    matchScore: 92,
  },
  {
    id: "2",
    title: "HR Business Partner",
    company: "HiTech Dot Com",
    department: "Human Resources",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    deadline: "2025-10-10T18:00:00",
    description:
      "Strategic HR support for business units, talent management, and organizational development initiatives. Drive HR policies and employee engagement programs.",
    requirements: [
      "MBA in HR or equivalent qualification",
      "3+ years experience in HR business partnering",
      "Strong analytical and problem-solving skills",
      "Knowledge of labor laws and compliance",
    ],
    salary: "₹6-12 LPA",
    experience: "3-6 years",
    remote: false,
    skills: ["HR Strategy", "Talent Management", "Employee Relations", "Compliance"],
    applicants: 23,
    matchScore: 78,
  },
  {
    id: "3",
    title: "Financial Analyst",
    company: "HiTech Dot Com",
    department: "Finance",
    location: "Delhi, NCR",
    type: "Full-time",
    deadline: "2025-09-20T17:30:00",
    description:
      "Financial planning, analysis, and reporting for corporate clients with focus on business intelligence and data-driven insights.",
    requirements: [
      "CA/CFA or MBA Finance",
      "2+ years in financial analysis",
      "Advanced Excel and financial modeling",
      "Experience with ERP systems",
    ],
    salary: "₹5-10 LPA",
    experience: "2-5 years",
    remote: true,
    skills: ["Financial Analysis", "Excel", "Financial Modeling", "ERP"],
    applicants: 31,
    matchScore: 85,
  },
  {
    id: "4",
    title: "IT Support Specialist",
    company: "HiTech Dot Com",
    location: "Chennai, Tamil Nadu",
    department: "Information Technology",
    type: "Full-time",
    deadline: "2025-09-05T20:00:00",
    description:
      "Provide technical support for IT infrastructure, troubleshoot system issues, and maintain network operations for client environments.",
    requirements: [
      "Bachelor's degree in IT/Computer Science",
      "2+ years experience in IT support",
      "Knowledge of Windows/Linux systems",
      "Strong problem-solving skills",
    ],
    salary: "₹4-8 LPA",
    experience: "2-4 years",
    remote: false,
    skills: ["Windows", "Linux", "Network Support", "Troubleshooting"],
    applicants: 19,
    matchScore: 96,
  },
  {
    id: "5",
    title: "Legal Compliance Officer",
    company: "HiTech Dot Com",
    department: "Legal & Compliance",
    location: "Kolkata, West Bengal",
    type: "Full-time",
    deadline: "2025-08-12T16:00:00",
    description:
      "Ensure regulatory compliance, manage legal documentation, and provide guidance on corporate governance matters.",
    requirements: [
      "LLB with specialization in corporate law",
      "3+ years experience in compliance",
      "Knowledge of Indian corporate regulations",
      "Strong attention to detail",
    ],
    salary: "₹6-11 LPA",
    experience: "3-6 years",
    remote: false,
    skills: ["Corporate Law", "Compliance", "Risk Management", "Documentation"],
    applicants: 15,
    matchScore: 82,
  },
  {
    id: "6",
    title: "Digital Marketing Specialist",
    company: "HiTech Dot Com",
    department: "Sales & Marketing",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    deadline: "2025-10-18T19:00:00",
    description:
      "Develop and execute digital marketing campaigns, manage social media presence, and drive online engagement for our consultancy services.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "2+ years experience in digital marketing",
      "Proficiency in Google Analytics and social media platforms",
      "Creative thinking and analytical skills",
    ],
    salary: "₹4-9 LPA",
    experience: "2-4 years",
    remote: true,
    skills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
    applicants: 28,
    matchScore: 89,
  },
]

// Categories data
const categoriesData = [
  {
    name: "SAP Consulting",
    count: 25,
    icon: "fas fa-cogs",
    description: "SAP implementation, support, and consulting services",
    trending: true,
  },
  {
    name: "Human Resources",
    count: 18,
    icon: "fas fa-users",
    description: "HR services, recruitment, and talent management",
    trending: false,
  },
  {
    name: "Finance",
    count: 12,
    icon: "fas fa-chart-line",
    description: "Financial analysis, planning, and advisory services",
    trending: true,
  },
  {
    name: "Information Technology",
    count: 22,
    icon: "fas fa-laptop-code",
    description: "IT support, infrastructure, and technical services",
    trending: false,
  },
  {
    name: "Legal & Compliance",
    count: 8,
    icon: "fas fa-balance-scale",
    description: "Legal services, compliance, and risk management",
    trending: false,
  },
  {
    name: "Sales & Marketing",
    count: 15,
    icon: "fas fa-bullseye",
    description: "Digital marketing, sales, and business development",
    trending: true,
  },
]

// Global variables
let currentTime = new Date()
let filteredJobs = []
let selectedJob = null

const servicesData = {
  "temporary-staffing": {
    title: "Temporary Staffing",
    category: "Human Resources",
    icon: "fas fa-users",
    overview:
      "Our temporary staffing solutions provide flexible workforce management for businesses of all sizes. We specialize in connecting skilled professionals with organizations for short-term projects, seasonal demands, peak workloads, and specialized requirements across diverse industry verticals. Our comprehensive approach ensures quick deployment while maintaining quality standards.",
    benefits: [
      "Reduced recruitment costs and time-to-hire",
      "Access to pre-screened, qualified candidates",
      "Flexible scaling based on business needs",
      "Reduced administrative burden and compliance risks",
      "Trial period for potential permanent hires",
      "Immediate availability of skilled professionals",
    ],
    features: [
      "Rapid deployment within 24-48 hours",
      "Comprehensive background verification",
      "Skills assessment and matching",
      "Payroll and compliance management",
      "Performance monitoring and feedback",
      "Replacement guarantee for unsatisfactory placements",
    ],
    process: [
      {
        number: 1,
        title: "Requirement Analysis",
        description: "Understanding your specific staffing needs, job requirements, and timeline expectations.",
      },
      {
        number: 2,
        title: "Candidate Sourcing",
        description: "Leveraging our extensive database and network to identify suitable candidates.",
      },
      {
        number: 3,
        title: "Screening & Selection",
        description: "Comprehensive evaluation including skills assessment, interviews, and background checks.",
      },
      {
        number: 4,
        title: "Deployment & Support",
        description: "Seamless onboarding and ongoing support throughout the assignment period.",
      },
    ],
    industries: [
      "IT & Software",
      "Banking & Finance",
      "Manufacturing",
      "Healthcare",
      "Retail",
      "Telecommunications",
      "Government",
      "Education",
    ],
  },
  "recruitment-rpo": {
    title: "Recruitment & RPO",
    category: "Human Resources",
    icon: "fas fa-user-tie",
    overview:
      "Our Recruitment Process Outsourcing (RPO) services provide end-to-end recruitment solutions for permanent positions. We act as an extension of your HR team, managing the entire recruitment lifecycle from job posting to candidate onboarding. Our quality-assured approach ensures you get the right talent for long-term success.",
    benefits: [
      "Reduced cost-per-hire and time-to-fill",
      "Access to wider talent pools and passive candidates",
      "Improved quality of hire through rigorous screening",
      "Scalable recruitment capacity based on demand",
      "Enhanced employer branding and candidate experience",
      "Detailed recruitment analytics and reporting",
    ],
    features: [
      "Dedicated recruitment team assignment",
      "Advanced applicant tracking system",
      "Multi-channel candidate sourcing",
      "Behavioral and technical assessments",
      "Reference and background verification",
      "Offer negotiation and onboarding support",
    ],
    process: [
      {
        number: 1,
        title: "Strategy Development",
        description: "Creating customized recruitment strategies aligned with your business objectives.",
      },
      {
        number: 2,
        title: "Sourcing & Attraction",
        description: "Multi-channel approach to attract and engage top talent in the market.",
      },
      {
        number: 3,
        title: "Assessment & Evaluation",
        description: "Comprehensive candidate evaluation using proven assessment methodologies.",
      },
      {
        number: 4,
        title: "Selection & Onboarding",
        description: "Final selection support and seamless transition into your organization.",
      },
    ],
    industries: [
      "Technology",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Consulting",
      "Retail",
      "Energy",
      "Pharmaceuticals",
    ],
  },
  "payroll-processing": {
    title: "Payroll Processing",
    category: "Human Resources",
    icon: "fas fa-calculator",
    overview:
      "Our comprehensive payroll processing services ensure accurate, timely, and compliant salary management for your organization. We handle all aspects of payroll administration including salary calculations, tax deductions, statutory compliance, and reporting. Our automated systems reduce errors while ensuring full regulatory compliance.",
    benefits: [
      "Guaranteed accuracy in salary calculations",
      "Complete statutory compliance management",
      "Reduced administrative overhead and costs",
      "Enhanced data security and confidentiality",
      "Real-time reporting and analytics",
      "Seamless integration with existing HR systems",
    ],
    features: [
      "Automated salary processing and calculations",
      "Tax computation and statutory deductions",
      "Employee self-service portal access",
      "Customizable payslip generation",
      "Multi-location and multi-currency support",
      "Comprehensive audit trails and reporting",
    ],
    process: [
      {
        number: 1,
        title: "System Setup",
        description: "Configuring payroll parameters, employee data, and organizational policies.",
      },
      {
        number: 2,
        title: "Data Processing",
        description: "Automated processing of attendance, leaves, overtime, and other variables.",
      },
      {
        number: 3,
        title: "Validation & Review",
        description: "Quality checks and validation before final payroll generation.",
      },
      {
        number: 4,
        title: "Distribution & Reporting",
        description: "Secure distribution of payslips and generation of statutory reports.",
      },
    ],
    industries: [
      "All Industries",
      "SMEs",
      "Large Enterprises",
      "Startups",
      "Non-Profit Organizations",
      "Government Contractors",
    ],
  },
  "pf-compliance": {
    title: "PF, Compliance & Verification",
    category: "Human Resources",
    icon: "fas fa-shield-alt",
    overview:
      "Our comprehensive compliance and verification services ensure your organization meets all regulatory requirements while maintaining the highest standards of employee verification. We manage provident fund administration, statutory compliance, and conduct thorough background verification to protect your business interests.",
    benefits: [
      "Complete regulatory compliance assurance",
      "Reduced legal and financial risks",
      "Thorough employee background verification",
      "Streamlined PF administration and management",
      "Regular compliance audits and updates",
      "Expert guidance on changing regulations",
    ],
    features: [
      "PF registration and ongoing administration",
      "ESI, Professional Tax, and other statutory compliance",
      "Comprehensive background verification services",
      "Document verification and authentication",
      "Regular compliance reporting and updates",
      "Legal support for compliance-related issues",
    ],
    process: [
      {
        number: 1,
        title: "Compliance Assessment",
        description: "Evaluating current compliance status and identifying gaps or requirements.",
      },
      {
        number: 2,
        title: "Documentation Setup",
        description: "Establishing proper documentation and registration processes.",
      },
      {
        number: 3,
        title: "Verification Process",
        description: "Conducting thorough background checks and document verification.",
      },
      {
        number: 4,
        title: "Ongoing Management",
        description: "Regular monitoring, reporting, and updates to maintain compliance.",
      },
    ],
    industries: [
      "Manufacturing",
      "IT Services",
      "Financial Services",
      "Healthcare",
      "Retail",
      "Construction",
      "Logistics",
      "Hospitality",
    ],
  },
  "financial-consultancy": {
    title: "Corporate Financial Consultancy",
    category: "Legal & Finance",
    icon: "fas fa-chart-line",
    overview:
      "Our corporate financial consultancy services provide strategic financial planning, advisory services, and corporate restructuring solutions for sustainable business growth. We help organizations optimize their financial performance, manage risks, and make informed strategic decisions through comprehensive financial analysis and planning.",
    benefits: [
      "Strategic financial planning and forecasting",
      "Improved cash flow management and optimization",
      "Risk assessment and mitigation strategies",
      "Enhanced financial reporting and transparency",
      "Support for mergers, acquisitions, and restructuring",
      "Regulatory compliance and governance improvement",
    ],
    features: [
      "Financial health assessment and analysis",
      "Budget planning and variance analysis",
      "Investment appraisal and capital allocation",
      "Working capital optimization strategies",
      "Financial modeling and scenario planning",
      "Regulatory compliance and reporting support",
    ],
    process: [
      {
        number: 1,
        title: "Financial Assessment",
        description: "Comprehensive analysis of current financial position and performance.",
      },
      {
        number: 2,
        title: "Strategy Development",
        description: "Creating customized financial strategies aligned with business objectives.",
      },
      {
        number: 3,
        title: "Implementation Planning",
        description: "Detailed roadmap for implementing recommended financial strategies.",
      },
      {
        number: 4,
        title: "Monitoring & Review",
        description: "Ongoing monitoring and periodic review of financial performance.",
      },
    ],
    industries: [
      "Banking & Finance",
      "Manufacturing",
      "Real Estate",
      "Technology",
      "Healthcare",
      "Energy",
      "Retail",
      "Infrastructure",
    ],
  },
  "risk-control": {
    title: "Risk Control Matrix",
    category: "Legal & Finance",
    icon: "fas fa-clipboard-check",
    overview:
      "Our Risk Control Matrix services provide comprehensive risk assessment, control framework development, and mitigation strategies implementation. We help organizations identify, assess, and manage various types of risks through systematic approaches and proven methodologies to ensure business continuity and regulatory compliance.",
    benefits: [
      "Comprehensive risk identification and assessment",
      "Proactive risk mitigation and control measures",
      "Enhanced regulatory compliance and governance",
      "Improved decision-making through risk insights",
      "Reduced operational and financial losses",
      "Strengthened business continuity planning",
    ],
    features: [
      "Risk assessment and impact analysis",
      "Control framework design and implementation",
      "Risk monitoring and reporting systems",
      "Compliance tracking and management",
      "Business continuity and disaster recovery planning",
      "Regular risk review and updates",
    ],
    process: [
      {
        number: 1,
        title: "Risk Identification",
        description: "Systematic identification of potential risks across all business areas.",
      },
      {
        number: 2,
        title: "Assessment & Prioritization",
        description: "Evaluating risk impact and likelihood to prioritize mitigation efforts.",
      },
      {
        number: 3,
        title: "Control Implementation",
        description: "Designing and implementing appropriate risk control measures.",
      },
      {
        number: 4,
        title: "Monitoring & Review",
        description: "Continuous monitoring and periodic review of risk control effectiveness.",
      },
    ],
    industries: [
      "Banking & Financial Services",
      "Insurance",
      "Healthcare",
      "Manufacturing",
      "Energy & Utilities",
      "Government",
      "Technology",
      "Pharmaceuticals",
    ],
  },
  "delegation-authority": {
    title: "Delegation of Authority",
    category: "Legal & Finance",
    icon: "fas fa-user-check",
    overview:
      "Our Delegation of Authority services focus on authority matrix design, approval workflow optimization, and governance framework establishment. We help organizations create clear, efficient, and compliant decision-making processes that enhance operational efficiency while maintaining proper controls and accountability.",
    benefits: [
      "Clear definition of roles and responsibilities",
      "Streamlined decision-making processes",
      "Enhanced operational efficiency and speed",
      "Improved accountability and transparency",
      "Reduced bottlenecks in approval workflows",
      "Better compliance with governance requirements",
    ],
    features: [
      "Authority matrix design and documentation",
      "Approval workflow mapping and optimization",
      "Segregation of duties implementation",
      "Escalation procedures and protocols",
      "Digital workflow automation support",
      "Regular review and update mechanisms",
    ],
    process: [
      {
        number: 1,
        title: "Current State Analysis",
        description: "Analyzing existing authority structures and identifying improvement areas.",
      },
      {
        number: 2,
        title: "Framework Design",
        description: "Designing optimal authority matrix and approval workflows.",
      },
      {
        number: 3,
        title: "Implementation Support",
        description: "Supporting the implementation of new authority frameworks.",
      },
      {
        number: 4,
        title: "Training & Monitoring",
        description: "Training stakeholders and monitoring framework effectiveness.",
      },
    ],
    industries: [
      "Corporate Enterprises",
      "Financial Services",
      "Government Organizations",
      "Healthcare Systems",
      "Educational Institutions",
      "Non-Profit Organizations",
      "Manufacturing",
      "Technology Companies",
    ],
  },
  "internal-audit": {
    title: "Internal Audit & Listing Compliance",
    category: "Legal & Finance",
    icon: "fas fa-award",
    overview:
      "Our Internal Audit and Listing Compliance services provide comprehensive audit solutions, regulatory compliance management, and listing requirement adherence. We help organizations maintain the highest standards of governance, transparency, and regulatory compliance through systematic audit processes and compliance monitoring.",
    benefits: [
      "Independent assessment of internal controls",
      "Enhanced regulatory compliance and governance",
      "Risk-based audit approach and recommendations",
      "Improved operational efficiency and effectiveness",
      "Strengthened investor confidence and transparency",
      "Proactive identification of compliance gaps",
    ],
    features: [
      "Risk-based internal audit planning and execution",
      "Regulatory compliance assessment and monitoring",
      "Listing requirements adherence and reporting",
      "Internal control evaluation and testing",
      "Management reporting and recommendations",
      "Follow-up and implementation tracking",
    ],
    process: [
      {
        number: 1,
        title: "Audit Planning",
        description: "Risk-based audit planning and scope definition based on business priorities.",
      },
      {
        number: 2,
        title: "Audit Execution",
        description: "Systematic audit execution using proven methodologies and tools.",
      },
      {
        number: 3,
        title: "Reporting & Recommendations",
        description: "Comprehensive reporting with actionable recommendations for improvement.",
      },
      {
        number: 4,
        title: "Follow-up & Monitoring",
        description: "Tracking implementation of recommendations and ongoing compliance monitoring.",
      },
    ],
    industries: [
      "Listed Companies",
      "Banking & Finance",
      "Insurance",
      "Manufacturing",
      "Healthcare",
      "Energy & Utilities",
      "Technology",
      "Real Estate",
    ],
  },
  "manpower-supply": {
    title: "IT Manpower Supply",
    category: "ITES",
    icon: "fas fa-laptop-code",
    overview:
      "Our IT Manpower Supply services provide skilled IT professionals and technical experts for your technology projects, software development, and IT operations. We specialize in sourcing, screening, and deploying qualified IT talent across various technologies and domains to meet your specific project requirements and timelines.",
    benefits: [
      "Access to skilled and certified IT professionals",
      "Reduced recruitment time and costs",
      "Flexible engagement models and scaling",
      "Technical expertise across multiple domains",
      "Quality assurance and performance monitoring",
      "Seamless integration with existing teams",
    ],
    features: [
      "Comprehensive technical skills assessment",
      "Multi-technology expertise and specialization",
      "Flexible contract and permanent placement options",
      "Project-based and long-term assignments",
      "Performance monitoring and feedback systems",
      "Replacement guarantee for unsatisfactory placements",
    ],
    process: [
      {
        number: 1,
        title: "Requirement Analysis",
        description: "Understanding technical requirements, project scope, and skill specifications.",
      },
      {
        number: 2,
        title: "Talent Sourcing",
        description: "Leveraging our network to identify and attract qualified IT professionals.",
      },
      {
        number: 3,
        title: "Technical Assessment",
        description: "Comprehensive technical evaluation and skills validation process.",
      },
      {
        number: 4,
        title: "Deployment & Support",
        description: "Seamless onboarding and ongoing support throughout the engagement.",
      },
    ],
    industries: [
      "Software Development",
      "Financial Technology",
      "E-commerce",
      "Healthcare IT",
      "Telecommunications",
      "Government IT",
      "Startups",
      "Enterprise Solutions",
    ],
  },
  "it-maintenance": {
    title: "IT Maintenance & Support",
    category: "ITES",
    icon: "fas fa-tools",
    overview:
      "Our IT Maintenance and Support services provide comprehensive IT infrastructure maintenance, technical support services, and system optimization. We ensure your IT systems operate at peak performance with minimal downtime through proactive monitoring, preventive maintenance, and rapid issue resolution.",
    benefits: [
      "24/7 technical support and monitoring",
      "Proactive maintenance and issue prevention",
      "Reduced system downtime and disruptions",
      "Cost-effective IT infrastructure management",
      "Enhanced system performance and reliability",
      "Access to latest technologies and best practices",
    ],
    features: [
      "Round-the-clock monitoring and support",
      "Preventive maintenance and system optimization",
      "Incident management and rapid resolution",
      "Performance monitoring and reporting",
      "Security updates and patch management",
      "Backup and disaster recovery support",
    ],
    process: [
      {
        number: 1,
        title: "Infrastructure Assessment",
        description: "Comprehensive evaluation of current IT infrastructure and support needs.",
      },
      {
        number: 2,
        title: "Service Setup",
        description: "Implementing monitoring tools and establishing support procedures.",
      },
      {
        number: 3,
        title: "Proactive Monitoring",
        description: "Continuous monitoring and proactive maintenance of IT systems.",
      },
      {
        number: 4,
        title: "Support & Optimization",
        description: "Ongoing support, issue resolution, and performance optimization.",
      },
    ],
    industries: [
      "All Industries",
      "SMEs",
      "Large Enterprises",
      "Healthcare",
      "Financial Services",
      "Manufacturing",
      "Education",
      "Government",
    ],
  },
  "24x7-maintenance": {
    title: "24x7 Maintenance",
    category: "Maintenance",
    icon: "fas fa-clock",
    overview:
      "Our 24x7 Maintenance services provide round-the-clock maintenance and support for critical systems, ensuring maximum uptime and operational continuity. We offer comprehensive maintenance solutions with immediate response capabilities to minimize business disruptions and maintain optimal system performance.",
    benefits: [
      "Round-the-clock availability and support",
      "Maximum system uptime and reliability",
      "Immediate response to critical issues",
      "Reduced operational risks and disruptions",
      "Cost-effective maintenance solutions",
      "Peace of mind with continuous monitoring",
    ],
    features: [
      "Continuous system monitoring and alerting",
      "Immediate incident response and resolution",
      "Preventive maintenance scheduling",
      "Emergency repair and replacement services",
      "Performance optimization and tuning",
      "Comprehensive maintenance reporting",
    ],
    process: [
      {
        number: 1,
        title: "System Assessment",
        description: "Evaluating critical systems and establishing maintenance requirements.",
      },
      {
        number: 2,
        title: "Monitoring Setup",
        description: "Implementing 24x7 monitoring and alerting systems.",
      },
      {
        number: 3,
        title: "Proactive Maintenance",
        description: "Scheduled preventive maintenance and continuous monitoring.",
      },
      {
        number: 4,
        title: "Incident Response",
        description: "Immediate response and resolution of critical issues and emergencies.",
      },
    ],
    industries: [
      "Manufacturing",
      "Healthcare",
      "Financial Services",
      "Telecommunications",
      "Energy & Utilities",
      "Data Centers",
      "Transportation",
      "Government",
    ],
  },
  "downtime-reduction": {
    title: "Downtime Reduction",
    category: "Maintenance",
    icon: "fas fa-chart-bar",
    overview:
      "Our Downtime Reduction services focus on proactive maintenance strategies and predictive analytics to minimize system downtime and optimize performance. We use advanced monitoring tools and data analytics to predict potential failures and implement preventive measures before issues occur.",
    benefits: [
      "Significant reduction in unplanned downtime",
      "Predictive maintenance and early issue detection",
      "Improved system reliability and performance",
      "Reduced maintenance costs and operational losses",
      "Enhanced productivity and operational efficiency",
      "Data-driven maintenance decision making",
    ],
    features: [
      "Predictive analytics and failure prediction",
      "Condition-based monitoring systems",
      "Root cause analysis and corrective actions",
      "Performance optimization and tuning",
      "Maintenance scheduling and planning",
      "Real-time dashboards and reporting",
    ],
    process: [
      {
        number: 1,
        title: "Baseline Assessment",
        description: "Analyzing current downtime patterns and identifying improvement opportunities.",
      },
      {
        number: 2,
        title: "Predictive Setup",
        description: "Implementing predictive monitoring and analytics tools.",
      },
      {
        number: 3,
        title: "Proactive Intervention",
        description: "Taking preventive actions based on predictive insights and analytics.",
      },
      {
        number: 4,
        title: "Continuous Improvement",
        description: "Ongoing optimization and refinement of maintenance strategies.",
      },
    ],
    industries: [
      "Manufacturing",
      "Oil & Gas",
      "Power Generation",
      "Automotive",
      "Aerospace",
      "Chemical Processing",
      "Mining",
      "Food & Beverage",
    ],
  },
  "project-solutions": {
    title: "Project-based Solutions",
    category: "Maintenance",
    icon: "fas fa-project-diagram",
    overview:
      "Our Project-based Solutions provide customized maintenance and infrastructure solutions for specific requirements and upgrades. We deliver tailored solutions that address unique challenges and requirements through dedicated project teams and proven project management methodologies.",
    benefits: [
      "Customized solutions for specific requirements",
      "Dedicated project teams and resources",
      "Proven project management methodologies",
      "Flexible engagement models and timelines",
      "Quality deliverables within budget and schedule",
      "Knowledge transfer and capability building",
    ],
    features: [
      "Custom solution design and development",
      "Project planning and resource allocation",
      "Quality assurance and testing procedures",
      "Change management and stakeholder communication",
      "Risk management and mitigation strategies",
      "Post-implementation support and maintenance",
    ],
    process: [
      {
        number: 1,
        title: "Project Scoping",
        description: "Defining project requirements, scope, and success criteria.",
      },
      {
        number: 2,
        title: "Solution Design",
        description: "Creating detailed solution architecture and implementation plan.",
      },
      {
        number: 3,
        title: "Implementation",
        description: "Executing the project plan with dedicated teams and resources.",
      },
      {
        number: 4,
        title: "Delivery & Support",
        description: "Project delivery, knowledge transfer, and ongoing support.",
      },
    ],
    industries: [
      "Infrastructure",
      "Manufacturing",
      "Energy & Utilities",
      "Transportation",
      "Healthcare",
      "Government",
      "Education",
      "Real Estate",
    ],
  },
  "sap-training": {
    title: "SAP Training Modules",
    category: "Learning & Development",
    icon: "fas fa-graduation-cap",
    overview:
      "Our comprehensive SAP training programs cover FICO, MM, SD, HCM, and other essential modules for career advancement. We provide hands-on training with real-world scenarios, expert instructors, and certification preparation to help professionals excel in SAP implementations and support roles.",
    benefits: [
      "Industry-recognized SAP certification preparation",
      "Hands-on training with real-world scenarios",
      "Expert instructors with extensive SAP experience",
      "Flexible learning options and schedules",
      "Career advancement and job placement support",
      "Continuous learning and skill development",
    ],
    features: [
      "Comprehensive module coverage (FICO, MM, SD, HCM, etc.)",
      "Hands-on practice with SAP systems",
      "Certification exam preparation and support",
      "Industry case studies and practical exercises",
      "Flexible online and classroom training options",
      "Post-training support and career guidance",
    ],
    process: [
      {
        number: 1,
        title: "Assessment & Planning",
        description: "Assessing current skills and creating personalized learning plans.",
      },
      {
        number: 2,
        title: "Foundation Training",
        description: "Building strong foundation knowledge in selected SAP modules.",
      },
      {
        number: 3,
        title: "Practical Application",
        description: "Hands-on practice with real SAP systems and scenarios.",
      },
      {
        number: 4,
        title: "Certification & Career Support",
        description: "Certification preparation and ongoing career development support.",
      },
    ],
    industries: [
      "All Industries",
      "Manufacturing",
      "Retail",
      "Financial Services",
      "Healthcare",
      "Government",
      "Consulting",
      "Technology",
    ],
  },
  "corporate-training": {
    title: "Corporate Training",
    category: "Learning & Development",
    icon: "fas fa-chalkboard-teacher",
    overview:
      "Our customized corporate training programs focus on leadership development and technical skills enhancement for organizations. We design and deliver tailored training solutions that address specific organizational needs, improve employee performance, and drive business results through effective learning interventions.",
    benefits: [
      "Customized training programs for specific needs",
      "Improved employee performance and productivity",
      "Enhanced leadership and management capabilities",
      "Better employee engagement and retention",
      "Measurable learning outcomes and ROI",
      "Flexible delivery methods and schedules",
    ],
    features: [
      "Needs assessment and custom curriculum design",
      "Leadership development and management training",
      "Technical skills and professional development",
      "Interactive workshops and practical exercises",
      "Multiple delivery formats (online, classroom, blended)",
      "Progress tracking and performance measurement",
    ],
    process: [
      {
        number: 1,
        title: "Needs Assessment",
        description: "Analyzing organizational training needs and skill gaps.",
      },
      {
        number: 2,
        title: "Program Design",
        description: "Creating customized training programs and learning materials.",
      },
      {
        number: 3,
        title: "Training Delivery",
        description: "Delivering engaging and interactive training sessions.",
      },
      {
        number: 4,
        title: "Evaluation & Follow-up",
        description: "Measuring training effectiveness and providing ongoing support.",
      },
    ],
    industries: [
      "Corporate Enterprises",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Technology",
      "Government",
      "Non-Profit",
      "Education",
    ],
  },
  "certification-programs": {
    title: "Certification Programs",
    category: "Learning & Development",
    icon: "fas fa-certificate",
    overview:
      "Our industry-recognized certification programs include SAP Certified Consultant, PMP, ITIL Foundation, and Six Sigma certifications. We provide comprehensive preparation courses, study materials, and expert guidance to help professionals achieve valuable certifications that enhance their career prospects and professional credibility.",
    benefits: [
      "Industry-recognized professional certifications",
      "Enhanced career prospects and earning potential",
      "Comprehensive exam preparation and support",
      "Expert instructors and study materials",
      "High success rates and pass guarantees",
      "Ongoing professional development opportunities",
    ],
    features: [
      "Multiple certification tracks and specializations",
      "Comprehensive study materials and resources",
      "Practice exams and assessment tools",
      "Expert mentoring and guidance",
      "Flexible study schedules and formats",
      "Certification maintenance and renewal support",
    ],
    process: [
      {
        number: 1,
        title: "Certification Selection",
        description: "Helping choose the right certification based on career goals.",
      },
      {
        number: 2,
        title: "Preparation Planning",
        description: "Creating personalized study plans and preparation schedules.",
      },
      {
        number: 3,
        title: "Training & Practice",
        description: "Intensive training sessions and practice examinations.",
      },
      {
        number: 4,
        title: "Certification & Beyond",
        description: "Exam support and ongoing professional development guidance.",
      },
    ],
    industries: [
      "All Industries",
      "IT & Technology",
      "Project Management",
      "Quality Management",
      "Business Analysis",
      "Consulting",
      "Manufacturing",
      "Healthcare",
    ],
  },
}

function initializeServiceModals() {
  const serviceCards = document.querySelectorAll(".service-card")
  const serviceModal = document.getElementById("serviceModal")
  const closeModalBtn = document.getElementById("closeServiceModal")

  // Add click event listeners to service cards
  serviceCards.forEach((card) => {
    const moreBtn = card.querySelector(".service-more-btn")
    if (moreBtn) {
      moreBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        const serviceId = card.getAttribute("data-service")
        openServiceModal(serviceId)
      })
    }

    // Also allow clicking on the card itself
    card.addEventListener("click", () => {
      const serviceId = card.getAttribute("data-service")
      openServiceModal(serviceId)
    })
  })

  // Close modal event listeners
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeServiceModal)
  }

  if (serviceModal) {
    serviceModal.addEventListener("click", (e) => {
      if (e.target === serviceModal) {
        closeServiceModal()
      }
    })
  }

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && serviceModal && serviceModal.classList.contains("active")) {
      closeServiceModal()
    }
  })
}

function openServiceModal(serviceId) {
  const serviceData = servicesData[serviceId]
  const serviceModal = document.getElementById("serviceModal")

  if (!serviceData || !serviceModal) return

  // Populate modal content
  document.getElementById("modalServiceIcon").className = serviceData.icon
  document.getElementById("modalServiceTitle").textContent = serviceData.title
  document.getElementById("modalServiceCategory").textContent = serviceData.category
  document.getElementById("modalServiceOverview").textContent = serviceData.overview

  // Populate benefits
  const benefitsList = document.getElementById("modalServiceBenefits")
  benefitsList.innerHTML = serviceData.benefits.map((benefit) => `<li>${benefit}</li>`).join("")

  // Populate features
  const featuresList = document.getElementById("modalServiceFeatures")
  featuresList.innerHTML = serviceData.features.map((feature) => `<li>${feature}</li>`).join("")

  // Populate process steps
  const processContainer = document.getElementById("modalServiceProcess")
  processContainer.innerHTML = serviceData.process
    .map(
      (step) => `
    <div class="process-step">
      <div class="process-step-number">${step.number}</div>
      <h4>${step.title}</h4>
      <p>${step.description}</p>
    </div>
  `,
    )
    .join("")

  // Populate industries
  const industriesContainer = document.getElementById("modalServiceIndustries")
  industriesContainer.innerHTML = serviceData.industries
    .map((industry) => `<span class="industry-tag">${industry}</span>`)
    .join("")

  // Show modal
  serviceModal.classList.add("active")
  document.body.style.overflow = "hidden"

  // Scroll to top of modal content
  const modalContent = serviceModal.querySelector(".service-modal-content")
  if (modalContent) {
    modalContent.scrollTop = 0
  }
}

function closeServiceModal() {
  const serviceModal = document.getElementById("serviceModal")
  if (serviceModal) {
    serviceModal.classList.remove("active")
    document.body.style.overflow = "auto"
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  setupEventListeners()
  updateTime()
  setInterval(updateTime, 60000) // Update every minute

  // Initialize scroll animations
  initScrollAnimations()

  // Animate hero stats
  setTimeout(() => animateCounters(), 1000)

  // Initialize service modals
  initializeServiceModals()
})

function initializeApp() {
  // Only initialize career-related functions if we're on the careers page
  if (document.getElementById("jobsContainer")) {
    filterAndDisplayJobs()
    displayCategories()
    updateStats()
  }
}

function setupEventListeners() {
  // Navigation
  setupNavigation()

  // Service Tabs Functionality (only on main page)
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      const targetContent = document.getElementById(targetTab)
      if (targetContent) {
        targetContent.classList.add("active")
      }
    })
  })

  // Career Tabs Functionality (only on careers page)
  const careerTabButtons = document.querySelectorAll(".career-tab-btn")
  const careerTabContents = document.querySelectorAll(".career-tab-content")

  careerTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      careerTabButtons.forEach((btn) => btn.classList.remove("active"))
      careerTabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      const targetContent = document.getElementById(`${targetTab}-tab`)
      if (targetContent) {
        targetContent.classList.add("active")
      }
    })
  })

  // Search and filter (only on careers page)
  const searchInput = document.getElementById("searchInput")
  const categoryFilter = document.getElementById("categoryFilter")

  if (searchInput) {
    searchInput.addEventListener("input", filterAndDisplayJobs)
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterAndDisplayJobs)
  }

  // File upload
  const resumeFile = document.getElementById("resumeFile")
  if (resumeFile) {
    resumeFile.addEventListener("change", handleFileUpload)
  }

  // Application form
  const applicationForm = document.getElementById("applicationForm")
  if (applicationForm) {
    applicationForm.addEventListener("submit", handleApplicationSubmit)
  }

  // Contact form
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit)
  }

  // Modal close on overlay click
  const modalOverlay = document.getElementById("modalOverlay")
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal()
      }
    })
  }

  // Scroll to top button
  setupScrollToTop()

  // Smooth scrolling for navigation links
  setupSmoothScrolling()
}

function setupNavigation() {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navbar = document.getElementById("navbar")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Animate hamburger bars
      const bars = navToggle.querySelectorAll(".bar")
      if (navMenu.classList.contains("active")) {
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)"
        bars[1].style.opacity = "0"
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)"
      } else {
        bars[0].style.transform = "none"
        bars[1].style.opacity = "1"
        bars[2].style.transform = "none"
      }
    })
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("active")
        const bars = navToggle?.querySelectorAll(".bar")
        if (bars) {
          bars[0].style.transform = "none"
          bars[1].style.opacity = "1"
          bars[2].style.transform = "none"
        }
      }
    })
  })

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    }
  })
}

function setupScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn")

  window.addEventListener("scroll", () => {
    if (scrollToTopBtn) {
      scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none"
    }
  })

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
      }
    })
  }, observerOptions)

  // Observe all animatable elements
  document
    .querySelectorAll(".service-card, .industry-card, .job-card, .value-item, .contact-info-item")
    .forEach((el) => {
      el.classList.add("scroll-animate")
      observer.observe(el)
    })
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function updateTime() {
  currentTime = new Date()
  if (document.getElementById("jobsContainer")) {
    filterAndDisplayJobs()
    updateStats()
  }
}

function filterAndDisplayJobs() {
  const searchInput = document.getElementById("searchInput")
  const categoryFilter = document.getElementById("categoryFilter")

  const searchTerm = searchInput ? searchInput.value.toLowerCase() : ""
  const selectedCategory = categoryFilter ? categoryFilter.value : "all"

  // Filter active jobs (not expired)
  const activeJobs = jobsData.filter((job) => {
    const deadline = new Date(job.deadline)
    return deadline > currentTime
  })

  // Apply search and category filters
  filteredJobs = activeJobs.filter((job) => {
    const matchesCategory = selectedCategory === "all" || job.department === selectedCategory
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm))

    return matchesCategory && matchesSearch
  })

  // Sort by match score
  filteredJobs.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))

  displayJobs()
  updateSearchResults()
}

function displayJobs() {
  const container = document.getElementById("jobsContainer")
  const noResults = document.getElementById("noResults")

  if (!container || !noResults) return

  if (filteredJobs.length === 0) {
    container.innerHTML = ""
    noResults.classList.remove("hidden")
    return
  }

  noResults.classList.add("hidden")
  container.innerHTML = filteredJobs.map((job) => createJobCard(job)).join("")

  // Re-initialize scroll animations for new job cards
  container.querySelectorAll(".job-card").forEach((card) => {
    card.classList.add("scroll-animate")
    // Trigger animation after a short delay
    setTimeout(() => card.classList.add("animate"), 100)
  })
}

function createJobCard(job) {
  const timeLeft = getTimeUntilDeadline(job.deadline)
  const isUrgent = getIsUrgent(job.deadline)
  const progress = getDeadlineProgress(job.deadline)

  return `
    <div class="job-card">
      <div class="job-header">
        <div class="job-title-row">
          <div class="job-title-section">
            <div class="job-title-badges">
              <h3 class="job-title">${job.title}</h3>
              ${job.matchScore >= 90 ? `<span class="badge match"><i class="fas fa-award"></i> ${job.matchScore}% Match</span>` : ""}
              ${isUrgent ? '<span class="badge urgent"><i class="fas fa-exclamation-triangle"></i> Urgent</span>' : ""}
              ${job.remote ? '<span class="badge remote"><i class="fas fa-home"></i> Remote</span>' : ""}
            </div>
            <div class="company-name">${job.company}</div>
            <div class="job-meta">
              <div class="job-meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${job.location}</span>
              </div>
              <div class="job-meta-item">
                <i class="fas fa-briefcase"></i>
                <span>${job.experience}</span>
              </div>
              <div class="job-meta-item">
                <i class="fas fa-users"></i>
                <span>${job.applicants} applicants</span>
              </div>
            </div>
            <div class="deadline-progress">
              <div class="deadline-info">
                <span class="deadline-label">Application Deadline</span>
                <span class="deadline-time ${isUrgent ? "urgent" : ""}">${timeLeft}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill ${isUrgent ? "urgent" : ""}" style="width: ${progress}%"></div>
              </div>
            </div>
          </div>
          <div class="job-salary-section">
            <div class="job-salary">${job.salary}</div>
            <div class="job-type">${job.type}</div>
          </div>
        </div>
      </div>
      <div class="job-content">
        <p class="job-description">${job.description}</p>
        <div class="skills-section">
          <div class="skills-label">Key Skills:</div>
          <div class="skills-list">
            ${job.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="job-footer">
        <div class="deadline-full">
          <i class="fas fa-calendar"></i>
          Deadline: ${formatDate(job.deadline)}
        </div>
        <button class="btn btn-primary ${isUrgent ? "urgent" : ""}" onclick="openApplicationModal('${job.id}')">
          Apply Now
        </button>
      </div>
    </div>
  `
}

function displayCategories() {
  const container = document.getElementById("categoriesGrid")
  if (!container) return

  container.innerHTML = categoriesData.map((category) => createCategoryCard(category)).join("")
}

function createCategoryCard(category) {
  return `
    <div class="category-card" onclick="selectCategory('${category.name}')">
      <div class="category-header">
        <div class="category-icon">
          <i class="${category.icon}"></i>
        </div>
        <div class="category-badges">
          <span class="category-count">${category.count}</span>
          ${category.trending ? '<span class="trending-badge"><i class="fas fa-bolt"></i> Trending</span>' : ""}
        </div>
      </div>
      <h3 class="category-title">${category.name}</h3>
      <p class="category-description">${category.description}</p>
      <button class="btn btn-outline">Explore ${category.count} Jobs</button>
    </div>
  `
}

function selectCategory(categoryName) {
  const categoryFilter = document.getElementById("categoryFilter")
  if (categoryFilter) {
    categoryFilter.value = categoryName
  }
  // Switch to jobs tab
  const jobsTabBtn = document.querySelector('[data-tab="jobs"]')
  if (jobsTabBtn) {
    jobsTabBtn.click()
  }
  filterAndDisplayJobs()
}

function updateSearchResults() {
  const resultsElement = document.getElementById("searchResults")
  if (!resultsElement) return

  if (filteredJobs.length > 0) {
    resultsElement.textContent = `Found ${filteredJobs.length} job${filteredJobs.length !== 1 ? "s" : ""} • Sorted by relevance`
  } else {
    resultsElement.textContent = ""
  }
}

function updateStats() {
  const activeJobs = jobsData.filter((job) => new Date(job.deadline) > currentTime)
  const urgentJobs = activeJobs.filter((job) => getIsUrgent(job.deadline))

  const totalJobsElement = document.getElementById("totalJobs")
  const urgentJobsElement = document.getElementById("urgentJobs")

  if (totalJobsElement) {
    totalJobsElement.textContent = activeJobs.length
  }
  if (urgentJobsElement) {
    urgentJobsElement.textContent = urgentJobs.length
  }
}

function getTimeUntilDeadline(deadline) {
  const deadlineDate = new Date(deadline)
  const diffTime = deadlineDate.getTime() - currentTime.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} left`
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} left`
  } else {
    return "Less than 1 hour left"
  }
}

function getIsUrgent(deadline) {
  const deadlineDate = new Date(deadline)
  const diffTime = deadlineDate.getTime() - currentTime.getTime()
  const diffHours = diffTime / (1000 * 60 * 60)
  return diffHours <= 24
}

function getDeadlineProgress(deadline) {
  const deadlineDate = new Date(deadline)
  const diffTime = deadlineDate.getTime() - currentTime.getTime()
  const totalTime = 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
  const progress = Math.max(0, Math.min(100, ((totalTime - diffTime) / totalTime) * 100))
  return progress
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN")
}

function openApplicationModal(jobId) {
  selectedJob = jobsData.find((job) => job.id === jobId)
  if (!selectedJob) return

  selectedJob = jobsData.find((job) => job.id === jobId)
  if (!selectedJob) return

  const modalTitle = document.getElementById("modalTitle")
  if (modalTitle) {
    modalTitle.textContent = `Apply for ${selectedJob.title}`
  }

  // Update job summary
  const jobSummary = document.getElementById("jobSummary")
  if (jobSummary) {
    jobSummary.innerHTML = `
      <h3>Position Summary</h3>
      <div class="summary-grid">
        <div class="summary-item">
          <span class="summary-label">Company:</span>
          <span class="summary-value">${selectedJob.company}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Location:</span>
          <span class="summary-value">${selectedJob.location}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Department:</span>
          <span class="summary-value">${selectedJob.department}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Salary:</span>
          <span class="summary-value">${selectedJob.salary}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Experience:</span>
          <span class="summary-value">${selectedJob.experience}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Time Left:</span>
          <span class="summary-value ${getIsUrgent(selectedJob.deadline) ? "urgent" : ""}">${getTimeUntilDeadline(selectedJob.deadline)}</span>
        </div>
      </div>
    `
  }

  // Update requirements
  const requirementsSection = document.getElementById("requirementsSection")
  if (requirementsSection) {
    requirementsSection.innerHTML = `
      <h3>What We're Looking For</h3>
      <ul class="requirements-list">
        ${selectedJob.requirements
          .map(
            (req) => `
            <li>
              <i class="fas fa-check-circle"></i>
              <span>${req}</span>
            </li>
          `,
          )
          .join("")}
      </ul>
    `
  }

  const modalOverlay = document.getElementById("modalOverlay")
  if (modalOverlay) {
    modalOverlay.classList.remove("hidden")
    document.body.style.overflow = "hidden" // Prevent background scrolling
  }
}

function closeModal() {
  const modalOverlay = document.getElementById("modalOverlay")
  const applicationForm = document.getElementById("applicationForm")
  const fileSelected = document.getElementById("fileSelected")

  if (modalOverlay) {
    modalOverlay.classList.add("hidden")
    document.body.style.overflow = "auto" // Restore scrolling
  }
  if (applicationForm) {
    applicationForm.reset()
  }
  if (fileSelected) {
    fileSelected.classList.add("hidden")
  }
  selectedJob = null
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  const fileSelected = document.getElementById("fileSelected")
  const fileName = document.getElementById("fileName")

  if (file && fileSelected && fileName) {
    fileName.textContent = file.name
    fileSelected.classList.remove("hidden")
  } else if (fileSelected) {
    fileSelected.classList.add("hidden")
  }
}

function handleApplicationSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const applicationData = {
    jobId: selectedJob.id,
    fullName: document.getElementById("fullName")?.value,
    email: document.getElementById("email")?.value,
    phone: document.getElementById("phone")?.value,
    experience: document.getElementById("experience")?.value,
    coverLetter: document.getElementById("coverLetter")?.value,
    resume: document.getElementById("resumeFile")?.files[0],
  }

  // Show loading state
  const submitBtn = event.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    console.log("Application submitted:", applicationData)
    showNotification("Application submitted successfully! We'll contact you within 48 hours.", "success")
    closeModal()

    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }, 2000)
}

function handleContactSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const contactData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
  }

  // Simple validation
  if (!contactData.firstName || !contactData.lastName || !contactData.email || !contactData.message) {
    showNotification("Please fill in all required fields.", "error")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(contactData.email)) {
    showNotification("Please enter a valid email address.", "error")
    return
  }

  // Show loading state
  const submitBtn = event.target.querySelector(".submit-btn")
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    console.log("Contact form submitted:", contactData)
    showNotification("Thank you for your message! We will get back to you within 24 hours.", "success")
    event.target.reset()

    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }, 2000)
}

function clearFilters() {
  const searchInput = document.getElementById("searchInput")
  const categoryFilter = document.getElementById("categoryFilter")

  if (searchInput) {
    searchInput.value = ""
  }
  if (categoryFilter) {
    categoryFilter.value = "all"
  }
  filterAndDisplayJobs()
}

// Animate counters
function animateCounters() {
  const counters = document.querySelectorAll("[data-target]")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const increment = target / 100
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current)
        setTimeout(updateCounter, 20)
      } else {
        counter.textContent = target
      }
    }

    updateCounter()
  })
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: 600;
    z-index: 10000;
    max-width: 400px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `

  // Set background color based on type
  if (type === "success") {
    notification.style.background = "linear-gradient(135deg, #10b981, #059669)"
  } else if (type === "error") {
    notification.style.background = "linear-gradient(135deg, #ef4444, #dc2626)"
  } else {
    notification.style.background = "linear-gradient(135deg, #3b82f6, #2563eb)"
  }

  notification.textContent = message
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 5000)
}

// Select elements
const modal = document.getElementById("popupModal")
const closeBtn = document.querySelector(".close-btn")
const popupTitle = document.getElementById("popupTitle")
const popupDescription = document.getElementById("popupDescription")
const popupIcon = document.getElementById("popupIcon")

// Add click event on each service card
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText
    const description = card.querySelector("p").innerText
    const icon = card.querySelector("i").className // pick same icon as card

    // Put data in popup
    popupTitle.innerText = title
    popupDescription.innerText = description
    popupIcon.className = icon + " popup-icon" // same icon in popup

    // Show popup
    modal.style.display = "flex"
  })
})

// Close popup
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})
