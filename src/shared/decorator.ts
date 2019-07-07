// Method Decorator
export function EmitEvent({ }) {
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const result = original.apply(this, args);
      // send an event

      return result;
    };

    return descriptor;
  };
}
