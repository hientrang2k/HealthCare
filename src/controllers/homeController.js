import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render('homepage.ejs', {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = (req, res) => {
  return res.render('crud.ejs');
};

let postCRUD = async (req, res) => {
  await CRUDService.createNewUser(req.body);
  return res.render('crud.ejs');
};

let showCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render('showListUser.ejs', {
    data: data,
  });
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  showCRUD: showCRUD,
};
