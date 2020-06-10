const RENDER_HTML = ({ args }) => {
  const { envVars } = args;

  const htmlComponentRenderer = require("./render-page");

  const appDataPath = `page-data/app-data.json`;
  const page = `/my-second-post/`;
  const pageDataPath = `page-data/my-second-post/page-data.json`;

  envVars.forEach(([key, value]) => (process.env[key] = value));

  return new Promise((resolve, reject) => {
    try {
      htmlComponentRenderer.default(
        {
          pagePath: page,
          pageDataPath,
          appDataPath,
        },
        (_throwAway, htmlString) => {
          console.log(htmlString);

          resolve();
        }
      );
    } catch (e) {
      e.context = {
        path: page,
      };
      reject(e);
    }
  });
};

RENDER_HTML({
  args: {
    envVars: [],
  },
}).catch((e) => {
  console.error(e);
});
