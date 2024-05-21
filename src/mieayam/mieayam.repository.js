const prisma = require("../db/prisma");

const findMieAyam = async({ offset, limit }) => {
    try {
        const mieAyam = await prisma.mieAyam.findMany({
            skip: offset,
            take: limit
        });
        return { data: mieAyam, error: null };
    } catch (error) {
        return { data: null, error };
    }
    console.log(error.message
    );
};

const findMieAyamCount = async() => {
    const count = await prisma.mieAyam.count();
    return count;

}

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
    filterMieAyamByCity,
    findMieAyamCount,
};