const fs = require('fs');
const path = require('path');

function addPNGExtensionToFiles(directory) {
  // Check if the directory exists
  if (!fs.existsSync(directory)) {
    console.error(`Directory not found: ${directory}`);
    return;
  }

  // Read the directory contents
  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);

    // Check if the file is a regular file (not a directory) and has no extension
    if (fs.statSync(filePath).isFile() && path.extname(file) === '') {
      // Add the .png extension to the file
      const newFileName = file + '.png';
      const newFilePath = path.join(directory, newFileName);

      // Rename the file with the added extension
      fs.renameSync(filePath, newFilePath);
      console.log(`Added .png extension: ${filePath} -> ${newFilePath}`);
    }
  });
}

const directoryToAddExtension = 'public/pics/modules'; // Replace with your target directory

addPNGExtensionToFiles(directoryToAddExtension);