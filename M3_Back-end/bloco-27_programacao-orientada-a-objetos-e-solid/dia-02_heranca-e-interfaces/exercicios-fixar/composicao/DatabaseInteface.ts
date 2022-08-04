import Logger from "./LoggerInterface";

interface Database {
  log: Logger

  save(key: string, value:string):void
}