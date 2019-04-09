import { Url } from 'url';
import { Mp3record } from './Mp3record';

export interface Mp3recordCollection {
	href: Url;
	rel: ['collection'];
	value: Array<Mp3record>;
}
