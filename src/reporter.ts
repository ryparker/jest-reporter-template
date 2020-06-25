import {
  AggregatedResult,
  Config,
  Context,
  Reporter,
  ReporterOnStartOptions,
  Test,
  TestResult,
} from '@jest/reporters'

export default class JestReporter implements Reporter {
  private _error?: Error
  protected _globalConfig: Config.GlobalConfig
  protected _options?: any

  constructor(globalConfig: Config.GlobalConfig, options?: any) {
    this._globalConfig = globalConfig
    this._options = options
  }

  log(message: string): void {
    console.log(`log arguments: ${JSON.stringify(arguments)}`)
  }

  onRunStart(
    aggregatedResults: AggregatedResult,
    options: ReporterOnStartOptions
  ): void {
    console.log(`onRunStart arguments: ${JSON.stringify(arguments)}`)
  }

  onTestStart(test?: Test): void {
    console.log(`onTestStart arguments: ${JSON.stringify(arguments)}`)
  }

  onTestResult(
    test: Test,
    testResult: TestResult,
    aggregatedResults: AggregatedResult
  ): void {
    console.log(`onTestResult arguments: ${JSON.stringify(arguments)}`)
  }

  onRunComplete(
    test?: Set<Context>,
    runResults?: AggregatedResult
  ): Promise<void> | void {
    console.log(`onRunComplete arguments: ${JSON.stringify(arguments)}`)
  }

  getLastError(): Error | undefined {
    return this._error
  }

  protected _setError(error: Error): void {
    this._error = error
  }
}
