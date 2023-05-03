const { Produit , CategorieProduit , StockSim}= require("../models");
const express = require("express");
const { Op } = require('sequelize');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const produit = await Produit.findAll({
        attributes: ['id',"nomProduit"],
        include: [
          {
            model: CategorieProduit,
            attributes: ["nomCategorie"],
          },
          
           
        ],
      });
      res.status(200).json(produit);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  
    router.get("/detail/:id", async (req, res) => {
      try {
        try {
          const produit = await StockSim.findAll(
            
            
            { attributes: ['id' , "num_serie"],
            where: { ProduitId:req.params.id} });
          res.status(200).json(produit);
        } catch (err) {
          res.status(404).json({ message: err.message });
        };
        
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
    
    });
  
  });

 
 


module.exports = router;