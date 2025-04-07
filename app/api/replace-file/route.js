import { NextResponse } from 'next/server';
import fs from 'fs/promises';

export async function POST(request) {
  try {
    const { path, rowIndex } = await request.json();

    // Check if path and rowIndex are provided
    if (!path || rowIndex === undefined) {
      return NextResponse.json({ error: 'Path and rowIndex are required' }, { status: 400 });
    }

    // Read the data source file
    const fileContent = await fs.readFile(path, 'utf8');

    // Extract the data from the file content
    const dataRegex = /export default (\{[\s\S]*?\});/;
    const dataMatch = fileContent.match(dataRegex);

    if (!dataMatch || dataMatch.length < 2) {
      return NextResponse.json({ error: 'Could not extract data from file' }, { status: 500 });
    }

    const data = JSON.parse(dataMatch[1]);

    // Remove the row at the specified rowIndex
    data.rows.splice(rowIndex, 1);

    // Convert the updated data back to a string
    const updatedDataString = JSON.stringify(data, null, 2);

    // Construct the updated file content
    const updatedFileContent = `export default ${updatedDataString};`;

    // Use replace_in_file to update the data source file
    await replace_in_file_tool(path, updatedFileContent);

    // Return a success response
    return NextResponse.json({ message: 'File updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating file:', error);
    return NextResponse.json({ error: 'Failed to update file' }, { status: 500 });
  }
}

const replace_in_file_tool = async (path, content) => {
  try {
    await replace_in_file({
      path: path,
      content: content,
    });
  } catch (error) {
    console.error("Error updating data source file:", error);
  }
};
