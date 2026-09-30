import { UserDAO } from "./Userdao";
const userDAO = new UserDAO();

userDAO.insert("อัมพร", "amporn@gmail.com");
userDAO.insert("สนืสา", "snisaa@gmail.com");
userDAO.insert("พชิรา", "pachira@gmail.com");
const users = userDAO.findAll();
users.forEach(u => {
    console.log(u.getInfo());
});