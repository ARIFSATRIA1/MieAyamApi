const prisma = require("../db/prisma");

const findMieAyam = async() => {
    const mieAyam =  prisma.mieAyam.findMany();

    return mieAyam;
};

const insertMieAyam = async(mieAyamData) => {
    const mieAyam = await prisma.mieAyam.create({
        data: {
            nameplace: mieAyamData.nameplace,
            adress : mieAyamData.adress,
            city: mieAyamData.city,
            image: mieAyamData.image,
            lat: mieAyamData.lat,
            lon: mieAyamData.lon
        },
    });

    return mieAyam;
}

const findMieAyamByName = async(nameplace) => {

    const mieAyam = await prisma.mieAyam.findFirst({
        where: {
            nameplace
        },
    })

    return mieAyam;
};


const filterMieAyamByCity = async(city) => {
    const mieAyam = await prisma.mieAyam.findMany({
        where: {
            city: city
        }
    })
    return mieAyam;
}


module.exports = {
    findMieAyam,
    insertMieAyam,
    findMieAyamByName,
    filterMieAyamByCity
};