
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";

// Define custom props interface for TypeScript
interface GitHubCalendarProps {
  username: string;
  blockSize?: number;
  blockMargin?: number;
  color?: string;
  fontSize?: number;
  theme?: {
    light: string[];
    dark: string[];
  };
  showTotalCount?: boolean;
  dateFormat?: string;
  startDate?: Date;
  endDate?: Date;
}

const GitHubCalendarTyped = GitHubCalendar as React.ComponentType<GitHubCalendarProps>;

export function Github() {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setMonth(today.getMonth() - 12);

  return (
    <div id="github" className="">
      <div className="flex items-center gap-2 mb-8 hover:text-teal-600 hover:dark:text-teal-400 transition-colors">
        <FaGithub className="text-lg" />
        <span className="font-bold uppercase text-xs relative -bottom-px">GitHub</span>
      </div>
      <div className="px-3 py-4 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded bg-white dark:bg-dark-bg shadow-md flex flex-col items-center transition-colors duration-700 hover:duration-100">
        <h1 className="text-base font-semibold text-gray-900 dark:text-white mb-4 tracking-tight text-center">
          Days I <span className="text-green-600 dark:text-green-400">Code</span>
        </h1>
        <div className="overflow-x-auto w-full flex justify-center">
          <GitHubCalendarTyped
            username="tukesh1"
            blockSize={10}
            blockMargin={2}
            color="#239a3b" // Green-600 as the primary color
            fontSize={16}
            theme={{
              light: [
                "#ebedf0", // Inactive: Gray-200
                "#c6e48b", // Low: Light green
                "#7bc96f", // Moderate: Medium green
                "#239a3b", // High: Green-600
                "#196127", // Very High: Green-800
              ],
              dark: [
                "#4b5563", // Inactive: Gray-600
                "#bef264", // Low: Lighter green (lime-300)
                "#84cc16", // Moderate: Green-500
                "#52d726", // High: Green-400
                "#3f9c1f", // Very High: Slightly darker green
              ],
            }}
            showTotalCount={true}
            dateFormat="yyyy-mm-dd"
            startDate={startDate}
            endDate={today}
          />
        </div>
      </div>
    </div>
  );
}