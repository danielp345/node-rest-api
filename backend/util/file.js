const fs = require("fs")
const path = require("path")

exports.clearImage = (filePath) => {
	filePath = path.join(__dirname, "..", filePath)
	fs.unlink(filePath, (error) => console.log(error))
}
