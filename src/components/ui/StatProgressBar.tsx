import { LinearProgress, linearProgressClasses } from "@mui/material";

interface StatProgressBarProps {
  statValue: number;
}

const StatProgressBar = ({ statValue }: StatProgressBarProps) => {
  return (
    <LinearProgress
      variant="determinate"
      value={(statValue / 252) * 100} 
      sx={{
        height: 8,
        borderRadius: 4,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 4,
          backgroundColor:"oklch(37.3% 0.034 259.733)"
        },
      }}
    />
  );
};

export default StatProgressBar;