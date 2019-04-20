import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./scripts/navigation";
import "./scripts/message";
import "./scripts/feedbacks";
import "./scripts/parallax";
import "./scripts/footer";