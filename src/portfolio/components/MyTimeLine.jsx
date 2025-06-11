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
  const {background} = currentTheme.palette

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          sx={
            type === "work" ? { background: background.primary } : { background: background.other.primary }
          }
        >
          {type === "work" ? <BusinessCenterIcon /> : <AutoStoriesIcon />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography component="span">{year}</Typography>

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
      </TimelineContent>
    </TimelineItem>
  );
};
