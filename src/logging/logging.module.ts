import { DynamicModule, Module } from '@nestjs/common';

export interface LoggingOptions {
  strategy: 'console' | 'file' | 'external';
}

@Module({})
export class LoggingModule {
  static forRoot(options: LoggingOptions): DynamicModule {
    return {
      module: LoggingModule,
      providers: [
        {
          provide: 'LOGGING_STRATEGY',
          useValue: options.strategy,
        },
      ],
      exports: ['LOGGING_STRATEGY'],
    };
  }
}
