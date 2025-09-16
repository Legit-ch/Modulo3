export abstract class Logger {
  abstract log(message: string): void;
}

export class ConsoleLogger extends Logger {
  log(message: string): void {
    console.log('LOG:', message);
  }
}

export class AdvancedLogger extends ConsoleLogger {
  override log(message: string): void {
    super.log('[ADVANCED] ' + message);
  }
}
