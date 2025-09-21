import teamsLogo from '@/assets/svg/teams-logo.svg';
import locationIcon from '@/assets/svg/location.svg';
import timeIcon from '@/assets/svg/time.svg';

const JobCard = ({
    job, // pass job object
    onToggleBookmark, // bookmark handler fn
    variant // pass variant to set the UI based on varaint
}) => {
    return (
        <div className="w-full custom:max-w-[200px] bg-white py-2.5 px-4 border border-[#E1E1E1] rounded-[10px]">
            {/* Promoted Label */}
            {job.isPromoted ? (
                <span className="text-[10px] font-medium bg-primary opacity-80 text-white px-1.5 py-px rounded-full">
                    Promoted
                </span>
            ) : (
                <span className="text-[10px] block h-[13px]"></span>
            )}

            {/* Title & Company */}
            <div className="flex items-start gap-2.5 mt-1">
                <div className="size-[40px] bg-[#FAFAFA] rounded-[10px] flex items-center justify-center">
                    <img src={teamsLogo} alt="company logo" />
                </div>
                <div>
                    <h5 className="text-sm font-medium line-clamp-1">{job.title}</h5>
                    <p className="text-xs font-medium -mt-px text-teriatory">{job.company}</p>
                </div>
            </div>

            {/* Location */}
            <div className="flex items-center text-xs font-medium text-teriatory mt-1.5 gap-2.5">
                <img src={locationIcon} alt="location icon" />
                <p>{job.location}</p>
            </div>

            {/* Posted & Applicants */}
            <div className="flex items-center text-xs font-medium text-teriatory mt-1.5">
                <div className="flex items-center gap-1.5 pr-1">
                    <img src={timeIcon} alt="clock icon" />
                    <p>{job.posted}</p>
                </div>
                <div className="w-px h-4 bg-teriatory opacity-50"></div>
                <button className="text-primary pl-1 whitespace-nowrap hover:underline">
                    {job.applicants} applicants
                </button>
            </div>

            <div className="flex items-center justify-between mt-4">
                <button className="py-2.5 px-[30px] bg-primary hover:bg-hover-primary transition-all duration-200 rounded-[5px] text-white text-xs leading-[1.3em]">
                    Apply Now
                </button>

                <button
                    onClick={() => onToggleBookmark(job.id)}
                    className={`p-1.5 transition-all duration-200 rounded-full ${job.bookMared ? "bg-[#0154aa5c]" : "hover:bg-[#0153aa38]"
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        className={`${job.bookMared
                            ? "text-primary"
                            : "text-teriatory opacity-50"
                            }`}
                        fill="currentColor"
                    >
                        <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export { JobCard }