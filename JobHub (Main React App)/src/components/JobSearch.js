import React, { useState } from 'react';
import './JobSearch.css'; // Import the CSS file

// Assuming you have a list of jobs as follows
const jobs = [
  { id: 1, title: 'Software Engineer', location: 'New York' },
  { id: 2, title: 'Data Scientist', location: 'San Francisco' },
  { id: 3, title: 'UX Designer', location: 'Los Angeles' },
  // Add more jobs as needed
];

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const results = jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="job-search-container">
      <input
        className="job-search-input"
        type="text"
        placeholder="Search for jobs"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="job-list">
        {searchResults.map(job => (
          <li className="job-item" key={job.id}>
            {job.title} - {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSearch;



