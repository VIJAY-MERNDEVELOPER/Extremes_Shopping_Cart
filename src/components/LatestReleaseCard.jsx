/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";

import { Stack } from "@mui/material";

function LatestReleaseCard({ latest }) {
  return (
    <Card
      sx={{
        maxWidth: 450,
        border: "0 none",
        boxShadow: "none",
        margin: 0,
        padding: 0,
      }}
      className="card"
    >
      <Stack justifyContent={"center"}>
        {" "}
        <img
          src={latest.latest_banner}
          alt={latest.latest_name}
          width={"100%"}
          className="card-img"
        />
      </Stack>
    </Card>
  );
}

export default LatestReleaseCard;
