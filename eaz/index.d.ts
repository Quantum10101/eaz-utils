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
	
	export namespace fileSystem {
		namespace pathToScript {
			function file(): string;
			function directory(): string;
		}
	}
	
	export function sleep(milliseconds: number): void;
}
