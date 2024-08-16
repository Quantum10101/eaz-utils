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
			function url(str: string): URL;
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
	
	export namespace array {
		function union<T>(...arrays: T[][]): T[];
		
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
	
	export namespace fileSystem {
		namespace pathToScript {
			function file(callStackLevel?: number): string;
			function directory(callStackLevel?: number): string;
		}
		
		namespace listOf {
			function files(relativePath?: string): string[];
			function directories(relativePath?: string): string[];
			function entities(relativePath?: string): string[];
		}
		
		function checkPathType(relativePath?: string): PathType;
		
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
			function create(relativePath?: string): boolean;
			function remove(relativePath?: string): boolean;
		}
		
		namespace file {
			namespace get {
				function size(relativePath?: string): number;
				function text(relativePath?: string): string;
				function bytes(relativePath?: string): Buffer;
			}
			
			namespace write {
				function text(relativePath: string, content: string): boolean;
				function bytes(relativePath: string, bytes: Uint8Array): boolean;
			}
			
			namespace append {
				function text(relativePath: string, content: string): boolean;
				function textLine(relativePath: string, content: string): boolean;
				function bytes(relativePath: string, bytes: Uint8Array): boolean;
			}
			
			function remove(relativePath?: string): boolean;
		}
	}
	
	export function sleep(milliseconds: number): void;
}
