import React from 'react';

// Define prop types for SkillBar component
interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="mb-6 ">
      <div className="flex justify-between mb-1">
        <span className="text-2xl font-medium text-gray-900">{skill}</span>
        <span className="text-2xl font-medium text-gray-900">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-neutral-700 h-4 rounded-full"
          style={{ width: `${percentage}%`, transition: 'width 2s' }}
        ></div>
      </div>
    </div>
  );
};

const Skill: React.FC = () => {
  const skills = [
    { skill: 'TypeScript', percentage: 80 },
    { skill: 'TailwindCSS', percentage: 85 },
    { skill: 'Next.js', percentage: 75 },
    { skill: 'HTML5', percentage: 70 },
    { skill: 'CSS', percentage: 70 },
  ];

  return (
    <div id="skills" className="p-8 max-w-xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-8">My Skills</h2>
      {skills.map((item, index) => (
        <SkillBar key={index} skill={item.skill} percentage={item.percentage} />
      ))}
    </div>
  );
};

export default Skill;


