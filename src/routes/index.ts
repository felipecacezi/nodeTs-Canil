import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';
import multer from 'multer';
import path from 'path';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        const extensaoArquivo = file.originalname.split('.')[1];
        const nomeArquivo = file.originalname.split('.')[0]
        .replace(' ', '').toLocaleLowerCase().trim();
        cb(null, `${nomeArquivo}.jpg`)
    }
});

const upload = multer({storage});

router.get('/new-pet', PageController.newPet);
router.post('/create-pet', upload.single('file'), PageController.createPet);
router.delete('/delete-pet/:id', PageController.deletePet);
router.get('/edit-pet/:id', PageController.editPet);

router.get('/search', SearchController.search);

export default router;