import type {
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
    console.log(`log message: ${JSON.stringify(message, null, 2)}`)
  }

  onRunStart(
    aggregatedResults: AggregatedResult,
    options: ReporterOnStartOptions
  ): void {
    console.log(
      `onRunStart aggregatedResults: ${JSON.stringify(
        aggregatedResults,
        null,
        2
      )}`
    )

    console.log(`onRunStart options: ${JSON.stringify(options, null, 2)}`)
  }

  onTestStart(test?: Test): void {
    console.log(`onTestStart test: ${JSON.stringify(test, null, 2)}`)
  }

  onTestResult(
    test: Test,
    testResult: TestResult,
    aggregatedResults: AggregatedResult
  ): void {
    console.log(`onTestResult test: ${JSON.stringify(test, null, 2)}`)

    console.log(
      `onTestResult testResult: ${JSON.stringify(testResult, null, 2)}`
    )

    console.log(
      `onTestResult aggregatedResults: ${JSON.stringify(
        aggregatedResults,
        null,
        2
      )}`
    )
  }

  onRunComplete(
    test?: Set<Context>,
    runResults?: AggregatedResult
  ): Promise<void> | void {
    console.log(`onRunComplete test: ${JSON.stringify(test, null, 2)}`)

    console.log(
      `onRunComplete runResults: ${JSON.stringify(runResults, null, 2)}`
    )
  }

  getLastError(): Error | undefined {
    return this._error
  }

  protected _setError(error: Error): void {
    this._error = error
  }
}
