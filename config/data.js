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
  { id: 1, userId: 2, title: "JavaScript", description: "JavaScript essentials and dynamic programming MCQs." },
  { id: 2, userId: 9, title: "React", description: "Hooks, state management, and component lifecycle design." },
  { id: 3, userId: 8, title: "Python", description: "Data structures, algorithms, and OOP principles." },
  { id: 4, userId: 4, title: "SQL & Databases", description: "Relational schema design, indexes, and complex joins." },
  { id: 5, userId: 6, title: "Node.js", description: "Asynchronous programming, event loop, and REST APIs." },
  { id: 6, userId: 6, title: "CSS & UI", description: "Flexbox, Grid layout systems, and responsive design." },
  { id: 7, userId: 19, title: "Git & Version Control", description: "Branching strategies, merge conflicts, and workflow commands." },
  { id: 8, userId: 17, title: "Docker & K8s", description: "Containerization, orchestration, and microservices architecture." },
  { id: 9, userId: 12, title: "Security Fundamentals", description: "OWASP Top 10, encryption methods, and auth protocols." },
  { id: 10, userId: 20, title: "TypeScript", description: "Static typing, advanced interfaces, and utility types." }
];

export const Users = [
  { id: 1, name: "Ali Hassan", username: "alihassan" },
  { id: 2, name: "Sarah Connor", username: "sarahconnor" },
  { id: 3, name: "John Doe", username: "johndoe" },
  { id: 4, name: "Jane Smith", username: "janesmith" },
  { id: 5, name: "David Miller", username: "davidmiller" },
  { id: 6, name: "Emily Watson", username: "emilywatson" },
  { id: 7, name: "Michael Brown", username: "michaelbrown" },
  { id: 8, name: "Jessica Taylor", username: "jessicataylor" },
  { id: 9, name: "Christopher Davis", username: "chrisdavis" },
  { id: 10, name: "Sophia Wilson", username: "sophiawilson" },
  { id: 11, name: "Alex Rivera", username: "alexrivera" },
  { id: 12, name: "Maria Garcia", username: "mariagarcia" },
  { id: 13, name: "James Wilson", username: "jameswilson" },
  { id: 14, name: "Elena Rostova", username: "elenarostova" },
  { id: 15, name: "Liam Chen", username: "liamchen" },
  { id: 16, name: "Zahra Khan", username: "zahrakhan" },
  { id: 17, name: "Omar Farooq", username: "omarfarooq" },
  { id: 18, name: "Nina Patel", username: "ninapatel" },
  { id: 19, name: "Lucas Silva", username: "lucassilva" },
  { id: 20, name: "Aisha Malik", username: "aishamalik" }
];


