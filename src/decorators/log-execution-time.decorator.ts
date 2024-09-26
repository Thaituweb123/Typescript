import { PerformanceObserver, performance } from 'perf_hooks';

export function LogExecutionTime() {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      console.log(`Method ${key} executed in ${end - start}ms with args:`, args);
      return result;
    };
    return descriptor;
  };
}
