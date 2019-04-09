import { Url } from 'url';

export interface Mp3record {
	album: string;
	artist: string;
	duration: number;
	href: Url;
	name: string;
	title: string;
	track: string;
	year: number;
}
