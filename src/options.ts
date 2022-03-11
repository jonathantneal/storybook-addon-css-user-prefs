export const title = 'Emulate CSS User Preferences'

export const features = {
  "prefers-color-scheme": ["light", "dark"],
  "prefers-constrast": ["no-preference", "less", "more", "custom"],
  "prefers-reduced-data": ["no-preference", "reduce"],
  "prefers-reduced-motion": ["no-preference", "reduce"],
  "prefers-reduced-transparency": ["no-preference", "reduce"],
};

export const defaultOption = 'system default'

export const keys = Object.keys(features) as Array<keyof Features>

export const entries = Object.entries(features) as [keyof Features, Features[keyof Features]][]

export type Features = typeof features;
