import ConsoleLogger from "./ConsoleLogger";
import ConsoleLogger2 from "./ConsoleLogger2";
import Logger from "./LoggerInterface";

class ExampleDatabase {
  constructor(public log: Logger = new ConsoleLogger()) { };
  
  save(key:string, value:string):void {
    this.log.log(`Paramentros passados para save: ${key}, ${value}`)
  }
}

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(log1);
const db2 = new ExampleDatabase(log2);
const db3 = new ExampleDatabase();

db1.save('key1', 'value1');
db2.save('key2', 'value2');
db3.save('key3', 'value3');