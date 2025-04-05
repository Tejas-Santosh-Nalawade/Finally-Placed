import React, { useEffect, useState } from "react";
import axios from "axios";

const JobRecommendations = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://dev-backend-nine.vercel.app/job-recommendations");
        setJobs(res.data.jobs);
        setLoading(false);
      } catch (err) {
        setError("Failed to load jobs.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p className="text-center text-gray-400">Fetching jobs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-4xl font-bold text-neon-cyan text-center mb-10">
        🚀 Daily Job Recommendations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1a0f2b] via-[#2a1a3c] to-[#0d0d15] border border-[#2e1647] p-6 rounded-2xl shadow-xl hover:shadow-neon-cyan hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-neon-purple mb-2">{job.job_title}</h3>
            <p className="text-sm text-gray-400 mb-1">
              <strong>{job.employer_name}</strong> • {job.job_city}, {job.job_country}
            </p>
            <p className="text-sm text-gray-300">
              <span className="text-white font-medium">Type:</span> {job.job_employment_type}
            </p>
            <p className="text-sm text-gray-300">
              <span className="text-white font-medium">Posted:</span>{" "}
              {new Date(job.job_posted_at_datetime_utc).toDateString()}
            </p>
            <a
              href={job.job_apply_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 text-white rounded-lg text-sm font-semibold hover-glow"
            >
              Apply Now →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;
