
module.exports = (sequelize, DataTypes) => {
    const VenteSim = sequelize.define("VenteSim", {
      datevente: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
      },
      
    

    });

    VenteSim.associate = (models) => {
        VenteSim.belongsTo(models.StockSim, {
          onDelete: "cascade",
           

        });
      
            
        VenteSim.belongsTo(models.Client, {
                  onDelete: "cascade",
                   
        
                });

   
       }; 
    return VenteSim;
  };