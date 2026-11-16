import type { IncomingMessage } from "http";

export const bodyParser = (req: IncomingMessage): Promise<any> => {
  let body = "";
  return new Promise((reslove, reject) => {
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        if (!body.trim()) {
          reslove({});
          return;
        }
        reslove(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
};
