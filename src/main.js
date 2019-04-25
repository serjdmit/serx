import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
    require("file-loader!./index.pug");
}

import "./scripts/preloader";
import "./scripts/hero";
import "./scripts/about";
import "./scripts/skills";
import "./scripts/works";
// import "./scripts/navigation";
import "./scripts/message";
import "./scripts/feedbacks";
import "./scripts/parallax";
// import "./scripts/scroll";
import "./scripts/leafs";
import "./scripts/footer";