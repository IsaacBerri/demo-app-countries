const mongoose = require("mongoose")

const ULR_DB = "mongodb+srv://berrioisaac15:gtvLy4g7WZ7YQUzY@ddbb.mzpatep.mongodb.net/"

const initDB = () => {
    try {
        mongoose.connect(ULR_DB)
        console.log("la coneccion fue exitosa");
    } catch (error) {
        console.log(error);
    }
}

module.exports = initDB