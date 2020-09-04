import React, { useEffect, useState } from "react";

const Card = ({ profile }) => {

  return (
        <div className="w-30 shadow-lg cursor-pointer m-2">
        <div className="flex h-64 p-4 border-l-4 border-purple">
          <div className="mr-4 h-48 w-1/3 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{"backgroundImage": `url(${profile.image_path})`, "backgroundPosition": "center"}}></div>
          <div className="flex flex-col">
            <p className="text-purple text-xl font-bold mb-2">
              {profile.name}
            </p>
            <p className="flex flex-wrap h-12 overflow-hidden">
              {profile.specialty.map((specialty) => (
                <span className="text-lg font-bold">
                  {specialty.description}
                </span>
              ))}
            </p>
            <span className="mt-2 text-sm text-gray3 font-semibold text-sm">Skills</span>
            <p className="flex flex-wrap h-12 overflow-hidden">
              {profile.skill.map((skill, i) => (
                i === 0 ? <span className="text-sm font-semibold">
                {skill.description}
              </span> :
                <span className="text-sm font-semibold">
                  - {skill.description}
                </span>
              ))}
            </p>

          </div>
        </div>
        </div>
     
  );
};

export default Card;
