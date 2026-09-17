import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/team";

// Full 14-member grid for /team — unlike about/TeamPreviewSection (a 5-name
// subset with a counter card spliced in), this renders the entire team.ts
// roster in source order with no filtering.
export default function TeamGridSection() {
  return (
    <section className="section-team p-team flat-spacing-1">
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

          {teamMembers.map((member) => (
            <div className="col-xl-3 col-md-4 col-sm-6" key={member.id}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
