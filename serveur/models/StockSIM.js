
module.exports = (sequelize, DataTypes) => {
    const StockSim = sequelize.define("StockSim", {
      
     num_serie: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

    });

    StockSim.associate = (models) => {
        StockSim.belongsTo(models.Pdv, {
          onDelete: "cascade",
           

        });
        StockSim.belongsTo(models.Etat, {
          onDelete: "cascade",
           

        });
        StockSim.belongsTo(models.Produit, {
          onDelete: "cascade",
           

        });
       

       

          StockSim.hasOne(models.Msisdn, {
            onDelete: "cascade",
          });




       
       
   
       }; 
    return StockSim;
  };