import { Link } from "react-router-dom";
import { JobCard } from "./JobCard";

const JobSection = ({ title, jobs, variant, toggleBookmark, seeAllLink }) => {
  return (
    <>
      <div className="flex items-center gap-3.5 mt-5 mb-3">
        <h4 className="sm:text-lg">{title}</h4>
        {seeAllLink && (
          <Link to={seeAllLink} className="see-job-btn">
            See {title}
          </Link>
        )}
      </div>
      <div className="flex items-stretch gap-3 flex-wrap justify-start">
        {jobs.length === 0 ? (
          <span className="px-1 text-sm text-teriatory">Nothing in {title}</span>
        ): (
            jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          variant={variant}
          onToggleBookmark={() => toggleBookmark(job.id, variant)}
        />
        ))
        ) }
      </div>
    </>
  );
};

export { JobSection };