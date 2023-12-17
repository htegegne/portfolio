import React from 'react';

const Education = () => {
    return (
        <div className="section">
            <h2>Education</h2>
            <EducationItem
                degree="Bachelor of Science in Computing"
                concentration="Information Technology"
                university="East Tennessee State University (ETSU)"
                location="Johnson City, Tennessee"
                graduationDate="Dec 2020"
                gpa="3.54"
            />
            <EducationItem
                degree="Bachelor of Science in Environmental Health"
                university="Hawassa University"
                location="Hawassa, Ethiopia"
                graduationDate="July 2006"
            />
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const EducationItem = ({ degree, concentration, university, location, graduationDate, gpa }) => {
    return (
        <div className="education-item">
            <h3>{degree}</h3>
            <p>
                {concentration && <span>{concentration}, </span>}
                {university}, {location}
            </p>
            <p>
                Graduated: {graduationDate} | GPA: {gpa}
            </p>
        </div>
    );
};

export default Education;