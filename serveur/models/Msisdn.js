
module.exports = (sequelize, DataTypes) => {
    const Msisdn = sequelize.define("Msisdn", {
      
     numero: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

    });

    Msisdn.associate = (models) => {
        Msisdn.belongsTo(models.StockSim, {
          onDelete: "cascade",
           

        });
      
        
       

       







       
        
   
       }; 
    return Msisdn;
  };