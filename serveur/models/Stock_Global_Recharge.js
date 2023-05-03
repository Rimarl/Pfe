
module.exports = (sequelize, DataTypes) => {
    const StcokGlobalRecharge= sequelize.define("StcokGlobalRecharge", {
      
        num_serie: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },

    });

    StcokGlobalRecharge.associate = (models) => {
        StcokGlobalRecharge.belongsTo(models.Produit, {
          onDelete: "cascade",
           

        });
        
            StcokGlobalRecharge.belongsTo(models.Etat, {
              onDelete: "cascade",
               
    
            });
      
            

   
       }; 
    return StcokGlobalRecharge;
  };