const logotext = "NIKHIL SHARMA";
const meta = {
    title: "Nikhil Sharma",
    description: "I’m Nikhil Sharma data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Nikhil Sharma",
    animated: {
        first: "Student at SRMIST",
        second: "I am a Data Analyst",
        third: "Machine Learning Enthusiasts",
    },
    description: "Hi, I'm Nikhil Sharma, a passionate Computer Science and Engineering student with a deep interest in Machine Learning, Data Science, and emerging technologies. I thrive on solving complex challenges and constantly seek to innovate and grow in the tech space. Let's connect and shape the future of technology together",
    your_img_url: require('./assets/images/profile_pic.jpg').default, 
};

const dataabout = {
    title: "About my self",
    aboutme: " I'm Nikhil Sharma, currently pursuing my B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology. I have a strong passion for Machine Learning, Data Science, and building impactful tech solutions that address real-world problems. Whether it's diving into cutting-edge research or developing practical applications, I enjoy pushing boundaries and exploring new possibilities in the tech landscape. When I’m not coding, you’ll likely find me reading up on the latest trends or working on personal projects that fuel my curiosity. I'm always eager to learn, collaborate, and contribute to innovative ventures",
};
const worktimeline = [
    {
        jobtitle: "Machine Learning Project: HER (Holistic Emergency Response)",
        where: "SRM Institute of Science and Technology",
        date: "2024",
    },
    {
        jobtitle: "Certification in Cloud Associate",
        where: "Oracle",
        date: "2023",
    },
    {
        jobtitle: "Co-Authored a Research Paper on Alzheimer Detection from MRI Scans Using Deep Learning Techniques",
        where: "SRM Institute of Science and Technology",
        date: "2023",
    },
];


const skills = [{
        name: "Python",
        value: 95,
    },
    {
        name: "Data Analysis",
        value: 85,
    },
    {
        name: "Sql",
        value: 85,
    },
    {
        name: "Cloud",
        value: 80,
    },
    {
        name: "Power BI",
        value: 85,
    },
];

const services = [{
    title: "Data Analysis and Machine Learning",
    description: "Leveraging advanced analytical techniques and machine learning algorithms to extract insights from complex datasets. Experienced in utilizing Python, R, and various data visualization tools to interpret data, identify trends, and make data-driven decisions. Proficient in developing predictive models and implementing machine learning solutions to solve real-world problems, with a focus on applications in cloud computing and intelligent systems."
}];


const dataportfolio = [
    {
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fwomen-safety&psig=AOvVaw3Mk9Jso4Yow2dDgDHfKbsC&ust=1728755676009000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi_0vj7hokDFQAAAAAdAAAAABAK",
        description: "Created a women safety system using gesture recognition and live CCTV feeds to detect SOS signals, alerting law enforcement for rapid response.",
        link: "https://github.com/NikhilSharma2707/HER",
    },
    {
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fwomen-safety&psig=AOvVaw3Mk9Jso4Yow2dDgDHfKbsC&ust=1728755676009000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi_0vj7hokDFQAAAAAdAAAAABAK",
        description: " This application automates the masking of sensitive information in English and Chinese PDFs using machine learning and regex, ensuring privacy while preserving the original layout.",
        link: "https://github.com/NikhilSharma2707/Advanced-Text-Extraction-and-Analysis-in-English-and-Chinese-regarding-sensitive-datasets",
    },
    {
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fwomen-safety&psig=AOvVaw3Mk9Jso4Yow2dDgDHfKbsC&ust=1728755676009000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi_0vj7hokDFQAAAAAdAAAAABAK",
        description: "This research paper explores innovative techniques for the early detection of Alzheimer's disease through advanced machine learning algorithms and neuroimaging data analysis.",
        link: "https://github.com/NikhilSharma2707/HER",
    },
    {
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fwomen-safety&psig=AOvVaw3Mk9Jso4Yow2dDgDHfKbsC&ust=1728755676009000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi_0vj7hokDFQAAAAAdAAAAABAK",
        description: "Developed a comprehensive student portal to streamline course registration, access learning materials, and track academic progress.",
        link: "https://github.com/NikhilSharma2707/HER",
    },
    {
        img: "https://example.com/path-to-your-image.jpg", 
        description:"Analyzed airline customer satisfaction data using logistic regression, achieving 86% accuracy, and visualizing satisfaction trends.",
        link: "<a href='https://github.com/NikhilSharma2707/Airline-Customer-Satisfaction-Analysis' target='_blank'>View Project</a>",
    },
    {
        img: "https://example.com/path-to-your-image.jpg", 
        description: "Explored video game sales trends with linear regression, achieving high accuracy and identifying Decision Trees as the best-performing algorithm.",
        link: "<a href='https://github.com/NikhilSharma2707/Video-Games-Sales-Analysis' target='_blank'>View Project</a>",
    },
    
];
    

const contactConfig = {
    YOUR_EMAIL: "nikhildevsharma27@gmail.com",
    YOUR_FONE: "7016286648",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    Github: "https://github.com/NikhilSharma2707",
    Instagram: "https://www.instagram.com/moodoxyy",
    Linkedin: "https://www.linkedin.com/in/nikhil-sharma-466669268/",
    Twitter: "https://twitter.com/MooodOxyy",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};