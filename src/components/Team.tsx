import React from 'react';
import { cn } from "@/lib/utils";
import GridPattern from "./ui/grid-pattern";

const teamMembers = [
  {
    name: "Srikrrishn",
    description: "TBD"
  },
  {
    name: "Samrudh",
    description: "The Tech Guy"
  },
  {
    name: "Bishal",
    description: "Strategy and Management"
  },
  {
    name: "Navneet",
    description: "TBD"
  }
];

const Team = () => {
  return (
    <div id="team" className="w-full py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center md:text-5xl font-medium mb-16 tracking-tight bg-gradient-to-b from-white via-white to-[#111111] text-transparent bg-clip-text">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-zinc-400">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
    </div>
  );
};

export default Team;
