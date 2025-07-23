import React from "react";

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const getGradient = (score: number) => {
  if (score > 69) return "from-green-100";
  if (score > 49) return "from-yellow-100";
  return "from-red-100";
};

const getIcon = (score: number) => {
  if (score > 69) return "/icons/ats-good.svg";
  if (score > 49) return "/icons/ats-warning.svg";
  return "/icons/ats-bad.svg";
};

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  return (
    <div
      className={`w-full max-w-xl mx-auto rounded-xl shadow-lg bg-gradient-to-br ${getGradient(
        score
      )} to-white p-6`}
    >
      {/* Top Section */}
      <div className="flex items-center space-x-4 mb-4">
        <img src={getIcon(score)} alt="ATS Icon" className="w-12 h-12" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            ATS Score - {score}/100
          </h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-1">
          Applicant Tracking System Review
        </h3>
        <p className="text-gray-500 mb-3">
          This score reflects how well your resume is likely to perform with
          automated screening systems. Review the suggestions below to maximize
          your chances.
        </p>
        <ul className="space-y-2 mb-3">
          {suggestions.map((suggestion, key) => (
            <li key={key} className="flex items-start space-x-2">
              <img
                src={
                  suggestion.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt={suggestion.type === "good" ? "Good" : "Improve"}
                className="w-5 h-5 mt-0.5"
              />
              <span className="text-gray-700">{suggestion.tip}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400">
          Keep improving your resume for the best results!
        </p>
      </div>
    </div>
  );
};

export default ATS;
