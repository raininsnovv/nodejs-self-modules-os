import os from "os";
console.log(os.homedir());
console.log(os.hostname());
console.log(os.version());
console.log(os.type());

import { alertUser } from "./welcome.js";
console.log(alertUser());
