import { useState } from "react";
import { JobSection } from "./JobSection";

const JobPosts = () => {
    const [jobSections, setJobSections] = useState({
        featured: [
            { id: 1, isPromoted: true, category: "Designer", bookMared: false, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", applicants: 22, posted: "1 day ago" },
            { id: 2, isPromoted: true, category: "Frontend", bookMared: false, title: "Frontend Developer", company: "Teams", location: "Seattle, USA (Remote)", applicants: 100, posted: "2 days ago" },
            { id: 3, isPromoted: true, category: "Backend", bookMared: false, title: "Node.js Developer", company: "Teams", location: "Austin, USA", applicants: 15, posted: "3 days ago" },
            { id: 4, isPromoted: true, category: "Fullstack", bookMared: false, title: "Fullstack Engineer", company: "Teams", location: "Berlin, Germany", applicants: 44, posted: "2 days ago" },
            { id: 5, isPromoted: true, category: "Frontend", bookMared: false, title: "React Developer", company: "Teams", location: "London, UK", applicants: 62, posted: "5 days ago" },
        ],

        recommended: [
            { id: 11, isPromoted: false, category: "Backend", bookMared: false, title: ".NET Developer", company: "Teams", location: "Seattle, USA (Remote)", applicants: 31, posted: "1 day ago" },
            { id: 12, isPromoted: false, category: "Backend", bookMared: false, title: "Backend Developer", company: "Teams", location: "Seattle, USA (Remote)", applicants: 92, posted: "2 days ago" },
            { id: 13, isPromoted: false, category: "Frontend", bookMared: false, title: "Angular Developer", company: "Teams", location: "Paris, France", applicants: 12, posted: "1 day ago" },
            { id: 14, isPromoted: false, category: "Designer", bookMared: false, title: "Graphic Designer", company: "Teams", location: "Madrid, Spain", applicants: 40, posted: "3 days ago" },
            { id: 15, isPromoted: false, category: "Frontend", bookMared: false, title: "Next.js Developer", company: "Teams", location: "Remote", applicants: 73, posted: "5 days ago" },
            { id: 16, isPromoted: false, category: "Fullstack", bookMared: false, title: "Fullstack Engineer", company: "Teams", location: "Sydney, Australia", applicants: 60, posted: "1 week ago" },
            { id: 17, isPromoted: false, category: "Backend", bookMared: false, title: "PHP Developer", company: "Teams", location: "Karachi, Pakistan", applicants: 33, posted: "1 week ago" },
            { id: 18, isPromoted: false, category: "Frontend", bookMared: false, title: "Svelte Developer", company: "Teams", location: "Amsterdam, Netherlands", applicants: 22, posted: "2 weeks ago" },
            { id: 19, isPromoted: false, category: "Designer", bookMared: false, title: "Visual Designer", company: "Teams", location: "Rome, Italy", applicants: 18, posted: "3 weeks ago" },
            { id: 20, isPromoted: false, category: "Backend", bookMared: false, title: "Ruby on Rails Dev", company: "Teams", location: "Stockholm, Sweden", applicants: 41, posted: "1 month ago" },
        ],

        latest: [
            { id: 21, isPromoted: false, category: "Backend", bookMared: false, title: "MERN Stack Developer", company: "Teams", location: "Seattle, USA (Remote)", applicants: 56, posted: "1 day ago" },
            { id: 22, isPromoted: false, category: "Frontend", bookMared: false, title: "React Native Dev", company: "Teams", location: "Tokyo, Japan", applicants: 19, posted: "2 days ago" },
            { id: 23, isPromoted: false, category: "Designer", bookMared: false, title: "UX Researcher", company: "Teams", location: "Berlin, Germany", applicants: 25, posted: "3 days ago" },
            { id: 24, isPromoted: false, category: "Backend", bookMared: false, title: "Golang Developer", company: "Teams", location: "Zurich, Switzerland", applicants: 11, posted: "4 days ago" },
            { id: 25, isPromoted: false, category: "Frontend", bookMared: false, title: "HTML/CSS Developer", company: "Teams", location: "New York, USA", applicants: 55, posted: "6 days ago" },
            { id: 26, isPromoted: true, category: "Fullstack", bookMared: false, title: "Laravel + Vue Developer", company: "Teams", location: "Lahore, Pakistan", applicants: 90, posted: "1 week ago" },
            { id: 27, isPromoted: true, category: "Backend", bookMared: false, title: "Spring Boot Developer", company: "Teams", location: "Munich, Germany", applicants: 64, posted: "2 weeks ago" },
            { id: 28, isPromoted: true, category: "Frontend", bookMared: false, title: "UI Developer", company: "Teams", location: "London, UK", applicants: 71, posted: "3 weeks ago" },
            { id: 29, isPromoted: false, category: "Designer", bookMared: false, title: "Motion Graphics Designer", company: "Teams", location: "Remote", applicants: 37, posted: "1 month ago" },
            { id: 30, isPromoted: false, category: "Fullstack", bookMared: false, title: "Django + React Dev", company: "Teams", location: "San Diego, USA", applicants: 50, posted: "1 month ago" },
        ],
    });

    const [activeFilter, setActiveFilter] = useState(null);

    const getFilteredJobs = (jobs) => {
        if (!activeFilter) return jobs; // no filter → return all
        return jobs.filter((job) => job.category === activeFilter);
    };


    const toggleBookmark = (id, section) => {
        setJobSections((prev) => ({
            ...prev,
            [section]: prev[section].map((job) =>
                job.id === id ? { ...job, bookMared: !job.bookMared } : job
            ),
        }));
    };


    return (
        <div>
            <div className="flex sm:items-center items-start justify-start sm:flex-row flex-col flex-wrap gap-y-2.5 text-teriatory mt-5">
                <span className="mr-3.5 text-sm">Similar:</span>
                {["Frontend", "Backend", "Designer", "Fullstack"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveFilter(tab)}
                        className={`similiar-pill ${activeFilter === tab ? "bg-primary text-white" : ""}`}
                    >
                        {tab}
                    </button>
                ))}
                <button onClick={() => setActiveFilter(null)} className="similiar-pill">
                    All
                </button>
            </div>

            <div className="w-full h-px bg-[#E9ECEF] mt-2.5 mb-5"></div>

            <JobSection
                title="Featured Jobs"
                jobs={getFilteredJobs(jobSections.featured)}
                variant="featured"
                toggleBookmark={toggleBookmark}
                seeAllLink="/"
            />

            <div className="w-full h-px bg-[#E9ECEF] my-6"></div>

            <JobSection
                title="Recommended Jobs"
                jobs={getFilteredJobs(jobSections.recommended)}
                variant="recommended"
                toggleBookmark={toggleBookmark}
                seeAllLink="/"
            />

            <div className="w-full h-px bg-[#E9ECEF] my-6"></div>

            <JobSection
                title="Latest Jobs"
                jobs={getFilteredJobs(jobSections.latest)}
                variant="latest"
                toggleBookmark={toggleBookmark}
                seeAllLink="/"
            />

        </div>
    );
};

export { JobPosts };