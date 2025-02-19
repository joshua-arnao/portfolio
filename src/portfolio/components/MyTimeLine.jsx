import { Link, Typography } from "@mui/material";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LinkIcon from "@mui/icons-material/Link";

export const MyTimeLine = ({ experience, currentTheme }) => {
  const { type, year, title, link } = experience;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          sx={
            type === "work"
              ? { background: "#88CCCA" }
              : { background: "#F3B" }
          }
        >
          {type === "work" ? <BusinessCenterIcon /> : <AutoStoriesIcon />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography component="span">{year}</Typography>
        <Link
          href={link}
          target="_blank"
          underline="none"
          display="flex"
          alignItems="center"
          gap="4px"
          sx={{
            color: type === "study" ? "#F3B" : '#88CCCA',
            "&:hover":  
              type === 'study' ? { color: "#FF82D5"}:{},
          }}
        >
          {
            <>
              {title}
              {type === "study" ? <LinkIcon fontSize="" /> : null}
            </>
          }
        </Link>
      </TimelineContent>
    </TimelineItem>
  );
};
