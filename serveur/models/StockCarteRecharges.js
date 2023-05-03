
module.exports = (sequelize, DataTypes) => {
    const StockRecharge = sequelize.define("StockRecharge", {
      
     num_serie: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

    });

    StockRecharge.associate = (models) => {
        StockRecharge.belongsTo(models.Pdv, {
          onDelete: "cascade",
           

        });
        StockRecharge.belongsTo(models.Etat, {
          onDelete: "cascade",
           

        });
        StockRecharge.belongsTo(models.Produit, {
          onDelete: "cascade",
           

        });
       

        






       
        // Produit.hasOne(models.StockCarteRecharge, {
        //   onDelete: "cascade",
        //  })
       
   
       }; 
    return StockRecharge;
  };