import Logger from "./LoggerInterface";

class ConsoleLogger implements Logger {
  log(string: string): void {
    console.log('console1', string);
  }
}

export default ConsoleLogger;
