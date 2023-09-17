const fs = require('fs');
const path = require('path');

function renameAndMovePngFiles(sourceDir, targetDir) {
  // Ensure the target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Read the contents of the source directory
  const files = fs.readdirSync(sourceDir);

  files.forEach((file) => {
    const filePath = path.join(sourceDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // If it's a directory, recursively call the function
      renameAndMovePngFiles(filePath, path.join(targetDir, file));
    } else {
      // Check if the file is a PNG file
      if (path.extname(file).toLowerCase() === '.png') {
        // Rename the file to uppercase
        const newFileName = file.toUpperCase();
        const newFilePath = path.join(targetDir, newFileName);

        // Move the file to the target directory
        fs.renameSync(filePath, newFilePath);
        console.log(`Renamed and moved: ${filePath} to ${newFilePath}`);
      }
    }
  });
}

const sourceDirectory = 'public/pics/modules/MODULE_ICONS/';
const targetDirectory = 'public/pics/modules/';

renameAndMovePngFiles(sourceDirectory, targetDirectory);

