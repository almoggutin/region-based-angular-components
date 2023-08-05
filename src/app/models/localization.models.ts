export const Region = {
	IL: 'il',
	US: 'us',
} as const;

export type Region = ObjectValues<typeof Region>;

export interface ILocale {
	region: Region;
}

type ObjectValues<T> = T[keyof T];
