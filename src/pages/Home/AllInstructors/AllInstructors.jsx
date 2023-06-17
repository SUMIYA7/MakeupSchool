import React from 'react';
import { useLoaderData } from 'react-router-dom';
import InstructorCard from '../../Shared/InstructorCard/InstructorCard';
import { Fade, Slide } from "react-awesome-reveal";

const AllInstructors = () => {
    const instructors = useLoaderData();
    return (
      <div>
        <Fade delay={1e3} cascade damping={1e-1}>
          <h1 className="pt-20">All Instructors are here....</h1>
        </Fade>
        <div className="grid md:grid-cols-3 gap-10">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorCard>
          ))}
        </div>
      </div>
    );
};

export default AllInstructors;