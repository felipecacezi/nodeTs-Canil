import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';
import multer from 'multer';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

const upload = multer({ dest: "uploads/" });

router.get('/new-pet', PageController.newPet);
router.post('/create-pet', upload.array("files"), PageController.createPet);

router.get('/search', SearchController.search);

export default router;