const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();
const Candidate = require("../models/Candidate.js");

router.post(
    '/create/candidate', 
    [
        check('tel', 'Некорректный телефон').isMobilePhone(),
        check('email', 'Некорректный email').isEmail(),
        check('letter', 'Минимальное количество символов 20').isLength({ min: 6 })
    ],
    async(req, res)=>{
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные'
                })
            }

            const { tel, email, letter } = req.body;

            const candidate = await Candidate.findOne(tel);

            if (candidate) {
                return res.status(400).json({ message: 'Кандидат с таким номером телефоном уже зарегистрировался' });
            }

            const new_candidate = new Candidate(tel, email, letter);
            await new_candidate.save(db);

            res.status(201).json({ message: 'Данные сохранены' });

        } catch (error) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' });
        }
    });

module.exports = router;