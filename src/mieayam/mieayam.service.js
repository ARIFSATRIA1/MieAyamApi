const {
    findMieAyam,
    insertMieAyam,
    findMieAyamByName,
    filterMieAyamByCity,
} = require("./mieayam.repository");

const getAllMieAyam = async() => {
    const mieAyam = findMieAyam();

    return mieAyam;
};

const createMieAyam = async(mieAyamData) => {
    const mieAyam = await insertMieAyam(mieAyamData);

    return mieAyam;
}

const getMieAyamByName = async(nameplace) => {
    const mieAyam = await findMieAyamByName(nameplace);

    if (!mieAyam) {
        throw Error("Mie Ayam Not Found")
    }

    return mieAyam;
}



const getFilterMieAyamByCity = async(city) => {
    const mieAyam = await filterMieAyamByCity(city);

    if (!mieAyam) {
        throw Error("Mie Ayam Not Found")
    }

    return mieAyam;
}




module.exports =  {
    getAllMieAyam,
    createMieAyam,
    getMieAyamByName,
    getFilterMieAyamByCity,
};
