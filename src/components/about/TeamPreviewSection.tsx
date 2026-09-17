"use client";

import Image from "next/image";
import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";
import { teamMembers, type TeamMember } from "@/data/team";

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="col-xl-3 col-md-4 col-sm-6">
      <div className="team-card hover-img">
        <Link href="/team" className="image">
          <Image src={member.image} alt="Image" width={280} height={300} />
        </Link>
        <div className="card-content">
          <Link href="/team" className="name-team h4 fw-7">
            {member.name}
          </Link>
          <p className="position ff-2">{member.position}</p>
        </div>
      </div>
    </div>
  );
}

// about.html shows exactly these 5 members, in this order — James Anderson
// sits between Robert Johnson and Sophia Martinez in the full team.ts roster
// but is NOT part of about's subset, so this filters by id rather than
// slicing the array.
const ABOUT_TEAM_IDS = [
  "john-anderson",
  "michael-thompson",
  "sarah-mitchell",
  "robert-johnson",
  "sophia-martinez",
];

export default function TeamPreviewSection() {
  const { ref, value } = useCountUp<HTMLSpanElement>(100, 1000);
  const aboutTeamMembers = ABOUT_TEAM_IDS.map(
    (id) => teamMembers.find((member) => member.id === id)!
  );

  return (
    <section className="section-team p-about flat-spacing-6">
      <div className="container">
        <div className="row rg-50">
          <div className="col-xl-6">
            <div className="heading-section">
              <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
                <i className="icon-sparkle"></i>
                Team Members
              </p>
              <p className="h2 title fw-6 title-animation">
                Meet the Experts Behind to Technology The People Behind Every Innovation
              </p>
            </div>
          </div>

          {aboutTeamMembers.slice(0, 4).map((member) => (
            <TeamMemberCard member={member} key={member.id} />
          ))}

          {/* Counter card sits between the 4th and 5th team-card in the
              source markup, not appended after all members. */}
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="team-card style-all-member">
              <div className="card-content">
                <div className="counter-item view-counter">
                  <p className="wrap-counter h1 fw-7 mb-6 d-flex align-items-center">
                    <span className="info-card_value number" ref={ref}>
                      {value}
                    </span>
                    +
                  </p>
                  <p className="text-counter ff-2 letter-space--2">Professional team members</p>
                </div>
              </div>
              <Link href="/team" className="tf-btn style-big style-color-white-2 border-radius-30">
                <span className="text-btn">All members</span>
                <span className="icon-btn">
                  <i className="icon-chevron-right"></i>
                </span>
              </Link>
            </div>
          </div>

          {aboutTeamMembers.slice(4).map((member) => (
            <TeamMemberCard member={member} key={member.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
