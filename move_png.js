const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

function moveAllPNGFiles(sourceDir, targetDir) {
  // Check if the source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    return;
  }

  // Ensure the target directory exists, or create it
  if (!fs.existsSync(targetDir)) {
    console.log("Target directory " + targetDir+ " does not exist");
    try {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`Created target directory: ${targetDir}`);
    } catch (err) {
      console.error(`Error creating target directory: ${targetDir}`);
      return;
    }
  }

  console.log("Target directory " + targetDir + " exists");

  try {
    // Recursively find all PNG files in the source directory
    const pngFiles = findAllPNGFiles(sourceDir);

    // Move each PNG file to the target directory
    pngFiles.forEach((sourceFilePath) => {
      const fileName = path.basename(sourceFilePath);
      const targetFilePath = path.join(targetDir, fileName);

      fse.moveSync(sourceFilePath, targetFilePath);
      console.log(`Moved: ${sourceFilePath} -> ${targetFilePath}`);
    });
  } catch (err) {
    console.error(`Error while processing files: ${err.message}`);
  }
}

function findAllPNGFiles(dir, filelist = []) {

  const files = fs.readdirSync(dir);

  console.log(files);

  files.forEach((file) => {
    
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      findAllPNGFiles(filePath, filelist);
    } else {
      if (path.extname(file).toLowerCase() === '.png') {
        console.log("Found " + filePath);
        filelist.push(filePath);
      }
    }
  });

  return filelist;
}

const sourceDirectory = 'public/pics/modules/MODULE_ICONS'; // Replace with your source directory
const targetDirectory = 'public/pics/modules/TMP'; // Replace with your target directory

moveAllPNGFiles(sourceDirectory, targetDirectory);
