const { Client , VenteSim, StockSim } = require('../models/');
const express = require('express');

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const client = await Client.findAll({
        
        
      });
      res.status(200).json(client);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
})
  
router.post('/detail/client', async (req, res) => {
  const {name, prenom, adresse ,myWilaya , DATE,  PI , NumPI , ICCID} = req.body;
  
  if (!name || !prenom || !adresse || !DATE ||  !myWilaya || !PI || !NumPI || !ICCID ) {
      return res.status(400).json({ error: 'Missing required fields' });
  }

  Client.create({
     Nom: name,
     Prenom: prenom,
     Adresse: adresse,
     Wilaya: myWilaya,
     Date_naissance:DATE ,
     Pi:  PI ,
     NumPi: NumPI
  })
  .then(async () => {
      const client = await Client.findOne({
        where: { Nom : name , Prenom: prenom }
      });

      const stocksim = await StockSim.findOne({
        where: { num_serie: ICCID}
      });

      const v = await VenteSim.create({
        datevente : new Date(),
        StockSimId: stocksim.id ,
        ClientId: client.id,
      });
        // Mise à jour du champ etat de l'enregistrement correspondant
        await StockSim.update({ EtatId: 4 }
          , { where: { num_serie: ICCID }});


      return res.status(201).json({ message: 'Data inserted successfully' });
  })
  .catch(err => {
      console.log(err)
      return res.status(500).json(err);
  });
});


module.exports = router;
