import cron from "cron";
import https from "https";

const job = new cron.CronJob(
  "*/14 * * * *",

  function () {
    https
      .get(process.env.API_URL, (res) => {
        if (res.statusCode === 200) {
          console.log("GET request sent successfully");
        } else {
          console.error(
            `GET request failed with status code: ${res.statusCode}`
          );
        }
      })
      .on("error", (err) => {
        console.error(`Error while sending request: ${err.message}`);
      });
  }
);

export default job;
