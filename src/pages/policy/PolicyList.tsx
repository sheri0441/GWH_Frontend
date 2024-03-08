import { Typography } from "@mui/material";

const PolicyList = ({
  title,
  children,
}: {
  title: string;
  children: string;
}) => {
  return (
    <li style={{ listStyle: "none", padding: "0", marginTop: "0.5rem" }}>
      <Typography component={"span"} sx={{ fontWeight: "500" }}>
        {title}:
      </Typography>{" "}
      {children}
    </li>
  );
};

export default PolicyList;
