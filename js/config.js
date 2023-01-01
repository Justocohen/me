// Profile Configuration
// This file contains all customizable profile data
// To create a new profile, simply update the values in this object

const profileConfig = {
    // Personal Information
    name: "Justo Cohen",
    title: "Cloud Engineer",
    subtitle: "Open Source Contributor",
    location: "Canada",
    email: "justocohen@outlook.com",
    phone: "", // Removed as requested
    
    // Education
    education: {
        institution: "Canada",
        degree: "Research Cloud Student",
        status: "Currently enrolled"
    },
    
    // Current Work/Experience
    currentWork: {
        show: false, // Set to true if you want to show current work
        company: "",
        description: "",
        link: ""
    },
    
    // Skills and Technologies
    skills: [
        "Kubernetes",
        "Docker",
        "AWS",
        "Azure",
        "GCP",
        "Terraform",
        "Helm",
        "CI/CD",
        "GitOps",
        "Microservices",
        "Cloud Architecture",
        "Infrastructure as Code",
        "Python",
        "Go",
        "Linux",
        "Git/GitHub"
    ],
    
    // Experience (years calculation)
    experience: {
        startDate: "January 1 2022 00:00", // Format: "Month Day Year HH:MM"
        show: true
    },
    
    // Interests/Hobbies
    interests: [
        "Open Source Contributions",
        "Kubernetes Ecosystem",
        "Cloud Computing",
        "Container Technologies",
        "Cloud Architecture",
        "DevOps Practices",
        "Research & Learning"
    ],
    
    // Social Media Links
    social: {
        github: "https://github.com/Justocohen",
        linkedin: "", // Add if available
        medium: "", // Add if available
        twitter: "", // Add if available
        email: "justocohen@outlook.com"
    },
    
    // Open Source Contributions
    openSource: {
        highlight: true,
        description: "Active contributor to Kubernetes and cloud computing projects. Passionate about learning and contributing to cloud-native technologies, Kubernetes operations, and building scalable cloud solutions.",
        projects: [
            {
                name: "kubernetes-the-hard-way",
                description: "Learning Kubernetes by building it from scratch - understanding the fundamentals of container orchestration",
                link: "https://github.com/Justocohen/kubernetes-the-hard-way"
            },
            {
                name: "kops",
                description: "Contributing to Kubernetes Operations (kOps) - production-grade Kubernetes installation and management tools",
                link: "https://github.com/Justocohen/kops"
            },
            {
                name: "publishing-bot",
                description: "Working on Kubernetes publishing automation tools - contributing to CI/CD workflows for Kubernetes projects",
                link: "https://github.com/Justocohen/publishing-bot"
            }
        ]
    },
    
    // Typed.js Terminal Messages
    terminal: {
        skillSetQuestion: "Skill Set?",
        experienceQuestion: "Experience?",
        interestsQuestion: "My Interests?",
        coolStuffQuestion: "Open Source Contributions?"
    },
    
    // SEO Meta Tags
    seo: {
        description: "Justo Cohen, Cloud Engineer and Research Cloud Student in Canada. Specializing in Kubernetes, Cloud Computing, and Container Technologies. Open source contributor passionate about cloud-native solutions.",
        keywords: "Justo Cohen, Cloud Engineer, Kubernetes, Docker, AWS, Azure, GCP, Cloud Computing, Container Technologies, Open Source, Canada, Research Student",
        author: "Justo Cohen"
    },
    
    // Additional Info
    additionalInfo: "Passionate Cloud Engineer and Research Cloud Student with expertise in Kubernetes, cloud computing, and container technologies. Committed to learning and contributing to cloud-native solutions. Active open source contributor focused on Kubernetes ecosystem projects."
};

