import winston from 'winston';
import dayjs from "dayjs";
export class Logger {
  logger: winston.Logger | null;

  constructor(filePath?: string) {
    this.logger = null;
    if (filePath) {
      this.create(filePath);
    }
  }
  
  create(filePath: string) {
    const myFormat = winston.format.printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}] ${level}: ${message}`;
    });
    
    this.logger = winston.createLogger({
      format: winston.format.combine(
        // winston.format.label({ label: 'right meow!' }),
        winston.format.timestamp({
          format: "YYYY-MM-DDTHH:mm:ss"
        }),
        myFormat,
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: filePath })
      ]
    });
  }

  log(label: string, level: string, message: string='') {
    if (this.logger) {
      this.logger.log({ label, level, message });
    } else {
      console.log(`${dayjs().format('YYYY-MM-DDTHH:mm:ss')} [${label}] ${level}: ${message}`)
    }
  }  
}