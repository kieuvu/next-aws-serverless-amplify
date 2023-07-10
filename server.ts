import { NextConfig } from "next";
import NextServer from "next/dist/server/next-server";
import serverless from "serverless-http";
// @ts-ignore
import { config } from "./.next/required-server-files.json";
import { queueReceiver } from "./functions/queue";

const nextServer = new NextServer({
  hostname: "localhost",
  port: 3000,
  dir: __dirname,
  dev: false,
  conf: {
    ...(config as NextConfig),
  },
});

const handler = serverless(nextServer.getRequestHandler(), {
  binary: ["*/*"],
});

export { handler, queueReceiver };
