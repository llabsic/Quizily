import {
  FunnyGhost,
  Grid, LineChartHexagon, SquareDashedKanban,
  UsersGroup,
} from "@mynaui/icons-react";

export function getMenuItems(selected) {

  return [
    { icon: FunnyGhost, title: "Quiz", url: "/dashboard/quiz" },
    { icon: UsersGroup, title: "Friends", url: "/dashboard/friends" },
    { icon: Grid, title: "Templates", url: "/dashboard/templates" },
    { icon: LineChartHexagon , title: "Leaderboard", url: "/dashboard/leaderboard" },
    { icon: SquareDashedKanban, title: "History", url: "/dashboard/history" },
  ];
}

export const templatesData = [
  { id: 1, title: "JavaScript", description: "JavaScript essentials and dynamic programming MCQs." },
  { id: 2, title: "React", description: "Hooks, state management, and component lifecycle design." },
  { id: 3, title: "Python", description: "Data structures, algorithms, and OOP principles." },
  { id: 4, title: "SQL & Databases", description: "Relational schema design, indexes, and complex joins." },
  { id: 5, title: "Node.js", description: "Asynchronous programming, event loop, and REST APIs." },
  { id: 6, title: "CSS & UI", description: "Flexbox, Grid layout systems, and responsive design." },
  { id: 7, title: "Git & Version Control", description: "Branching strategies, merge conflicts, and workflow commands." },
  { id: 8, title: "Docker & K8s", description: "Containerization, orchestration, and microservices architecture." },
  { id: 9, title: "Security Fundamentals", description: "OWASP Top 10, encryption methods, and auth protocols." },
  { id: 10, title: "TypeScript", description: "Static typing, advanced interfaces, and utility types." }
];


