import React from "react";

const ProfessionalExperience = () => {
    return (
        <div className="section">
            <h2>Professional Experience</h2>
            <ProfessionalExperienceItem
                title="Associate Software Engineer, Infosys Limited"
                startDate="Sep 2021"
                endDate="Feb 2023"
                bullets={[
                    "	Developed Restful APIs using Spring Boot, implementing CRUD operations, security measures, performance optimization, thorough Postman testing, documentation, and collaboration with cross-functional teams",
                    "	Optimized business logic processes by implementing service layers with Spring Boot, resulting in increased operational efficiency. ",
                    "	Utilized Spring Data and ORM to develop robust persistence layers, ensuring seamless data management. ",
                    "	Created dynamic single-page applications using Angular, enhancing user interactivity and responsiveness. ",
                    "	Spearheaded the design and implementation of relational databases, ensuring optimal data storage and retrieval. ",
                    "	Applied object-oriented design principles and various Design Patterns to optimize code quality, scalability, and maintainability."

                    // ... other responsibilities
                ]}
            />
        </div>
    );
};
// eslint-disable-next-line react/prop-types
const ProfessionalExperienceItem = ({ title, startDate, endDate, bullets }) => {
    return (
        <div className="professional-experience-item">
            <h3>{title}</h3>
            <p>
                {startDate} - {endDate}
            </p>
            <ul>
                {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProfessionalExperience;