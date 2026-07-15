import {
  FunnyGhost,
  Grid, LineChartHexagon, SquareDashedKanban,
  UsersGroup,
} from "@mynaui/icons-react";

export function getMenuItems(selected?: string | null) {

  return [
    { icon: FunnyGhost, title: "Quiz", url: "/dashboard/quiz" },
    { icon: UsersGroup, title: "Institute", url: "/dashboard/friends" },
    { icon: Grid, title: "Templates", url: "/dashboard/templates" },
    { icon: LineChartHexagon , title: "Leaderboard", url: "/dashboard/leaderboard" },
    { icon: SquareDashedKanban, title: "History", url: "/dashboard/history" },
  ];
}