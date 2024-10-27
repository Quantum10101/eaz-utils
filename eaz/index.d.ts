declare module 'eaz-utils' {
	export namespace string {
		namespace isA {
			function number(str: string): boolean;
			function integer(str: string): boolean;
			function boolean(str: string): boolean;
		}
		
		namespace parse {
			function number(str: string): number;
			function integer(str: string): number;
			function boolean(str: string): boolean;
			function url(str: string): {
				protocol: string,
				subdomain: string,
				domain: string,
				tld: string,
				port: string,
				path: string,
				directory: string,
				file: string,
				ext: string,
				query: string,
				fragment: string
			};
			function urlQuery(str: string): { [key: string]: string };
		}
		
		namespace trim {
			function charsLeft(str: string, chars: string[]): string;
			function charsRight(str: string, chars: string[]): string;
			function charsBoth(str: string, chars: string[]): string;
			function wordLeft(str: string, word: string): string;
			function wordRight(str: string, word: string): string;
			function wordBoth(str: string, word: string): string;
		}
	}
	
	export namespace set {
		function union<T>(...sets: Set<T>[]): Set<T>;
		function intersect<T>(...sets: Set<T>[]): Set<T>;
		function difference<T>(a: Set<T>, b: Set<T>): Set<T>;
	}
	
	export namespace array {
		function concat<T>(...arrays: T[][]): T[];
		function dedupe<T>(...arrays: T[][]): T[];
		function union<T>(...arrays: T[][]): T[];
		function intersect<T>(...arrays: T[][]): T[];
		function difference<T>(a: T[], b: T[]): T[];
		function duplicates<T>(arr: T[]): T[];
		
		namespace object {
			function groupBy<T>(array: T[], key: string): { [key: string]: T[] };
			function flatGroupBy<T>(array: T[], key: string): { [key: string]: T[] };
			
			namespace convertTo {
				function keyedObjects<T>(array: T[], key: string): { [key: string]: T };
				function keyedValues<T>(array: T[], key: string, value: string): { [key: string]: any };
				function flatKeyedObjects<T>(array: T[], key: string): { [key: string]: T };
				function flatKeyedValues<T>(array: T[], key: string, value: string): { [key: string]: any };
			}
		}
	}
	
	export namespace object {
		function isEmpty(object: object): boolean;
	}
	
	export namespace map {
		function filterMapByKeys<K, V>(original: Map<K, V>, keysToRetain: Set<K>): Map<K, V>;
		function filterMapByValues<K, V>(original: Map<K, V>, valuesToRetain: Set<V>): Map<K, V>;
	}
	
	export namespace json {
		function parse<T>(json: string): T;
	}
	
	export namespace fileSystem {
		namespace pathToScript {
			function file(callStackLevel?: number): string;
			function directory(callStackLevel?: number): string;
		}
		
		namespace listOf {
			function files(path?: string): string[];
			function directories(path?: string): string[];
			function entities(path?: string): string[];
		}
		
		function checkPathType(path?: string): PathType;
		
		enum PathType {
			DIRECTORY = "Directory",
			FILE = "File",
			SYMBOLIC_LINK = "Symbolic Link",
			BLOCK_DEVICE = "Block Device",
			CHARACTER_DEVICE = "Character Device",
			FIFO = "FIFO",
			SOCKET = "Socket",
			DOES_NOT_EXIST = "Does not exist",
			OTHER = "Other"
		}
		
		namespace directory {
			function create(path?: string): boolean;
			function remove(path?: string): boolean;
		}
		
		namespace file {
			function copy(source: string, destination: string, force: boolean): boolean;
			function move(source: string, destination: string, force: boolean): boolean;
			function remove(path?: string): boolean;
			
			namespace get {
				function size(path?: string): number;
				function text(path?: string): string;
				function bytes(path?: string): Buffer;
			}
			
			namespace write {
				function text(path: string, content: string): boolean;
				function bytes(path: string, bytes: Uint8Array): boolean;
			}
			
			namespace append {
				function text(path: string, content: string): boolean;
				function textLine(path: string, content: string): boolean;
				function bytes(path: string, bytes: Uint8Array): boolean;
			}
		}
	}
	
	export namespace cryptography {
		namespace blake2s {
			function hexString (input: any): string;
			function uint8Array (input: any): Uint8Array;
		}
	}
	
	export function sleep(milliseconds: number): void;
}
