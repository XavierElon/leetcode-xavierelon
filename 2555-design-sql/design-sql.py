from typing import List, Dict, Optional

class SQL:
    def __init__(self, names: List[str], columns: List[int]):
        """
        Initialize the SQL class with n tables.
        
        Args:
            names: List of table names
            columns: List of column counts for each table
        """
        # Create a dictionary mapping table names to their column counts
        self.schema = {names[i]: columns[i] for i in range(len(names))}
        
        # Store the data for each table: dict of {table_name: dict of {row_id: row_data}}
        self.tables = {name: {} for name in names}
        
        # Keep track of the next available ID for each table
        self.next_id = {name: 1 for name in names}

    def ins(self, name: str, row: List[str]) -> bool:
        """
        Insert a row into the specified table.
        
        Args:
            name: Table name
            row: Row data to insert
            
        Returns:
            True if insertion was successful, False otherwise
        """
        # Check if the table exists
        if name not in self.schema:
            return False
        
        # Check if the row has the correct number of columns
        if len(row) != self.schema[name]:
            return False
        
        # Insert the row with the next available ID
        row_id = self.next_id[name]
        self.tables[name][row_id] = row
        
        # Increment the next ID
        self.next_id[name] += 1
        
        return True

    def rmv(self, name: str, rowId: int) -> None:
        """
        Remove a row from the specified table.
        
        Args:
            name: Table name
            rowId: ID of the row to remove
        """
        # Check if the table exists
        if name not in self.schema:
            return
        
        # Check if the row exists
        if rowId not in self.tables[name]:
            return
        
        # Remove the row
        del self.tables[name][rowId]

    def sel(self, name: str, rowId: int, columnId: int) -> str:
        """
        Select a specific cell from the table.
        
        Args:
            name: Table name
            rowId: Row ID
            columnId: Column ID (1-indexed)
            
        Returns:
            Cell value or "<null>" if the cell is invalid
        """
        # Check if the table exists
        if name not in self.schema:
            return "<null>"
        
        # Check if the row exists
        if rowId not in self.tables[name]:
            return "<null>"
        
        # Check if the column ID is valid
        if columnId < 1 or columnId > self.schema[name]:
            return "<null>"
        
        # Return the cell value
        return self.tables[name][rowId][columnId - 1]

    def exp(self, name: str) -> List[str]:
        """
        Export all rows from the specified table in CSV format.
        
        Args:
            name: Table name
            
        Returns:
            List of rows in CSV format
        """
        # Check if the table exists
        if name not in self.schema:
            return []
        
        result = []
        
        # For each row in the table
        for row_id in sorted(self.tables[name].keys()):
            # Convert the row to CSV format
            row_data = self.tables[name][row_id]
            row_csv = f"{row_id}," + ",".join(row_data)
            result.append(row_csv)
        
        return result
        


# Your SQL object will be instantiated and called as such:
# obj = SQL(names, columns)
# param_1 = obj.ins(name,row)
# obj.rmv(name,rowId)
# param_3 = obj.sel(name,rowId,columnId)
# param_4 = obj.exp(name)