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
<<<<<<< HEAD
=======
  const {background} = currentTheme.palette
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          sx={
<<<<<<< HEAD
            type === "work"
              ? { background: "#88CCCA" }
              : { background: "#F3B" }
=======
            type === "work" ? { background: background.primary } : { background: background.other.primary }
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
          }
        >
          {type === "work" ? <BusinessCenterIcon /> : <AutoStoriesIcon />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography component="span">{year}</Typography>
<<<<<<< HEAD
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
=======

        {type === "work" ? (
          <Typography color={background.primary} >{title}</Typography>
        ) : (
          <Link
            href={link}
            target="_blank"
            underline="none"
            display="flex"
            alignItems="center"
            gap="4px"
            sx={{
              color: type === "study" ? background.other.primary : background.primary,
              "&:hover": type === "study" ? { color: background.other.secundary, textDecoration: 'underline' } : {},
            }}
          >
            {
              <>
                {title}
                {type === "study" ? <LinkIcon fontSize="" /> : null}
              </>
            }
          </Link>
        )}
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
      </TimelineContent>
    </TimelineItem>
  );
};
