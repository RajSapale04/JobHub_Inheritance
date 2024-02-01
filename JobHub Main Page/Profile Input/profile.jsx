const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Job Application Form</h2>

        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="resume">Resume (PDF only):</label>
        <input type="file" id="resume" name="resume" accept=".pdf" required />

        <label htmlFor="coverLetter">Cover Letter:</label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
