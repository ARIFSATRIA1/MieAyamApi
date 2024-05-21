const {
    findMieAyam,
    insertMieAyam,
    findMieAyamByName,
    filterMieAyamByCity,
    findMieAyamCount,
} = require("./mieayam.repository");

const getAllMieAyam = async({ offset, limit }) => {
    const mieAyam = await findMieAyam({ offset, limit });

    return mieAyam;
};

const getMieAyamCount = async() => {
    const mieAyam = findMieAyamCount();

    return mieAyam;
}

const createMieAyam = async(mieAyamData) => {
    const mieAyam = await insertMieAyam(mieAyamData);

    if (!mieAyam) {
        return Error("name place Mie Ayam Not Found")
    }

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
    getMieAyamCount,

};
