
module.exports = (sequelize, DataTypes) => {
    const StcokGlobalSim= sequelize.define("StcokGlobalSim", {
      
        num_serie: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },

    });

    StcokGlobalSim.associate = (models) => {
        StcokGlobalSim.belongsTo(models.Produit, {
          onDelete: "cascade",
           

        });
        
            StcokGlobalSim.belongsTo(models.Etat, {
              onDelete: "cascade",
               
    
            });
      
            

   
       }; 
    return StcokGlobalSim;
  };