const fastify = require("fastify");
const fs = require("fs");

const server = fastify({
  logger: {
    level: "info",
    file: "/app/supervisor/status-checker/logs/stdout",
  },
});

const OMNIBUS_STATUS_REPORT_FILE_PATH = "/.omnibus-status.json";
server.get(`/status`, async (request, reply) => {
  await reply.send(
    fs.existsSync(OMNIBUS_STATUS_REPORT_FILE_PATH)
      ? JSON.parse(
          fs.readFileSync(OMNIBUS_STATUS_REPORT_FILE_PATH, {
            encoding: "utf-8",
          })
        )
      : {
          status: "INTIALIZING",
        }
  );
});

server.listen(
  {
    port: process.env.LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT,
    // NOTE: Setting the port to `0.0.0.0` is needed to make it reachable from outside the Docker container
    // See https://github.com/fastify/fastify-cli/issues/57
    host: "0.0.0.0",
  },
  (error, address) => {
    if (error) {
      throw error;
    }
  }
);
