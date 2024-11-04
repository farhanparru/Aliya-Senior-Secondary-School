// eslint-disable-next-line react/prop-types, no-unused-vars
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// eslint-disable-next-line react/prop-types
const ActivityCard = ({ title, description, icon, color }) => (
  <div className={`flex items-center p-6 ${color} rounded-xl shadow-lg w-full sm:w-1/2 lg:w-1/4 hover:scale-105 transform transition duration-300 ease-in-out`}>
    <div className="text-white mr-6 text-4xl">
      {icon}
    </div>
    <div>
      <h2 className="text-white font-semibold text-lg mb-1">{title}</h2>
      <p className="text-white text-sm">{description}</p>
    </div>
  </div>
);

const Activities = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-center">Kaleidoscope</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <ActivityCard
          title="Know your School"
          description="Know Your School by UDISE Code/by Name/by Pin Code."
          color="bg-gradient-to-r from-purple-600 to-pink-500"
          icon={<i className="fas fa-school"></i>}
        />
        <ActivityCard
          title="Activities"
          description="Explore KVS Activities."
          color="bg-gradient-to-r from-blue-500 to-indigo-500"
          icon={<i className="fas fa-running"></i>}
        />
        <ActivityCard
          title="Digital Resources"
          description="Click here to see Digital Resources."
          color="bg-gradient-to-r from-indigo-500 to-blue-600"
          icon={<i className="fas fa-laptop"></i>}
        />
        <ActivityCard
          title="NEP Initiatives"
          description="A collaborative effort towards co-creation and co-sharing of..."
          color="bg-gradient-to-r from-pink-600 to-purple-500"
          icon={<i className="fas fa-users"></i>}
        />
        <ActivityCard
          title="PM SHRI Schools"
          description="PM SHRI Schools is a centrally sponsored scheme by the..."
          color="bg-gradient-to-r from-purple-700 to-pink-500"
          icon={<i className="fas fa-university"></i>}
        />
        <ActivityCard
          title="Skill India"
          description="The Ministry aims to skill on a large scale with speed and high..."
          color="bg-gradient-to-r from-blue-600 to-teal-500"
          icon={<i className="fas fa-tools"></i>}
        />
        <ActivityCard
          title="Academic Resources"
          description="Click here to see Academic Resources."
          color="bg-gradient-to-r from-purple-600 to-indigo-500"
          icon={<i className="fas fa-book"></i>}
        />
        <ActivityCard
          title="Alumni"
          description="Alumni of Aliya public school."
          color="bg-gradient-to-r from-indigo-600 to-purple-500"
          icon={<i className="fas fa-graduation-cap"></i>}
        />
        <ActivityCard
          title="Pay Online Fee"
          description="Click here to pay fee."
          color="bg-gradient-to-r from-purple-600 to-pink-500"
          icon={<i className="fas fa-wallet"></i>}
        />
      </div>
    </div>
  );
};

export default Activities;
