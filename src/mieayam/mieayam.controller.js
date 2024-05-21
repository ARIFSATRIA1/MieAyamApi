const {
    getAllMieAyam,
    createMieAyam,
    getMieAyamByName,
    getFilterMieAyamByCity,
} = require("./mieayam.service");

const {decode} = require("base64-arraybuffer");

const multer = require("multer");
const upload = multer();

const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const router = require("express").Router();

router.get("/mieayam", async(req, res) => {
    try {
        
        const mieAyam = await getAllMieAyam();

        res.send({
            data: {
                mieAyam
            },
            message: "Fetching Success"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}); 


router.get("/mieayam/:nameplace", async(req, res) => {
    try {
        const nameplace = req.params.nameplace

        const mieAyam = await getMieAyamByName(nameplace);

        res.send(mieAyam);
    } catch (error) {
        res.status(500).send({
            data: {
                error: error.message
            },
            message: "Internal Server Erorr"
        })
    }
})


router.get("/mieayam/city/:city", async(req, res) => {
    try {
        const city = req.params.city

        const mieAyam = await getFilterMieAyamByCity(city.toLowerCase());

        res.send({
            data: {
                mieAyam
            },
            message: "Fetching Success"
        })
    } catch (error) {
        
    }
})


router.post("/mieayam",upload.single("file"), async(req, res) => {
    try {
        const file = req.file
        const {nameplace, adress, city,lat, lon} = req.body

        if (!file) {
            return res.status(400).send({
                data: {
                    message: "Please Upload A File"
                }
            })
        }

        const fileBase64 = decode(file.buffer.toString("base64"));

        const {data, error} = await supabase.storage
            .from("mieayam")
            .upload(file.originalname, fileBase64, {
                contentType: "image/png",
            });

        
        if (error) {
            throw error;
        }




        const { data: images } = supabase.storage
        .from("mieayam")
        .getPublicUrl(data.path);


        const mieAyamData = {
            nameplace:nameplace.toLowerCase(), 
            adress: adress.toLowerCase(),
            city: city.toLowerCase(),
            image: images.publicUrl,
            lat: lat,
            lon: lon,
        };


        await createMieAyam(mieAyamData);

        res.status(200).send({
            data: mieAyamData,
        });

    } catch (error) {
        res.status(500).send({
            data: {
                erorr: error.message,
            }
        })
    }

});

module.exports = router;



