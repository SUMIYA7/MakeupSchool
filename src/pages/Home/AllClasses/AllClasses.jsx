import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Fade, Slide } from "react-awesome-reveal";

const AllClasses = () => {
    const a = useLoaderData();
    return (
      <div className="pt-20">
        <Fade delay={1e3} cascade damping={1e-1}>
          All Classes are here...
        </Fade>
        {a.map((x) => (
          <MenuItem key={x._id} item={x}></MenuItem>
        ))}
      </div>
    );
};

export default AllClasses;