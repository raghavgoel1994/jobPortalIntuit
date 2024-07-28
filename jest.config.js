module.exports = {
  collectCoverageFrom: [
    "src/components/(Button|Card|Chips|ErrorPage)/*.js",
    "src/containers/Employer/PostedJobs/ApplicantProfile/*.js",
    "src/hooks/*.js",
  ],
  coverageDirectory: "coverage",
  watchAll: true,
  collectCoverage: true,
};