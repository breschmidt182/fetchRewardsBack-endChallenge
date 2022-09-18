const {Payer} = require('../models');

const payerController = {
	createPayer({body},res) {
		console.log(body);
		Payer.create(body)
		.then((dbNewPayer) => {
			console.log(dbNewPayer)
			res.json({dbNewPayer, message:'new payer created'})
		})
		.catch((err) => { res.json(err) })
	},

	updatePayer({params, body}, res) {
		Payer.findOneAndUpdate({_id: params.id}, body, {new: true})
		.then((dbUpdatedPayer) => {
			if(!dbUpdatedPayer) {
				res.json({message:'There is no account with that id. Please try again'})
			}
			res.json(dbUpdatedPayer, {message:'Payer profile updated'})
		})
		.catch((err) =>{ res.json(err)})
	},

	getAllPayers(req, res) {
		Payer.find({})
		.then((dbAllPayers) => {
			res.json(dbAllPayers);
		})
		.catch((err) => { res.json(err) })
	},

	getPayerById({params}, res) {
		Payer.findOne({_id: params.id})
		.then((dbSinglePayer) => {
			if(!dbSinglePayer) {
				res.json({message:'There is no account with that id. Please try again'})
			}
			res.json(dbSinglePayer);
		})
		.catch((err) => { res.json(err)})
	},

	deletePayer({params}, res) {
		Payer.findOneAndDelete({ _id: params.id })
		.then((dbPayer) => {
			if(!dbPayer) {
				res.json({message:'There is no account with that id. Please try again'})
			}
			res.json(dbPayer)
		})
		.catch((err) => { res.json(err) })
	}
};

module.exports = payerController;