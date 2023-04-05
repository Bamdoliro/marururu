export type SinglePropFrom<O extends object, K extends keyof O> = [
  K
] extends infer KUT
  ? K extends any
    ? KUT extends [infer KU extends keyof O]
      ? Pick<O, K> & Partial<Record<Exclude<KU, K>, never>>
      : never
    : never
  : never;
