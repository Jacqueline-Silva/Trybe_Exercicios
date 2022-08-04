import Logger from "./LoggerInterface";

class ConsoleLogger2 implements Logger {
  log(string: string): void {
    console.log('console2', string);
  }
}

export default ConsoleLogger2;
