


exports.getIMSI = async (req, res) => {


try {
    
  


    res.status(200).send({
      msg: "Getting IMSI des subscribers avec succès",
      token: ` Bearer ${token}`,
    });
} catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Nous ne pouvons pas avoir les IMSI veuillez réesayer"}); 
}
}