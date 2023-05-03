const {  Produit , StockSim , Msisdn } = require("../models");
const express = require("express");
const router = express.Router();
const { Op } = require('sequelize');

router.get("/", async (req, res) => {
    try {
      const stock = await Produit.findAll({
        attributes: ['id' ,"nomProduit"],
        where: {CategorieProduitId :1}
        
      });
      res.status(200).json(stock);
   
  
  
  
  
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  
  });
  router.get("/detailSim/:nomProduit", async (req, res) => {
    try {
        const { nomProduit } = req.params;
        const produit = await Produit.findAll({
          
          where : { nomProduit : {
            [Op.like]: `${nomProduit}`
          }},
          include: [
            {
              model: StockSim,
               attributes: [ 'id' , "num_serie"],
              where : { EtatId : 2},
              
            },
            
             
          ],
        });
        res.status(200).json(produit);
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
  
  });
  router.get("/detailNumSim/:numserie", async (req, res) => {
    try {
        const { numserie } = req.params;
        const numeros = await StockSim.findAll({
          where :{ num_serie : numserie ,
             EtatId : 2},
          include: [
            {
              model: Msisdn,
              attributes: [ 'id' , "numero"],
              
              
            },
            
             
          ],
          
         
        
        });
        res.status(200).json(numeros);
        
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
  
  });
  

module.exports = router;