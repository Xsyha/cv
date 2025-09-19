import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle, ExternalLink, Calendar, GraduationCap, Briefcase, Code, Palette } from 'lucide-react';
const serverBase = 'https://tracker-elt085hej-os-projects-03f24e75.vercel.app/';

const CVApp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const contactInfo = {
    location: "Kiev, Ukraine",
    email: "lecapblood@gmail.com",
    phone: "+380 93 283 21 51",
    linkedin: "www.linkedin.com/in/oksana-rublenko",
    telegram: "@ksyha_r"
  };

  const workExperience = [
    {
      title: "Frontend Developer",
      company: "2Index.ninja",
      location: "Ukraine",
      period: "August 2023 – Present",
      description: [
        "Develop responsive and SEO-friendly dashboards featuring case studies, metrics, visuals, and client testimonials",
        "Ensure cross-browser compatibility, high performance, and an intuitive user experience across all devices"
      ]
    },
    {
      title: "Freelance Front-End Developer",
      company: "Independent",
      location: "Ukraine",
      period: "Previous Experience",
      description: [
        "Developed responsive websites and landing pages for clients",
        "Created pixel-perfect layouts from Figma/PSD/XD designs",
        "Implemented cross-browser and mobile-friendly solutions",
        "Built custom interactive elements (sliders, popups, menus)",
        "Adapted layouts for CMS platforms"
      ]
    }
  ];

  const education = {
    degree: "Bachelor's degree of computer systems and networks",
    period: "August 2005 – May 2009",
    institution: "Donbass Machinebuilding Academy",
    faculty: "Faculty of computer and information technology"
  };

  const skills = [
    {
      category: "HTML/CSS",
      items: ["HTML5", "CSS3", "SCSS", "LESS", "Flexbox", "CSS Grid", "CSS Animations", "Pixel-perfect", "Email Templates", "Mobile-First & Responsive Layouts"]
    },
    {
      category: "Frameworks & Methodologies",
      items: ["Bootstrap (3/4/5)"]
    },
    {
      category: "Programming Languages",
      items: ["JavaScript (ES6+)", "jQuery (Basic knowledge)"]
    },
    {
      category: "Build Tools & Version Control",
      items: ["NPM/Yarn/Bower", "Webpack", "Gulp", "Grunt", "Git"]
    },
    {
      category: "Design Tools",
      items: ["Figma", "Sketch", "Adobe XD", "Adobe Photoshop"]
    }
  ];

  const projects = [
    { url: "https://2index.ninja/", name: "2Index.ninja" },
    { url: "https://vikanto.ua", name: "Vikanto" },
    { url: "https://rosanuts.nl", name: "Rosanuts" },
    { url: "https://marshzhinok.com.ua", name: "Marshzhinok" },
    { url: "https://usa.tourpartner.ua/", name: "Tour Partner USA" }
  ];

  const getResponsiveStyles = () => ({
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #e8eaf6 100%)',
      padding: isMobile ? '16px 8px' : '32px 16px',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    },
    cvCard: {
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: isMobile ? '12px' : '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden'
    },
    header: {
      background: 'linear-gradient(135deg, #1565c0 0%, #3949ab 100%)',
      color: 'white',
      padding: isMobile ? '24px 20px' : isTablet ? '32px 24px' : '40px 32px'
    },
    headerTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: 'bold',
      marginBottom: '8px',
      margin: '0',
      lineHeight: '1.2'
    },
    headerSubtitle: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.25rem',
      color: '#bbdefb',
      marginBottom: '16px'
    },
    headerDescription: {
      color: '#e3f2fd',
      maxWidth: '100%',
      lineHeight: '1.75',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    contactSection: {
      padding: isMobile ? '20px 16px' : isTablet ? '24px 24px' : '24px 32px',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #e9ecef'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '12px' : '16px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    contactIcon: {
      width: isMobile ? '18px' : '20px',
      height: isMobile ? '18px' : '20px',
      color: '#6c757d',
      flexShrink: 0
    },
    contactLink: {
      color: '#1565c0',
      textDecoration: 'none',
      wordBreak: 'break-all'
    },
    contactText: {
      color: '#495057'
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'minmax(0, 2fr) minmax(0, 1fr)',
      gap: isMobile ? '24px' : '32px',
      padding: isMobile ? '20px 16px' : isTablet ? '24px' : '32px'
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '24px' : '32px',
      minWidth: '0'
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '24px' : '32px',
      minWidth: '0'
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: isMobile ? '16px' : '24px'
    },
    sectionIcon: {
      width: isMobile ? '20px' : '24px',
      height: isMobile ? '20px' : '24px',
      color: '#1565c0',
      flexShrink: 0
    },
    sectionTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      color: '#212529',
      margin: '0'
    },
    workItem: {
      borderLeft: '4px solid #1565c0',
      paddingLeft: isMobile ? '16px' : '24px',
      paddingBottom: isMobile ? '20px' : '24px',
      marginBottom: isMobile ? '20px' : '24px'
    },
    workHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px',
      flexWrap: 'wrap',
      gap: '12px'
    },
    workTitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      fontWeight: '600',
      color: '#212529',
      margin: '0',
      flex: '1',
      minWidth: isMobile ? 'auto' : '200px'
    },
    workPeriod: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#6c757d',
      fontSize: isMobile ? '0.8125rem' : '0.875rem',
      whiteSpace: 'nowrap'
    },
    workCompany: {
      color: '#1565c0',
      fontWeight: '500',
      marginBottom: '12px',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    workDescription: {
      listStyle: 'none',
      padding: '0'
    },
    workDescriptionItem: {
      color: '#495057',
      marginBottom: '8px',
      position: 'relative',
      paddingLeft: '20px',
      fontSize: isMobile ? '0.875rem' : '1rem',
      lineHeight: '1.6'
    },
    workDescriptionBullet: {
      position: 'absolute',
      left: '0',
      top: isMobile ? '6px' : '8px',
      width: '6px',
      height: '6px',
      backgroundColor: '#42a5f5',
      borderRadius: '50%'
    },
    educationItem: {
      borderLeft: '4px solid #4caf50',
      paddingLeft: isMobile ? '16px' : '24px'
    },
    educationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px',
      flexWrap: 'wrap',
      gap: '12px'
    },
    educationTitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      fontWeight: '600',
      color: '#212529',
      margin: '0',
      flex: '1',
      minWidth: isMobile ? 'auto' : '250px'
    },
    educationInstitution: {
      color: '#4caf50',
      fontWeight: '500',
      marginBottom: '4px',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    educationFaculty: {
      color: '#495057',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    skillGroup: {
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      padding: isMobile ? '12px' : '16px',
      marginBottom: isMobile ? '16px' : '24px'
    },
    skillCategory: {
      fontWeight: '600',
      color: '#212529',
      marginBottom: '12px',
      fontSize: isMobile ? '0.9375rem' : '1rem'
    },
    skillTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: isMobile ? '6px' : '8px'
    },
    skillTag: {
      backgroundColor: '#e3f2fd',
      color: '#1565c0',
      padding: isMobile ? '3px 8px' : '4px 12px',
      borderRadius: '20px',
      fontSize: isMobile ? '0.8125rem' : '0.875rem',
      fontWeight: '500'
    },
    projectItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: isMobile ? '12px' : '16px',
      backgroundColor: 'white',
      border: '1px solid #e9ecef',
      borderRadius: '8px',
      marginBottom: '12px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    },
    projectName: {
      color: '#212529',
      fontWeight: '500',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    projectIcon: {
      width: isMobile ? '14px' : '16px',
      height: isMobile ? '14px' : '16px',
      color: '#6c757d',
      transition: 'color 0.2s ease',
      flexShrink: 0
    }
  });

  const styles = getResponsiveStyles();

  return (
    <div style={styles.container}>
      <div style={styles.cvCard}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Oksana Rublenko</h1>
          <p style={styles.headerSubtitle}>Frontend Developer</p>
          <p style={styles.headerDescription}>
            Experienced Frontend Developer with over 5 years of professional experience.
            Proficient in HTML, CSS, and JavaScript. Currently working at 2Index.ninja,
            specializing in developing and optimizing user interfaces. Skilled in building
            responsive, SEO-friendly websites and enhancing application performance to
            deliver seamless user experiences.
          </p>
        </div>

        {/* Contact Info */}
        <div style={styles.contactSection}>
          <div style={styles.contactGrid}>
            <div style={styles.contactItem}>
              <MapPin style={styles.contactIcon} />
              <span style={styles.contactText}>{contactInfo.location}</span>
            </div>
            <div style={styles.contactItem}>
              <Mail style={styles.contactIcon} />
              <a href={`mailto:${contactInfo.email}`} style={styles.contactLink}>
                {contactInfo.email}
              </a>
            </div>
            <div style={styles.contactItem}>
              <Phone style={styles.contactIcon} />
              <a href={`tel:${contactInfo.phone}`} style={styles.contactLink}>
                {contactInfo.phone}
              </a>
            </div>
            <div style={styles.contactItem}>
              <Linkedin style={styles.contactIcon} />
              <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                LinkedIn Profile
              </a>
            </div>
            <div style={styles.contactItem}>
              <MessageCircle style={styles.contactIcon} />
              <span style={styles.contactText}>{contactInfo.telegram}</span>
            </div>
          </div>
        </div>

        <div style={styles.mainContent}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            {/* Work Experience */}
            <section>
              <div style={styles.sectionHeader}>
                <Briefcase style={styles.sectionIcon} />
                <h2 style={styles.sectionTitle}>Work Experience</h2>
              </div>
              <div>
                {workExperience.map((job, index) => (
                  <div key={index} style={styles.workItem}>
                    <div style={styles.workHeader}>
                      <h3 style={styles.workTitle}>{job.title}</h3>
                      <div style={styles.workPeriod}>
                        <Calendar style={{ width: '16px', height: '16px' }} />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <p style={styles.workCompany}>{job.company}, {job.location}</p>
                    <ul style={styles.workDescription}>
                      {job.description.map((item, idx) => (
                        <li key={idx} style={styles.workDescriptionItem}>
                          <span style={styles.workDescriptionBullet}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div style={styles.sectionHeader}>
                <GraduationCap style={styles.sectionIcon} />
                <h2 style={styles.sectionTitle}>Education</h2>
              </div>
              <div style={styles.educationItem}>
                <div style={styles.educationHeader}>
                  <h3 style={styles.educationTitle}>{education.degree}</h3>
                  <div style={styles.workPeriod}>
                    <Calendar style={{ width: '16px', height: '16px' }} />
                    <span>{education.period}</span>
                  </div>
                </div>
                <p style={styles.educationInstitution}>{education.institution}</p>
                <p style={styles.educationFaculty}>{education.faculty}</p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div style={styles.rightColumn}>
            {/* Skills */}
            <section>
              <div style={styles.sectionHeader}>
                <Code style={styles.sectionIcon} />
                <h2 style={styles.sectionTitle}>Skills</h2>
              </div>
              <div>
                {skills.map((skillGroup, index) => (
                  <div key={index} style={styles.skillGroup}>
                    <h3 style={styles.skillCategory}>{skillGroup.category}</h3>
                    <div style={styles.skillTags}>
                      {skillGroup.items.map((skill, idx) => (
                        <span key={idx} style={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <div style={styles.sectionHeader}>
                <Palette style={styles.sectionIcon} />
                <h2 style={styles.sectionTitle}>Projects</h2>
              </div>
              <div>
                {projects.map((project, index) => {
                    const trackUrl = `${serverBase}/r?to=${encodeURIComponent(project.url)}&label=${encodeURIComponent(project.name)}`;


                  return <a
                    key={index}
                    href={trackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.projectItem}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#1565c0';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.querySelector('.project-icon').style.color = '#1565c0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e9ecef';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.querySelector('.project-icon').style.color = '#6c757d';
                    }}
                  >
                    <span style={styles.projectName}>{project.name}</span>
                    <ExternalLink className="project-icon" style={styles.projectIcon} />
                  </a>
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVApp;