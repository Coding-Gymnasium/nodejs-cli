import { program } from "commander";
import { fetchNow, weatherForecast } from "./commands.js";

program.version("0.0.1").description("Comand line Weather Application");

program
  .command("now <city>")
  .alias("n")
  .description("see the current weather in the specified city")
  .action((city) => fetchNow(city));

program
  .command("forecast <city>")
  .alias("f")
  .description("see the weather forecast of a specified city")
  .action((city) => weatherForecast(city));

program.parse(process.argv);
