export interface TableRowsResult<T> {
	rows: Array<T>;
	more: boolean;
	next_key: string;
}
