import { AppDataSource } from "./data-source"
import { Role } from "./entity/Role";
import { User } from "./entity/User";

AppDataSource.initialize().then(async () => {
    const roleAdmin = new Role();
    roleAdmin.name = "admin";

    const roleUser = new Role();
    roleUser.name = "user";

    const user = new User();
    user.name = "administrator";
    user.roles = [roleAdmin, roleUser];

    await AppDataSource.manager.save(user);
    console.log("User is saved.");

    AppDataSource.destroy();
}).catch(error => {
    console.log(error);
    AppDataSource.destroy();
});
