import { BuilderContext, createBuilder } from '@angular-devkit/architect'
import { executeBrowserBuilder, BrowserBuilderOutput } from '@angular-devkit/build-angular'
import { json } from '@angular-devkit/core'
import { Observable } from 'rxjs';

export function executeMyBuilder(
  options: any,
  context: BuilderContext
): Observable<BrowserBuilderOutput> {
  return executeBrowserBuilder(options, context);
}

export default createBuilder<json.JsonObject>(executeMyBuilder);